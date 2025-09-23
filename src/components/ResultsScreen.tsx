import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { quizQuestions, quizInfo } from '@/data/quizData';
import type { QuizResults } from './QuizInterface';
import { Trophy, CheckCircle, XCircle, Clock, User, Mail, RotateCcw } from 'lucide-react';

interface ResultsScreenProps {
  results: QuizResults;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ results, onRestart }) => {
  const { studentInfo, answers, score, timeSpent } = results;
  
  const correctAnswers = answers.filter((answer, index) => 
    answer === quizQuestions[index].correctAnswer
  ).length;
  
  const incorrectAnswers = answers.filter((answer, index) => 
    answer !== null && answer !== quizQuestions[index].correctAnswer
  ).length;
  
  const unansweredQuestions = answers.filter(answer => answer === null).length;
  
  const percentage = (score / quizInfo.totalMarks) * 100;
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} minutes ${secs} seconds`;
  };

  const getScoreColor = (percentage: number): string => {
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'destructive';
  };

  const getGrade = (percentage: number): string => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    return 'F';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/20 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader className="text-center">
            <div className={`flex items-center justify-center w-20 h-20 mx-auto rounded-full mb-4 ${
              percentage >= 60 ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
            }`}>
              <Trophy className="w-10 h-10" />
            </div>
            <CardTitle className="text-3xl font-bold">Quiz Completed!</CardTitle>
            <div className="text-muted-foreground space-y-1">
              <div className="flex items-center justify-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-semibold">{studentInfo.name}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{studentInfo.email}</span>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Score Summary */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>Your Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Final Score */}
              <div className="text-center space-y-2">
                <div className={`text-4xl font-bold ${
                  getScoreColor(percentage) === 'success' ? 'text-success' :
                  getScoreColor(percentage) === 'warning' ? 'text-warning' : 'text-destructive'
                }`}>
                  {score}
                </div>
                <div className="text-sm text-muted-foreground">
                  out of {quizInfo.totalMarks} marks
                </div>
                <Badge variant={getScoreColor(percentage) as any} className="text-sm font-semibold">
                  {percentage.toFixed(1)}% • Grade {getGrade(percentage)}
                </Badge>
              </div>

              {/* Correct Answers */}
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-success">{correctAnswers}</div>
                <div className="text-sm text-muted-foreground">Correct Answers</div>
                <CheckCircle className="w-6 h-6 text-success mx-auto" />
              </div>

              {/* Incorrect Answers */}
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-destructive">{incorrectAnswers}</div>
                <div className="text-sm text-muted-foreground">Incorrect Answers</div>
                <XCircle className="w-6 h-6 text-destructive mx-auto" />
              </div>

              {/* Time Spent */}
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">{Math.floor(timeSpent / 60)}</div>
                <div className="text-sm text-muted-foreground">Minutes Used</div>
                <Clock className="w-6 h-6 text-primary mx-auto" />
              </div>

            </div>
            
            {unansweredQuestions > 0 && (
              <div className="mt-6 p-4 bg-warning/10 rounded-lg border border-warning/20">
                <div className="text-center text-warning">
                  <strong>{unansweredQuestions}</strong> question(s) were left unanswered
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Detailed Review */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>Detailed Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quizQuestions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              const isUnanswered = userAnswer === null;
              
              return (
                <div key={index} className={`p-4 rounded-lg border ${
                  isUnanswered ? 'border-muted bg-muted/20' :
                  isCorrect ? 'border-success/30 bg-success/5' : 'border-destructive/30 bg-destructive/5'
                }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      isUnanswered ? 'bg-muted text-muted-foreground' :
                      isCorrect ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-3 leading-relaxed">{question.question}</h4>
                      
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => {
                          const isUserChoice = userAnswer === optionIndex;
                          const isCorrectChoice = optionIndex === question.correctAnswer;
                          
                          return (
                            <div key={optionIndex} className={`p-3 rounded-md text-sm ${
                              isCorrectChoice && isUserChoice ? 'bg-success/20 border border-success/40 text-success-foreground' :
                              isCorrectChoice ? 'bg-success/10 border border-success/30 text-success' :
                              isUserChoice && !isCorrectChoice ? 'bg-destructive/10 border border-destructive/30 text-destructive' :
                              'bg-background border border-border'
                            }`}>
                              <div className="flex items-center gap-2">
                                {isUserChoice && (
                                  <Badge variant={isCorrect ? "default" : "destructive"} className="text-xs">
                                    Your Answer
                                  </Badge>
                                )}
                                {isCorrectChoice && (
                                  <Badge variant="default" className="text-xs bg-success hover:bg-success">
                                    Correct Answer
                                  </Badge>
                                )}
                                <span className="ml-auto">{option}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {isUnanswered && (
                        <div className="mt-2 text-sm text-muted-foreground italic">
                          No answer selected
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-center pb-8">
          <Button 
            onClick={onRestart}
            variant="outline"
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Take Another Quiz
          </Button>
        </div>

      </div>
    </div>
  );
};

export default ResultsScreen;