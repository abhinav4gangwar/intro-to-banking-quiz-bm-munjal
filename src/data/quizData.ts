export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "A farmer takes a short-term loan for purchasing seeds and fertilizers. This loan falls under which category?",
    options: [
      "Investment credit",
      "Production credit",
      "Consumption loan",
      "Term loan"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Crop loan under KCC is generally repayable within:",
    options: [
      "3 months",
      "6 months",
      "12 months",
      "36 months"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "A farmer needs ₹2 lakh for constructing a tube well. This is classified as:",
    options: [
      "Crop loan",
      "Term loan",
      "Consumption loan",
      "Microcredit"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Repayment of short-term agri loans is linked to:",
    options: [
      "Crop harvesting",
      "Monthly EMI",
      "Annual festival season",
      "Discretion of banker"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "A tenant farmer without land records requests a loan for sowing maize. What should the bank do?",
    options: [
      "Reject application",
      "Finance through Joint Liability Group (JLG)",
      "Ask him to mortgage land",
      "Advise him to go to moneylender"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "A farmer has a KCC limit of ₹80,000. He asks if he can use part of it for household consumption. What will you do?",
    options: [
      "Decline – KCC is only for inputs",
      "Allow up to 10% as consumption component",
      "Convert loan into term loan",
      "Ask him to take personal loan"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "A dairy farmer needs ₹70,000 for 2 milch cows. He already has KCC for crops. Which is best source?",
    options: [
      "Extend KCC limit under investment credit",
      "SHG loan",
      "PACS short-term loan",
      "Moneylender"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "A PMJDY account holder has repaid a small loan on time and asks for overdraft facility. He is 45 years old. What is the correct solution?",
    options: [
      "Deny overdraft",
      "Allow overdraft up to ₹10,000",
      "Allow overdraft up to ₹5,000 only",
      "Grant only if security is given"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "A farmer wants to deposit ₹60,000 cash in his PMJDY account. The account was opened as a Small Account. What should banker do?",
    options: [
      "Accept deposit fully",
      "Decline, as balance limit is ₹50,000",
      "Allow only ₹10,000 extra",
      "Convert into FD"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "A farmer with 4 acres applies for KCC. Scale of finance is ₹15,000 per acre. Add 10% for household + 20% for post-harvest. What is his limit?",
    options: [
      "₹60,000",
      "₹72,000",
      "₹75,000",
      "₹80,000"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "An SHG has been saving ₹500 per member per month for 6 months. They now need bank credit. What should the banker check first?",
    options: [
      "Land records of members",
      "Regularity of savings and meetings",
      "Gold collateral",
      "NABARD approval"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "A women's SHG requests ₹3 lakh loan. They have ₹60,000 savings. How will banker assess?",
    options: [
      "Loan = 4–5 times savings",
      "Loan = equal to savings only",
      "Loan only after NABARD refinance",
      "Loan not possible"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "A rickshaw puller asks for ₹1.5 lakh to buy an e-rickshaw. Which is correct?",
    options: [
      "MUDRA Kishor loan",
      "Tarun loan",
      "Auto loan under retail banking",
      "Not eligible under MUDRA"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "A beautician earns ₹15,000/month, spends ₹11,000. She applies for ₹3 lakh Kishor loan for 4 years (EMI ≈ ₹7,930). Decision?",
    options: [
      "Approve",
      "Reject or reduce",
      "Convert to Shishu",
      "Ask for collateral"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "In a tribal belt, 10 landless farmers want a group loan. Who usually initiates JLGs here?",
    options: [
      "Moneylenders who already know the borrowers",
      "Banks through their rural branches",
      "NABARD through Farmers' Clubs/NGOs",
      "State agriculture university"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Loan = ₹5,00,000 for dairy. Subsidy = 25% back-ended. After 2 years, outstanding = ₹4,00,000. Subsidy is released. What is the new balance?",
    options: [
      "₹3,75,000",
      "₹3,50,000",
      "₹2,50,000",
      "₹4,00,000 (no change)"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "Loan = ₹4,00,000 for irrigation equipment. Subsidy: 25% general / 40% SC/ST. Farmer (SC) repays ₹2,40,000 over 2 years. At subsidy release (after lock-in), what happens?",
    options: [
      "Outstanding = ₹1,60,000, subsidy = ₹1,00,000 → farmer owes ₹60,000",
      "Outstanding = ₹1,60,000, subsidy = ₹1,60,000 → loan closed",
      "Subsidy applied partially, balance ₹40,000",
      "Subsidy not released since repayment not completed"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "A woman under PMEGP says: \"Bank is cheating. I got 35% subsidy, but EMI is same as without subsidy.\"",
    options: [
      "Bank is wrong, EMI must be reduced",
      "Bank is correct, EMI is fixed on full loan; subsidy adjusts balance later",
      "EMI is reduced only for women",
      "EMI is reduced only for SC/ST"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "A group of agri graduates ask: \"We want to open a custom hiring centre for farm machinery. Which scheme suits us?\"",
    options: [
      "MUDRA loan up to ₹10 lakh",
      "Agri Business Centre under ACABC",
      "PM-Kisan cash support",
      "PMJDY overdraft"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "A farmer asks: \"If I use e-NAM, will I get loan automatically?\"",
    options: [
      "Yes, crop loan is automatic",
      "No, e-NAM is for marketing, not for loan",
      "Yes, subsidy loan is linked",
      "Only SHG members get loan"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "A farmer says: \"If I take loan on e-NWR and prices crash, who bears loss?\"",
    options: [
      "The bank bears the entire loss",
      "The farmer bears the loss; e-NWR is just collateral",
      "Government compensates the farmer",
      "Loss is shared equally between bank and farmer"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "A woman entrepreneur applies for Stand-Up India loan of ₹25 lakh. She has strong family support but no savings of her own. What is the officer's correct approach?",
    options: [
      "Reject because she has no personal capital",
      "Ask her to bring required 10% margin money",
      "Approve full project without margin",
      "Tell her to join an SHG first"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "Borrower wants ₹8 lakh for a rice mill. Projected net profit = ₹50,000/month. EMI = ₹20,000. In the area, already 3 rice mills are operating. What is the correct approach?",
    options: [
      "Approve since DSCR is good",
      "Evaluate market demand & local paddy availability before sanction",
      "Reject because mills are risky",
      "Sanction if subsidy is assured"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "A small farmer asks: \"Why should I use e-NWR instead of selling immediately?\"",
    options: [
      "It helps him store and wait for better prices",
      "It gives subsidy on fertilisers",
      "It guarantees higher MSP",
      "It cancels repayment obligation"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: "A woman entrepreneur says: \"I got Stand-Up India loan. Will subsidy reduce my EMI from day one?\"",
    options: [
      "Yes, EMI is on net loan",
      "No, EMI on full loan; subsidy is credit guarantee, not upfront deduction",
      "Yes, but only for SC/ST",
      "Yes, after 2 years of repayment"
    ],
    correctAnswer: 1
  }
];

export const quizInfo = {
  title: "B M MUNJAL AND BHARAT BANKING : STUDENTS QUIZ",
  date: "23.09.25",
  professor: "ANIL AGGARWAL",
  totalQuestions: 25,
  totalMarks: 100,
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