import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { quizInfo } from '@/data/quizData';
import { BookOpen, Clock, User } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (studentInfo: { name: string; rollNumber: string }) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [errors, setErrors] = useState<{ name?: string; rollNumber?: string }>({});

  const validateAndStart = () => {
    const newErrors: { name?: string; rollNumber?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!rollNumber.trim()) {
      newErrors.rollNumber = 'Roll number is required';
    } else if (!/^[A-Za-z0-9]+$/.test(rollNumber.trim())) {
      newErrors.rollNumber = 'Roll number should contain only letters and numbers';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onStart({ name: name.trim(), rollNumber: rollNumber.toUpperCase().trim() });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-[var(--shadow-card)]">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
          <CardTitle className="text-2xl font-bold text-primary mb-2">
              {quizInfo.title}
            </CardTitle>
          <CardDescription className="text-base space-y-1">
              {quizInfo.subtitle && <div className="font-medium">{quizInfo.subtitle}</div>}
              <div><strong>Professor:</strong> {quizInfo.professor}</div>
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Quiz Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-secondary/50 rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <BookOpen className="w-4 h-4 text-primary" />
              <span><strong>{quizInfo.totalQuestions}</strong> Questions</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4 text-primary" />
              <span><strong>{quizInfo.totalMarks}</strong> Marks</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span><strong>{quizInfo.timeLimit}</strong> Minutes</span>
            </div>
          </div>

          {/* Rules */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Instructions:</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {quizInfo.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Student Information Form */}
          <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-lg">Student Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder="Enter your full name"
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="rollNumber">Roll Number</Label>
              <Input
                id="rollNumber"
                type="text"
                value={rollNumber}
                onChange={(e) => {
                  setRollNumber(e.target.value);
                  if (errors.rollNumber) setErrors({ ...errors, rollNumber: undefined });
                }}
                placeholder="Enter your roll number"
                className={errors.rollNumber ? 'border-destructive' : ''}
              />
              {errors.rollNumber && (
                <p className="text-sm text-destructive">{errors.rollNumber}</p>
              )}
            </div>
          </div>

          <Button 
            onClick={validateAndStart}
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-opacity"
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeScreen;