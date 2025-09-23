export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the function of a Teller?",
    options: [
      "Tells the customer about banking products.",
      "Manages the operations of cash counter in branches.",
      "Tells the staff members their daily functions.",
      "Manages the customer complaints."
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Interest on Current accounts is generally NIL because.",
    options: [
      "Current account clients take loans.",
      "Current account clients can take third party products like insurance.",
      "Current account clients mainly deal in cash.",
      "High volume of transactions in the account."
    ],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "Which is a type of demand deposit.",
    options: [
      "Current account",
      "Savings bank account",
      "Both current and savings bank account.",
      "None of the above"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Applicant of a letter of credit is.",
    options: [
      "Banker of the customer.",
      "Seller of goods/services.",
      "None of the above",
      "Buyer of goods/services."
    ],
    correctAnswer: 3
  },
  {
    id: 5,
    question: "Which is not a type of advance.",
    options: [
      "Cash Credit",
      "Term Loan",
      "Bill discounting",
      "Net worth certificate issued by the bank."
    ],
    correctAnswer: 3
  },
  {
    id: 6,
    question: "Which type of loan is given for purchase of stock.",
    options: [
      "Term Loan",
      "Bill discounting",
      "Cash credit or overdraft",
      "Bank guarantee"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Funds under cash reserve ratio are kept with.",
    options: [
      "Reserve Bank of India",
      "Respective bank",
      "Invested in Govt securities.",
      "Govt of India"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "A company holds a current account in your bank with ₹10 lakh balance. They request an overdraft facility of ₹5 lakh to meet short-term working capital. Which factor should weigh MOST in approving this request?",
    options: [
      "Company's credit history and repayment track",
      "Bank's CRR/SLR position",
      "Current interest rates in the market",
      "Whether the account has cheque-book facility"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "A farmer applies for a crop loan of ₹2 lakh under Kisan Credit Card (KCC). The land records show he already has a loan of ₹3 lakh from a cooperative bank. As a banker, what is your first step?",
    options: [
      "Sanction immediately since KCC is priority sector",
      "Reject application",
      "Check CIBIL/credit report and repayment history",
      "Ask for collateral"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Positive Pay is mainly applicable to which banking instrument?",
    options: [
      "Demand drafts",
      "Fixed deposits",
      "Cheques",
      "Debit cards"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "A customer wants to open a savings account with an NBFC, but the NBFC refuses. Why?",
    options: [
      "RBI has banned NBFCs from operating in cities",
      "NBFCs cannot accept demand deposits",
      "Only foreign NBFCs can accept deposits",
      "NBFCs must issue currency instead"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "An RRB is facing shortage of funds to lend during crop season. Its sponsor bank steps in to provide refinance. What does this highlight?",
    options: [
      "RRBs operate fully independently of other banks",
      "RRBs depend on sponsor banks for managerial and financial support",
      "RRBs cannot lend without RBI permission",
      "RRBs act like cooperative societies only"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Who primarily owns RRBs?",
    options: [
      "Fully private shareholders",
      "Joint ownership by Central Govt, State Govt, and Sponsor Bank",
      "100% State Government",
      "100% RBI"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "A rural branch of Bank of India is assigned 15 villages under Service area approach (SAA). A farmer from an unassigned nearby village approaches the branch for a loan. What should the branch do?",
    options: [
      "Reject the loan since village is not in its service area",
      "Lend only if no other bank covers that village",
      "Direct the farmer to the branch assigned for his village",
      "Lend only under RBI permission"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "A small manufacturing unit with investment in plant & machinery worth ₹4 crore seeks a term loan of ₹2 crore. Does this qualify under PSL?",
    options: [
      "Yes, as MSME – Manufacturing sector",
      "No, exceeds PSL limit",
      "Only if unit exports goods",
      "Only if unit is government approved"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "An individual deposits ₹3 lakh in his Payment Bank account. What will happen?",
    options: [
      "Accepted fully like any other bank",
      "Only ₹2 lakh accepted, rest must be refused/returned",
      "Entire amount rejected",
      "Converted into a fixed deposit automatically"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "A group of 10 rural women form a Self-Help Group (SHG) and approach an MFI for a ₹1 lakh loan. The MFI lends to the group instead of individuals. Why does the MFI prefer this method?",
    options: [
      "To reduce paperwork",
      "To reduce default risk through group guarantee",
      "To comply with RBI's CRR mandate",
      "To avoid collateral requirement"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "A borrower complains that his MFI charges him 22% interest, whereas the nearby commercial bank charges only 12%. Why does the MFI charge a higher rate?",
    options: [
      "MFIs are free to exploit borrowers",
      "MFIs serve small borrowers with high operating costs",
      "MFIs must match bank rates",
      "Banks subsidize MFIs"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "An MFI offers ₹15,000 loan for 1 year at 24% flat OR 24% reducing balance. Which option is costlier for the borrower?",
    options: [
      "Flat interest",
      "Reducing balance",
      "Both same",
      "Depends on repayment frequency"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "A textile trader draws a bill on a buyer for ₹1,00,000 payable in 90 days. The buyer accepts it. Who is the drawee here?",
    options: [
      "The trader",
      "The buyer",
      "The bank",
      "RBI"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "A textile buyer in Surat opens an LC through his bank in favor of a weaver in Varanasi. Which is the issuing bank?",
    options: [
      "The weaver's bank in Varanasi",
      "The buyer's bank in Surat",
      "NABARD",
      "SEBI"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "A rice miller in Haryana ships rice to a wholesaler in Kolkata under an LC. The buyer's bank refuses payment because the lorry receipt number doesn't match LC terms, even though goods were delivered. Why was the payment stopped?",
    options: [
      "Bank checks only buyer's confirmation",
      "Bank checks only physical goods",
      "Bank checks documents, not goods",
      "RBI approval is needed for food trade"
    ],
    correctAnswer: 2
  },
  {
    id: 23,
    question: "Mr. Sharma wants to transfer ₹15 lakh to his son's account in another bank urgently. Which mode is best?",
    options: [
      "UPI",
      "NEFT",
      "RTGS",
      "Mobile Wallet"
    ],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "Mr. and Mrs. Sharma want an account where either of them can withdraw without the other's consent. Which operating instruction should they choose?",
    options: [
      "Jointly (Both must sign)",
      "Either or Survivor",
      "Former or Survivor",
      "Mandate Holder Only"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "A trader asks the bank to open an account with no interest, unlimited transactions, and overdraft facility. Which account suits him?",
    options: [
      "Savings Account",
      "Current Account",
      "Recurring Deposit Account",
      "Fixed Deposit Account"
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