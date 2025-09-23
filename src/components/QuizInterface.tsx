import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { quizQuestions, quizInfo } from '@/data/quizData';
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';

interface QuizInterfaceProps {
  studentInfo: { name: string; email: string };
  onComplete: (results: QuizResults) => void;
}

export interface QuizResults {
  studentInfo: { name: string; email: string };
  answers: (number | null)[];
  score: number;
  timeSpent: number;
  submissionTime: string;
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({ studentInfo, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quizQuestions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(quizInfo.timeLimit * 60); // Convert minutes to seconds
  const [showSubmitWarning, setShowSubmitWarning] = useState(false);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateResults = useCallback((): QuizResults => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        score += quizInfo.marksPerQuestion;
      }
    });

    return {
      studentInfo,
      answers,
      score,
      timeSpent: (quizInfo.timeLimit * 60) - timeLeft,
      submissionTime: new Date().toISOString()
    };
  }, [answers, studentInfo, timeLeft]);

  const handleSubmit = useCallback(() => {
    const results = calculateResults();
    
    // Store email in localStorage to prevent re-submission
    const usedEmails = JSON.parse(localStorage.getItem('quizSubmissions') || '[]');
    usedEmails.push(studentInfo.email);
    localStorage.setItem('quizSubmissions', JSON.stringify(usedEmails));
    
    // Store results for backend (in a real app, this would be sent to a server)
    const allResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    allResults.push(results);
    localStorage.setItem('quizResults', JSON.stringify(allResults));
    
    onComplete(results);
  }, [calculateResults, studentInfo.email, onComplete]);

  // Timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, handleSubmit]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const getAnsweredCount = () => {
    return answers.filter(answer => answer !== null).length;
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const answeredCount = getAnsweredCount();
  const isTimeRunningOut = timeLeft <= 300; // 5 minutes warning

  if (showSubmitWarning) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-[var(--shadow-card)]">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-warning/10 text-warning mb-4">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <CardTitle>Submit Quiz?</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p>You have answered <strong>{answeredCount}</strong> out of <strong>{quizQuestions.length}</strong> questions.</p>
            <p className="text-sm text-muted-foreground">
              Are you sure you want to submit your quiz? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setShowSubmitWarning(false)}
                className="flex-1"
              >
                Continue Quiz
              </Button>
              <Button 
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-success to-success hover:opacity-90"
              >
                Submit Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/20 p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6">
        <Card className="shadow-[var(--shadow-card)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-lg font-semibold text-primary">{studentInfo.name}</h1>
                <p className="text-sm text-muted-foreground">{quizInfo.title}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Answered</div>
                  <div className="font-semibold">{answeredCount}/{quizQuestions.length}</div>
                </div>
                
                <div className={`text-center p-3 rounded-lg ${isTimeRunningOut ? 'bg-warning/10 text-warning shadow-[var(--shadow-timer)]' : 'bg-primary/10 text-primary'}`}>
                  <Clock className="w-5 h-5 mx-auto mb-1" />
                  <div className="font-mono font-bold">{formatTime(timeLeft)}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Question */}
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Answer Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all hover:shadow-md ${
                    answers[currentQuestion] === index
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-border hover:border-primary/50 bg-card'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      answers[currentQuestion] === index
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-muted-foreground'
                    }`}>
                      {answers[currentQuestion] === index && <CheckCircle className="w-4 h-4" />}
                    </div>
                    <span className="text-sm leading-relaxed">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              
              <div className="flex gap-3">
                {currentQuestion === quizQuestions.length - 1 ? (
                  <Button
                    onClick={() => setShowSubmitWarning(true)}
                    className="bg-gradient-to-r from-success to-success hover:opacity-90"
                  >
                    Submit Quiz
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={currentQuestion === quizQuestions.length - 1}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Question Navigation Grid */}
      <div className="max-w-4xl mx-auto mt-6">
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="text-lg">Question Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {quizQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                    index === currentQuestion
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : answers[index] !== null
                      ? 'bg-success/10 text-success border border-success/30 hover:bg-success/20'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 border border-border'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizInterface;