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
    question: "Nabil Bank, Durbar Marg Branch — Kathmandu (Metro)\n\nRohit Shrestha, a long-time SME customer, shows steadily declining transaction volumes in his account over 3 months, but his loan EMIs are perfectly on time. The branch team is not worried as the account is \"standard.\" As a senior manager, what should be your first interpretation?",
    options: [
      "Credit quality is improving",
      "Business is slowing down",
      "Relationship weakening",
      "Customer diversifying risk"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Global IME Bank, Lakeside Branch — Pokhara (Urban)\n\nSanjay Gurung completes almost the entire home loan process digitally but walks into the branch for final confirmation before signing. The system worked perfectly. What does this behavior most strongly indicate?",
    options: [
      "Digital channel failure",
      "Trust gap at decision stage",
      "Habit of branch dependency",
      "Process inefficiency"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Standard Chartered Nepal, Pulchowk Branch — Lalitpur (Metro)\n\nNeha Maharjan interacts with call center, RM, and branch—each responds quickly and correctly. Still, she feels \"tired\" and dissatisfied. What is the real issue here?",
    options: [
      "Delay in response",
      "Ownership gap",
      "Communication failure",
      "Product mismatch"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "NIC Asia Bank, Biratnagar Main Branch — Biratnagar (Urban)\n\nYour branch reports record-high digital account openings this quarter. However, transaction activity in those accounts is minimal after onboarding. What is the most likely underlying issue?",
    options: [
      "Product design issue",
      "Customer awareness gap",
      "Incentive distortion",
      "Technology limitation"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "NMB Bank, Thamel Branch — Kathmandu (Metro)\n\nRahul Khadka receives a slightly better interest rate offer from your bank than a competitor, yet chooses the competitor within 24 hours. What is the most probable reason?",
    options: [
      "Brand image difference",
      "Faster decision clarity",
      "Hidden cost concern",
      "Personal bias"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Prabhu Bank, Chipledhunga Branch — Pokhara (Urban)\n\nBikash Gurung, an RM, spends most of his day resolving existing customer issues. As a result, he is missing new lending opportunities. What should leadership focus on fixing?",
    options: [
      "RM capability",
      "Product design",
      "Time allocation design",
      "Customer segmentation"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Nepal SBI Bank, Dharan Branch — Dharan (Semi-Urban)\n\nSita Rai logs into the bank’s mobile app frequently, checks balances, but rarely completes transactions. What is the strongest interpretation?",
    options: [
      "Technical glitch",
      "Intent without confidence",
      "Security concern",
      "Product mismatch"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Himalayan Bank, New Road Branch — Kathmandu (Metro)\n\nLoan processing involves multiple approval levels, causing delays but reducing risk exposure. What is the best strategic approach for leadership?",
    options: [
      "Reduce approvals",
      "Maintain current process",
      "Introduce risk-tiered approvals",
      "Increase manpower"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "Rastriya Banijya Bank, Bhaktapur Branch — Bhaktapur (Semi-Urban)\n\nKiran Dangol receives a correct solution to his issue, but only after a long delay. He expresses dissatisfaction. What has been most impacted?",
    options: [
      "Experience",
      "Trust",
      "Efficiency",
      "Cost"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Agricultural Development Bank, Rolpa Branch — Rural Area\n\nRam Bahadur Thapa, though comfortable using smartphones, continues to visit the branch for basic transactions. What is the most likely reason?",
    options: [
      "Lack of awareness",
      "Connectivity issues",
      "Trust gap",
      "Cost concerns"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Nabil Bank, Baneshwor Branch — Kathmandu (Metro)\n\nA newly launched app includes multiple advanced features. However, Anish Maharjan stops using it after initial exploration. What is the likely issue?",
    options: [
      "Over-complexity",
      "Lack of marketing",
      "UI problem",
      "Poor timing"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "Global IME Bank, Mahendrapool Branch — Pokhara (Urban)\n\nSanjay Gurung receives frequent promotional messages from the bank but finds none relevant and starts ignoring all communication. What has failed?",
    options: [
      "Data collection",
      "Analytics",
      "Targeting logic",
      "Communication channel"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "NIC Asia Bank, Biratnagar Branch — Biratnagar (Urban)\n\nManish Agarwal’s issues are always resolved quickly, yet he gradually shifts business to another bank. What is the likely cause?",
    options: [
      "Inconsistency",
      "No emotional connect",
      "Pricing",
      "Service gap"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Standard Chartered Nepal, Lazimpat Branch — Kathmandu (Metro)\n\nAman Shrestha gets fast loan approval but faces delay in final disbursement. What will shape his overall experience?",
    options: [
      "Approval speed",
      "Total journey",
      "Final delay",
      "Documentation"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Everest Bank, Jawalakhel Branch — Lalitpur (Metro)\n\nNeha Karki interacts digitally but calls RM before final decision. What role is the RM playing here?",
    options: [
      "Backup",
      "Advisor",
      "Validator",
      "Escalation"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Rastriya Banijya Bank, Bharatpur Branch — Chitwan (Semi-Urban)\n\nThe bank improves turnaround time significantly, but customer satisfaction scores remain unchanged. Why?",
    options: [
      "Wrong metric improved",
      "Customer expectations increased",
      "Communication gap",
      "Staff inefficiency"
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "Laxmi Bank, Butwal Branch — Butwal (Semi-Urban)\n\nMaya Karki maintains relationships with multiple banks but steadily increases business with one. What drives this shift?",
    options: [
      "Pricing",
      "Product",
      "Engagement quality",
      "Location"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "Himalayan Bank, Kathmandu Head Office — Kathmandu (Metro)\n\nAfter simplifying authentication for digital transactions, fraud cases increase. What went wrong?",
    options: [
      "Technology issue",
      "Risk calibration",
      "Customer awareness",
      "Process design"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Prabhu Bank, Nepalgunj Branch — Nepalgunj (Semi-Urban)\n\nRakesh Yadav uploads documents for a loan but receives no update for several days and drops off. What caused this?",
    options: [
      "Technical issue",
      "Process complexity",
      "Lack of feedback",
      "Delay"
    ],
    correctAnswer: 2
  },
  {
    id: 20,
    question: "Sunrise Bank, Itahari Branch — Itahari (Semi-Urban)\n\nDeepak Bhandari shows strong revenue generation for the branch, but his engagement with the bank is declining. What is the hidden risk?",
    options: [
      "Credit quality",
      "Staff issue",
      "Customer attrition",
      "Competition"
    ],
    correctAnswer: 2
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Customer Experience Session 1",
  professor: "ANIL AGGARWAL",
  date: "29th April",
  startTime: "2.00 PM",
  resultTime: "3.45 PM",
  totalQuestions: 20,
  totalMarks: 80,
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
