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
    question: "EPC Escrow Comfort Trap — Party: KNR-linked subcontractor Shivam Infra Projects Pvt Ltd. The borrower insists all receivables will come through escrow. However, subcontractor payments to labour and diesel vendors are mostly cash-intensive and outside escrow visibility. What should disturb a senior credit officer most?",
    options: [
      "Escrow may improve visibility but not necessarily liquidity discipline",
      "Cash vendor payments are common in EPC sector",
      "Government-linked contracts reduce diversion risk",
      "Escrow structure itself sufficiently mitigates monitoring concerns"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Pharma Distribution Illusion — Party: Zenith Lifecare Distributors Pvt Ltd. GST turnover increased 32%. Bank credits increased only 8%. Borrower says \"hospital chains now take longer to settle.\" Which interpretation is most mature?",
    options: [
      "GST data is usually more reliable than bank turnover",
      "Debtor stretch alone explains mismatch",
      "Sales growth may not be translating into real cash generation",
      "Healthcare sector cycles have generally elongated recently"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "PSI Comfort Bias — Party: Shree Balaji Steels Pvt Ltd. Factory fully operational during PSI. Workers active. Machines running. However: electricity consumption flat for 6 months, e-way bills inconsistent, finished goods dispatches lower than projected sales. What is the deeper risk?",
    options: [
      "Temporary dispatch slowdown",
      "Inflated turnover possibility despite operational appearance",
      "Electricity billing anomaly",
      "Seasonal inventory accumulation"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Long Relationship Bias — Party: Vardhman Auto Components Pvt Ltd. Banking relationship 14 years. No historical default. Now: CC utilisation 99% continuously, promoter drawing increased, statutory dues delayed twice. What is the most dangerous mistake?",
    options: [
      "Treating the issue as temporary because past conduct was clean",
      "Escalating account for SMA monitoring",
      "Seeking updated cash-flow projections",
      "Reducing ad-hoc exposure immediately"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Machinery Valuation Comfort — Party: Omkar Engineering Pvt Ltd. Plant valuation ₹11 Cr by empanelled valuer. However: imported line not yet commissioned, no operator training completed, promoter margin still partly unpaid. What should concern the officer most?",
    options: [
      "Valuation may still be technically valid",
      "Delayed commissioning is common",
      "Asset value may not equal operational cash-generation capability",
      "Margin infusion timing can be regularised later"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Consortium Silence Risk — Party: Galaxy Electronics Pvt Ltd. Lead bank has not raised concerns. Your branch notices: receivable ageing worsening, stock audit delayed, frequent TOD requests. Most prudent thought process?",
    options: [
      "Follow lead bank comfort unless account slips",
      "Independent risk assessment remains necessary despite consortium comfort",
      "Delay action until next consortium meeting",
      "Minor operational gaps are expected in multiple banking"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Export Growth Excitement — Party: Raj Overseas Exports Pvt Ltd. New US orders doubled revenue projections. However: margins dropped sharply, freight volatility rising, receivables now 120+ days. Which is the sharpest underwriting insight?",
    options: [
      "Export diversification offsets some risk",
      "Higher turnover improves repayment comfort",
      "Growth may actually weaken liquidity position",
      "ECGC cover sufficiently reduces concern"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Audit Objection Waiting to Happen — Party: Ganesh Agro Industries Ltd. Ad-hoc limits renewed repeatedly for 11 months. Account remains standard. What is the real risk?",
    options: [
      "Temporary support may still be commercially justified",
      "Standard asset status reduces audit concern",
      "Interest servicing validates bank comfort",
      "Structural working-capital mismatch is being informally funded"
    ],
    correctAnswer: 3
  },
  {
    id: 9,
    question: "Hidden Diversion Pattern — Party: Medisphere Healthcare Pvt Ltd. Sales increasing. Stock stable. GST regular. But: promoter purchased commercial property personally, unsecured loans to related entity increased, CC utilisation remains near maximum. Most important inference?",
    options: [
      "Promoter wealth creation normal in growth phase",
      "Business expansion often requires group support",
      "Possible leakage of operating liquidity outside business",
      "Property acquisition unrelated to banking risk"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Customer Selection Trap — Party: Suryodaya EV Components Pvt Ltd. Strong projections, impressive presentation, reputed consultant report. But promoters have: no manufacturing history, limited technical depth, aggressive leverage assumptions. Most mature underwriting reaction?",
    options: [
      "Strong sector tailwinds justify calculated risk",
      "Consultant validation improves confidence materially",
      "Collateral enhancement can offset execution risk",
      "Business model attractiveness should not replace promoter capability assessment"
    ],
    correctAnswer: 3
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Introduction to Banking in India",
  professor: "ANIL AGGARWAL",
  date: "18th May",
  totalQuestions: 10,
  totalMarks: 40,
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
