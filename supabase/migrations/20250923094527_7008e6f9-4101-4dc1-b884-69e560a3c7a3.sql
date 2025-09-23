-- Create quiz_results table to store student quiz attempts
CREATE TABLE public.quiz_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name TEXT NOT NULL,
  student_email TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_marks INTEGER NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  time_spent INTEGER NOT NULL, -- in seconds
  answers JSONB NOT NULL, -- array of answers
  completed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX idx_quiz_results_email ON public.quiz_results(student_email);
CREATE INDEX idx_quiz_results_score ON public.quiz_results(score DESC);
CREATE INDEX idx_quiz_results_completed_at ON public.quiz_results(completed_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert their results (no authentication required)
CREATE POLICY "Anyone can insert quiz results" 
ON public.quiz_results 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow anyone to read results (for admin view)
CREATE POLICY "Anyone can view quiz results" 
ON public.quiz_results 
FOR SELECT 
USING (true);