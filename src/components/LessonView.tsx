import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Headphones, 
  Layers, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  Grid, 
  List, 
  Table, 
  Filter, 
  Star,
  ChevronRight,
  Volume2
} from 'lucide-react';
import { LESSONS_DATA } from '../data/lessons';
import { useVocabulary } from '../context/VocabularyContext';
import { CategoryType, SourceType, VocabularyItem } from '../types/vocabulary';
import { VocabularyCard } from './VocabularyCard';
import { speechService } from '../services/speechService';

interface LessonViewProps {
  lessonNumber: number;
  onSelectLesson: (lessonNum: number) => void;
  onBackToDashboard: () => void;
  onStartFlashcards: (lessonNum: number, filterCategory?: CategoryType, filterSource?: SourceType) => void;
  onStartQuiz: (lessonNum: number) => void;
  onOpenHoertexte?: (lessonNum: number) => void;
}

type TabType = 'all' | 'Lehrbuch' | 'Hörtexte' | 'Nomen' | 'Verben' | 'Adjektive' | 'Adverbien' | 'Redewendungen';

export const LessonView: React.FC<LessonViewProps> = ({
  lessonNumber,
  onSelectLesson,
  onBackToDashboard,
  onStartFlashcards,
  onStartQuiz,
  onOpenHoertexte,
}) => {
  const { vocabulary, getLessonStats, userProgress, setWordStatus, toggleStarWord } = useVocabulary();
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'learned' | 'review' | 'unseen' | 'starred'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const lessonInfo = LESSONS_DATA.find((l) => l.number === lessonNumber) || LESSONS_DATA[0];
  const stats = getLessonStats(lessonNumber);

  // Filter vocabulary for current lesson and active tab
  const filteredWords = useMemo(() => {
    return vocabulary.filter((word) => {
      // Must belong to this lesson
      if (word.lesson !== lessonNumber) return false;

      // Tab filter
      if (activeTab === 'Lehrbuch' && !word.sources.includes('Lehrbuch')) return false;
      if (activeTab === 'Hörtexte' && !word.sources.includes('Hörtexte')) return false;
      if (activeTab === 'Nomen' && word.category !== 'Nomen') return false;
      if (activeTab === 'Verben' && word.category !== 'Verben') return false;
      if (activeTab === 'Adjektive' && word.category !== 'Adjektive') return false;
      if (activeTab === 'Adverbien' && word.category !== 'Adverbien') return false;
      if (activeTab === 'Redewendungen' && word.category !== 'Redewendungen') return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesDe = word.german.toLowerCase().includes(q);
        const matchesFa = word.persian.toLowerCase().includes(q);
        const matchesExample = word.example?.toLowerCase().includes(q) || false;
        const matchesGrammar = word.infinitive?.toLowerCase().includes(q) || word.perfect?.toLowerCase().includes(q) || false;
        if (!matchesDe && !matchesFa && !matchesExample && !matchesGrammar) return false;
      }

      // Status filter
      if (statusFilter !== 'all') {
        const prog = userProgress.words[word.id];
        if (statusFilter === 'starred' && !prog?.isStarred) return false;
        if (statusFilter === 'learned' && prog?.status !== 'learned') return false;
        if (statusFilter === 'review' && prog?.status !== 'review') return false;
        if (statusFilter === 'unseen' && (prog?.status === 'learned' || prog?.status === 'review')) return false;
      }

      return true;
    });
  }, [vocabulary, lessonNumber, activeTab, searchQuery, statusFilter, userProgress]);

  // Tab definitions
  const tabs: { id: TabType; label: string; icon?: string; countBadge?: number }[] = [
    { id: 'all', label: 'همه واژگان' },
    { id: 'Lehrbuch', label: 'کتاب اصلی (Lehrbuch)' },
    { id: 'Hörtexte', label: 'متن‌های شنیداری (Hörtexte)' },
    { id: 'Nomen', label: 'اسم‌ها (Nomen)' },
    { id: 'Verben', label: 'افعال (Verben)' },
    { id: 'Adjektive', label: 'صفات (Adjektive)' },
    { id: 'Adverbien', label: 'قیدها (Adverbien)' },
    { id: 'Redewendungen', label: 'اصطلاحات (Redewendungen)' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Breadcrumb and Lesson Switcher */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <button
            onClick={onBackToDashboard}
            className="hover:text-indigo-600 transition-colors flex items-center gap-1 font-medium"
          >
            <span>داشبورد درس‌ها</span>
          </button>
          <ChevronRight className="w-4 h-4 text-slate-400 rotate-180" />
          <span className="font-bold text-slate-800 font-de">Lektion {lessonNumber}</span>
        </div>

        {/* Previous / Next Lesson Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            disabled={lessonNumber <= 1}
            onClick={() => onSelectLesson(lessonNumber - 1)}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            title="درس قبلی"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <select
            value={lessonNumber}
            onChange={(e) => onSelectLesson(Number(e.target.value))}
            className="bg-white border border-slate-200 text-slate-800 font-de font-bold text-xs py-2 px-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-hidden"
          >
            {LESSONS_DATA.map((l) => (
              <option key={l.number} value={l.number}>
                Lektion {l.number}: {l.germanTitle} ({l.persianTitle})
              </option>
            ))}
          </select>

          <button
            disabled={lessonNumber >= 10}
            onClick={() => onSelectLesson(lessonNumber + 1)}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            title="درس بعدی"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lesson Hero Banner */}
      <div className="rounded-3xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
        
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black tracking-wide font-de">
                  Lektion {lessonNumber}
                </span>
                <span className="text-xs font-bold text-indigo-300 font-de">
                  Aspekte neu B1+
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black font-de tracking-tight">
                {lessonInfo.germanTitle}
              </h1>

              <p className="text-lg text-indigo-100 font-medium">
                {lessonInfo.persianTitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {lessonInfo.description}
              </p>
            </div>

            {/* Quick Action Flashcards & Quiz & Hörtexte */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {onOpenHoertexte && (
                <button
                  onClick={() => onOpenHoertexte(lessonNumber)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-all shadow-lg hover:shadow-purple-500/25 active:scale-95 cursor-pointer"
                >
                  <Headphones className="w-4 h-4" />
                  <span>متن شنیداری (Hörtexte)</span>
                </button>
              )}

              <button
                onClick={() => onStartFlashcards(lessonNumber)}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg hover:shadow-amber-500/25 active:scale-95 cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>تمرین فلش‌کارت‌های این درس</span>
              </button>

              <button
                onClick={() => onStartQuiz(lessonNumber)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>آزمون این درس</span>
              </button>
            </div>

          </div>

          {/* Progress Box requested by user: Lektion 1 ████████░░ 80% | 120 واژه | 96 یادگرفته‌شده | 24 نیازمند مرور */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold">
                <span className="font-de">Lektion {lessonNumber}</span>
                <span className="text-amber-300 font-de font-black text-base">{stats.percentage}%</span>
                <span className="text-slate-300 font-normal">میزان تسلط و پیشرفت</span>
              </div>
              
              <div className="flex items-center gap-4 text-xs">
                <span className="bg-white/10 px-2.5 py-1 rounded-lg">
                  کل واژگان: <b className="font-de font-bold text-white">{stats.total}</b>
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-400/20">
                  {stats.learned} یادگرفته‌شده
                </span>
                <span className="bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-400/20">
                  {stats.review} نیازمند مرور
                </span>
              </div>
            </div>

            {/* Custom Visual Progress Bar */}
            <div className="h-3 w-full bg-slate-800/80 rounded-full overflow-hidden flex p-0.5 border border-white/10">
              <div
                className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${stats.percentage}%` }}
              />
              <div
                className="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${stats.total > 0 ? (stats.review / stats.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Tabs Navigation (Exact tabs as requested: همه | Lehrbuch | Hörtexte | اسمها | افعال | صفات | قیدها | اصطلاحات) */}
      <div className="border-b border-slate-200">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                }`}
              >
                {tab.id === 'Lehrbuch' && <BookOpen className="w-3.5 h-3.5" />}
                {tab.id === 'Hörtexte' && <Headphones className="w-3.5 h-3.5" />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
        
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجو در واژگان این درس (آلمانی یا فارسی)..."
            className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-hidden"
          />
          <Search className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 absolute left-3 top-3"
            >
              پاک‌کردن
            </button>
          )}
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">فیلتر وضعیت:</span>
          
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              statusFilter === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            همه
          </button>
          <button
            onClick={() => setStatusFilter('learned')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
              statusFilter === 'learned'
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            <CheckCircle2 className="w-3 h-3" />
            <span>یادگرفته‌شده</span>
          </button>
          <button
            onClick={() => setStatusFilter('review')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
              statusFilter === 'review'
                ? 'bg-amber-500 text-white'
                : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
            }`}
          >
            <RotateCcw className="w-3 h-3" />
            <span>نیاز به مرور</span>
          </button>
          <button
            onClick={() => setStatusFilter('starred')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
              statusFilter === 'starred'
                ? 'bg-amber-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>نشان‌شده</span>
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-end md:self-auto">
          <button
            onClick={() => setViewMode('cards')}
            className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'cards' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
            title="نمای کارتی"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'table' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
            title="نمای جدول و لیست"
          >
            <Table className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Vocabulary Items Display */}
      {filteredWords.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-300 space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-slate-800">هیچ واژه‌ای با این فیلترها یافت نشد</h4>
            <p className="text-xs text-slate-500">
              می‌توانید عبارت جستجو یا فیلترهای انتخابی را تغییر دهید.
            </p>
          </div>
          <button
            onClick={() => {
              setActiveTab('all');
              setSearchQuery('');
              setStatusFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-all"
          >
            بازنشانی فیلترها
          </button>
        </div>
      ) : viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredWords.map((item) => (
            <VocabularyCard
              key={item.id}
              item={item}
              onPracticeSingle={() => onStartFlashcards(lessonNumber)}
            />
          ))}
        </div>
      ) : (
        /* Table View */
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                <tr>
                  <th className="p-3.5 text-right">واژه آلمانی</th>
                  <th className="p-3.5 text-right">معنی فارسی</th>
                  <th className="p-3.5 text-center">دسته</th>
                  <th className="p-3.5 text-center">منبع</th>
                  <th className="p-3.5 text-center">تلفظ</th>
                  <th className="p-3.5 text-center">وضعیت یادگیری</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredWords.map((item) => {
                  const prog = userProgress.words[item.id];
                  const isLearned = prog?.status === 'learned';
                  const isReview = prog?.status === 'review';

                  return (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleStarWord(item.id)}
                            className="text-slate-300 hover:text-amber-400"
                          >
                            <Star className={`w-3.5 h-3.5 ${prog?.isStarred ? 'fill-amber-400 text-amber-400' : ''}`} />
                          </button>
                          {item.article && (
                            <span className="font-de font-bold text-slate-500">{item.article}</span>
                          )}
                          <span className="font-bold text-slate-900 font-de text-sm">{item.german}</span>
                          {item.plural && (
                            <span className="text-slate-400 text-[11px] font-de">({item.plural})</span>
                          )}
                        </div>
                      </td>
                      <td className="p-3.5 font-medium text-slate-700">{item.persian}</td>
                      <td className="p-3.5 text-center">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-3.5 text-center">
                        <div className="flex items-center justify-center gap-1">
                          {item.sources.map((s) => (
                            <span
                              key={s}
                              className={`text-[10px] px-1.5 py-0.5 rounded font-de ${
                                s === 'Lehrbuch' ? 'bg-sky-50 text-sky-700' : 'bg-purple-50 text-purple-700'
                              }`}
                            >
                              {s === 'Lehrbuch' ? 'LB' : 'HÖR'}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-3.5 text-center">
                        <button
                          onClick={() => speechService.speak(item.german)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                      <td className="p-3.5 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => setWordStatus(item.id, isLearned ? 'unseen' : 'learned')}
                            className={`p-1.5 rounded-lg text-[11px] font-semibold flex items-center gap-1 ${
                              isLearned ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                            }`}
                          >
                            <CheckCircle2 className="w-3 h-3" />
                            <span>یاد گرفتم</span>
                          </button>
                          <button
                            onClick={() => setWordStatus(item.id, isReview ? 'unseen' : 'review')}
                            className={`p-1.5 rounded-lg text-[11px] font-semibold flex items-center gap-1 ${
                              isReview ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700'
                            }`}
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>مرور</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
