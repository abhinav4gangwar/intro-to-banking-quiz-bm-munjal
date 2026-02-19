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
    question: "SBI issues a performance BG for Larsen & Toubro in favour of Dubai Electricity Authority. Demand states: \"Contractor has not met performance expectations.\" Guarantee wording: \"Failure to perform contractual obligations.\" Applicant insists wording mismatch. Your approach?",
    options: [
      "Reject due to wording difference",
      "Honour immediately",
      "Examine whether wording conveys same default",
      "Seek applicant written consent"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Infosys India SBLC under ISP98 issued to US telecom client. Demand signed by Acting CFO with board resolution attached. Credit specifies CFO signature. Decision?",
    options: [
      "Reject strictly",
      "Honour automatically",
      "Verify authority before decision",
      "Seek applicant waiver"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Performance BG issued for GMR Infrastructure Middle East project. Beneficiary sends invocation 2 days before expiry requesting: \"Extend or pay.\" Applicant financially stressed. Bank priority?",
    options: [
      "Immediate honour",
      "Negotiate extension first",
      "Reject invocation",
      "Wait for court order"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "SBLC issued for Reliance Industries export payment assurance. Demand emailed from domain differing by one character from beneficiary domain. Best immediate action?",
    options: [
      "Honour quickly to avoid dispute",
      "Reject automatically",
      "Authenticate demand source",
      "Ask applicant only"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "BG for Tata Projects Oman EPC contract requires: \"Proof of unsatisfactory performance.\" No document defined. Demand simply states non-performance. Bank stance?",
    options: [
      "Reject lack of proof",
      "Honour if demand wording sufficient",
      "Ask for project reports",
      "Delay decision"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Counter-guarantee issued by SBI for ONGC overseas project. Foreign bank invokes despite applicant dispute. Bank obligation?",
    options: [
      "Check project dispute first",
      "Honour counter-guarantee independently",
      "Delay payment",
      "Seek applicant consent"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Multiple small BG invocations seen for Adani Ports subcontractor guarantees over 6 months. Manager interpretation?",
    options: [
      "Routine operational issue",
      "Early warning credit stress signal",
      "Documentation lapse",
      "Ignore pattern"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "LC issued for overseas borrowing by Mahindra & Mahindra. Beneficiary demands payment citing loan covenant breach. SBLC wording: \"Failure to pay financial obligation.\" Decision?",
    options: [
      "Honour if wording aligns",
      "Reject because covenant breach differs",
      "Seek borrower clarification",
      "Delay payment"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "BG expiry date unclear (date only, no time). Invocation received late evening on expiry date. Manager safest interpretation?",
    options: [
      "Reject late hour",
      "Accept same-day presentation",
      "Delay decision",
      "Seek applicant waiver"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "SBLC issued for Dr Reddy's pharma supply contract. Demand accompanied by additional documents not required. Manager approach?",
    options: [
      "Reject extra documents",
      "Ignore additional documents, check required ones",
      "Delay decision",
      "Seek amendment"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "A BG is issued by SBI for Tata Projects Ltd without margin because the borrower was strong. Six months later, rating drops sharply and limits are tight. What is the immediate risk?",
    options: [
      "Documentation issue",
      "Potential funded exposure spike",
      "Legal dispute only",
      "Operational delay"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "An ISP98 SBLC for Infosys Ltd expires on 30 June. Beneficiary dispatches demand by courier on 29 June, but SBI receives it on 1 July. What drives the decision?",
    options: [
      "Dispatch date",
      "Receipt date per credit",
      "Applicant consent",
      "Beneficiary explanation"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "A URDG BG issued for L&T is in favour of Kenya Roads Authority. Beneficiary \"assigns\" the BG to a subcontractor. BG is silent on transfer. SBI should:",
    options: [
      "Accept transfer",
      "Reject assignment",
      "Honour demand anyway",
      "Amend automatically"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "ISP98 SBLC issued for Reliance Industries payment assurance. Beneficiary demands payment citing \"market price collapse risk.\" SBLC trigger is \"failure to pay.\" Manager response?",
    options: [
      "Honour demand",
      "Reject non-trigger event",
      "Delay payment",
      "Seek applicant waiver"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "A URDG invocation is received under a country with active sanctions screening risk. Best immediate step?",
    options: [
      "Honour automatically",
      "Reject outright",
      "Compliance screening before action",
      "Seek applicant advice"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "SBI issues an amendment to an ISP98 SBLC reducing amount. Beneficiary later claims they never received it and presents demand for original amount. Best manager approach?",
    options: [
      "Assume received",
      "Confirm receipt before relying",
      "Ignore issue",
      "Honour demand anyway"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "A URDG performance BG for GMR Infrastructure is repeatedly extended because project timelines keep slipping. What should worry a senior manager most?",
    options: [
      "Routine extension",
      "Long-tail contingent exposure risk",
      "Documentation issue",
      "Ignore trend"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Under ISP98 SBLC, demand is commercially fair but documentary statement is ambiguous. What should dominate the decision?",
    options: [
      "Commercial fairness",
      "Documentary compliance",
      "Applicant relationship",
      "Market practice"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "SBI issues counter-guarantee to a foreign bank for ONGC project BG. Counter-guarantee wording is weaker than the primary BG. Biggest risk?",
    options: [
      "None",
      "Interbank dispute risk",
      "Applicant dispute only",
      "Documentation issue"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "After URDG BG invocation, applicant requests SBI to take a \"friendly interpretation\" to protect relationship. Best stance?",
    options: [
      "Accommodate relationship",
      "Stick to guarantee wording strictly",
      "Delay decision",
      "Seek arbitration"
    ],
    correctAnswer: 1
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "SBLC & Bank Guarantee Decision Making",
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
