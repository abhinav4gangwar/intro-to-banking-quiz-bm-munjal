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
    question: "\"Inventory levels increased 35% in last 6 months, but sales growth only 12%. Borrower explains it as 'strategic stocking due to raw material price volatility.'\"\n\nWhich question should a credit manager ideally ask next?",
    options: [
      "\"Is additional storage space being leased?\"",
      "\"How is inventory ageing trending, and what proportion is slow-moving?\"",
      "\"Can you provide updated stock insurance copies?\"",
      "\"Are suppliers offering extended credit terms?\""
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "\"Turnover up 22%, but gross margins reduced from 18% to 13%. Borrower says 'competitive pricing to capture market share.'\"\n\nWhich question should be asked next?",
    options: [
      "\"Is this margin compression temporary or structural in nature?\"",
      "\"Have fixed costs reduced proportionately?\"",
      "\"Are promoters comfortable with lower profitability?\"",
      "\"Can collateral cover be enhanced?\""
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "\"Top two customers now contribute 48% of total receivables. Earlier it was 28%.\"\n\nWhat should you ask next?",
    options: [
      "\"Are these customers investment-grade entities?\"",
      "\"What are the credit terms negotiated with these two customers?\"",
      "\"Is ECGC or credit insurance available?\"",
      "\"What happens to liquidity if either of these customers delays payment by 30 days?\""
    ],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "\"Significant sales (18%) routed through a group entity.\"\n\nWhat question should follow?",
    options: [
      "\"Are these transactions at arm's length pricing?\"",
      "\"Is GST being paid correctly?\"",
      "\"What is the payment cycle from this related entity versus third parties?\"",
      "\"Is there board approval for related transactions?\""
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "\"CC utilisation remains 98–100% for 8 months; account technically standard.\"\n\nWhich question should be asked?",
    options: [
      "\"Is drawing power calculation correct?\"",
      "\"Has promoter infusion been reduced?\"",
      "\"What is the buffer available if receivables delay by 15–20 days?\"",
      "\"Are stock statements submitted on time?\""
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "\"Promoter infused ₹3 Cr unsecured loan before renewal discussion.\"\n\nBest next question?",
    options: [
      "\"Is this infusion permanent or expected to be withdrawn?\"",
      "\"Was this infusion funded by another borrowing?\"",
      "\"Is the loan subordinated contractually?\"",
      "\"Was this required by previous sanction condition?\""
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "\"Borrower cites strong sector growth and new policy tailwinds.\"\n\nWhich question should you ask?",
    options: [
      "\"How is your company positioned relative to peers?\"",
      "\"What was last year's growth rate?\"",
      "\"Are competitors also expanding capacity?\"",
      "\"How has this sector growth translated into actual order execution and collections so far?\""
    ],
    correctAnswer: 3
  },
  {
    id: 8,
    question: "\"One operational account not disclosed initially; low average balance.\"\n\nNext best question?",
    options: [
      "\"Why was this not disclosed earlier?\"",
      "\"What inflows and outflows pass through this account?\"",
      "\"Is this linked to specific customers?\"",
      "\"Can this account be closed?\""
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "\"EBITDA stable, but PAT fluctuates due to interest and other expenses.\"\n\nBest next question?",
    options: [
      "\"Are interest costs rising?\"",
      "\"What is the break-even sales level?\"",
      "\"How sensitive is profitability to interest rate increase of 1–2%?\"",
      "\"Are depreciation methods consistent?\""
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "\"Borrower highlights confirmed order book ₹85 Cr, but past 2 years execution achieved only 60% of projected orders.\"\n\nWhich question should be asked next?",
    options: [
      "\"Are these orders firm or indicative?\"",
      "\"What is execution capacity versus committed order size?\"",
      "\"Is there mobilisation advance?\"",
      "\"Are orders backed by performance guarantees?\""
    ],
    correctAnswer: 1
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Credit Assessment & Working Capital",
  professor: "ANIL AGGARWAL",
  totalQuestions: 10,
  totalMarks: 40,
  marksPerQuestion: 4,
  timeLimit: 40,
  isStructure2: false,
  rules: [
    "Read each question carefully before answering",
    "Each question carries 4 marks",
    "Total time allowed: 40 minutes",
    "Only one submission per roll number allowed",
    "Click 'Submit Quiz' to finish or quiz will auto-submit when time expires"
  ]
};
