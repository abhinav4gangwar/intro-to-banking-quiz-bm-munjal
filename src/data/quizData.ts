export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Applicant: Reliance Industries Ltd (India), Beneficiary: BASF SE (Germany). Documents were found compliant yesterday. This morning, Reliance emails SBI requesting payment to be put on hold due to alleged quality defects. What should the bank do?",
    options: [
      "Hold payment till commercial issue is resolved",
      "Re-check documents for latent discrepancies",
      "Honour the LC as examined",
      "Seek beneficiary's response before paying"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Applicant: Tata Motors Ltd, Beneficiary: Bosch GmbH. LC states: \"Available with Deutsche Bank, Frankfurt, by negotiation.\" Documents are negotiated by Commerzbank. Is this valid?",
    options: [
      "Negotiation invalid due to bank mismatch",
      "Negotiation valid unless expressly restricted",
      "Valid only after issuing bank approval",
      "Requires amendment before honour"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Applicant: JSW Steel Ltd, Beneficiary: Vale SA. LC requires model MX5000; invoice mentions MX-5000. How should this be treated?",
    options: [
      "Accept as typographical variation",
      "Accept if goods are identical",
      "Treat as discrepancy",
      "Accept subject to applicant comfort"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Applicant: Adani Wilmar Ltd, Beneficiary: Cargill Inc. B/L reads \"Received for Shipment\"; LC calls for \"On Board Bill of Lading.\" What is the correct action?",
    options: [
      "Accept since shipment date is shown",
      "Accept if vessel is named",
      "Reject as non-compliant",
      "Accept based on trade usage"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Applicant: JSW Energy Ltd, Beneficiary: Doosan Heavy Industries (Korea). LC issued under FOB Busan but business team expects insurance from exporter; no insurance document presented. What should be done?",
    options: [
      "Reject for missing insurance",
      "Accept documents",
      "Seek applicant waiver",
      "Amend LC retrospectively"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Applicant: ITC Ltd, Beneficiary: Olam International. Electronic documents uploaded on expiry date; issuing bank accesses them next working day. LC is subject to eUCP. When does presentation occur?",
    options: [
      "Upload date",
      "Access date",
      "LC expiry date",
      "System validation timestamp"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Issuing Bank: SBI, India. Reimbursement Bank: JPMorgan, New York. After negotiation, applicant raises dispute and asks SBI to stop reimbursement. What happens?",
    options: [
      "Reimbursement must stop",
      "Reimbursement proceeds",
      "Reimbursement awaits applicant approval",
      "Reimbursement depends on court order"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Applicant: Mahindra & Mahindra, Beneficiary: Hitachi Ltd. LC specifies \"Port of Yokohama\"; shipment loads from a different terminal within Yokohama port. What is the correct decision?",
    options: [
      "Reject for deviation",
      "Seek clarification",
      "Honour LC",
      "Ask for amendment"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "Applicant: NTPC Ltd, Beneficiary: GE Renewable Energy. SBLC demands wording: \"failure to pay.\" Demand states: \"failure to honour contractual obligations.\" What should be done?",
    options: [
      "Honour due to substance",
      "Honour with reservation",
      "Reject demand",
      "Seek applicant consent"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Applicant: Larsen & Toubro Ltd, Beneficiary: ABB Switzerland. All documents comply; commercial dispute is ongoing. What determines the bank's rights and obligations?",
    options: [
      "Commercial fairness",
      "Relationship management",
      "Documentary compliance",
      "Internal correspondence"
    ],
    correctAnswer: 2
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  date: "17.01.26",
  professor: "ANIL AGGARWAL",
  totalQuestions: 10,
  totalMarks: 40,
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
