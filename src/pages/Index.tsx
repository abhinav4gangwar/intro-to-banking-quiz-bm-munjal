import React, { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import QuizInterface, { QuizResults } from '@/components/QuizInterface';
import ResultsScreen from '@/components/ResultsScreen';

type AppState = 'welcome' | 'quiz' | 'results';

interface StudentInfo {
  name: string;
  email: string;
}

const Index = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [quizResults, setQuizResults] = useState<QuizResults | null>(null);

  const handleStartQuiz = (info: StudentInfo) => {
    setStudentInfo(info);
    setAppState('quiz');
  };

  const handleQuizComplete = (results: QuizResults) => {
    setQuizResults(results);
    setAppState('results');
  };

  const handleRestart = () => {
    setStudentInfo(null);
    setQuizResults(null);
    setAppState('welcome');
  };

  if (appState === 'welcome') {
    return <WelcomeScreen onStart={handleStartQuiz} />;
  }

  if (appState === 'quiz' && studentInfo) {
    return (
      <QuizInterface 
        studentInfo={studentInfo} 
        onComplete={handleQuizComplete} 
      />
    );
  }

  if (appState === 'results' && quizResults) {
    return (
      <ResultsScreen 
        results={quizResults} 
        onRestart={handleRestart} 
      />
    );
  }

  return null;
};

export default Index;