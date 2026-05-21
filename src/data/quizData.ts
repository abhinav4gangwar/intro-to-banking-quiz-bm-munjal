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
    question: "THE \"VERY COOPERATIVE\" CUSTOMER — Customer: Vivek Malhotra. During V-CIP he answers every question correctly, keeps smiling confidently, repeatedly says \"I have already done this with other banks,\" and the officer notices another person reflected faintly in the screen glass. Business team is pushing urgent activation for a current account. What should the officer do?",
    options: [
      "Approve because all responses are correct",
      "Escalate for enhanced due diligence and document observations",
      "Reject immediately as fraudulent",
      "Ignore reflection because system passed face match"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "THE \"TRAVELLING CUSTOMER\" — Customer: Nitin Rao claims \"I am temporarily in Dubai for business.\" During onboarding: Indian mobile active, PAN verified, Aadhaar valid, but IP indicates foreign routing. Customer requests immediate account activation. What is the BEST response?",
    options: [
      "Reject because onboarding must never happen outside India",
      "Approve because documents are genuine",
      "Escalate for risk review and verify regulatory permissibility carefully",
      "Ignore IP mismatch if customer profile looks genuine"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "THE \"OLD CUSTOMER\" — Customer: Rajeshwari Iyer, 10-year relationship, historically low-risk pension account. Suddenly: high inward transfers, crypto exchange references observed, multiple beneficiary additions. Branch says: \"Madam is our old trusted customer.\" What is the MOST appropriate approach?",
    options: [
      "Maintain low-risk classification because relationship is old",
      "Initiate enhanced review and reassess customer risk category",
      "Wait for formal Re-KYC due date",
      "Ignore temporary transaction spike"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "THE \"RUSHED APPROVAL\" — Officer Sonal Gupta conducts V-CIP during heavy onboarding rush. Video quality is weak, audio lagging, customer impatient. Officer approves to avoid escalation and TAT delay. What is the biggest risk created?",
    options: [
      "Weak audit defensibility and identity verification quality",
      "Minor operational inconvenience only",
      "Customer dissatisfaction risk reduced",
      "Only technology team responsible if issue arises later"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "THE \"SYSTEM GENERATED LOW RISK\" — Customer: Farhan Siddiqui. System-generated risk score: LOW RISK. Officer observes: customer hesitant during business explanation, turnover declaration inconsistent, spontaneous questions answered vaguely. What should the senior manager advise?",
    options: [
      "Approve because system score is more reliable than observation",
      "Reject immediately without review",
      "Conduct enhanced due diligence and document rationale",
      "Ignore inconsistencies if PAN and Aadhaar valid"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "THE \"ADDRESS CHANGE REQUEST\" — Customer: Pooja Verma requests a digital address update. Documents valid through DigiLocker. However: address changed twice in 5 months, transaction geography highly inconsistent. What is the MOST intelligent response?",
    options: [
      "Update immediately because documents are authentic",
      "Reject all digital address modifications",
      "Escalate for behavioral and transaction review",
      "Ignore transaction geography because KYC is valid"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "THE \"TARGET PRESSURE\" — Regional office aggressively pushing CASA growth, same-day onboarding, and reduced onboarding TAT. Operations teams gradually stop escalating unusual onboarding behavior, geo-location inconsistencies, and repeated device attempts. What is the BIGGEST hidden danger?",
    options: [
      "Customer onboarding may become slower",
      "Intelligent skepticism may collapse under business pressure",
      "Technology systems may automatically compensate fully",
      "Only compliance department becomes responsible"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "THE \"GENUINE STUDENT\" — Customer: Aman Kapoor, college student. All onboarding proper. After 3 months: unusually high account turnover, gaming-related credits, rapid outward UPI transfers. Student later says: \"Someone offered monthly commission for account use.\" What is the KEY learning?",
    options: [
      "Only fake identities create fraud risk",
      "Digital onboarding should stop for students",
      "Genuine identities can still be commercially exploited",
      "System validation failed technically"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "THE \"MAKER-CHECKER SHORTCUT\" — Due to workload, the same officer performs onboarding, review, and approval. Branch says: \"Otherwise TAT impossible.\" What is the MOST critical risk?",
    options: [
      "Operational efficiency improves",
      "Control independence collapses",
      "Customer satisfaction may increase",
      "Only minor audit issue possible"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "THE \"VERY SOPHISTICATED CUSTOMER\" — Customer: Kunal Arvind. Polished communication, premium business profile, perfect documents, successful liveness test. Officer notices customer becomes uncomfortable only when asked: \"Who will primarily operate this account?\" What is the BEST interpretation?",
    options: [
      "Question unnecessary after successful onboarding",
      "Behavioral discomfort may indicate hidden operational control issue",
      "Successful liveness eliminates concern",
      "Customer sophistication itself proves low risk"
    ],
    correctAnswer: 1
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Introduction to Banking in India",
  professor: "ANIL AGGARWAL",
  date: "21st May",
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

