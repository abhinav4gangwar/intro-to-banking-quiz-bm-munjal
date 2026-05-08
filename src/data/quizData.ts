export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: number;
}

// Structure 2: Scoring weights by option index
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
    question: "Which institution regulates and supervises commercial banks in India?",
    options: ["SEBI", "RBI", "NABARD", "IRDAI"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "A customer visits a bank mainly because banks are considered:",
    options: ["Fast and aggressive", "Low-cost organizations", "Trustworthy and reliable", "Government-owned only"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Which of the following is a Public Sector Bank?",
    options: ["Axis Bank", "HDFC Bank", "ICICI Bank", "Punjab National Bank"],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "What is the main activity of a bank?",
    options: ["Manufacturing products", "Buying land", "Accepting deposits and giving loans", "Selling insurance only"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Which type of account is generally used by businesses for frequent transactions?",
    options: ["Savings Account", "Current Account", "Fixed Deposit", "Loan Account"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Which of the following is an example of a Foreign Bank in India?",
    options: ["State Bank of India", "Bank of Baroda", "HSBC", "Union Bank of India"],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Why are deposits treated as liabilities for banks?",
    options: ["Banks invest deposits in shares", "Banks have to repay depositors", "Deposits are owned by RBI", "Deposits cannot be withdrawn"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Which department in a bank mainly handles cyber security and software management?",
    options: ["HR Department", "Treasury Department", "IT Department", "Accounts Department"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "A banker helping a customer transfer money through NEFT is providing:",
    options: ["Treasury service", "Remittance service", "Audit service", "Insurance service"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which organization insures bank deposits up to ₹5 lakh per depositor?",
    options: ["SEBI", "NABARD", "SIDBI", "DICGC"],
    correctAnswer: 3
  },
  {
    id: 11,
    question: "Which of the following is an example of a Payment Bank?",
    options: ["Bajaj Finance", "Airtel Payments Bank", "Tata Capital", "AU Small Finance Bank"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "What is the role of the Compliance Department in a bank?",
    options: ["Managing advertisements", "Recruiting staff", "Ensuring adherence to RBI guidelines", "Handling customer loans only"],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "Which ratio represents the percentage of deposits banks must keep with RBI?",
    options: ["NPA", "CASA", "SLR", "CRR"],
    correctAnswer: 3
  },
  {
    id: 14,
    question: "Which banking challenge is commonly linked with phishing and SIM swap frauds?",
    options: ["Treasury loss", "Cyber security threat", "Rural banking issue", "Credit appraisal issue"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "A Regional Rural Bank is mainly created to:",
    options: ["Finance only large corporates", "Operate only in metro cities", "Serve rural and regional banking needs", "Manage foreign exchange business"],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Which banking channel is considered an alternate banking channel?",
    options: ["ATM", "Branch counter", "Loan desk", "Audit cell"],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "What is the key function of the Treasury Department in a bank?",
    options: ["Managing branch interiors", "Optimizing usage of funds", "Conducting staff training", "Selling insurance products"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which law mainly governs banking regulation in India?",
    options: ["Companies Act", "FEMA 1999", "Banking Regulation Act 1949", "Income Tax Act"],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "Positive Pay system is mainly related to:",
    options: ["Loan approval", "Cheque verification for high-value cheques", "Credit card activation", "Opening salary accounts"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which recent trend is helping banks in faster digital customer onboarding?",
    options: ["Physical cash movement", "Manual ledger posting", "UPI with eKYC and Aadhaar", "Demand drafts only"],
    correctAnswer: 2
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Introduction to Banking in India",
  professor: "ANIL AGGARWAL",
  date: "8th May",
  startTime: "12.30 PM",
  totalQuestions: 20,
  totalMarks: 80,
  marksPerQuestion: 4,
  timeLimit: 20,
  isStructure2: false,
  rules: [
    "Read each question carefully before answering",
    "Each question carries 4 marks",
    "Total time allowed: 20 minutes",
    "Only one submission per roll number allowed",
    "Click 'Submit Quiz' to finish or quiz will auto-submit when time expires"
  ]
};
