import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { quizQuestions, quizInfo } from '@/data/quizData';
import type { QuizResults } from './QuizInterface';
import { Trophy, Clock, User, Mail, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

interface ResultsScreenProps {
  results: QuizResults;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ results, onRestart }) => {
  const { studentInfo, answers, score, timeSpent } = results;
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} minutes ${secs} seconds`;
  };

  const percentage = Math.round((score / quizInfo.totalMarks) * 100);
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/20 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full mb-4 bg-primary/10 border-primary/30">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
            <div className="text-muted-foreground space-y-1">
              <div className="flex items-center justify-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-semibold">{studentInfo.name}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Roll Number: {studentInfo.rollNumber}</span>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Score */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>Your Marks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-primary">
                {score}
              </div>
              <div className="text-lg text-muted-foreground">
                out of {quizInfo.totalMarks} marks ({percentage}%)
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Time spent: {formatTime(timeSpent)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question-wise Review */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>Question-wise Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quizQuestions.map((question, index) => {
              const userAnswer = answers[index];
              const correctAnswer = question.correctAnswer ?? -1;
              const isCorrect = userAnswer === correctAnswer;
              const isUnanswered = userAnswer === null;
              
              return (
                <div key={index} className={`p-4 rounded-lg border-2 ${
                  isUnanswered ? 'border-muted bg-muted/10' :
                  isCorrect ? 'border-success/40 bg-success/5' : 'border-destructive/40 bg-destructive/5'
                }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-3 leading-relaxed">{question.question}</h4>
                      
                      <div className="space-y-2 mb-3">
                        {question.options.map((option, optIdx) => {
                          const isThisCorrect = optIdx === correctAnswer;
                          const isThisSelected = optIdx === userAnswer;
                          
                          return (
                            <div key={optIdx} className={`flex items-start gap-2 p-2 rounded-md text-sm ${
                              isThisCorrect ? 'bg-success/10 text-success font-semibold' :
                              isThisSelected && !isThisCorrect ? 'bg-destructive/10 text-destructive' : ''
                            }`}>
                              <span className="font-medium shrink-0">{optionLabels[optIdx]})</span>
                              <span>{option}</span>
                              {isThisCorrect && <CheckCircle className="w-4 h-4 shrink-0 ml-auto mt-0.5" />}
                              {isThisSelected && !isThisCorrect && <XCircle className="w-4 h-4 shrink-0 ml-auto mt-0.5" />}
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        {isUnanswered ? (
                          <Badge variant="outline" className="text-muted-foreground">Not Answered — 0/{quizInfo.marksPerQuestion} marks</Badge>
                        ) : isCorrect ? (
                          <Badge className="bg-success/10 text-success border-success/30">
                            <CheckCircle className="w-3 h-3 mr-1" /> Correct — {quizInfo.marksPerQuestion}/{quizInfo.marksPerQuestion} marks
                          </Badge>
                        ) : (
                          <Badge className="bg-destructive/10 text-destructive border-destructive/30">
                            <XCircle className="w-3 h-3 mr-1" /> Wrong — 0/{quizInfo.marksPerQuestion} marks
                          </Badge>
                        )}
                      </div>
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
