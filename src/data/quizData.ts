export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: number; // Used in Structure 1 (0-indexed)
}

// Structure 2: Scoring weights by option index
// A (index 0) = 4 points, B (index 1) = 3, C (index 2) = 2, D (index 3) = 1, E (index 4) = 0
export const optionWeights = [4, 3, 2, 1, 0];

export interface ScoreInterpretation {
  range: string;
  title: string;
  description: string;
  focusArea: string;
}

export const scoreInterpretations: ScoreInterpretation[] = [
  {
    range: "16–20",
    title: "Future-Ready & Resilient",
    description: "You are adaptable and emotionally stable.",
    focusArea: "Keep improving and lead change confidently."
  },
  {
    range: "11–15",
    title: "Stable but Under Pressure",
    description: "You are doing well, but stress may be affecting your energy.",
    focusArea: "Stress management, balance, and delegation."
  },
  {
    range: "6–10",
    title: "High Stress / Resistance Zone",
    description: "You may be reacting more than responding.",
    focusArea: "Emotional control, adaptability, and mindset upgrade."
  },
  {
    range: "0–5",
    title: "Burnout / Rigid Mindset Risk",
    description: "You may be overloaded or emotionally drained.",
    focusArea: "Recovery, clarity, and confidence rebuilding."
  }
];

export const getScoreInterpretation = (score: number): ScoreInterpretation => {
  if (score >= 16) return scoreInterpretations[0];
  if (score >= 11) return scoreInterpretations[1];
  if (score >= 6) return scoreInterpretations[2];
  return scoreInterpretations[3];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When I face sudden change at work, my first internal reaction is usually:",
    options: [
      "\"Let's handle it. I'll figure it out.\"",
      "\"Why is this happening again?\"",
      "\"I feel anxious and pressured.\"",
      "\"I get irritated and want to resist.\"",
      "\"I freeze and avoid it initially.\""
    ]
  },
  {
    id: 2,
    question: "In the last 3 months, I have transferred my stress to others (team or family) by:",
    options: [
      "Becoming silent and distant",
      "Becoming impatient / short-tempered",
      "Micromanaging and controlling",
      "Overworking and ignoring people",
      "I don't think I transfer stress"
    ]
  },
  {
    id: 3,
    question: "If a younger colleague teaches me a new digital process, my honest feeling is:",
    options: [
      "Respect — I like learning",
      "Neutral — I accept it",
      "Slight discomfort — I feel exposed",
      "Defensive — I feel my authority reduces",
      "I avoid it unless forced"
    ]
  },
  {
    id: 4,
    question: "When I make a mistake at work, I usually respond by:",
    options: [
      "Admit quickly, correct fast",
      "Correct it quietly, avoid discussion",
      "Justify it because pressure was high",
      "Feel guilty and overthink",
      "Blame process / people / situation"
    ]
  },
  {
    id: 5,
    question: "If my current lifestyle continues for the next 5 years, I believe my:",
    options: [
      "Health will improve",
      "Health will remain stable",
      "Health will decline",
      "Family life will suffer",
      "Both health and family life will suffer"
    ]
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Change Readiness & Resilience – Self Reflection",
  professor: "ANIL AGGARWAL",
  totalQuestions: 5,
  totalMarks: 20,
  marksPerQuestion: 4,
  timeLimit: 10, // minutes
  isStructure2: true, // Flag to indicate scoring type
  rules: [
    "Please answer honestly. There is no right or wrong answer. This is only for your self-awareness.",
    "Total time allowed: 10 minutes",
    "Only one submission per roll number allowed",
    "Click 'Submit Quiz' to finish or quiz will auto-submit when time expires"
  ]
};
