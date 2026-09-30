import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  HelpCircle, 
  Database, 
  Menu, 
  X,
  Star,
  BookMarked,
  Headphones
} from 'lucide-react';
import { useVocabulary } from '../context/VocabularyContext';
import { LESSONS_DATA } from '../data/lessons';

interface HeaderProps {
  currentView: 'dashboard' | 'lesson' | 'flashcards' | 'quiz' | 'search' | 'database';
  setCurrentView: (view: 'dashboard' | 'lesson' | 'flashcards' | 'quiz' | 'search' | 'database') => void;
  selectedLesson: number;
  setSelectedLesson: (lessonNum: number) => void;
  onOpenSearch: () => void;
  onOpenFlashcards: () => void;
  onOpenQuiz: () => void;
  onOpenDatabase: () => void;
  onOpenHoertexte?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  selectedLesson,
  setSelectedLesson,
  onOpenSearch,
  onOpenFlashcards,
  onOpenQuiz,
  onOpenDatabase,
  onOpenHoertexte,
}) => {
  const { getGlobalStats } = useVocabulary();
  const stats = getGlobalStats();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lessonDropdownOpen, setLessonDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 text-right group transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500 via-rose-500 to-indigo-600 p-0.5 shadow-md group-hover:shadow-lg transition-all">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white font-bold text-base font-de">
                  B1+
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-900 text-lg tracking-tight font-de">
                    Aspekte neu B1+
                  </span>
                  <span className="text-[11px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                    واژه‌نامه هوشمند
                  </span>
                </div>
                <p className="text-xs text-slate-500 hidden sm:block">
                  آموزش جامع لغات و اصطلاحات کتاب اصلی و متن‌های شنیداری
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {/* Lessons Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLessonDropdownOpen(!lessonDropdownOpen)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  currentView === 'lesson'
                    ? 'bg-indigo-50 text-indigo-700 font-semibold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>درس‌ها (۱ تا ۱۰)</span>
                {currentView === 'lesson' && (
                  <span className="text-xs bg-indigo-600 text-white px-2 py-0.2 rounded-full font-de">
                    Lektion {selectedLesson}
                  </span>
                )}
              </button>

              {lessonDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-20"
                    onClick={() => setLessonDropdownOpen(false)}
                  />
                  <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-2 z-30 grid grid-cols-1 gap-1 max-h-96 overflow-y-auto">
                    <div className="px-3 py-2 text-xs font-semibold text-slate-400 border-b border-slate-100 flex items-center justify-between">
                      <span>انتخاب درس</span>
                      <span className="font-de text-[11px]">Lektionen 1 - 10</span>
                    </div>
                    {LESSONS_DATA.map((lesson) => (
                      <button
                        key={lesson.number}
                        onClick={() => {
                          setSelectedLesson(lesson.number);
                          setCurrentView('lesson');
                          setLessonDropdownOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-right transition-all ${
                          selectedLesson === lesson.number && currentView === 'lesson'
                            ? 'bg-indigo-50 text-indigo-700 font-semibold'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold font-de">
                            {lesson.number}
                          </span>
                          <div>
                            <div className="text-xs font-bold text-slate-800 font-de">
                              Lektion {lesson.number}: {lesson.germanTitle}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {lesson.persianTitle}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>جستجوی پیشرفته</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 text-slate-500 rounded border border-slate-200">
                ⌘K
              </kbd>
            </button>

            {/* Hörtexte Transcripts */}
            {onOpenHoertexte && (
              <button
                onClick={onOpenHoertexte}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 hover:text-purple-900 transition-all font-semibold"
              >
                <Headphones className="w-4 h-4 text-purple-600" />
                <span>متن‌های شنیداری (Hörtexte)</span>
              </button>
            )}

            {/* Flashcards */}
            <button
              onClick={onOpenFlashcards}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                currentView === 'flashcards'
                  ? 'bg-amber-50 text-amber-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-amber-500" />
              <span>فلش‌کارت‌ها</span>
            </button>

            {/* Quiz */}
            <button
              onClick={onOpenQuiz}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                currentView === 'quiz'
                  ? 'bg-rose-50 text-rose-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>آزمون ۴ گزینه‌ای</span>
            </button>

            {/* PDF & Database Manager */}
            <button
              onClick={onOpenDatabase}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                currentView === 'database'
                  ? 'bg-emerald-50 text-emerald-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Database className="w-4 h-4 text-emerald-600" />
              <span>پایگاه داده و PDF</span>
            </button>
          </nav>

          {/* User Progress Pill on Top Right */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 bg-slate-100/90 px-3 py-1.5 rounded-xl border border-slate-200/60 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-slate-600">پیشرفت کل:</span>
              <span className="font-bold text-slate-900 font-de">{stats.completionPercentage}%</span>
              <span className="text-slate-400">({stats.learnedWords}/{stats.totalWords} واژه)</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-slate-700 font-medium">میزان یادگیری کل:</span>
            </div>
            <span className="font-bold text-slate-900 font-de">{stats.completionPercentage}% ({stats.learnedWords}/{stats.totalWords})</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-slate-100 text-slate-800 text-sm font-medium"
            >
              <BookMarked className="w-4 h-4 text-indigo-600" />
              <span>داشبورد درس‌ها</span>
            </button>

            <button
              onClick={() => {
                onOpenFlashcards();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-amber-50 text-amber-800 text-sm font-medium"
            >
              <Layers className="w-4 h-4 text-amber-600" />
              <span>فلش‌کارت‌ها</span>
            </button>

            <button
              onClick={() => {
                onOpenQuiz();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 text-rose-800 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-rose-600" />
              <span>آزمون تستی</span>
            </button>

            <button
              onClick={() => {
                onOpenDatabase();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-sm font-medium"
            >
              <Database className="w-4 h-4 text-emerald-600" />
              <span>دیتابیس و PDF</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-400 mb-2">انتخاب سریع درس:</div>
            <div className="grid grid-cols-5 gap-1.5">
              {LESSONS_DATA.map((l) => (
                <button
                  key={l.number}
                  onClick={() => {
                    setSelectedLesson(l.number);
                    setCurrentView('lesson');
                    setMobileMenuOpen(false);
                  }}
                  className={`p-2 rounded-xl text-center font-de text-xs font-bold transition-all ${
                    selectedLesson === l.number && currentView === 'lesson'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  L{l.number}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
