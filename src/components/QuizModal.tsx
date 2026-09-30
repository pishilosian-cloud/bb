import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  RotateCcw, 
  ArrowLeft, 
  Award,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useVocabulary } from '../context/VocabularyContext';
import { VocabularyItem } from '../types/vocabulary';
import { LESSONS_DATA } from '../data/lessons';
import { speechService } from '../services/speechService';

interface QuizModalProps {
  initialLesson?: number;
  onClose: () => void;
}

interface QuizQuestion {
  id: string;
  item: VocabularyItem;
  type: 'de-to-fa' | 'fa-to-de' | 'article' | 'verb-forms';
  prompt: string;
  subPrompt?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const QuizModal: React.FC<QuizModalProps> = ({ initialLesson, onClose }) => {
  const { vocabulary, recordQuizResult } = useVocabulary();

  const [selectedLesson, setSelectedLesson] = useState<number | 'all'>(initialLesson || 'all');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setIsQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Array<{ question: QuizQuestion; selected: string; isCorrect: boolean }>>([]);

  // Generate quiz questions
  const generateQuiz = () => {
    const pool = vocabulary.filter((v) => (selectedLesson === 'all' ? true : v.lesson === selectedLesson));
    if (pool.length === 0) {
      setQuestions([]);
      return;
    }

    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selectedItems = shuffled.slice(0, Math.min(10, shuffled.length));

    const generated: QuizQuestion[] = selectedItems.map((item, idx) => {
      // Determine question type
      let type: QuizQuestion['type'] = 'de-to-fa';
      if (item.category === 'Nomen' && item.article && Math.random() > 0.5) {
        type = 'article';
      } else if (item.category === 'Verben' && item.preterite && Math.random() > 0.5) {
        type = 'verb-forms';
      } else if (Math.random() > 0.5) {
        type = 'fa-to-de';
      }

      if (type === 'article') {
        const options = ['der', 'die', 'das'];
        return {
          id: `q-${idx}`,
          item,
          type,
          prompt: `آرتیکل صحیح برای واژه زیر کدام است؟`,
          subPrompt: item.german,
          options,
          correctAnswer: item.article || 'der',
          explanation: `آرتیکل صحیح «${item.article} ${item.german}» به معنی «${item.persian}» می‌باشد.`,
        };
      }

      if (type === 'verb-forms') {
        const correct = `${item.preterite} / ${item.perfect}`;
        // Pick 3 distractors from other verbs
        const otherVerbs = pool.filter((v) => v.category === 'Verben' && v.id !== item.id && v.preterite);
        const distractors = otherVerbs.slice(0, 3).map((v) => `${v.preterite} / ${v.perfect}`);
        while (distractors.length < 3) {
          distractors.push('machte / hat gemacht', 'ging / ist gegangen', 'kam / ist gekommen');
        }
        const options = [correct, ...distractors.slice(0, 3)].sort(() => 0.5 - Math.random());

        return {
          id: `q-${idx}`,
          item,
          type,
          prompt: `فرم‌های گذشته (Präteritum / Perfekt) فعل زیر کدام است؟`,
          subPrompt: item.german,
          options,
          correctAnswer: correct,
          explanation: `گذشته فعل «${item.german}»: Präteritum: ${item.preterite} | Perfekt: ${item.perfect}`,
        };
      }

      if (type === 'fa-to-de') {
        const correct = item.german;
        const otherWords = pool.filter((v) => v.id !== item.id);
        const distractors = otherWords.slice(0, 3).map((v) => v.german);
        const options = [correct, ...distractors].sort(() => 0.5 - Math.random());

        return {
          id: `q-${idx}`,
          item,
          type,
          prompt: `کلمه آلمانی معادل عبارت زیر چیست؟`,
          subPrompt: `« ${item.persian} »`,
          options,
          correctAnswer: correct,
          explanation: `معادل صحیح «${item.german}» می‌باشد.`,
        };
      }

      // Default: de-to-fa
      const correct = item.persian;
      const otherWords = pool.filter((v) => v.id !== item.id);
      const distractors = otherWords.slice(0, 3).map((v) => v.persian);
      const options = [correct, ...distractors].sort(() => 0.5 - Math.random());

      return {
        id: `q-${idx}`,
        item,
        type: 'de-to-fa',
        prompt: `معنی فارسی واژه زیر کدام است؟`,
        subPrompt: item.category === 'Nomen' && item.article ? `${item.article} ${item.german}` : item.german,
        options,
        correctAnswer: correct,
        explanation: `«${item.german}» به معنی «${item.persian}» است.`,
      };
    });

    setQuestions(generated);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizFinished(false);
    setUserAnswers([]);
  };

  useEffect(() => {
    generateQuiz();
  }, [selectedLesson]);

  const currentQ = questions[currentIdx];

  const handleSelectOption = (opt: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(opt);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || !currentQ || isAnswerSubmitted) return;

    const isCorrect = selectedOption === currentQ.correctAnswer;
    setIsAnswerSubmitted(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    recordQuizResult(currentQ.item.id, isCorrect);
    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQ,
        selected: selectedOption,
        isCorrect,
      },
    ]);

    // Play pronunciation if German option was chosen
    speechService.speak(currentQ.item.german);
  };

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizFinished(true);
      if (score >= Math.floor(questions.length * 0.7)) {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      
      <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">آزمون و کوئیز ۴ گزینه‌ای</h3>
              <p className="text-xs text-slate-500">
                سنجش آموخته‌ها با سوالات تعاملی معنی، آرتیکل‌ها و فرم‌های گرامری
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar & Lesson Selection */}
        <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-semibold">محدوده آزمون:</span>
            <select
              value={selectedLesson}
              onChange={(e) => setSelectedLesson(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="bg-white border border-slate-300 rounded-xl py-1.5 px-3 font-semibold text-slate-800 outline-hidden"
            >
              <option value="all">همه درس‌ها (۱ تا ۱۰)</option>
              {LESSONS_DATA.map((l) => (
                <option key={l.number} value={l.number}>
                  درس {l.number}: {l.germanTitle}
                </option>
              ))}
            </select>
          </div>

          {questions.length > 0 && !quizFinished && (
            <div className="flex items-center gap-2 font-bold text-slate-700">
              <span>امتیاز:</span>
              <span className="font-de text-indigo-600 font-black">{score} / {questions.length}</span>
            </div>
          )}
        </div>

        {/* Quiz Progress Bar */}
        {questions.length > 0 && !quizFinished && (
          <div className="h-1.5 w-full bg-slate-100 overflow-hidden">
            <div
              className="bg-rose-500 h-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            />
          </div>
        )}

        {/* Content Area */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
          {questions.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <p className="text-slate-500 text-sm">هیچ واژه‌ای برای ایجاد آزمون در این درس یافت نشد.</p>
              <button
                onClick={() => setSelectedLesson('all')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
              >
                انتخاب همه درس‌ها
              </button>
            </div>
          ) : quizFinished ? (
            /* Quiz Completed Summary */
            <div className="text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto text-3xl shadow-lg shadow-amber-500/10">
                <Award className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-black text-slate-900">آزمون به پایان رسید!</h4>
                <p className="text-sm text-slate-500">
                  نتیجه عملکرد شما در این آزمون:
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 max-w-sm mx-auto space-y-2">
                <div className="text-4xl font-black text-indigo-600 font-de">
                  {score} <span className="text-lg text-slate-400 font-normal">/ {questions.length}</span>
                </div>
                <div className="text-xs font-bold text-slate-600">
                  درصد موفقیت: {Math.round((score / questions.length) * 100)}%
                </div>
              </div>

              {/* Review Incorrect answers */}
              {userAnswers.filter((a) => !a.isCorrect).length > 0 && (
                <div className="text-right space-y-3 pt-2">
                  <h5 className="text-xs font-bold text-rose-700">سوالاتی که نیاز به مرور دارند:</h5>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {userAnswers
                      .filter((a) => !a.isCorrect)
                      .map((ans, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs space-y-1"
                        >
                          <div className="font-bold text-slate-900 font-de">
                            {ans.question.subPrompt}
                          </div>
                          <div className="text-slate-600">
                            پاسخ صحیح: <b className="text-emerald-700">{ans.question.correctAnswer}</b>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={generateQuiz}
                  className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-all shadow-md"
                >
                  آزمون مجدد
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-2xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-all"
                >
                  خروج
                </button>
              </div>
            </div>
          ) : currentQ ? (
            /* Active Question */
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Question Header */}
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs font-bold text-slate-400">
                    سوال {currentIdx + 1} از {questions.length}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-de">
                    {currentQ.item.category} • L{currentQ.item.lesson}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-700">
                  {currentQ.prompt}
                </h4>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 inline-block min-w-[260px]">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 font-de tracking-tight">
                      {currentQ.subPrompt}
                    </span>
                    <button
                      onClick={() => speechService.speak(currentQ.item.german)}
                      className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 transition-colors shadow-2xs"
                      title="پخش تلفظ"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === opt;
                  const isCorrect = opt === currentQ.correctAnswer;
                  
                  let btnStyle = 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-800';

                  if (isSelected && !isAnswerSubmitted) {
                    btnStyle = 'bg-indigo-50 border-indigo-500 text-indigo-900 ring-2 ring-indigo-200';
                  }

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-200 font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnStyle = 'bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-200';
                    } else {
                      btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(opt)}
                      className={`p-4 rounded-2xl border text-sm text-center font-medium transition-all shadow-2xs flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                        {idx + 1}
                      </span>
                      <span className="font-de font-semibold text-base flex-1">{opt}</span>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box on Answer Submission */}
              {isAnswerSubmitted && (
                <div
                  className={`p-4 rounded-2xl border text-xs space-y-1 animate-in fade-in slide-in-from-top-2 duration-300 ${
                    selectedOption === currentQ.correctAnswer
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5 text-sm">
                    {selectedOption === currentQ.correctAnswer ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>پاسخ شما کاملاً درست است!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-amber-600" />
                        <span>پاسخ نادرست بود.</span>
                      </>
                    )}
                  </div>
                  <p className="leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

            </div>
          ) : null}
        </div>

        {/* Footer Actions */}
        {questions.length > 0 && !quizFinished && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              انصراف
            </button>

            {!isAnswerSubmitted ? (
              <button
                disabled={!selectedOption}
                onClick={handleSubmitAnswer}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
              >
                ثبت و بررسی پاسخ
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center gap-1 shadow-md"
              >
                <span>سوال بعدی</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
