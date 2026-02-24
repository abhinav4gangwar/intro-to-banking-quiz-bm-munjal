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
    question: "M/s Orion Metals\n\nStock rises 80%, creditors rise proportionately, GST inward matches purchases, but power consumption drops 35%. What is your first action?",
    options: [
      "Reduce DP immediately",
      "Order stock audit immediately",
      "Verify production capacity utilisation",
      "Freeze LC limits"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "M/s Zenith Polymers\n\nDebtors under 90 days = ₹8 cr. But 60% belong to 3 newly onboarded customers. No past payment history. What is your DP stance?",
    options: [
      "Fully eligible",
      "Exclude new customers",
      "Allow 50% with caution",
      "Seek debtor confirmation before eligibility"
    ],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "M/s Arjun Engineering\n\nLC ₹4 cr due next month. Cash realisation expected ₹4.5 cr. But ₹2 cr debtor is under dispute. Your risk assessment?",
    options: [
      "LC safe",
      "LC partially stressed",
      "LC high risk of devolvement",
      "No impact unless >90 days"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "M/s Silver Agro\n\nStock in transit ₹3 cr shown. E-way bills valid. But insurance policy does not cover SIT. Eligible for DP?",
    options: [
      "Fully eligible",
      "Eligible after 10% haircut",
      "Ineligible",
      "Eligible if LC backed"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "M/s Vortex Cables\n\nRepeated month-end large RTGS credits reversed in 3 days. Narration: \"Advance adjustment.\" Interpretation?",
    options: [
      "Working capital rotation",
      "Temporary accommodation entry",
      "Customer refund cycle",
      "Inter-branch funding"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "M/s Nova Chemicals\n\nCreditors ₹6 cr; stock ₹6.5 cr. GST inward ₹1.2 cr for month. What concerns you most?",
    options: [
      "Low stock turnover",
      "Creditor–GST mismatch",
      "Power usage anomaly",
      "Pricing volatility"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "M/s Apex Components\n\nTerm loan disbursed 60%. Project progress 30%. Borrower seeks next tranche. Your decision?",
    options: [
      "Disburse to avoid delay",
      "Part disburse against CA certificate",
      "Hold till physical verification",
      "Convert to CC"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "M/s Crest Textiles\n\nFinished goods stable 6 months despite rising sales. Inference?",
    options: [
      "High turnover",
      "Sales booked before dispatch",
      "Efficient logistics",
      "Conservative valuation"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "M/s Delta Pipes\n\nDP computed ₹12 cr. CC utilisation ₹15 cr for 3 days before stock submission. Interpretation?",
    options: [
      "Seasonal spike",
      "System glitch",
      "Window dressing reversed",
      "Temporary excess allowed"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "M/s Elite Motors\n\nUsance LC rollovers for 4 cycles. Sales stagnant. Your key risk?",
    options: [
      "Margin erosion",
      "Inventory risk",
      "Rollover chain",
      "Insurance lapse"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "M/s Falcon Alloys\n\nStock audit finds 20% obsolete. Borrower disputes valuation. Immediate action?",
    options: [
      "Accept borrower valuation",
      "Apply haircut in DP",
      "Wait for next audit",
      "Seek forensic review"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "M/s Genesis Foods\n\nInsurance ₹4 cr; stock ₹8 cr; collateral adequate. DP stance?",
    options: [
      "Full DP",
      "DP restricted to insured value",
      "DP 75% of 8 cr",
      "Allow temporarily"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "M/s Horizon Steel\n\nSupplier confirms ₹20 lakh balance; books show ₹2 cr. Implication?",
    options: [
      "Timing difference",
      "Accounting error",
      "Bogus creditor",
      "LC misclassification"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "M/s Insight Plastics\n\nGST outward ₹3 cr; bank credits ₹1 cr; debtors stable. Your conclusion?",
    options: [
      "Cash sales high",
      "Routing outside bank",
      "Payment delays",
      "Seasonality"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "M/s Jupiter Auto\n\nLC due ₹5 cr. Sensitivity shows debtor stretch +15 days = cash gap ₹1.2 cr. Your action?",
    options: [
      "Increase CC",
      "Allow rollover",
      "Seek margin infusion",
      "Ignore minor gap"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "M/s Keystone Infra\n\nWIP ₹7 cr; no BOM, no stage record. DP treatment?",
    options: [
      "Fully eligible",
      "50% eligible",
      "Exclude entirely",
      "Include after CA certificate"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "M/s Lotus Exports\n\nExport receivable ₹4 cr; no BRC yet; 75 days passed. Eligible?",
    options: [
      "Yes",
      "No",
      "Yes if insured",
      "Yes if LC backed"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "M/s Metro Engineering\n\nInspection finds 2 machines idle; sales rising sharply. Concern?",
    options: [
      "Automation",
      "Outsourcing",
      "Inflated sales",
      "Energy saving"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "M/s Nimbus Pharma\n\nLarge cash withdrawals for \"supplier settlement.\" No supplier ledger reduction. Inference?",
    options: [
      "Informal procurement",
      "Fraud risk",
      "Pricing arbitrage",
      "Vendor credit terms"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "M/s Orion Traders\n\nLC limit available ₹3 cr; old LC devolved ₹2 cr. Borrower seeks new LC ₹2 cr. Your prudent view?",
    options: [
      "Approve to support business",
      "Approve with margin",
      "Reject till devolved cleared",
      "Convert to TL"
    ],
    correctAnswer: 2
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Post Sanction Credit Monitoring",
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
