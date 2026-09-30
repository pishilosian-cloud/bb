import React from 'react';
import { 
  BookOpen, 
  Headphones, 
  Layers, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  RotateCcw, 
  Star, 
  TrendingUp, 
  ArrowLeft,
  GraduationCap,
  Database,
  Flame,
  Clock
} from 'lucide-react';
import { LESSONS_DATA } from '../data/lessons';
import { useVocabulary } from '../context/VocabularyContext';
import { LessonCard } from './LessonCard';

interface DashboardProps {
  onSelectLesson: (lessonNum: number) => void;
  onOpenFlashcards: (lessonNum?: number) => void;
  onOpenQuiz: (lessonNum?: number) => void;
  onOpenSearch: () => void;
  onOpenDatabase: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onSelectLesson,
  onOpenFlashcards,
  onOpenQuiz,
  onOpenSearch,
  onOpenDatabase,
}) => {
  const { vocabulary, getGlobalStats } = useVocabulary();
  const stats = getGlobalStats();

  // Count Lehrbuch and Hörtexte counts
  const lehrbuchTotal = vocabulary.filter((v) => v.sources.includes('Lehrbuch')).length;
  const hoertexteTotal = vocabulary.filter((v) => v.sources.includes('Hörtexte')).length;
  const bothSourcesTotal = vocabulary.filter(
    (v) => v.sources.includes('Lehrbuch') && v.sources.includes('Hörtexte')
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Hero Welcome Banner */}
      <div className="rounded-3xl bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
        
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-3 max-w-2xl">
              
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black tracking-wide font-de">
                  Aspekte neu B1+
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-indigo-200 border border-white/10">
                  واژه‌نامه تخصصی و هوشمند
                </span>
                <span className="text-xs text-amber-300 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-amber-300" />
                  <span>آماده‌سازی آزمون گوته / تلک B1+ و B2</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                یادگیری عمیق واژگان و اصطلاحات آلمانی
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                پوشش ساختاریافته درس‌های ۱ تا ۱۰ هر دو منبع <b className="text-white">کتاب اصلی (Lehrbuch)</b> و <b className="text-amber-300">متن‌های شنیداری (Hörtexte)</b> همراه با تلفظ صوتی آلمانی، قواعد دستوری کامل و سیستم مرور هوشمند فلش‌کارت.
              </p>

            </div>

            {/* Quick Launch Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[220px]">
              
              <button
                onClick={() => onOpenFlashcards()}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-lg hover:shadow-amber-500/30 transition-all active:scale-95 cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>شروع مرور فلش‌کارت‌ها</span>
              </button>

              <button
                onClick={() => onOpenQuiz()}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-rose-300" />
                <span>شرکت در آزمون تستی</span>
              </button>

            </div>

          </div>

          {/* Global Statistics Cards Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-4 border-t border-white/10 text-xs">
            
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <div className="text-slate-400 mb-1">کل واژگان:</div>
              <div className="text-xl font-black font-de text-white">{stats.totalWords}</div>
            </div>

            <div className="bg-sky-500/10 p-3.5 rounded-2xl border border-sky-400/20">
              <div className="text-sky-300 mb-1 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Lehrbuch</span>
              </div>
              <div className="text-xl font-black font-de text-sky-200">{lehrbuchTotal}</div>
            </div>

            <div className="bg-purple-500/10 p-3.5 rounded-2xl border border-purple-400/20">
              <div className="text-purple-300 mb-1 flex items-center gap-1">
                <Headphones className="w-3.5 h-3.5" />
                <span>Hörtexte</span>
              </div>
              <div className="text-xl font-black font-de text-purple-200">{hoertexteTotal}</div>
            </div>

            <div className="bg-emerald-500/10 p-3.5 rounded-2xl border border-emerald-400/20">
              <div className="text-emerald-300 mb-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>یاد گرفته‌اید</span>
              </div>
              <div className="text-xl font-black font-de text-emerald-300">{stats.learnedWords}</div>
            </div>

            <div className="bg-amber-500/10 p-3.5 rounded-2xl border border-amber-400/20">
              <div className="text-amber-300 mb-1 flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>نیازمند مرور</span>
              </div>
              <div className="text-xl font-black font-de text-amber-300">{stats.reviewWords}</div>
            </div>

            <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <div className="text-slate-400 mb-1 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>درصد تسلط کل</span>
              </div>
              <div className="text-xl font-black font-de text-amber-300">{stats.completionPercentage}%</div>
            </div>

          </div>

        </div>
      </div>

      {/* Dual PDF Source Features Box */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Database className="w-5 h-5 text-indigo-600" />
              <span>یکپارچه‌سازی دو منبع اصلی Aspekte neu B1+</span>
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              این سیستم تمام واژگان، افعال، صفات و اصطلاحات هر دو فایل PDF (کتاب و متن‌های شنیداری) را در یک ساختار منسجم ادغام کرده و از ایجاد لغات تکراری جلوگیری می‌کند.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>جستجوی پیشرفته</span>
            </button>
            <button
              onClick={onOpenDatabase}
              className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-all flex items-center gap-1.5"
            >
              <Database className="w-4 h-4 text-emerald-600" />
              <span>مدیریت و ورود داده</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section Header: Lessons 1 to 10 */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              درس‌های ۱ تا ۱۰ کتاب (Lektionen 1 bis 10)
            </h2>
            <p className="text-xs text-slate-500">
              برای مشاهده واژگان تفکیک‌شده، تلفظ‌ها و تمرین فلش‌کارت، درس مورد نظر را انتخاب کنید.
            </p>
          </div>

          <span className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100 font-de">
            ۱۰ درس کامل
          </span>
        </div>

        {/* 10 Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {LESSONS_DATA.map((lesson) => (
            <LessonCard
              key={lesson.number}
              lesson={lesson}
              onSelectLesson={onSelectLesson}
              onStartFlashcards={onOpenFlashcards}
            />
          ))}
        </div>
      </div>

    </div>
  );
};
