import React, { useState, useEffect } from 'react';
import { VocabularyProvider } from './context/VocabularyContext';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { LessonView } from './components/LessonView';
import { FlashcardsModal } from './components/FlashcardsModal';
import { QuizModal } from './components/QuizModal';
import { AdvancedSearchModal } from './components/AdvancedSearchModal';
import { PdfPipelineManager } from './components/PdfPipelineManager';
import { HoertexteViewerModal } from './components/HoertexteViewerModal';
import { CategoryType, SourceType } from './types/vocabulary';
import { BookOpen, Heart, Globe, Sparkles, Layers, Search, Database, Headphones } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'lesson' | 'flashcards' | 'quiz' | 'search' | 'database'>('dashboard');
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  
  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);
  const [isHoertexteOpen, setIsHoertexteOpen] = useState(false);
  const [hoertexteLesson, setHoertexteLesson] = useState(1);

  // Flashcards initial filters
  const [flashcardFilters, setFlashcardFilters] = useState<{
    lesson?: number;
    category?: CategoryType | 'all';
    source?: SourceType | 'all';
  }>({});

  // Quiz initial lesson
  const [quizLesson, setQuizLesson] = useState<number | undefined>(undefined);

  // Global Keyboard Shortcuts (e.g. Cmd+K / Ctrl+K for Search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectLesson = (lessonNum: number) => {
    setSelectedLesson(lessonNum);
    setCurrentView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFlashcards = (lessonNum?: number, category?: CategoryType, source?: SourceType) => {
    setFlashcardFilters({
      lesson: lessonNum || (currentView === 'lesson' ? selectedLesson : undefined),
      category: category || 'all',
      source: source || 'all',
    });
    setIsFlashcardsOpen(true);
  };

  const handleOpenQuiz = (lessonNum?: number) => {
    setQuizLesson(lessonNum || (currentView === 'lesson' ? selectedLesson : undefined));
    setIsQuizOpen(true);
  };

  const handleOpenHoertexte = (lessonNum?: number) => {
    setHoertexteLesson(lessonNum || selectedLesson);
    setIsHoertexteOpen(true);
  };

  return (
    <VocabularyProvider>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-amber-200 selection:text-amber-900">
        
        {/* Navigation Header */}
        <Header
          currentView={currentView}
          setCurrentView={setCurrentView}
          selectedLesson={selectedLesson}
          setSelectedLesson={handleSelectLesson}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenFlashcards={() => handleOpenFlashcards()}
          onOpenQuiz={() => handleOpenQuiz()}
          onOpenDatabase={() => setIsDatabaseOpen(true)}
          onOpenHoertexte={() => handleOpenHoertexte()}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          {currentView === 'dashboard' && (
            <Dashboard
              onSelectLesson={handleSelectLesson}
              onOpenFlashcards={handleOpenFlashcards}
              onOpenQuiz={handleOpenQuiz}
              onOpenSearch={() => setIsSearchOpen(true)}
              onOpenDatabase={() => setIsDatabaseOpen(true)}
            />
          )}

          {currentView === 'lesson' && (
            <LessonView
              lessonNumber={selectedLesson}
              onSelectLesson={handleSelectLesson}
              onBackToDashboard={() => setCurrentView('dashboard')}
              onStartFlashcards={(lNum, cat, src) => handleOpenFlashcards(lNum, cat, src)}
              onStartQuiz={(lNum) => handleOpenQuiz(lNum)}
              onOpenHoertexte={(lNum) => handleOpenHoertexte(lNum)}
            />
          )}
        </main>

        {/* Global Footer */}
        <footer className="border-t border-slate-200 bg-white py-8 mt-12 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
            
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 font-de">Aspekte neu B1+</span>
              <span>• واژه‌نامه هوشمند Lehrbuch و Hörtexte</span>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <span>درس‌های ۱ تا ۱۰</span>
              <span>•</span>
              <span>پشتیبانی از تلفظ صوتی (de-DE)</span>
              <span>•</span>
              <span>سازگار با کلودفلر و اجرا در مرورگر</span>
            </div>

          </div>
        </footer>

        {/* Modals */}
        {isSearchOpen && (
          <AdvancedSearchModal
            onClose={() => setIsSearchOpen(false)}
            onSelectWordLesson={(lNum) => {
              setSelectedLesson(lNum);
              setCurrentView('lesson');
              setIsSearchOpen(false);
            }}
          />
        )}

        {isFlashcardsOpen && (
          <FlashcardsModal
            initialLesson={flashcardFilters.lesson}
            initialCategory={flashcardFilters.category}
            initialSource={flashcardFilters.source}
            onClose={() => setIsFlashcardsOpen(false)}
          />
        )}

        {isQuizOpen && (
          <QuizModal
            initialLesson={quizLesson}
            onClose={() => setIsQuizOpen(false)}
          />
        )}

        {isDatabaseOpen && (
          <PdfPipelineManager
            onClose={() => setIsDatabaseOpen(false)}
          />
        )}

        {isHoertexteOpen && (
          <HoertexteViewerModal
            initialLesson={hoertexteLesson}
            onClose={() => setIsHoertexteOpen(false)}
          />
        )}

      </div>
    </VocabularyProvider>
  );
}
