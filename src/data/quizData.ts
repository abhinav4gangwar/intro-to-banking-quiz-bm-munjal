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
    question: "A borrower took home loan. For 2 months, EMI is paid. Suddenly, he requests 6-month moratorium saying: \"Buyer of my land backed out.\" Best decision?",
    options: [
      "Allow moratorium because borrower has collateral",
      "Allow only if salary/rent cashflow is verified",
      "Allow because EMI was regular earlier",
      "Reject and classify as NPA immediately"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "SME borrower says: \"Most sales are cash, so deposits won't show.\" Best credit approach?",
    options: [
      "Reject because no routing",
      "Approve full based on turnover certificate",
      "Approve smaller + condition on deposit behavior + step-up",
      "Approve full if collateral is 2x"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Importer's documents are clean. But the same overseas supplier appears in multiple borrowers in your district. Best risk lens?",
    options: [
      "Ignore because documents are fine",
      "Treat as ecosystem risk; do deeper invoice + shipment checks",
      "Reject all LCs",
      "Approve but increase margin money"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Borrower wants takeover. He says: \"Your bank is fast, disburse first.\" Best decision?",
    options: [
      "Disburse to win customer",
      "Sanction but disburse only after charge release",
      "Reject takeover completely",
      "Disburse and ask for documents later"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "You can meet target by sanctioning one big loan or 10 smaller secured loans. What is most prudent?",
    options: [
      "Big loan saves time",
      "Smaller secured loans reduce concentration risk",
      "Big loan is better if collateral is high",
      "Either is fine"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Borrower pays OD interest on time, but principal reduction is not happening and stock is falling. Best view?",
    options: [
      "Account is healthy",
      "Account is stressed but hidden",
      "No issue until overdue",
      "Increase limit to support business"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "CIC report is clean, but borrower delays supplier payments and suppliers call the branch. Best interpretation?",
    options: [
      "Supplier is trying to disturb relationship",
      "Informal debt / liquidity stress exists",
      "Borrower is expanding fast",
      "Supplier is lying"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Builder offers property worth NPR 12 Cr for a NPR 4 Cr loan. Repayment depends on unit sales. Market is slow. Best decision?",
    options: [
      "Approve because collateral is 3x",
      "Approve but reduce rate to help sales",
      "Approve only if clear cashflow (rent/other income) supports EMI",
      "Approve because builder is known"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "A factory offers salary accounts for 250 staff if you approve a working capital limit. Best senior decision?",
    options: [
      "Approve full limit to win salary business",
      "Approve based on credit quality + use salary as additional comfort",
      "Reject because it's cross-selling pressure",
      "Approve quickly and monitor later"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Branch sees remittance credits reducing for 3 months (Gulf slowdown trend). How should branch adjust growth plan?",
    options: [
      "Increase unsecured loans to meet target",
      "Increase secured SME + salary + granular loans",
      "Focus only on real estate",
      "Stop lending"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Trader wants OD NPR 1.2 Cr. Your analysis supports NPR 70 lakh. Best decision?",
    options: [
      "Approve 1.2 to retain client",
      "Approve 70 lakh with step-up after routing improves",
      "Reject",
      "Approve 1.2 but take more collateral"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Borrower agrees verbally to route sales after sanction but refuses written covenant. Best decision?",
    options: [
      "Approve because borrower is cooperative",
      "Approve but keep strong collateral",
      "Do not approve until measurable commitment is documented",
      "Approve and monitor"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "LAP borrower starts paying late but still within grace period. He says: \"Business is seasonal.\" Best action?",
    options: [
      "Ignore because not overdue",
      "Trigger EWS: visit + cashflow check + early correction",
      "Send legal notice",
      "Give top-up loan"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Branch has only 1 credit officer. HO pushes 12 new SME files. Best approach?",
    options: [
      "Process all quickly",
      "Prioritize 3 best files with clean routing and reject rest",
      "Prioritize top 4 files + stagger disbursal + set controls",
      "Stop SME lending"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Borrower is stressed and asks for top-up: \"If you give more, I will recover.\" Best decision?",
    options: [
      "Give top-up to protect existing exposure",
      "Give top-up only after promoter brings margin + clear plan",
      "Reject always",
      "Give top-up if collateral is enough"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Borrower is 60 DPD but is a high-fee trade customer. Best approach?",
    options: [
      "Give more time because of fee income",
      "Separate credit discipline from fee business; recover with plan",
      "Stop all trade business immediately",
      "Ignore until 90 DPD"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "What is the most useful \"simulation\" for a branch head?",
    options: [
      "Monte Carlo model",
      "If sales fall 20%, can borrower still pay EMI?",
      "GDP forecast model",
      "Basel capital formula"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Borrower gives VAT returns showing growth, but bank statement shows flat deposits. Best action?",
    options: [
      "Trust VAT because it is official",
      "Trust bank statement only",
      "Cross-check: purchases, supplier confirmation, inventory, routing",
      "Approve because collateral is good"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "In the next 30 days, what credit strategy is most realistic and safe?",
    options: [
      "One large builder loan",
      "Bulk small secured loans + renewals + salary tie-ups",
      "Aggressive unsecured micro business",
      "Only takeovers"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which statement is most correct?",
    options: [
      "\"Growth is sanctioning.\"",
      "\"Collateral is everything.\"",
      "\"Growth must be measurable, monitorable, and cashflow-backed.\"",
      "\"Recovery is HO's job.\""
    ],
    correctAnswer: 2
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "High Impact Decision Making",
  professor: "ANIL AGGARWAL",
  totalQuestions: 20,
  totalMarks: 80,
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
