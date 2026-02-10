import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { quizQuestions, quizInfo, optionWeights, getScoreInterpretation, scoreInterpretations } from '@/data/quizData';
import type { QuizResults } from './QuizInterface';
import { Trophy, Clock, User, Mail, RotateCcw, Target, Brain, AlertCircle, Heart } from 'lucide-react';

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

  const interpretation = getScoreInterpretation(score);

  const getInterpretationColor = (title: string): string => {
    if (title.includes('Future-Ready')) return 'text-success';
    if (title.includes('Stable')) return 'text-primary';
    if (title.includes('High Stress')) return 'text-warning';
    return 'text-destructive';
  };

  const getInterpretationBgColor = (title: string): string => {
    if (title.includes('Future-Ready')) return 'bg-success/10 border-success/30';
    if (title.includes('Stable')) return 'bg-primary/10 border-primary/30';
    if (title.includes('High Stress')) return 'bg-warning/10 border-warning/30';
    return 'bg-destructive/10 border-destructive/30';
  };

  const getInterpretationIcon = (title: string) => {
    if (title.includes('Future-Ready')) return <Trophy className="w-8 h-8" />;
    if (title.includes('Stable')) return <Brain className="w-8 h-8" />;
    if (title.includes('High Stress')) return <AlertCircle className="w-8 h-8" />;
    return <Heart className="w-8 h-8" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/20 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader className="text-center">
            <div className={`flex items-center justify-center w-20 h-20 mx-auto rounded-full mb-4 ${getInterpretationBgColor(interpretation.title)}`}>
              <div className={getInterpretationColor(interpretation.title)}>
                {getInterpretationIcon(interpretation.title)}
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">Self-Reflection Complete!</CardTitle>
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

        {/* Score & Interpretation */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>Your Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className={`text-6xl font-bold ${getInterpretationColor(interpretation.title)}`}>
                {score}
              </div>
              <div className="text-lg text-muted-foreground">
                out of {quizInfo.totalMarks} points
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Time spent: {formatTime(timeSpent)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interpretation Result - Prominent */}
        <Card className={`shadow-[var(--shadow-card)] border-2 ${getInterpretationBgColor(interpretation.title)}`}>
          <CardContent className="p-8 text-center space-y-4">
            <Badge className="text-lg px-4 py-2 font-bold">
              Score: {interpretation.range}
            </Badge>
            <h2 className={`text-2xl font-bold ${getInterpretationColor(interpretation.title)}`}>
              {interpretation.title}
            </h2>
            <p className="text-lg">{interpretation.description}</p>
            <div className="mt-4 p-4 bg-background/80 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Focus Area</span>
              </div>
              <p className="text-base">{interpretation.focusArea}</p>
            </div>
          </CardContent>
        </Card>

        {/* All Interpretation Bands */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>Score Interpretation Guide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {scoreInterpretations.map((interp, index) => {
              const isActive = interp.title === interpretation.title;
              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isActive
                      ? getInterpretationBgColor(interp.title) + ' shadow-md'
                      : 'border-border bg-muted/20 opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Badge variant={isActive ? "default" : "outline"} className="shrink-0">
                      {interp.range}
                    </Badge>
                    <div>
                      <h4 className={`font-semibold ${isActive ? getInterpretationColor(interp.title) : ''}`}>
                        {interp.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{interp.description}</p>
                      <p className="text-sm mt-1"><strong>Focus:</strong> {interp.focusArea}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Question Summary */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>Your Responses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quizQuestions.map((question, index) => {
              const userAnswer = answers[index];
              const optionLabels = ['A', 'B', 'C', 'D', 'E'];
              const pointsEarned = userAnswer !== null ? optionWeights[userAnswer] : 0;
              
              return (
                <div key={index} className="p-4 rounded-lg border border-border bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-2 leading-relaxed">{question.question}</h4>
                      {userAnswer !== null ? (
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">
                            {optionLabels[userAnswer]}: {question.options[userAnswer]}
                          </Badge>
                          <Badge className="bg-primary/10 text-primary border-primary/30">
                            {pointsEarned} pts
                          </Badge>
                        </div>
                      ) : (
                        <div className="text-sm text-muted-foreground italic">No answer selected (0 pts)</div>
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
