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
    question: "You are posted at ICICI Bank, Surat. A textile trader seeks CC limit enhancement from ₹18 lakh to ₹30 lakh. Observations: GST turnover increased 22%, Bank credits improved, but debtor cycle increased from 48 to 81 days. What is the MOST important concern?",
    options: [
      "Profit margin dilution due to GST mismatch",
      "Liquidity stress despite sales growth",
      "Insufficient collateral coverage ratio",
      "Reduction in CASA profitability"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "A borrower in Assam earns ₹1,500 weekly surplus after household expenses. MFI policy allows maximum 55% utilization toward EMI. What is the MOST prudent weekly repayment capacity?",
    options: ["₹600", "₹700", "₹825", "₹1,050"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "You visit an SHG financed earlier by Axis Bank. Positive: 100% repayment, good attendance, active dairy business. Concern: Group leader's husband handles all cash collections personally. What is the MOST appropriate banking approach?",
    options: [
      "Reject enhancement due to governance concentration risk",
      "Ignore issue because repayment is regular",
      "Increase loan because repayment track is strong",
      "Conduct member-level interaction before enhancement"
    ],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "A salaried customer says: \"HDFC Bank approved my personal loan digitally within 15 minutes.\" Your PSU bank branch lost the case mainly because of:",
    options: [
      "Higher CRR obligations",
      "Slower credit processing experience",
      "Lower treasury income",
      "Weak SLR portfolio"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "A vegetable wholesaler generates daily average net surplus = ₹2,400. Weekly market closed = 1 day. Maximum safe repayment allocation policy = 50%. What is the MOST suitable weekly repayment capacity?",
    options: ["₹6,000", "₹7,200", "₹8,400", "₹9,600"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "A borrower has SHG loan, Gold loan, Consumer durable EMI, and existing MFI loan. Still requests fresh dairy loan. What is the MOST critical banking assessment?",
    options: [
      "Branch CASA opportunity",
      "Combined household repayment obligation",
      "Insurance penetration ratio",
      "Treasury profitability impact"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "During field visit, machinery financed under MSME loan is absent from business premises. Borrower says: \"Machine is temporarily shifted.\" What should be your FIRST action?",
    options: [
      "Classify account immediately as fraud",
      "Ignore because EMI is regular",
      "Verify asset existence independently",
      "Enhance collateral margin"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "A borrower prefers Shriram Finance over bank vehicle finance. MOST likely reason?",
    options: [
      "Lower statutory liquidity requirement",
      "Faster asset-focused underwriting",
      "RBI refinance support",
      "Lower branch operating cost"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "An MFI branch reports excellent disbursement growth but rising bounce cases after 90 days. MOST likely root cause?",
    options: [
      "Strong liquidity coverage ratio",
      "Excessive borrower acquisition without repayment assessment",
      "Improved collection efficiency",
      "Reduction in rural credit demand"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "A tailoring unit borrower needs ₹24,000 loan. Expected monthly surplus: ₹2,000. Bank policy: Maximum 60% surplus for EMI. What is the MOST suitable EMI range?",
    options: ["₹700–₹900", "₹1,100–₹1,300", "₹1,800–₹2,000", "₹2,200–₹2,400"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Branch manager says: \"We must close ₹2 crore MSME book before quarter end.\" Which behavior creates the BIGGEST future risk?",
    options: [
      "Faster field verification",
      "Relaxed income assessment under pressure",
      "Better borrower segmentation",
      "Improved customer outreach"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "A customer with heavy UPI activity wants ₹5 lakh overdraft from Airtel Payments Bank. Correct field understanding?",
    options: [
      "Payment Banks can lend through PSL route",
      "Payment Banks can provide overdraft against QR turnover",
      "Payment Banks cannot directly undertake lending",
      "Payment Banks can finance through treasury operations"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "An MSME borrower shows strong turnover, high bank credits, but irregular GST filing. What is the MOST likely interpretation?",
    options: [
      "Healthy operational discipline",
      "Potential compliance and cash flow inconsistency risk",
      "Strong collateral security position",
      "Better treasury utilization"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "An SHG has average annual savings = ₹1.2 lakh, excellent repayment history, completed first cycle successfully. As per practical SHG multiplier approach, second cycle eligibility may approximately reach:",
    options: ["₹1.5–₹2 lakh", "₹3–₹4 lakh", "₹7–₹9 lakh", "₹12–₹15 lakh"],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "You are a new banker in a district where NBFCs sanction faster, Fintechs onboard digitally, MFIs provide doorstep service, and PSU banks dominate trust. What is the MOST sustainable long-term banking strategy?",
    options: [
      "Compete only through lower interest rates",
      "Focus only on compliance and documentation",
      "Aggressive disbursement without detailed assessment",
      "Combine digital speed with disciplined underwriting"
    ],
    correctAnswer: 3
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Introduction to Banking in India",
  professor: "ANIL AGGARWAL",
  date: "15th May",
  totalQuestions: 15,
  totalMarks: 60,
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
