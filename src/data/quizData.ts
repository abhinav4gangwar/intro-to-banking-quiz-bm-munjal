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
    question: "SBI Mumbai is handling LC for Larsen & Toubro importing turbines from Siemens Energy Germany. Docs are clean. Applicant casually says: \"Goods quality doubtful… maybe hold payment?\" What should manager do?",
    options: [
      "Hold payment",
      "Honour LC if documents comply",
      "Seek exporter clarification",
      "Escalate legal dispute"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Reliance Industries shares WhatsApp B/L copy before originals arrive: \"Just confirm no discrepancy.\" Manager should?",
    options: [
      "Confirm informally",
      "Review but avoid commitment",
      "Reject transaction",
      "Treat copy as presentation"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "LC in favour of ONGC. Invoice shows \"ONGC Ltd\" instead of full legal name. Your decision?",
    options: [
      "Immediate discrepancy",
      "Accept if identity clear",
      "Seek verbal confirmation",
      "Reject to avoid audit risk"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "HPCL commodity LC repeatedly amended, shipment still pending. Your instinct?",
    options: [
      "Routine business",
      "Possible financing rollover",
      "Documentation delay",
      "Ignore pattern"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Adani Power LC insurance shows ICC(A) but claims payable outside India though LC requires India. Decision?",
    options: [
      "Minor detail",
      "Discrepancy",
      "Ignore if insurer strong",
      "Applicant decides"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Confirmed LC by HSBC London for Tata Steel. Issuing bank facing liquidity stress. Confirming bank should?",
    options: [
      "Wait cautiously",
      "Honour independently",
      "Consult applicant",
      "Delay quietly"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Infosys SBLC demand signed by acting CFO instead of named CFO; board resolution attached. Decision?",
    options: [
      "Reject immediately",
      "Accept after verifying authority",
      "Ignore resolution",
      "Ask applicant consent"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Indian Oil eUCP LC documents uploaded before expiry; portal outage confirmed. Decision?",
    options: [
      "Late presentation",
      "Accept if outage proven",
      "Reject digital docs",
      "Applicant decides"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "JSW Steel LC invoice vs packing list weight slightly different. Manager judgement?",
    options: [
      "Automatic refusal",
      "Assess materiality carefully",
      "Ignore difference",
      "Amend LC first"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "NTPC import LC — unknown carrier but third-party transport allowed. Approach?",
    options: [
      "Reject unknown carrier",
      "Accept if LC permits",
      "Cancel LC",
      "Ask applicant"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Reliance export LC freely negotiable; negotiated by unfamiliar bank. Applicant uneasy. Correct stance?",
    options: [
      "Invalid negotiation",
      "Allowed",
      "Applicant approval needed",
      "Reject docs"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "BPCL LC AIS vessel route inconsistent with B/L port. Manager should?",
    options: [
      "Ignore AIS",
      "Treat as fraud signal",
      "Immediate refusal",
      "Honour blindly"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Vedanta LC amended tenor but reimbursement authorization unchanged. Risk?",
    options: [
      "Customer dispute",
      "Interbank settlement issue",
      "Documentary discrepancy",
      "Insurance issue"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Mahindra LC silent on electronic signature; exporter submits e-signed invoice. Best stance?",
    options: [
      "Accept automatically",
      "Refuse automatically",
      "Evaluate authenticity",
      "Ignore signature"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Coal India LC collateral suspected pledged to multiple banks. Manager action?",
    options: [
      "Ignore rumours",
      "Verify independently",
      "Finance immediately",
      "Cancel LC"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "GAIL India LC applicant verbally waives discrepancy before checking. Correct approach?",
    options: [
      "Accept verbal waiver",
      "Require formal waiver",
      "Ignore waiver",
      "Cancel LC"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "UltraTech Cement LC invoice lower than LC amount. Decision?",
    options: [
      "Discrepancy",
      "Partial drawing allowed",
      "Amend LC first",
      "Reject docs"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Dr Reddy's LC inspection certificate genuine but location slightly different. Decision?",
    options: [
      "Immediate refusal",
      "Assess material impact",
      "Ignore location",
      "Cancel LC"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Power Grid LC documents compliant but compliance team flags sanctions risk. Immediate step?",
    options: [
      "Honour quickly",
      "Refuse automatically",
      "Escalate before decision",
      "Ignore compliance"
    ],
    correctAnswer: 2
  },
  {
    id: 20,
    question: "Tata Motors LC FCA contract but LC requires ocean B/L. Manager understanding?",
    options: [
      "Exporter error",
      "LC drafting mismatch",
      "Carrier mistake",
      "Insurance issue"
    ],
    correctAnswer: 1
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Trade Finance & LC Decision Making",
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
