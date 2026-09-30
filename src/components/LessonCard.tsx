import React from 'react';
import { 
  BookOpen, 
  Headphones, 
  Layers, 
  ArrowLeft, 
  CheckCircle2, 
  RotateCcw,
  Sparkles,
  Users,
  Home,
  Clock,
  Utensils,
  Briefcase,
  Car,
  Heart,
  ShoppingBag,
  Compass
} from 'lucide-react';
import { LessonInfo } from '../types/vocabulary';
import { useVocabulary } from '../context/VocabularyContext';

interface LessonCardProps {
  lesson: LessonInfo;
  onSelectLesson: (lessonNum: number) => void;
  onStartFlashcards: (lessonNum: number) => void;
}

const getLessonIcon = (iconName: string) => {
  switch (iconName) {
    case 'Users': return <Users className="w-5 h-5" />;
    case 'Home': return <Home className="w-5 h-5" />;
    case 'Clock': return <Clock className="w-5 h-5" />;
    case 'Utensils': return <Utensils className="w-5 h-5" />;
    case 'Briefcase': return <Briefcase className="w-5 h-5" />;
    case 'Car': return <Car className="w-5 h-5" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5" />;
    case 'Heart': return <Heart className="w-5 h-5" />;
    case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
    case 'Compass': return <Compass className="w-5 h-5" />;
    default: return <BookOpen className="w-5 h-5" />;
  }
};

export const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  onSelectLesson,
  onStartFlashcards,
}) => {
  const { getLessonStats } = useVocabulary();
  const stats = getLessonStats(lesson.number);

  return (
    <div className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:border-indigo-200">
      
      {/* Top Banner with Accent */}
      <div>
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between gap-4 mb-4">
            
            {/* Lesson Badge & Icon */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-xs group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {getLessonIcon(lesson.icon)}
              </div>

              <div>
                <span className="text-xs font-bold text-indigo-600 tracking-wider font-de uppercase">
                  Lektion {lesson.number} • Aspekte B1+
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight font-de group-hover:text-indigo-600 transition-colors">
                  {lesson.germanTitle}
                </h3>
              </div>
            </div>

            {/* Completion Percentage Ring/Badge */}
            <div className="flex flex-col items-end">
              <span className="text-lg font-black text-slate-900 font-de">
                {stats.percentage}%
              </span>
              <span className="text-[11px] text-slate-400 font-medium">تسلط</span>
            </div>

          </div>

          {/* Persian Lesson Title & Description */}
          <div className="mb-4">
            <h4 className="text-base font-bold text-slate-800 mb-1">
              {lesson.persianTitle}
            </h4>
            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
              {lesson.description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 mb-4">
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
              <div
                className="bg-emerald-500 h-full transition-all duration-500"
                style={{ width: `${stats.percentage}%` }}
              />
              <div
                className="bg-amber-400 h-full transition-all duration-500"
                style={{
                  width: `${stats.total > 0 ? (stats.review / stats.total) * 100 : 0}%`,
                }}
              />
            </div>
            
            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                <span>{stats.learned} یاد گرفته</span>
              </span>
              <span className="flex items-center gap-1">
                <RotateCcw className="w-3 h-3 text-amber-500" />
                <span>{stats.review} مرور</span>
              </span>
              <span className="text-slate-400">
                کل: <b className="text-slate-700 font-de">{stats.total}</b>
              </span>
            </div>
          </div>

          {/* Source tags */}
          <div className="flex items-center gap-2 pt-3 border-t border-slate-100 text-xs">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-200/60 font-de">
              <BookOpen className="w-3 h-3" />
              <span>Lehrbuch ({stats.lehrbuchCount})</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 border border-purple-200/60 font-de">
              <Headphones className="w-3 h-3" />
              <span>Hörtexte ({stats.hoertexteCount})</span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer Card Actions */}
      <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelectLesson(lesson.number)}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-all shadow-2xs"
        >
          <span>مشاهده واژگان درس</span>
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onStartFlashcards(lesson.number)}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500 text-white text-xs font-bold hover:bg-amber-600 transition-all shadow-xs"
          title="مرور فلش‌کارت‌های این درس"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>فلش‌کارت</span>
        </button>
      </div>

    </div>
  );
};
