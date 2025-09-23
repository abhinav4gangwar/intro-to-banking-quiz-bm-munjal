-- Migration to change student_email to student_roll_number
-- This migration updates the quiz_results table to use roll numbers instead of email addresses

-- Drop existing indexes on student_email
DROP INDEX IF EXISTS idx_quiz_results_email;

-- Add new column for roll number
ALTER TABLE public.quiz_results 
ADD COLUMN student_roll_number TEXT;

-- Copy existing email data to roll number column (for any existing data)
-- This is a temporary measure - in production you might want to handle this differently
UPDATE public.quiz_results 
SET student_roll_number = student_email 
WHERE student_roll_number IS NULL;

-- Make the new column NOT NULL
ALTER TABLE public.quiz_results 
ALTER COLUMN student_roll_number SET NOT NULL;

-- Drop the old email column
ALTER TABLE public.quiz_results 
DROP COLUMN student_email;

-- Create new index for roll number
CREATE INDEX idx_quiz_results_roll_number ON public.quiz_results(student_roll_number);

-- Update the existing policies to reflect the new column name
-- (The policies will continue to work as they use true conditions)

-- Add a comment to document the change
COMMENT ON COLUMN public.quiz_results.student_roll_number IS 'Student roll number - unique identifier for each student';
