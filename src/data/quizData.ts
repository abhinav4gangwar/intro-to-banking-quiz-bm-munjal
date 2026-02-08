export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "A mobile banking vendor asks for permanent production admin access \"for faster support.\" What is the best response?",
    options: [
      "Approve, but ask them not to misuse",
      "Approve only during business hours",
      "Provide access via PAM with time-bound approvals + session recording",
      "Deny access completely forever"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Customers report \"money debited but beneficiary not credited.\" CBS shows debit posted. What is the most likely issue area?",
    options: [
      "CBS interest module",
      "Digital Banking Platform / Payment switch reconciliation",
      "Branch teller system",
      "CRM"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "A customer logs in from a new device at 2 AM and tries to transfer a large amount. What control is most appropriate?",
    options: [
      "Allow if password is correct",
      "Block the customer permanently",
      "Step-up authentication + FRM rule trigger",
      "Only send SMS alert after transfer"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "A bank shows third-party insurance offers inside its app. Customer complains of mis-selling. What evidence protects the bank best?",
    options: [
      "Fintech agreement copy",
      "Consent logs + disclosure screen records + opt-in timestamp",
      "Customer phone recording",
      "Vendor's email confirmation"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "MTTD increasing month-on-month indicates:",
    options: [
      "Bank is detecting incidents faster",
      "Bank is detecting incidents slower",
      "Bank has fewer incidents",
      "Bank has better DR"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "MTTR is high even though incidents are low. This usually means:",
    options: [
      "Bank has strong cybersecurity",
      "Bank has slow recovery capability",
      "Bank has too many vendors",
      "Bank has good change management"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "API traffic suddenly spikes 50× and payment switch begins to slow. Best control is:",
    options: [
      "Increase limits immediately",
      "Circuit breaker + rate limiting",
      "Disable OTP",
      "Ask customers to retry later"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Cooling period is most useful when:",
    options: [
      "Customer changes mobile number",
      "Customer adds a new beneficiary",
      "Customer checks balance",
      "Customer downloads statement"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Velocity limits are designed to stop:",
    options: [
      "Core banking interest calculation errors",
      "Too many transfers/attempts in short time (bot/fraud behavior)",
      "Deposit growth slowdown",
      "Treasury MTM losses"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which is the clearest example of poor Segregation of Duties (SoD)?",
    options: [
      "RM and branch manager both meet customer",
      "Same person develops code and deploys to production",
      "Teller handles cash deposits",
      "CFO approves budgets"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Which is most accurate about CBS vs DBP?",
    options: [
      "CBS is customer experience layer",
      "DBP is accounting system",
      "CBS posts transactions, DBP manages digital journeys and controls",
      "DBP is only a mobile app"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Biggest regulatory worry with CSPs is:",
    options: [
      "Cloud is cheaper",
      "Cloud has no storage",
      "Concentration risk + third-party dependency",
      "Cloud cannot run APIs"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "RTO = 2 hours, RPO = 15 minutes means:",
    options: [
      "Bank can lose 2 hours of data",
      "Bank must restore within 2 hours and lose max 15 minutes of data",
      "Bank must restore within 15 minutes and lose 2 hours of data",
      "Bank has no DR"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "An RM pastes customer statement into a free AI tool. Biggest risk is:",
    options: [
      "AI will make grammar mistakes",
      "Customer data leakage + compliance breach",
      "CBS will crash",
      "Treasury loss"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "A new release causes login failures. The most likely missing discipline is:",
    options: [
      "Treasury reconciliation",
      "Staging/UAT + canary release + rollback readiness",
      "Branch cash controls",
      "CRM segmentation"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Compliance team gets 20,000 AML alerts/month and misses true cases. Best improvement is:",
    options: [
      "Generate more alerts",
      "Risk-based alert tuning + case management workflow",
      "Stop monitoring",
      "Increase branch targets"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "A bank's app downtime is always blamed on vendor. The best senior manager KPI is:",
    options: [
      "Vendor name in incident report",
      "SLA penalties only",
      "Change failure rate + MTTR + root cause closure",
      "Number of WhatsApp escalations"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "If the bank learns about outages mainly from customer calls, it indicates:",
    options: [
      "Strong SOC",
      "Strong SIEM",
      "Weak monitoring (no SOC/SIEM)",
      "Excellent ITSM"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "A fintech partner needs \"full customer profile API.\" Best approach is:",
    options: [
      "Give full access for faster integration",
      "Give minimum required data only + consent + purpose limitation",
      "Give access but ask for NDA",
      "Deny all fintech partnerships"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Customer says: \"I never approved this transfer.\" What evidence is strongest?",
    options: [
      "Teller statement",
      "Customer relationship history",
      "Device binding + OTP logs + consent logs + transaction reference trail",
      "Bank CEO assurance"
    ],
    correctAnswer: 2
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  professor: "ANIL AGGARWAL",
  totalQuestions: 20,
  totalMarks: 80,
  marksPerQuestion: 4,
  timeLimit: 40, // minutes
  rules: [
    "NO MOBILE AND CALCULATOR IS ALLOWED",
    "Each question carries 4 marks",
    "Total time allowed: 40 minutes",
    "Only one submission per roll number allowed",
    "Click 'Submit Quiz' to finish or quiz will auto-submit when time expires"
  ]
};
