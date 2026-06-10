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
    question: "A Branch Manager in a high-performing DCCB is found to have bypassed the crop loan processing checklist to meet aggressive annual disbursement targets. When questioned, he stated that top management pushed for high volume, and he needed this business to secure his upcoming promotion. Which component of the classic Fraud Triangle is most acutely manifested here?",
    options: ["Opportunity", "Rationalization", "Pressure", "Capability"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Under the latest RBI/NABARD guidelines, what is the supervisory expectation regarding the board's role in dealing with \"Early Warning Signals\" (EWS)?",
    options: [
      "EWS reviews can be delegated entirely to the Concurrent Auditor.",
      "The Board must periodically oversee the EWS framework and ensure prompt corrective actions are taken.",
      "EWS alerts should only be reviewed after a localized external audit.",
      "The board should remain detached from EWS to maintain independent judgment."
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "A field officer attached to an NGO acting as a Business Correspondent (BC) creates ghost SHG (Self Help Group) members and siphons off revolving funds, aided by a local branch clerk who bypasses biometric authentication for \"speedy disbursement.\" This is classified as:",
    options: ["External fraud", "Cyber fraud", "Internal-External Collusion (Mixed Fraud)", "Third-party manipulation"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "During a field drive, an internal audit team discovers that several KCC (Kisan Credit Card) loans were disbursed digitally without physically verifying the land ownership or crop sown. The KYC was completed using fake digital identities. What systemic failure is primarily responsible?",
    options: [
      "Cash shortage",
      "Failure of concurrent audit and technological verification controls",
      "Forgery by the customer alone",
      "Deficient portfolio diversification"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "A rural cooperative bank's head office fails to reconcile the Nostro/mirror accounts with the sponsor bank for over 90 days. Taking advantage of this, a clerk manipulates the internal clearing account to transfer funds to a dormant account controlled by a relative. What is the fundamental control breakdown here?",
    options: [
      "Lack of independent reconciliation and Segregation of Duties (SoD)",
      "Phishing attacks",
      "Natural disaster",
      "Customer error"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "A Primary Agricultural Credit Society (PACS) secretary diverts fertilizer subsidy funds. The delay in detecting this fraud by the apex DCCB was three months. What is the biggest consequence of delayed detection in such rural scenarios?",
    options: [
      "Higher liquidity for the DCCB",
      "Increased opportunity for perpetrators to destroy evidence and dissipate funds",
      "Decreased staff workload",
      "Better customer satisfaction"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Several elderly customers of an RRB complain that their accounts were debited for unauthorized online transactions. Investigation reveals that the branch IT team had not disabled contactless features or enforced multifactor authentication on RuPay debit cards issued to rural customers. This is an example of:",
    options: [
      "Fraudulent encashment through forged instruments",
      "Systemic vulnerability due to deficient digital security deployment",
      "Borrowing account irregularities",
      "Internal misappropriation"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "An RRB experiences a massive data breach, leaking customer data which is then used to scam borrowers. The CEO claims ignorance, stating that IT operations are outsourced. Under NABARD/RBI supervisory frameworks, who bears ultimate accountability for this control failure?",
    options: [
      "The IT vendor",
      "The Chief Information Security Officer (CISO) exclusively",
      "The Board and Senior Management",
      "The customers"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "An Urban Cooperative Bank (UCB) detects a fraud of Rs. 10 Lakh on June 5th. Due to internal inquiries to establish exact culpability, the management delays reporting to NABARD until July 15th. What is the supervisory implication of this action?",
    options: [
      "The bank is in compliance as long as the police are informed.",
      "The bank is liable for penal action and adverse supervisory findings due to a breach of reporting timelines.",
      "The delay is acceptable since the internal inquiry must conclude first.",
      "The bank only needs to report this at the end of the financial year."
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "A State Cooperative Bank notices a sudden rise in suspicious non-agricultural gold loan accounts. To prevent this from escalating into a larger fraud, what is the best immediate strategic move?",
    options: [
      "Increase interest rates on all loans",
      "Institute random, independent surprise audits of gold portfolios and strengthen collateral valuation checks",
      "Discontinue the gold loan product entirely",
      "Ignore the signals as the loans are backed by physical assets"
    ],
    correctAnswer: 1
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Introduction to Banking in India",
  professor: "ANIL AGGARWAL",
  date: "10th June",
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


