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
    question: "Customer Acceptance Policy\n\nA new current account is proposed for M/s Silverline Commodities LLP. Documents are complete, GST is active, and the introducer is an existing top-rated customer. However, the firm wants to start with expected monthly turnover of ₹18 crore, while its partners' past ITRs reflect very modest business history. The branch head says, \"This is a growth opportunity; we can monitor later.\"\n\nWhat is the most defensible audit view?",
    options: [
      "Escalate for enhanced onboarding review before acceptance, because scale is not supported by demonstrated business capacity",
      "Open the account and place it under post-facto enhanced monitoring",
      "Accept the account because documents and introducer quality are satisfactory",
      "Reject the account immediately as a suspected shell concern"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Beneficial Ownership\n\nM/s Horizon Urban Projects Pvt Ltd has 5 shareholders, each below the usual ownership threshold. During review, auditors note that all major funding, vendor finalization, and pricing decisions are taken only after verbal approval from Mr. Ritesh Malhotra, who is neither director nor shareholder but is named in side letters and management emails.\n\nWhat should audit conclude?",
    options: [
      "BO cannot be identified because ownership is fragmented",
      "Mr. Ritesh Malhotra should be treated as beneficial owner/controller based on actual control",
      "Only directors should be treated as BO for branch-level purposes",
      "The matter is corporate-governance related, not KYC related"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "PEP Screening\n\nMrs. Meera Suri was onboarded as a normal customer three years ago. She is not a PEP. During re-KYC, it emerges that her son has recently become a Member of Parliament. Her account activity remains modest, but a new inward remittance of ₹42 lakh is received from an overseas source.\n\nWhat is the best audit position?",
    options: [
      "No change is needed because the account holder herself is not a PEP",
      "Mark as high risk only if frequent remittances continue",
      "File STR immediately because foreign remittance to a PEP-related account is automatically suspicious",
      "Reclassify as PEP-related, apply EDD, and review source of funds before concluding further action"
    ],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "Transaction Monitoring\n\nM/s RapidServe Solutions is described as a back-office processing company. Over six months, turnover rises from ₹1.8 crore to ₹14 crore per month. Funds come from multiple unrelated entities and move out to a changing set of beneficiaries within the same day. Books show very low margins, but the company provides invoices when asked.\n\nWhat is the most defensible audit response?",
    options: [
      "Accept, because invoices support the transactions",
      "Seek independent validation of actual value addition and customer relationship trail",
      "File STR immediately because same-day transfers are always suspicious",
      "Restrict operations unless customer proves margins above industry average"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Mule Accounts\n\nA branch-level review finds 14 savings accounts opened through a financial inclusion drive. Over the last two months, 6 of them show repeated inward credits of ₹1.5–₹3 lakh, followed by ATM withdrawals in other states. The account holders are real individuals, but two admit that \"someone else helps operate the account.\"\n\nWhat is the strongest audit conclusion?",
    options: [
      "This is primarily a financial literacy issue",
      "These are high-risk accounts but not necessarily mule accounts",
      "The pattern indicates likely mule-account misuse through third-party control",
      "Since account holders are genuine, the issue is operational rather than AML-related"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "V-CIP Credibility\n\nThe central onboarding team cleared 37 V-CIP accounts in one week. KYC records are complete. On review, auditors notice similar room settings, repeated phrasing in customer responses, and the same device signature in several sessions.\n\nWhat should be the audit stance?",
    options: [
      "Treat it as acceptable because identity documents matched",
      "Escalate as possible organized assisted onboarding, even though file compliance is complete",
      "Wait for suspicious transactions before drawing any conclusion",
      "Mark only the repeated-device cases as exception and close the rest"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Data Privacy\n\nAt a busy branch, scanned sanction letters containing PAN, address, and bank statement extracts are temporarily stored in a common folder accessible to all branch staff for two days. No evidence of misuse is found.\n\nWhat is the most defensible audit position?",
    options: [
      "Treat it as a breach of least-privilege control and data exposure risk",
      "Treat it as acceptable temporary sharing due to business necessity",
      "Ignore because no customer complaint or download evidence exists",
      "Note it only as a documentation housekeeping issue"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Staff Conduct\n\nA relationship manager, Mr. Aditya Sharma, is not directly linked to any borrower financially. However, multiple borrowers state that he strongly pushes them to use M/s PrimeTax Advisors, and one borrower says approval \"becomes smoother\" if that advisor is engaged.\n\nHow should audit view this?",
    options: [
      "As a soft service recommendation with no control implications",
      "As a possible conflict-of-interest/influence risk requiring disclosure and review",
      "As a vigilance matter only if commission proof emerges",
      "As acceptable branch-level market practice unless customer complains formally"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Interest Rate Risk\n\nA bank's treasury portfolio remains within approved duration limits. However, stress scenarios used by ALCO have not been updated for 11 months despite a rapidly rising interest rate environment. Large MTM losses later emerge.\n\nWhat is the best audit observation?",
    options: [
      "No adverse observation, since approved limits were complied with",
      "The issue is market volatility, not a control weakness",
      "The core failure is stale stress testing and weak anticipatory governance",
      "The portfolio should be shifted entirely to HTM immediately"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Equity Price Risk\n\nA loan of ₹320 crore is secured by listed shares of three companies. The combined collateral cover is strong at sanction. Later, auditors realize all three companies belong to the same promoter group and move almost identically in the market.\n\nWhat should audit conclude?",
    options: [
      "Diversification exists because there are three separate securities",
      "Margin is enough, so concentration is not material",
      "The main issue is valuation frequency, not concentration",
      "The bank is exposed to correlated collateral risk despite apparent diversification"
    ],
    correctAnswer: 3
  },
  {
    id: 11,
    question: "Commodity Price Risk\n\nA steel trader enjoys a working capital limit against inventory. Stock statements are timely and quantity is verified. However, the borrower's inventory consists of a specialized grade whose market price has fallen sharply, while DP calculations continue using last quarter's average rate.\n\nWhat is the most defensible audit view?",
    options: [
      "Quantity verification is sufficient unless default occurs",
      "DP should reflect current realizable value, not stale benchmark pricing",
      "This is mainly a credit-monitoring issue, not market risk",
      "Continue existing DP until next formal stock audit cycle"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Foreign Exchange Risk\n\nM/s Sapphire Imports claims a natural hedge because it has both import payables and export receivables in USD. Audit finds that payables fall due in 30 days, but receivables are from one weak overseas buyer who usually pays after 120 days.\n\nWhat is the strongest audit conclusion?",
    options: [
      "The hedge is incomplete because timing and counterparty reliability are mismatched",
      "A natural hedge exists, so no further concern arises",
      "The branch should insist on closing all open FX exposure immediately",
      "This is the borrower's business decision, not a bank risk concern"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "CFT Risk\n\nA small charitable trust receives 1,400 donations of ₹1,000–₹4,000 in a quarter. Thereafter, money is repeatedly remitted to two individuals and one small entity in a sensitive district. Utilization certificates are generic and project descriptions are vague.\n\nWhat should audit do?",
    options: [
      "Accept it as normal crowdfunding behavior",
      "Ask the branch to keep the account under watch without escalation",
      "Validate beneficiary identity, purpose, and geographic risk before deciding next steps",
      "Freeze outward remittances immediately"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "KYC Documentation\n\nFor M/s Eastline Traders, all KYC documents are valid, site visit confirms office existence, and GST is active. Yet the office appears to be a co-working desk with no employees, no records on-site, and no meaningful business activity visible. The branch says many modern firms operate lean.\n\nWhat is the most defensible audit stance?",
    options: [
      "Accept the explanation because modern businesses can be asset-light",
      "File STR solely because no staff were seen",
      "Close the account recommendation immediately",
      "Escalate for business-substance validation rather than relying only on documentary correctness"
    ],
    correctAnswer: 3
  },
  {
    id: 15,
    question: "Associated PEP / Influence Risk\n\nMr. Rohit Bansal, a chartered accountant, is not a PEP. However, he handles tax structuring, investment movement, and trust accounts for a sitting state minister and several related family members. His own personal account now shows large inward transfers from advisory-linked entities.\n\nWhat is the best audit view?",
    options: [
      "He remains a non-PEP unless his name appears on an official list",
      "He should be treated as carrying associated PEP/influence risk requiring EDD",
      "His professional role should be ignored unless unlawful funds are proven",
      "Immediate STR is mandatory because of ministerial linkage"
    ],
    correctAnswer: 1
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Advance Audit",
  professor: "ANIL AGGARWAL",
  totalQuestions: 15,
  totalMarks: 60,
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
