export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: number;
  reason?: string;
  marks?: number;
  caseStudy?: string;
}

// Structure 2: Scoring weights by option index (unused in Structure 1)
export const optionWeights = [4, 3, 2, 1, 0];

export interface ScoreInterpretation {
  range: string;
  title: string;
  description: string;
  focusArea: string;
}

export const scoreInterpretations: ScoreInterpretation[] = [
  { range: "16–20", title: "Future-Ready & Resilient", description: "You are adaptable and emotionally stable.", focusArea: "Keep improving and lead change confidently." },
  { range: "11–15", title: "Stable but Under Pressure", description: "You are doing well, but stress may be affecting your energy.", focusArea: "Stress management, balance, and delegation." },
  { range: "6–10", title: "High Stress / Resistance Zone", description: "You may be reacting more than responding.", focusArea: "Emotional control, adaptability, and mindset upgrade." },
  { range: "0–5", title: "Burnout / Rigid Mindset Risk", description: "You may be overloaded or emotionally drained.", focusArea: "Recovery, clarity, and confidence rebuilding." }
];

export const getScoreInterpretation = (score: number): ScoreInterpretation => {
  if (score >= 16) return scoreInterpretations[0];
  if (score >= 11) return scoreInterpretations[1];
  if (score >= 6) return scoreInterpretations[2];
  return scoreInterpretations[3];
};

const caseStudy1 = `You have recently joined as the Branch Manager of ICICI Bank, Chandauli Rural Branch (Uttar Pradesh). The Regional Office has instructed the branch to increase Priority Sector Lending and strengthen SHG financing under the Financial Inclusion initiative.

One morning, "Sakhi Mahila Self Help Group", promoted by the Uttar Pradesh State Rural Livelihood Mission (UPSRLM), visits your branch requesting a ₹6 lakh Bank Linkage Loan for expanding dairy and mushroom cultivation activities. The SHG consists of 12 women and has been functioning for 24 months.

Positive Findings:
• Monthly savings have been regular for two years.
• Meetings are held every month with attendance above 90%.
• Internal lending has been active since inception.
• Earlier internal loans have been repaid on time.
• Cash Book, Minutes Register and Loan Ledger are properly maintained.
• Members already earn income through dairy and tailoring.
• The SHG maintains its Savings Account with your branch.

Concerns:
• Two members already have loans from a local Microfinance Institution.
• One member recently borrowed from a Gold Loan NBFC.
• The proposed dairy project estimates look optimistic.
• The NGO representative is pressing for immediate sanction before month-end.

The Credit Officer says, "Sir, repayment history is excellent. We should sanction today itself." You decide to examine the proposal more carefully.`;

const caseStudy2 = `Bank: ICICI Bank  |  Branch: Karnal Rural Branch  |  Date of Visit: 18 August 2026

Borrower: M/s Fresh Milk Foods, Karnal (Haryana)
Constitution: Proprietorship  |  Proprietor: Mr. Rajesh Kumar, Age 42

Loan Requested: Term Loan ₹55 lakh, Cash Credit ₹20 lakh
Purpose: Purchase of Milk Pasteurization Plant, Packing Machine, Chilling Tank, and Working Capital for Milk Procurement.

Business Background: The borrower has been collecting raw milk from nearby villages for the last 8 years and currently supplies raw milk to a private dairy in Karnal. He now proposes to start his own small milk processing unit for selling Pasteurized Milk, Curd, Paneer, and Ghee under the brand "Fresh Village Dairy".`;

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Ms. Sunita Devi, a school teacher from Bihar Sharif, visits HDFC Bank and deposits ₹2,50,000 in her Savings Account. She asks, \"Now that I have deposited my money, you are keeping it safely for me. So you are my trustee, correct?\" Which response is legally the most appropriate?",
    options: [
      "The bank is a trustee because the money belongs to the customer.",
      "The bank is a debtor and the customer is the creditor after accepting the deposit.",
      "The bank becomes the customer's agent for all banking transactions.",
      "The relationship changes every day depending upon account balance."
    ],
    correctAnswer: 1,
    reason: "Once money is deposited into a bank account, ownership transfers to the bank. The bank becomes the debtor and the depositor becomes the creditor, obligated to repay on demand as per account terms."
  },
  {
    id: 2,
    question: "Mr. Rajesh Gupta and his wife Meena maintain a joint Savings Account with mandate \"Either or Survivor\". Rajesh requests closure as they are shifting abroad. Meena later phones and does NOT agree to close. What should the Branch Manager do?",
    options: [
      "Close the account because either holder can independently operate it.",
      "Freeze all debit transactions immediately.",
      "Refuse closure unless both account holders jointly consent.",
      "Close the account after obtaining an indemnity from Rajesh."
    ],
    correctAnswer: 2,
    reason: "\"Either or Survivor\" permits operation during the account's existence, but closure changes the contractual relationship and generally requires consent of all account holders unless the mandate specifically provides otherwise."
  },
  {
    id: 3,
    question: "At Kotputli Rural Branch, 14-year-old Aarav Sharma visits alone to open a Savings Account using his Aadhaar and school ID. The bank's policy permits minors above 10 years to independently operate Savings Accounts subject to KYC. What should the officer do?",
    options: [
      "Reject the application because every minor account requires a guardian.",
      "Open the account only after obtaining permission from RBI.",
      "Open only a Fixed Deposit account in the minor's name.",
      "Open the Savings Account after complying with the bank's policy and KYC requirements."
    ],
    correctAnswer: 3,
    reason: "Many banks permit self-operated Savings Accounts for minors above a specified age (commonly 10 years), provided KYC norms and internal policy requirements are satisfied."
  },
  {
    id: 4,
    question: "Mrs. Kamla Bai, a widow from Sehore, refuses to provide nomination while opening a Fixed Deposit, saying \"It is my money. I don't want to nominate anyone.\" The executive insists nomination is compulsory. Which action is appropriate?",
    options: [
      "Refuse account opening because nomination is mandatory.",
      "Obtain a written declaration that the customer declines nomination and proceed.",
      "Ask the customer to nominate the legal heir compulsorily.",
      "Open the account but internally assign the nearest relative as nominee."
    ],
    correctAnswer: 1,
    reason: "Nomination should always be offered, but cannot be forced. If the customer declines, the bank should obtain a written declaration regarding refusal and retain it in records."
  },
  {
    id: 5,
    question: "Inspector Ajay Verma visits Axis Bank, Jhansi and verbally asks for the Savings Account statement of Mr. Mohan Yadav, saying an inquiry is in progress. No written order is produced. What should the Branch Manager do?",
    options: [
      "Immediately provide the statement to support the police investigation.",
      "Share only the last three months' transactions.",
      "Politely decline and provide information only upon receipt of valid legal authority or as permitted under law.",
      "Ask the customer first and provide the statement if he verbally agrees over the phone."
    ],
    correctAnswer: 2,
    reason: "A bank owes a duty of confidentiality to its customers. Information can be disclosed only where required by law, in public duty, in the bank's own interest, or with the customer's consent. A mere verbal police request is insufficient."
  },
  {
    id: 6,
    question: "At Axis Bank, Barmer Branch, Mrs. Savitri Devi instructs the bank to collect the proceeds of a dividend warrant issued by a listed company and credit it to her Savings Account. Which relationship best describes the bank's role?",
    options: ["Debtor", "Trustee", "Bailee", "Agent"],
    correctAnswer: 3,
    reason: "When the bank collects cheques, dividend warrants, ECS credits, or other instruments on behalf of a customer, it acts as the Agent of the customer."
  },
  {
    id: 7,
    question: "At Kotak Mahindra Bank, Satna Branch, Mr. Harish Verma (individual locker holder) passes away. His daughter produces the key and claims access as legal heir. Bank records show his wife Mrs. Neha Verma is the registered nominee. What should the Branch Manager do?",
    options: [
      "Permit the daughter because she possesses the locker key.",
      "Ask both family members to decide mutually before permitting access.",
      "Refuse access to everyone until a succession certificate is produced.",
      "Follow the nomination procedure and provide access to the nominee as per applicable rules and documentation."
    ],
    correctAnswer: 3,
    reason: "The bank should follow the registered nomination for operational purposes. Nomination facilitates settlement by the bank and does not by itself determine ultimate ownership under succession law."
  },
  {
    id: 8,
    question: "At HDFC Bank, Sitapur Branch, Mr. Imran Khan (declared as farmer) has his Savings Account receiving 25-30 cash deposits daily and monthly credits over ₹18 lakh. He admits he runs a wholesale pesticide business through this account because \"there are no charges.\" What should the Branch Manager do?",
    options: [
      "Allow the operations since the customer is maintaining a high balance.",
      "Advise the customer to open a Current Account and take action as per the bank's policy for misuse of the Savings Account.",
      "Immediately freeze the account permanently.",
      "Convert the Savings Account into a Current Account without obtaining the customer's consent."
    ],
    correctAnswer: 1,
    reason: "Savings Accounts are intended for personal savings, not regular business transactions. The banker should counsel the customer and follow the bank's policy regarding misuse, including migration to an appropriate account type."
  },
  {
    id: 9,
    question: "At IndusInd Bank, Gaya Branch, 75-year-old Mr. Raghunath Singh deposits ₹9,80,000 in cash into his Savings Account, explaining he sold ancestral agricultural land. The teller is uncertain. What should the branch do?",
    options: [
      "Refuse the cash because the amount is unusually large.",
      "Accept the cash without asking any questions because the customer is a senior citizen.",
      "Accept the cash and ignore the source since the account belongs to the customer.",
      "Accept the cash after following the bank's cash acceptance procedures, recording the customer's explanation, and complying with applicable KYC/AML requirements."
    ],
    correctAnswer: 3,
    reason: "Large cash transactions require appropriate customer due diligence and KYC/AML compliance. A genuine explanation should be documented, but the transaction should not be refused merely because it is large."
  },
  {
    id: 10,
    question: "At Axis Bank, Muzaffarpur Branch, Mr. Suresh Yadav, a progressive farmer with daily wholesaler receipts and frequent cheques to transporters and fertilizer dealers, wants a Current Account. The CSE says, \"Current Accounts are only for businessmen.\" As Branch Manager, what should you do?",
    options: [
      "Refuse the request because only registered business entities can open Current Accounts.",
      "Open only a Savings Account because agriculture is not considered business.",
      "Open a Current Account after completing KYC and satisfying yourself that the nature of transactions genuinely requires frequent banking operations.",
      "Ask him to first obtain a GST registration and then return for account opening."
    ],
    correctAnswer: 2,
    reason: "A Current Account is meant for customers requiring frequent banking transactions, irrespective of whether they are traders, professionals, institutions, or large farmers. The decision should be based on the nature of operations."
  },
  {
    id: 11,
    question: "At IndusInd Bank, Deoria Branch, M/s Shakti Seeds (partnership) applies to open a Current Account. Two partners are present; the third is abroad. The deed authorises any two partners jointly to operate. KYC is complete for all. What is most appropriate?",
    options: [
      "Open the account because the operating mandate in the partnership deed has been satisfied.",
      "Refuse to open the account until all partners are physically present.",
      "Open the account in the names of only the two partners who visited the branch.",
      "Open a Savings Account temporarily until the third partner returns."
    ],
    correctAnswer: 0,
    reason: "Where the partnership deed clearly authorizes any two partners to operate, and KYC and documentation are complete, the branch may proceed as per its account-opening procedures."
  },
  {
    id: 12,
    question: "At Axis Bank, Nanded Branch, Mr. Shankar Rao had an FD of ₹8 lakh. He passes away before maturity. Bank records show his wife Mrs. Lata Rao is the registered nominee. His son claims the amount should not be released to the nominee. What should the Branch Manager do?",
    options: [
      "Follow the bank's procedure for settlement in favour of the registered nominee after completing the prescribed formalities.",
      "Refuse payment until all legal heirs jointly submit a declaration.",
      "Insist on a succession certificate in every case.",
      "Keep the deposit until its maturity and then seek legal advice."
    ],
    correctAnswer: 0,
    reason: "With a valid nomination, the bank settles the deposit with the nominee after prescribed formalities. Nomination enables settlement and does not itself determine ultimate succession rights."
  },
  {
    id: 13,
    question: "At Kotak Mahindra Bank, Dharwad Branch, a customer's FD matured 15 days ago. At booking, he had opted for Auto-Renewal. He now asks why it was renewed instead of credited to his Savings Account. What is the most appropriate response?",
    options: [
      "Reverse the renewal immediately without checking the original instructions.",
      "Explain that the renewal was carried out according to the customer's mandate and process any further request in accordance with the bank's applicable rules.",
      "Apologize and pay additional compensation because renewal was a bank error.",
      "Close the deposit without applying any premature closure rules."
    ],
    correctAnswer: 1,
    reason: "Where a customer has given an Auto-Renewal mandate, the bank is expected to act accordingly. Any later request should be handled under the applicable premature closure and operational rules."
  },
  {
    id: 14,
    question: "At Equitas Small Finance Bank, Varanasi Branch, Mr. Mohan Patel (furniture workshop owner) seeks a ₹12 lakh term loan for CNC cutting machines. His friend claims SFBs can only lend to SHGs and small farmers. What should you advise?",
    options: [
      "The customer should approach only a Public Sector Bank because SFBs cannot finance MSMEs.",
      "The bank can consider the proposal because financing MSMEs is one of the objectives of a Small Finance Bank, subject to credit appraisal.",
      "The bank can finance only loans below ₹5 lakh.",
      "The bank should advise him to convert his business into a company before applying."
    ],
    correctAnswer: 1,
    reason: "SFBs are established to promote financial inclusion by providing banking services to small businesses, MSMEs, small and marginal farmers, micro industries, and the unorganized sector, subject to normal credit appraisal."
  },
  {
    id: 15,
    question: "At AU Small Finance Bank, Ajmer Branch, Mrs. Sunita Sharma wants to place ₹25 lakh in a 3-year FD and asks if an SFB can legally accept FDs like other scheduled banks. How should the RM respond?",
    options: [
      "No. Small Finance Banks cannot accept Fixed Deposits.",
      "Yes. They can accept deposits, including Fixed Deposits, in accordance with RBI regulations.",
      "Only Savings Accounts are permitted.",
      "Only Current Accounts are permitted."
    ],
    correctAnswer: 1,
    reason: "SFBs are licensed to undertake both deposit-taking and lending activities, unlike Payments Banks which have a more restricted operating model."
  },
  {
    id: 16,
    question: "At Ujjivan SFB, Hubballi Branch, a large automobile company requests a ₹450 crore working capital facility. The new Credit Officer believes it will significantly boost business. What should the Credit Head consider first?",
    options: [
      "Sanction the loan because all scheduled banks have identical lending objectives.",
      "Reject the proposal because Small Finance Banks are prohibited from lending to companies.",
      "Evaluate whether sanctioning such a large exposure aligns with the bank's regulatory mandate, exposure norms, and business model before taking a credit decision.",
      "Sanction the loan after obtaining approval from the customer."
    ],
    correctAnswer: 2,
    reason: "Although SFBs may lend to companies, their primary objective is financial inclusion. They must operate within RBI's prudential norms, concentration limits, and their approved business model."
  },
  {
    id: 17,
    question: "At Jana SFB, Belagavi Branch, a trainee asks why the bank sanctions many loans to dairy farmers, street vendors, SHGs, and small enterprises. Which statement best explains this?",
    options: [
      "Small Finance Banks primarily focus on serving underserved segments and maintaining the required Priority Sector Lending obligations.",
      "Small Finance Banks cannot lend outside rural areas.",
      "RBI permits SFBs to lend only to agriculture.",
      "Only women borrowers are eligible for loans from SFBs."
    ],
    correctAnswer: 0,
    reason: "Financial inclusion is the cornerstone of the SFB model. They are expected to maintain significant Priority Sector lending while also serving other eligible customer segments within the regulatory framework."
  },
  {
    id: 18,
    question: "At HDFC Bank, Nagpur Rural Branch, Mr. Ramesh Patil says, \"Why should I open a Savings Account here? I already have an account with Bajaj Finance Ltd. It is also a bank.\" How should the Branch Manager respond?",
    options: [
      "Bajaj Finance is a commercial bank and offers all banking services.",
      "Bajaj Finance is a Shadow Banking institution (NBFC). It provides financial services but is not a bank and cannot offer the full range of banking services such as demand deposits.",
      "Bajaj Finance is regulated by SEBI, not RBI.",
      "Bajaj Finance can issue cheque books exactly like any scheduled commercial bank."
    ],
    correctAnswer: 1,
    reason: "NBFCs are part of the shadow banking system because they perform several bank-like financial functions, but they are not banks and cannot accept demand deposits like Savings or Current Accounts."
  },
  {
    id: 19,
    question: "At Axis Bank, Salem Branch, Mrs. Lakshmi Narayanan says, \"I obtained a gold loan from Muthoot Finance, so I assumed they were a bank.\" What is the most accurate explanation?",
    options: [
      "Gold loan companies are commercial banks.",
      "Gold loan companies are insurance companies.",
      "Many gold loan companies operate as NBFCs within the shadow banking system, providing loans against gold but not functioning as full-service banks.",
      "Gold loan companies are cooperative banks."
    ],
    correctAnswer: 2,
    reason: "Major gold loan institutions operate as NBFCs. They specialize in secured lending but do not provide the full suite of banking services available from commercial banks."
  },
  {
    id: 20,
    question: "During induction, a trainee says, \"Shadow Banking means these institutions operate illegally or secretly.\" Which response is most appropriate?",
    options: [
      "They are called Shadow Banks because they operate without RBI's knowledge.",
      "They are called Shadow Banks because they conduct illegal financial activities.",
      "They are called Shadow Banks because they perform several bank-like financial intermediation functions outside the traditional banking model, while operating under their applicable regulatory framework.",
      "They are called Shadow Banks because they do not maintain any records."
    ],
    correctAnswer: 2,
    reason: "The term Shadow Banking does not imply illegality. It refers to institutions performing credit intermediation and other financial services outside the traditional banking structure, while remaining subject to their applicable regulatory framework."
  },
  {
    id: 21,
    question: "At AU SFB, Kota, Mr. Deepak Jain asks whether an NBFC deposit offering higher return has the same deposit insurance protection as a bank deposit. What should the RM advise?",
    options: [
      "Yes. Every NBFC deposit enjoys the same deposit insurance as a bank deposit.",
      "No. Deposit insurance applicable to eligible bank deposits should not be assumed to extend to investments or deposits with NBFCs. Customers should understand the product and associated risks before investing.",
      "Only housing finance companies provide deposit insurance.",
      "RBI guarantees repayment of every NBFC investment."
    ],
    correctAnswer: 1,
    reason: "Customers should not assume that protections available for eligible bank deposits automatically apply to NBFC products. The nature of the product, regulatory treatment, and associated risks should be clearly understood."
  },
  {
    id: 22,
    question: "At ICICI Bank, Gonda Rural Branch, Mrs. Rekha Devi applies for a ₹1.20 lakh micro-enterprise loan while already repaying loans from CreditAccess Grameen and her SHG. The Credit Officer wants to sanction immediately. As Branch Manager, what should you do?",
    options: [
      "Sanction immediately because good repayment always justifies another loan.",
      "Reject the proposal because customers with MFI loans should never receive bank loans.",
      "Assess the customer's total indebtedness, repayment capacity, cash flows, and follow the bank's responsible lending policy before taking a credit decision.",
      "Sanction only if the customer closes her MFI loan first."
    ],
    correctAnswer: 2,
    reason: "Responsible lending requires assessing overall repayment capacity, not merely repayment history. Existing obligations to MFIs, SHGs, or other lenders should be considered before sanctioning fresh credit."
  },
  {
    id: 23,
    question: "At AU SFB, Bikaner, a trainee asks why an MFI insists that five women from the same village attend weekly meetings together, even though each has an individual loan. Which explanation is most appropriate?",
    options: [
      "Because RBI permits lending only to groups.",
      "Because group meetings improve repayment discipline, customer engagement, and operational efficiency, even where loans are individually sanctioned.",
      "Because group members automatically become legal guarantors for each other's loans.",
      "Because banks cannot verify individual borrowers."
    ],
    correctAnswer: 1,
    reason: "Modern microfinance often uses group-based methodologies to encourage repayment discipline, financial literacy, and operational convenience. Individual borrowers are not automatically legal guarantors for one another."
  },
  {
    id: 24,
    question: "A borrower reports that a recovery officer of another finance company threatened to publicly announce his name in the village if he missed the week's instalment. As a banker, what is your response?",
    options: [
      "Such practices are acceptable because recovery is important.",
      "Public humiliation is an acceptable recovery tool in rural areas.",
      "Recovery agents may use any method if the loan agreement has been signed.",
      "Recovery should always follow fair practices, applicable regulations, and the lender's approved recovery policy while respecting the dignity of the borrower."
    ],
    correctAnswer: 3,
    reason: "Banks and MFIs are expected to follow fair recovery practices. Coercion, intimidation, or public humiliation is inconsistent with responsible lending and customer protection principles."
  },
  {
    id: 25,
    question: "At HDFC Bank, Balrampur Branch, women borrowers say the local MFI sanctions loans within three days while the bank asks them to visit several times. What is the best response?",
    options: [
      "Explain the bank's procedures, improve turnaround time where possible, and simplify customer service without compromising credit appraisal or compliance.",
      "Promise same-day sanction for every applicant.",
      "Advise customers not to borrow from MFIs.",
      "Reduce documentation requirements below the bank's policy."
    ],
    correctAnswer: 0,
    reason: "Banks should compete through efficient processes and good service, not by bypassing regulatory or internal credit controls."
  },
  {
    id: 26,
    question: "At Axis Bank, Jaunpur Rural Branch, Mr. Raju Nishad, a street food vendor, applies for a ₹80,000 Micro Enterprise Loan. He states ₹40,000 for a new food cart and utensils, ₹40,000 for his daughter's wedding. What should the Branch Manager do?",
    options: [
      "Sanction the entire loan because the customer has disclosed the purpose honestly.",
      "Reject the proposal because marriage expenses are not eligible under any micro loan.",
      "Appraise the productive business requirement and sanction the eligible business portion in accordance with the bank's product guidelines.",
      "Sanction the loan after obtaining a guarantor."
    ],
    correctAnswer: 2,
    reason: "Micro enterprise loans are intended primarily for income-generating activities. The banker should separate the productive business requirement from personal consumption and process the proposal as per product norms."
  },
  {
    id: 27,
    question: "At HDFC Bank, Purnia, Mrs. Shanti Devi (three buffaloes) applies for a ₹2 lakh Dairy Loan. She has no formal income statements or GST records. The trainee recommends rejection. What should the Credit Officer do?",
    options: [
      "Reject the proposal due to the absence of audited financial statements.",
      "Assess household and business cash flows, milk production, expenses, and repayment capacity using field appraisal methods.",
      "Sanction the loan solely because she owns livestock.",
      "Approve the loan only after obtaining Income Tax Returns."
    ],
    correctAnswer: 1,
    reason: "Micro loan appraisal relies heavily on cash-flow assessment, field verification, and repayment capacity, rather than formal financial statements."
  },
  {
    id: 28,
    question: "At ICICI Bank, Bahraich, Mrs. Farzana Begum applies for a ₹1 lakh tailoring loan. Verification shows she already has an SHG loan, an MFI loan, and a gold loan — all regular. What should the Branch Manager do?",
    options: [
      "Sanction immediately because all existing loans are regular.",
      "Reject because borrowers with more than one loan are automatically ineligible.",
      "Recommend closure of all existing loans before considering the application.",
      "Evaluate her total repayment obligations, household income, and ability to service another loan before taking a decision."
    ],
    correctAnswer: 3,
    reason: "The key issue is repayment capacity, not merely the number of loans. Responsible lending requires assessment of overall indebtedness and sustainable cash flows."
  },
  {
    id: 29,
    question: "At Kotak Mahindra Bank, Balasore, Mr. Mahesh Swain requests a ₹5 lakh micro business loan to expand his bicycle repair shop. Field verification shows his surplus supports only about ₹2.50 lakh. He insists on ₹5 lakh \"for the future.\" What should be recommended?",
    options: [
      "Sanction ₹5 lakh because the customer may expand later.",
      "Sanction the amount supported by the business requirement and repayment capacity after appraisal.",
      "Reject the application entirely.",
      "Sanction ₹5 lakh after obtaining two guarantors."
    ],
    correctAnswer: 1,
    reason: "Micro lending should be need-based and cash-flow driven. Sanctioning more than the justified requirement increases the risk of diversion and repayment stress."
  },
  {
    id: 30,
    question: "At SBI, Sitapur Rural Branch, \"Sakhi Mahila SHG\" (12 women) seeks a ₹3 lakh SHG loan. It was formed only 3 months ago, has irregular savings, incomplete minutes, and negligible internal lending. The promoting NGO wants immediate sanction. What should you do?",
    options: [
      "Sanction the loan because the NGO has recommended the group.",
      "Reject the application permanently.",
      "Assess the group's maturity, savings discipline, meeting records, internal lending, and eligibility under the bank's SHG financing guidelines before taking a decision.",
      "Sanction half the amount without appraisal."
    ],
    correctAnswer: 2,
    reason: "SHG lending is based on the group's financial discipline and maturity, not merely NGO recommendation. Savings regularity, meetings, records, and internal lending indicate repayment capacity."
  },
  {
    id: 31,
    question: "Three months after sanctioning a ₹4 lakh SHG loan for goat rearing, tailoring and grocery, the Branch Manager finds a significant portion was used for a family wedding. What should you do?",
    options: [
      "Ignore the matter because instalments are being paid.",
      "Verify and document the end-use, discuss the deviation with the SHG, and take action as per the loan agreement and the bank's monitoring policy.",
      "Immediately blacklist every SHG member.",
      "Sanction another loan so that the original purpose can be completed."
    ],
    correctAnswer: 1,
    reason: "Monitoring the end-use of funds is an important responsibility. Any deviation should be verified and addressed in accordance with the bank's policy."
  },
  {
    id: 32,
    question: "At Bank of India, Hardoi Rural Branch, \"Pragati Mahila SHG\" (14 months old, regular savings, active internal lending, excellent records) applies for its first ₹2.50 lakh bank linkage loan. The NGO wants quick sanction. What should you do?",
    options: [
      "Sanction immediately because the NGO has recommended the group.",
      "Reject because first-time SHGs are too risky.",
      "Complete the bank's appraisal of group maturity, financial discipline, records, repayment behaviour, and eligibility before sanctioning under the SHG-Bank Linkage Programme.",
      "Ask each member to apply individually."
    ],
    correctAnswer: 2,
    reason: "Bank linkage is based on the quality of the SHG, not merely its age or NGO recommendation. Proper appraisal ensures sustainable credit."
  },
  {
    id: 33,
    question: "At HDFC Bank, Indore, Mr. Akash Yadav says a local NBFC approved his tractor loan in one day while the bank is still processing. What should the Branch Manager do?",
    options: [
      "Promise immediate disbursement without completing appraisal.",
      "Criticize the NBFC's lending practices.",
      "Explain the bank's appraisal process, improve turnaround time where possible, and compete through efficient service while maintaining prudent credit standards.",
      "Reject the customer's application because he also approached an NBFC."
    ],
    correctAnswer: 2,
    reason: "Banks should compete with NBFCs through customer service, timely processing, and prudent lending, not by compromising appraisal standards."
  },
  {
    id: 34,
    question: "At Bank of Baroda, Bhavnagar, a customer asks whether an NBFC offering a much higher return than a bank FD is \"exactly the same\" as a bank FD. How should the RM advise?",
    options: [
      "Yes. Both products carry identical regulatory protections.",
      "Customers should understand that NBFC products and bank deposits are governed by different regulatory frameworks and may not provide the same protections. Product terms and risks should be understood before investing.",
      "RBI guarantees repayment of every NBFC investment.",
      "Banks and NBFCs follow identical deposit regulations."
    ],
    correctAnswer: 1,
    reason: "Customers should understand the nature of the product, applicable regulations, and associated risks rather than assuming it is identical to a bank Fixed Deposit."
  },
  {
    id: 35,
    question: "At Canara Bank, Salem, Mrs. Meena Krishnan says she already has an NBFC gold loan and asks if the bank can still consider her dairy loan. What should the Credit Officer do?",
    options: [
      "Reject because customers with NBFC loans are ineligible.",
      "Sanction automatically because she has already obtained credit elsewhere.",
      "Assess her total indebtedness, repayment capacity, and cash flows before deciding, in line with the bank's credit policy.",
      "Advise her to repay the gold loan immediately before discussing any new proposal."
    ],
    correctAnswer: 2,
    reason: "The existence of an NBFC loan neither automatically disqualifies nor qualifies a borrower. The key consideration is the customer's overall repayment capacity."
  },
  {
    id: 36,
    question: "The District Collector meets the Lead Bank Manager regarding a major rural irrigation canal. A trainee says, \"Banks should finance the project directly from branch deposits.\" Which response is most appropriate?",
    options: [
      "Large rural infrastructure projects may be supported through appropriate government financing mechanisms such as those involving NABARD's rural infrastructure initiatives, depending on eligibility and applicable schemes.",
      "Every branch should finance such projects directly.",
      "Only private companies can finance irrigation projects.",
      "Such projects cannot receive institutional financial support."
    ],
    correctAnswer: 0,
    reason: "NABARD has played a major role in supporting rural infrastructure development, including irrigation and other eligible projects, through appropriate financing mechanisms."
  },
  {
    id: 37,
    question: "At Bank of India, Nashik Rural Branch, grape growers want to form a Farmer Producer Organisation (FPO). How is NABARD relevant?",
    options: [
      "NABARD has no role in Farmer Producer Organisations.",
      "NABARD has actively supported the promotion and development of Farmer Producer Organisations as part of rural development and farmer collectivisation initiatives.",
      "Only SEBI regulates FPO promotion.",
      "FPOs can be financed only after becoming listed companies."
    ],
    correctAnswer: 1,
    reason: "NABARD has significantly contributed to FPO promotion, capacity building, and strengthening farmer collectives to improve rural livelihoods."
  },
  {
    id: 38,
    question: "At Axis Bank, Bijnor, Mr. Rakesh Kumar says, \"I already have an account with Baroda UP Bank. That is a Cooperative Bank, isn't it?\" What should the officer say?",
    options: [
      "Yes. Every Regional Rural Bank is a Cooperative Bank.",
      "No. A Regional Rural Bank is a scheduled commercial bank established under a separate legal framework to serve rural areas and promote financial inclusion.",
      "Regional Rural Banks are private sector banks.",
      "Regional Rural Banks operate only during crop seasons."
    ],
    correctAnswer: 1,
    reason: "RRBs are scheduled commercial banks established under the Regional Rural Banks Act, 1976. They are distinct from Cooperative Banks and are designed to serve rural and semi-urban areas."
  },
  {
    id: 39,
    question: "At HDFC Bank, Karnal Rural Branch, a trainee remarks, \"RRBs can sanction crop loans without following appraisal norms.\" What should the Branch Manager explain?",
    options: [
      "RRBs are exempt from credit appraisal.",
      "RRBs follow the same RBI regulations as commercial banks.",
      "RRBs appraise agricultural loans under applicable RBI guidelines and their own lending policies, just like other banks.",
      "RRBs sanction loans only after approval from NABARD."
    ],
    correctAnswer: 2,
    reason: "RRBs follow RBI's regulatory framework and their own board-approved credit policies. They conduct appraisal before sanctioning agricultural and other loans."
  },
  {
    id: 40,
    question: "At a village financial literacy camp, farmers say they prefer the nearby RRB because staff understands their crops, local market and harvesting cycle. Which answer is most appropriate?",
    options: [
      "RRBs generally have a strong rural presence and specialize in serving agriculture and rural communities while following commercial banking principles.",
      "RRBs provide interest-free loans.",
      "RRBs never recover overdue loans.",
      "RRBs lend without documentation."
    ],
    correctAnswer: 0,
    reason: "RRBs were created to strengthen rural banking with deep local outreach and expertise in agriculture and rural livelihoods."
  },
  {
    id: 41,
    question: "During a financial literacy camp, farmers state they prefer the nearby RRB because staff understands local farming realities. The Credit Officer asks why this perception exists. Which answer is most appropriate?",
    options: [
      "RRBs generally have a strong rural presence and specialize in serving agriculture and rural communities while following commercial banking principles.",
      "RRBs provide interest-free loans.",
      "RRBs never recover overdue loans.",
      "RRBs lend without documentation."
    ],
    correctAnswer: 0,
    reason: "RRBs were established to strengthen rural banking, with strong local outreach and expertise in agriculture and rural livelihoods."
  },
  {
    id: 42,
    question: "At ICICI Bank, Rohtak Rural Branch, Mr. Dharampal Singh applies for a ₹9 lakh loan to purchase 10 high-yielding milch buffaloes. The trainee remarks that only crop loans qualify under PSL. What should the Branch Manager do?",
    options: [
      "Treat it as a normal commercial loan because livestock is not agriculture.",
      "Explain that eligible dairy activities form part of agricultural lending under Priority Sector norms, subject to appraisal and RBI guidelines.",
      "Reject because only farmers owning agricultural land qualify.",
      "Advise the customer to approach NABARD directly."
    ],
    correctAnswer: 1,
    reason: "Eligible animal husbandry and dairy activities are covered under the agriculture component of Priority Sector Lending, subject to RBI guidelines and normal credit appraisal."
  },
  {
    id: 43,
    question: "At Axis Bank, Begusarai, Mrs. Sunita Devi (village grocery shop) applies for a ₹6 lakh working capital loan. The Credit Officer is unsure about PSL eligibility. What should you advise?",
    options: [
      "Small eligible MSME loans may qualify under Priority Sector Lending, subject to RBI norms and proper appraisal.",
      "Only agriculture qualifies under PSL.",
      "Every Current Account holder automatically qualifies for PSL.",
      "Retail trade can never qualify for PSL."
    ],
    correctAnswer: 0,
    reason: "Eligible MSME borrowers, including many small business enterprises, may qualify under PSL in accordance with RBI guidelines."
  },
  {
    id: 44,
    question: "At HDFC Bank, Jaipur, Mr. Pawan Sharma applies for a housing loan for his first residential house. The trainee says, \"Housing loans are never Priority Sector Loans.\" What should the Branch Manager explain?",
    options: [
      "All housing loans are automatically Priority Sector Loans.",
      "Housing loans can qualify as Priority Sector Loans only if they meet the applicable RBI eligibility conditions and prescribed limits.",
      "Housing loans are financed only by Housing Finance Companies.",
      "Priority Sector applies only in rural areas."
    ],
    correctAnswer: 1,
    reason: "Certain housing loans qualify under PSL only if they satisfy RBI's eligibility criteria, including applicable limits and conditions."
  },
  {
    id: 45,
    question: "At Bank of Baroda, Chhindwara, Mrs. Kiran Bai seeks a gold loan pledging jewellery for her daughter's marriage. The trainee says gold loans automatically qualify as PSL. What should you decide?",
    options: [
      "Every gold loan qualifies under PSL.",
      "Gold loans qualify under PSL irrespective of the purpose.",
      "A gold loan taken for personal marriage expenses does not qualify merely because gold is pledged. Eligibility depends on the underlying purpose and applicable RBI guidelines.",
      "Every secured loan qualifies under PSL."
    ],
    correctAnswer: 2,
    reason: "PSL classification depends on the eligible end-use and RBI guidelines, not merely on the security offered. A personal gold loan for marriage does not become PSL simply because it is secured by gold."
  },
  {
    id: 46,
    question: "At Kotak Mahindra Bank, Lucknow, Mr. Vivek Srivastava complains that ₹2.80 lakh has been debited from his Current Account through a cheque with a forged drawer's signature (though the cheque leaf was genuine). What should the Branch Manager decide?",
    options: [
      "The bank is protected because the cheque leaf belonged to the customer.",
      "The bank should ordinarily bear responsibility because payment on a forged drawer's signature is not a valid mandate from the customer.",
      "The customer must bear the loss because the cheque book was issued by the bank.",
      "Liability should automatically be shared equally between the bank and the customer."
    ],
    correctAnswer: 1,
    reason: "A forged signature is not the customer's mandate. If a bank pays on a forged drawer's signature, it generally cannot debit the customer's account merely because the cheque leaf was genuine."
  },
  {
    id: 47,
    question: "At PNB, Meerut, Mr. Ashok Gupta dies on Monday night. On Tuesday morning, before the branch receives any notice of death, a genuine cheque issued by him is presented — funds are available and particulars are in order. What is the legal position?",
    options: [
      "The cheque must always be dishonoured.",
      "If the bank has not yet received notice of the customer's death, payment may be made in accordance with the normal legal principles governing mandates.",
      "The cheque should be paid only after obtaining consent from the nominee.",
      "The cheque should be referred to RBI."
    ],
    correctAnswer: 1,
    reason: "The customer's mandate is ordinarily revoked when the bank receives notice of death. If the bank has no knowledge of the death at the time of payment, the legal position differs from a case where notice has already been received."
  },
  {
    id: 48,
    question: "At ICICI Bank, Muzaffarpur, marginal farmer Mr. Manoj Kumar says his neighbour claims only RRBs provide agricultural loans. What should you advise?",
    options: [
      "Only Regional Rural Banks can finance agriculture.",
      "Only Cooperative Banks can finance agriculture.",
      "Explain that Commercial Banks, Regional Rural Banks, Cooperative Banks, and other eligible institutions may provide agricultural loans, subject to their lending policies and applicable guidelines.",
      "Advise the customer to approach NABARD directly."
    ],
    correctAnswer: 2,
    reason: "Agricultural finance is not the exclusive domain of RRBs. Commercial Banks, RRBs, Cooperative Banks and other eligible financial institutions all play important roles."
  },
  {
    id: 49,
    question: "At a financial literacy camp, villagers ask, \"Why are there so many different types of banks instead of just one?\" Which answer best reflects the Indian banking system?",
    options: [
      "Different types of banks exist because each category serves specific customer segments, developmental objectives, and business needs while operating under the overall regulatory framework.",
      "Different banks exist only because states requested separate banks.",
      "Every bank performs exactly the same function.",
      "Different banks are created only to increase competition."
    ],
    correctAnswer: 0,
    reason: "India has multiple categories of banks because the financial needs of farmers, MSMEs, corporates, rural households, urban customers and financially excluded groups differ significantly. Specialized institutions help improve financial inclusion and economic development."
  },
  {
    id: 50,
    question: "At Axis Bank, Gorakhpur, Mr. Ram Pratap asks for the RBI office address so he can get a cheaper crop loan directly since RBI has reduced the Repo Rate. What should the Branch Manager explain?",
    options: [
      "RBI sanctions crop loans directly to farmers.",
      "RBI normally does not lend directly to individual customers. It regulates banks, formulates monetary policy, and provides liquidity to the banking system.",
      "RBI finances only corporate borrowers.",
      "RBI sanctions all Priority Sector Loans directly."
    ],
    correctAnswer: 1,
    reason: "The RBI is India's central bank, not a retail lending institution. Customers obtain loans from banks and eligible financial institutions, while RBI influences credit conditions through monetary policy and regulation."
  },

  // ===== Case Study 1: SHG Bank Linkage (Q51-54) =====
  {
    id: 51,
    marks: 2.5,
    caseStudy: caseStudy1,
    question: "Which is the MOST important concern before sanctioning the SHG loan?",
    options: [
      "The NGO wants quick sanction.",
      "The SHG has maintained its Savings Account with your branch.",
      "The dairy project appears profitable.",
      "Whether the proposed loan is within the SHG's overall repayment capacity after considering existing indebtedness and projected cash flows."
    ],
    correctAnswer: 3,
    reason: "Excellent repayment history is positive, but responsible lending requires assessment of total indebtedness, household cash flows, and repayment capacity. Multiple borrowings by members do not automatically justify rejection but require careful analysis."
  },
  {
    id: 52,
    marks: 2.5,
    caseStudy: caseStudy1,
    question: "During field verification you discover two members have existing MFI loans that were not disclosed in the first interview. What should be your next step?",
    options: [
      "Reject the SHG immediately.",
      "Ignore the information because the SHG has good repayment history.",
      "Reassess member-wise indebtedness, verify repayment obligations, discuss the findings with the SHG, and then take a credit decision.",
      "Ask the NGO to certify that repayment will be regular."
    ],
    correctAnswer: 2,
    reason: "Non-disclosure should trigger additional verification, not automatic rejection. A prudent banker reassesses the proposal based on complete information before deciding."
  },
  {
    id: 53,
    marks: 2.5,
    caseStudy: caseStudy1,
    question: "The NGO representative repeatedly says, \"Every other bank sanctions SHG loans within two days. If you delay, the group will shift to another bank.\" What is the most appropriate response?",
    options: [
      "Sanction immediately to retain the customer.",
      "Explain that the bank supports SHGs but will complete appraisal, documentation, and due diligence before sanctioning.",
      "Reject the proposal because the NGO is exerting pressure.",
      "Ask the Regional Office to sanction the loan directly."
    ],
    correctAnswer: 1,
    reason: "Customer service and business growth are important, but credit appraisal cannot be compromised due to external pressure."
  },
  {
    id: 54,
    marks: 2.5,
    caseStudy: caseStudy1,
    question: "After detailed appraisal you conclude: SHG functioning is excellent, existing borrowings are manageable, cash-flow estimates need slight revision, and dairy activity is viable after moderating projected income. What is the best credit decision?",
    options: [
      "Reject the proposal because multiple borrowings exist.",
      "Sanction the entire ₹6 lakh without modification.",
      "Reduce the loan to ₹3 lakh without explaining the reasons.",
      "Sanction an appropriate amount based on revised cash-flow assessment, document the rationale, and plan periodic end-use monitoring."
    ],
    correctAnswer: 3,
    reason: "Good banking combines business growth with prudent risk management. The loan amount should reflect actual repayment capacity, and post-disbursement monitoring should be planned from the outset."
  },

  // ===== Case Study 2: Fresh Milk Foods (Q55-58) =====
  {
    id: 55,
    marks: 2.5,
    caseStudy: caseStudy2,
    question: "During the visit the proprietor explains the plant's processing capacity, but the Credit Officer spends nearly 45 minutes talking to milk suppliers in nearby villages. Why?",
    options: [
      "To verify whether farmers are happy with the bank.",
      "To assess whether a reliable and sustainable milk procurement network actually exists, as uninterrupted raw material supply is critical for the project's success.",
      "To find out whether farmers require crop loans.",
      "To estimate the market price of buffaloes."
    ],
    correctAnswer: 1,
    reason: "An experienced Credit Officer knows a dairy plant without assured milk supply is only a building with machines. Supplier relationships and payment discipline are often more important than installed capacity."
  },
  {
    id: 56,
    marks: 2.5,
    caseStudy: caseStudy2,
    question: "The Credit Officer asks, \"Where will your finished milk be sold tomorrow morning?\" Why is this question important?",
    options: [
      "The bank wants to know the selling price of milk.",
      "Processing capacity alone does not generate repayment. The Credit Officer must verify the marketing and distribution arrangements that convert production into cash flows.",
      "RBI requires every borrower to disclose retail prices.",
      "Because GST registration depends upon retailers."
    ],
    correctAnswer: 1,
    reason: "Many projects fail not because production is weak, but because sales are weak. Credit officers finance cash flows, not machines."
  },
  {
    id: 57,
    marks: 2.5,
    caseStudy: caseStudy2,
    question: "The Credit Officer notices no diesel generator is installed although power failures are common. The borrower says he will buy it after receiving the loan. What should be the approach?",
    options: [
      "Ignore the issue because the generator is a small item.",
      "Treat it as an operational risk, assess its impact on preservation of milk, and evaluate whether project implementation should include adequate backup power before full operations commence.",
      "Reject the proposal immediately.",
      "Reduce the Cash Credit limit."
    ],
    correctAnswer: 1,
    reason: "A smart Credit Officer looks beyond fixed assets and identifies operational bottlenecks. A few hours without refrigeration can spoil inventory and disrupt cash flows."
  },
  {
    id: 58,
    marks: 2.5,
    caseStudy: caseStudy2,
    question: "The borrower projects milk procurement will grow from 3,200 to 5,000 litres per day within one year. Which is the best verification method during the field visit?",
    options: [
      "Accept the projection because the promoter has experience.",
      "Verify procurement records, supplier capacity, collection routes, village-wise milk availability, and discuss future procurement with major suppliers.",
      "Compare the estimate with another dairy plant.",
      "Ask only the Chartered Accountant."
    ],
    correctAnswer: 1,
    reason: "Good projections require independent validation. Field verification with suppliers and procurement records is more reliable than relying solely on management statements."
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Axis Bank Bharat Banking — Batch 4",
  professor: "ANIL AGGARWAL",
  date: "28.07.2026",
  totalQuestions: 58,
  totalMarks: 120,
  marksPerQuestion: 2,
  timeLimit: 60,
  isStructure2: false,
  rules: [
    "Read each question carefully before answering",
    "Questions 1–50 carry 2 marks each (100 marks)",
    "Questions 51–58 are case-study based and carry 2.5 marks each (20 marks)",
    "Total marks: 120  •  Total time: 1 hour",
    "Only one submission per roll number allowed",
    "Click 'Submit Quiz' to finish, or the quiz will auto-submit when time expires"
  ]
};
