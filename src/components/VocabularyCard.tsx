import React, { useState } from 'react';
import { 
  Volume2, 
  Check, 
  RotateCcw, 
  Star, 
  BookOpen, 
  Headphones, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Layers
} from 'lucide-react';
import { VocabularyItem, CategoryType } from '../types/vocabulary';
import { useVocabulary } from '../context/VocabularyContext';
import { speechService } from '../services/speechService';

interface VocabularyCardProps {
  item: VocabularyItem;
  onPracticeSingle?: (item: VocabularyItem) => void;
}

export const VocabularyCard: React.FC<VocabularyCardProps> = ({ item, onPracticeSingle }) => {
  const { userProgress, setWordStatus, toggleStarWord } = useVocabulary();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const wordProgress = userProgress.words[item.id] || {
    status: 'unseen',
    studyCount: 0,
    correctCount: 0,
    incorrectCount: 0,
  };

  const playAudio = () => {
    setIsPlayingAudio(true);
    // Determine the best speech text
    let textToSpeak = item.german;
    if (item.category === 'Nomen' && item.article) {
      textToSpeak = `${item.article} ${item.german}`;
    }
    speechService.speak(
      textToSpeak,
      item.audioUrl,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false),
      () => setIsPlayingAudio(false)
    );
  };

  const getCategoryColor = (cat: CategoryType) => {
    switch (cat) {
      case 'Nomen':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Verben':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Adjektive':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Adverbien':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Redewendungen':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getCategoryFa = (cat: CategoryType) => {
    switch (cat) {
      case 'Nomen':
        return 'اسم (Nomen)';
      case 'Verben':
        return 'فعل (Verb)';
      case 'Adjektive':
        return 'صفت (Adjektiv)';
      case 'Adverbien':
        return 'قید (Adverb)';
      case 'Redewendungen':
        return 'اصطلاح (Redewendung)';
      default:
        return cat;
    }
  };

  const getArticleColor = (article?: string) => {
    switch (article) {
      case 'der':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'die':
        return 'text-rose-600 bg-rose-50 border-rose-200';
      case 'das':
        return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      default:
        return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const isLearned = wordProgress.status === 'learned';
  const isReview = wordProgress.status === 'review';
  const isStarred = !!wordProgress.isStarred;

  return (
    <div
      className={`group relative rounded-2xl bg-white border transition-all duration-200 hover:shadow-md ${
        isLearned
          ? 'border-emerald-200/80 bg-emerald-50/10'
          : isReview
          ? 'border-amber-300 bg-amber-50/20'
          : 'border-slate-200 hover:border-slate-300'
      }`}
    >
      <div className="p-5 sm:p-6 space-y-4">
        
        {/* Top Badges Header */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Category Badge */}
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-lg border ${getCategoryColor(
                item.category
              )}`}
            >
              {getCategoryFa(item.category)}
            </span>

            {/* Source Badges */}
            {item.sources.map((src) => (
              <span
                key={src}
                className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                  src === 'Lehrbuch'
                    ? 'bg-sky-50 text-sky-700 border-sky-200'
                    : 'bg-purple-50 text-purple-700 border-purple-200'
                }`}
                title={item.sourceDetails
                  .filter((s) => s.source === src)
                  .map((s) => `${s.module || ''} ${s.pageOrTrack || ''}`)
                  .join(' | ')}
              >
                {src === 'Lehrbuch' ? (
                  <BookOpen className="w-3 h-3" />
                ) : (
                  <Headphones className="w-3 h-3" />
                )}
                <span>{src}</span>
              </span>
            ))}

            {/* Lesson indicator */}
            <span className="text-[11px] text-slate-400 font-de font-medium">
              L{item.lesson}
            </span>
          </div>

          {/* Action Icons: Star & Audio */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => toggleStarWord(item.id)}
              className={`p-1.5 rounded-lg transition-all ${
                isStarred
                  ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                  : 'text-slate-300 hover:text-amber-400 hover:bg-slate-100'
              }`}
              title={isStarred ? 'حذف از نشان‌شده‌ها' : 'نشان کردن این کلمه'}
            >
              <Star className="w-4 h-4 fill-current" />
            </button>

            <button
              onClick={playAudio}
              disabled={isPlayingAudio}
              className={`p-2 rounded-xl transition-all ${
                isPlayingAudio
                  ? 'bg-amber-500 text-white shadow-md scale-105 animate-pulse'
                  : 'bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
              title="پخش تلفظ آلمانی"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* German Word Display */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2 flex-wrap">
            {item.category === 'Nomen' && item.article && (
              <span
                className={`text-sm font-extrabold px-2 py-0.5 rounded-md border font-de ${getArticleColor(
                  item.article
                )}`}
              >
                {item.article}
              </span>
            )}

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-de">
              {item.german}
            </h3>

            {item.pronunciation && (
              <span className="text-xs text-slate-400 font-mono font-de">
                {item.pronunciation}
              </span>
            )}
          </div>

          {/* Persian Meaning */}
          <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed pt-1">
            {item.persian}
          </p>
        </div>

        {/* Category Specific Grammar Information Box */}
        {item.category === 'Nomen' && item.plural && (
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-xs">
            <span className="text-slate-400 font-medium">جمع (Plural):</span>
            <span className="font-bold text-slate-800 font-de">{item.plural}</span>
            {item.genderPersian && (
              <span className="text-slate-500 mr-auto text-[11px] bg-white px-2 py-0.5 rounded-md border border-slate-200">
                جنسیت: {item.genderPersian}
              </span>
            )}
          </div>
        )}

        {item.category === 'Verben' && (
          <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 space-y-2 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div>
                <span className="text-slate-400 block text-[11px]">حال (Präsens 3.P):</span>
                <span className="font-semibold text-slate-800 font-de">
                  {item.present || '—'}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">گذشته ساده (Präteritum):</span>
                <span className="font-semibold text-slate-800 font-de">
                  {item.preterite || '—'}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">گذشته کامل (Perfekt):</span>
                <span className="font-semibold text-indigo-700 font-de">
                  {item.perfect || '—'}
                </span>
              </div>
            </div>

            {(item.auxiliary || item.prepositionCase || item.separable) && (
              <div className="flex items-center gap-2 pt-1 border-t border-slate-200/60 flex-wrap text-[11px]">
                {item.auxiliary && (
                  <span className="bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-600">
                    کمکی: <b className="font-de text-slate-800">{item.auxiliary}</b>
                  </span>
                )}
                {item.prepositionCase && (
                  <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md border border-indigo-100 font-de font-medium">
                    حرف اضافه: {item.prepositionCase}
                  </span>
                )}
                {item.separable && (
                  <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md border border-amber-100">
                    جداشدنی (trennbar)
                  </span>
                )}
                {item.reflexive && (
                  <span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded-md border border-rose-100">
                    انعکاسی (reflexiv)
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {item.category === 'Adjektive' && (item.comparative || item.opposite) && (
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-xs flex-wrap">
            {item.comparative && (
              <div>
                <span className="text-slate-400 ml-1">تفضیل/عالی:</span>
                <span className="font-semibold text-slate-800 font-de">
                  {item.comparative} / {item.superlative}
                </span>
              </div>
            )}
            {item.opposite && (
              <div className="mr-auto">
                <span className="text-slate-400 ml-1">متضاد:</span>
                <span className="font-semibold text-rose-600 font-de">{item.opposite}</span>
              </div>
            )}
          </div>
        )}

        {item.category === 'Redewendungen' && (item.explanation || item.literalMeaning) && (
          <div className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-200/60 text-xs space-y-1">
            {item.explanation && (
              <p className="text-slate-700">
                <span className="font-bold text-amber-900 ml-1">توضیح کاربرد:</span>
                {item.explanation}
              </p>
            )}
            {item.literalMeaning && (
              <p className="text-slate-500 text-[11px]">
                <span className="font-semibold ml-1">معنی تحت‌اللفظی:</span>
                {item.literalMeaning}
              </p>
            )}
          </div>
        )}

        {/* Example Sentence Section */}
        {item.example && (
          <div className="space-y-1.5 bg-slate-50/60 p-3 rounded-xl border border-slate-100">
            <div className="flex items-start justify-between gap-2">
              <div className="text-xs sm:text-sm font-medium text-slate-800 font-de leading-relaxed">
                „{item.example}“
              </div>
              <button
                onClick={() => speechService.speak(item.example!)}
                className="text-slate-400 hover:text-indigo-600 p-1 rounded-md transition-colors"
                title="پخش صوتی مثال"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
            {item.exampleTranslation && (
              <div className="text-xs text-slate-600 leading-relaxed">
                {item.exampleTranslation}
              </div>
            )}
          </div>
        )}

        {/* Source Details Accordion (if multiple sources or deep tracks) */}
        {item.sourceDetails && item.sourceDetails.length > 0 && (
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
            >
              <span>مشاهده جزئیات منبع و موقعیت در کتاب / فایل صوتی</span>
              {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {isExpanded && (
              <div className="mt-2 p-3 bg-slate-100/80 rounded-xl space-y-2 text-xs border border-slate-200">
                <div className="font-semibold text-slate-700 mb-1">منابع ثبت‌شده در کتاب:</div>
                {item.sourceDetails.map((src, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-600 border-b border-slate-200/60 pb-1.5 last:border-0 last:pb-0">
                    <span className="font-bold text-slate-800 font-de">
                      {src.source === 'Lehrbuch' ? '📘 Lehrbuch' : '🎧 Hörtexte'}
                    </span>
                    <span>•</span>
                    <span className="font-de">
                      {src.module || `Lektion ${src.lesson}`} {src.pageOrTrack ? `(${src.pageOrTrack})` : ''}
                    </span>
                    {src.context && (
                      <span className="text-[11px] text-slate-500 mr-auto font-de italic truncate max-w-[200px]">
                        "{src.context}"
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bottom Actions: Learning Status Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 gap-2">
          
          <div className="flex items-center gap-1.5">
            {/* Mark as Learned Button */}
            <button
              onClick={() => setWordStatus(item.id, isLearned ? 'unseen' : 'learned')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                isLearned
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>{isLearned ? 'یاد گرفته‌ام ✓' : 'یاد گرفتم'}</span>
            </button>

            {/* Needs Review Button */}
            <button
              onClick={() => setWordStatus(item.id, isReview ? 'unseen' : 'review')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                isReview
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isReview ? 'نیازمند مرور 🔄' : 'نیاز به مرور'}</span>
            </button>
          </div>

          {onPracticeSingle && (
            <button
              onClick={() => onPracticeSingle(item)}
              className="text-slate-400 hover:text-indigo-600 p-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
              title="تمرین فلش‌کارت تک‌کلمه"
            >
              <Layers className="w-4 h-4" />
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
