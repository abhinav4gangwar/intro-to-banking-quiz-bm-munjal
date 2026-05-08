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
    question: "You are working in Axis Bank. A furniture dealer says: \"Bajaj Finance is sanctioning my machinery loan in 2 days. Your bank is taking 10 days.\" What is the BEST response as a field officer?",
    options: [
      "NBFCs do not follow RBI rules.",
      "We cannot process faster.",
      "We ensure proper assessment and safer long-term banking support.",
      "Take loan from NBFC only."
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "A farmer in Karnal needs urgent crop finance before sowing season. Which institution is MOST likely to process quickly due to rural presence?",
    options: ["RRB", "Foreign Bank", "Investment Bank", "Urban Co-operative Bank"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "A customer asks why banks insist on KYC even for small MSME loans. What is the BEST explanation?",
    options: [
      "To delay loan sanction",
      "To increase bank paperwork",
      "To reduce branch workload",
      "To comply with regulations and prevent fraud"
    ],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "A branch is struggling to meet Priority Sector targets. Which customer should the field officer focus on FIRST?",
    options: [
      "Luxury mall developer",
      "Small garment manufacturer",
      "Imported car dealer",
      "Large IT park company"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "A customer says: \"NBFC people came to my shop directly. Your bank only calls me to branch.\" What is the BEST practical solution?",
    options: [
      "Stop MSME lending",
      "Increase interest rate",
      "Improve field visits and doorstep banking",
      "Avoid small borrowers"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "While visiting a village, you find three farmers already financed by different banks for the same crop activity. This situation reflects:",
    options: ["CASA mobilization", "Over financing risk", "Treasury mismatch", "Foreign exchange exposure"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "A branch manager wants faster MSME sanctions without increasing NPAs. Which is the MOST practical approach?",
    options: [
      "Stop documentation",
      "Sanction without verification",
      "Reject all MSME proposals",
      "Use GST and bank statement analytics"
    ],
    correctAnswer: 3
  },
  {
    id: 8,
    question: "A customer says: \"Local Area Bank approved my dairy loan in 2 days.\" Why are LABs sometimes faster?",
    options: [
      "Smaller local operations and better local understanding",
      "They are exempt from regulations",
      "They finance only large corporates",
      "They do not verify customers"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "An MSME customer asks SIDBI support for technology upgradation. Which SIDBI role matches this requirement?",
    options: ["Currency issuance", "Cluster development", "Crop insurance", "Foreign remittance"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "A branch officer notices customers shifting to digital lenders. What is the BIGGEST reason?",
    options: [
      "Better branch interiors",
      "Faster onboarding and approvals",
      "Higher paperwork",
      "Lower customer expectations"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "A borrower's cheque issued to the bank gets dishonoured. Which law becomes relevant?",
    options: ["FEMA", "Banking Regulation Act", "Negotiable Instruments Act", "Companies Act"],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "A field officer wants to increase agri business in villages. Which institution mainly supports refinance for rural lending?",
    options: ["NABARD", "SEBI", "IRDAI", "EXIM Bank"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "A branch suddenly faces phishing complaints from multiple customers. Which department should coordinate FIRST?",
    options: [
      "Marketing Department",
      "Treasury Department",
      "Fraud Control and IT Department",
      "Accounts Department"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "A customer says: \"NBFC approved my truck loan though bank rejected it.\" This mainly shows that NBFCs:",
    options: [
      "Avoid rural markets",
      "Focus on specialized asset financing",
      "Accept unlimited deposits",
      "Work as payment banks"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "A bank officer is under pressure to improve CASA deposits. Which strategy is MOST practical?",
    options: [
      "Ignore small customers",
      "Focus only on corporate loans",
      "Increase rural and salary account acquisition",
      "Stop digital banking promotion"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "During RBI inspection, branch staff cannot produce proper loan documents. What is the BIGGEST risk?",
    options: [
      "Faster business growth",
      "Loan recovery and compliance issues",
      "Increase in CASA",
      "Better customer satisfaction"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "A rural borrower says: \"I need crop insurance along with KCC.\" Which banking approach is MOST suitable?",
    options: [
      "Pure treasury solution",
      "Investment banking",
      "Retail gold trading",
      "Integrated rural banking support"
    ],
    correctAnswer: 3
  },
  {
    id: 18,
    question: "A branch wants to improve PSL achievement quickly. Which portfolio helps directly?",
    options: [
      "Luxury villa financing",
      "Renewable energy and MSME loans",
      "Imported machinery for MNCs",
      "High-end foreign travel loans"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "A customer compares bank and NBFC interest rates and still chooses bank finance. What is the MOST likely reason?",
    options: [
      "Trust and long-term relationship",
      "Banks avoid regulations",
      "Banks never verify documents",
      "Banks approve every proposal instantly"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "You are a field officer in a competitive market. What is the BEST long-term strategy to survive against fintechs and NBFCs?",
    options: [
      "Avoid technology adoption",
      "Focus only on large corporates",
      "Delay customer responses",
      "Balance speed, compliance, and customer service"
    ],
    correctAnswer: 3
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Introduction to Banking in India",
  professor: "ANIL AGGARWAL",
  date: "9th May",
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
