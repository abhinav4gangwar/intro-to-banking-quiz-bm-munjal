export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: number;
  reason?: string;
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

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Before the landmark economic reforms of 1991, an Indian corporate house looking to launch an IPO was legally blocked from deciding its own share price. A government official fixed the price using rigid accounting formulas. When the Indian government abolished the Controller of Capital Issues (CCI) in 1992, how did this structural shift fundamentally change the evolution of investment banking?",
    options: [
      "It forced investment banks to obtain mandatory daily pricing approvals directly from the Reserve Bank of India.",
      "It granted investment banks the freedom to discover and set share prices based on actual institutional market demand.",
      "It required investment banks to sell at least 50% of all public equity issues directly to public sector undertakings.",
      "It shifted the absolute authority of corporate share price-fixing to the newly formed national stock exchanges."
    ],
    correctAnswer: 1,
    reason: "The abolition of the CCI in 1992 dismantled the government's rigid price-control regime. This evolutionary milestone allowed investment banks to introduce free-market pricing mechanisms, enabling them to evaluate market demand and price shares dynamically through book-building."
  },
  {
    id: 2,
    question: "A prominent Indian investment banking firm compared its transaction data from 1995 against its deal pipeline in 2025. In 1995, 90% of its fees came from managing basic local public share issues. In 2025, the vast majority of its revenue is driven by cross-border Mergers & Acquisitions (M&A) and private equity exits. What does this evolutionary shift in the fee pool conceptually signal about the transformation of the Indian corporate ecosystem?",
    options: [
      "Retail investors have entirely stopped buying public equity shares, forcing companies to rely exclusively on foreign loans.",
      "Indian commercial banks have completely monopolized the domestic underwriting market, pushing investment banks out of the IPO space.",
      "The Indian corporate landscape has matured from simple domestic fundraising to high-value global expansions and sophisticated private capital deals.",
      "SEBI has imposed strict statutory caps on public IPO fees, making traditional listing transactions unprofitable for investment banks."
    ],
    correctAnswer: 2,
    reason: "The evolution of the Modern Global Era (2000s–present) reflects a sophisticated economy. Corporations are no longer just looking to raise basic debt or equity locally; they are actively engaging in cross-border expansions, industry consolidation, and working with complex alternative private pools of capital."
  },
  {
    id: 3,
    question: "A leading Indian entertainment conglomerate wants to completely buy out a smaller, regional digital streaming app to eliminate competition and gain access to their subscriber base. They hire an elite investment banking team to handle the deal. What is the primary tactical role of the investment bankers acting within the scope of Corporate Advisory services for this transaction?",
    options: [
      "Lending the bank's own corporate treasury cash to pay for the streaming app's outstanding liabilities.",
      "Valuation of the target app, designing the deal structure, and negotiating the final purchase price.",
      "Managing the daily software integration and customer service transition of the acquired digital application.",
      "Registering the transaction as a public sector amalgamation directly with the Reserve Bank of India."
    ],
    correctAnswer: 1,
    reason: "Within the scope of Corporate Advisory (M&A), investment bankers act as strategic intermediaries. They do not lend money or manage operations; their job is to value the target business, structure the financial terms of the deal, and negotiate the best price for their client."
  },
  {
    id: 4,
    question: "Before a private developer breaks ground on a massive Public-Private Partnership (PPP) greenfield seaport in India, they hire an investment banking team to perform comprehensive Project Advisory services. What is the core objective of the investment banking team executing this specific project advisory mandate?",
    options: [
      "Building a comprehensive long-term financial model to test feasibility and ensure the project is bankable for investors.",
      "Hiring the physical engineering workforce and purchasing the construction materials for the port.",
      "Guaranteeing that the stock market price of the port will double within the first six months of operation.",
      "Underwriting a short-term public equity issue to sell port tickets directly to retail consumers."
    ],
    correctAnswer: 0,
    reason: "Project Advisory happens before a capital-intensive asset is built. Bankers create rigorous, multi-decade financial projection models to evaluate cash flows, assess financial risks, and ensure the project structure can successfully attract large-scale institutional investment."
  },
  {
    id: 5,
    question: "An Indian consumer electronics company has appointed an investment bank to manage its upcoming IPO. Instead of fixing a single rigid share price on day one, the investment bank decides to discover the fair market price by inviting institutional buyers to bid within a specific price range. What is the formal financial name for this modern dynamic pricing mechanism managed by the investment bank?",
    options: [
      "Fixed Price Equity Allocation (FPEA)",
      "Book Building Process, where the final price is determined based on real-time market demand within a price band.",
      "Private Placement Rationing (PPR), where the corporate issuer forces retail buyers to accept predefined values.",
      "Margin Safety Arbitrage (MSA), where stock exchange clearing houses automatically fix public trading costs."
    ],
    correctAnswer: 1,
    reason: "Book building is the standard process where an investment bank determines the final IPO share price by collecting bids from institutional and retail investors within a designated floor price and cap price band, matching it against actual demand."
  },
  {
    id: 6,
    question: "A corporate renewable energy firm launches a public issue to raise ₹800 Crore. Due to sudden, unexpected political instability, regular market investors become hesitant, creating a major risk that the public issue will not be fully subscribed by the closing deadline. How does the investment bank's contract of \"Underwriting\" protect the energy company from this capital-raising failure?",
    options: [
      "The investment bank forces the Indian central government to legally buy all the remaining unsold corporate assets.",
      "The investment bank legally cancels the entire transaction and returns all application monies without charging fees.",
      "The investment bank legally binds itself to purchase the remaining unsold shares or bonds using its own institutional capital.",
      "The investment bank automatically converts the public equity issue into a short-term commercial bank cash credit line."
    ],
    correctAnswer: 2,
    reason: "Underwriting is a risk-mitigation service where the investment bank guarantees the successful sale of the issue. If the public does not buy 100% of the minimum required shares, the underwriter steps in and buys the remainder using its own funds."
  },
  {
    id: 7,
    question: "A major automobile manufacturing company has been successfully listed on the National Stock Exchange (NSE) for over ten years. To finance a new electric vehicle engine factory, they hire an investment bank to launch a massive new equity share sale to the public. Which specific financial instrument will the investment bank structure to manage this subsequent public equity capital-raising exercise?",
    options: [
      "Initial Public Offering (IPO)",
      "Follow-on Public Offer (FPO)",
      "Qualified Private Placement (QPP)",
      "Mezzanine Debt Syndication (MDS)"
    ],
    correctAnswer: 1,
    reason: "When an already listed public company issues fresh or additional shares to the general public to raise extra capital, the transaction is structurally classified as a Follow-on Public Offer (FPO), as opposed to an IPO, which is only for a company's very first listing."
  },
  {
    id: 8,
    question: "A top-tier Indian housing finance corporation wants to raise ₹300 Crore through corporate bonds. To save time and avoid the heavy legal expenses of printing public prospectuses and launching national marketing campaigns, they want to bypass the general public entirely. Which specific distribution channel within the scope of debt management allows the investment bank to sell these bonds directly to a select group of institutional investors?",
    options: [
      "Retail Book Building Route (RBBR)",
      "Public Debt Issuance Program (PDIP)",
      "Private Placement, where securities are sold directly to a select group of sophisticated institutional investors like insurance funds.",
      "Main-Board Public Underwriting (MBPU), where bonds are auctioned directly via automated retail stock exchange screens."
    ],
    correctAnswer: 2,
    reason: "A Private Placement allows a corporate issuer to sell debt or equity instruments directly to a small, pre-selected group of sophisticated institutional investors (like banks, pension funds, or insurance firms), completely bypassing the expensive and time-consuming regulatory requirements of a mass public offer."
  },
  {
    id: 9,
    question: "An investment banker is valuing an Indian quick-commerce startup with high revenue growth, an active customer app interface, but massive net losses due to heavy initial marketing spending. The startup owns no physical land, warehouses, or delivery fleets. Which primary valuation methodology should the corporate advisory team use to find the intrinsic value of this asset-light tech company?",
    options: [
      "Net Asset Value (NAV) method, by calculating the liquidation value of the startup's physical assets and office equipment.",
      "Discounted Cash Flow (DCF) method, by forecasting future long-term free cash flows and discounting them to present value.",
      "Comparable Transaction Multiples, by applying a price-to-earnings (P/E) multiple benchmark based on legacy retail supermarkets.",
      "Book Value Optimization, by adjusting historical balance sheet numbers to reflect current brand equity margins."
    ],
    correctAnswer: 1,
    reason: "For asset-light, loss-making tech companies, traditional asset-backed methods or historical profit multiples fail. The DCF method is the correct tool for finding intrinsic value because it looks forward, evaluating the present value of the firm's future cash flows once it scales and turns profitable."
  },
  {
    id: 10,
    question: "A foreign institutional investor quietly buys up a 14% stake in a listed Indian infrastructure company from the open market and announces plans to launch a bid to remove the current founders. The current founders own only 22% of the equity and want to block this unwanted takeover. Which protective defense strategy should the corporate advisory desk recommend to the current founders?",
    options: [
      "Request SEBI to permanently freeze all open-market trading screens for infrastructure sector stocks.",
      "Execute a \"White Knight\" strategy, bringing in a friendly, allied investment partner to buy shares and outbid the hostile raider.",
      "Voluntarily trigger an immediate legal liquidation of all physical corporate assets to deny the raider any equity value.",
      "Force all retail public shareholders to surrender their voting proxies to the board of directors without compensation."
    ],
    correctAnswer: 1,
    reason: "A \"White Knight\" defense is a classic corporate advisory strategy where a target company invites a friendly investor or corporation to acquire a stake and help outbid a hostile raider, allowing the company to avoid a forced takeover."
  },
  {
    id: 11,
    question: "The board of directors of an Indian pharmaceutical company is preparing to sell its core generic medicine portfolio to a global healthcare group. The board wants to insulate itself from potential future lawsuits by minority shareholders who might claim the assets were sold too cheaply. Which critical document must the corporate advisory team arrange to protect the board from this specific legal risk?",
    options: [
      "An official corporate tax exemption certificate stamped by the Central Board of Direct Taxes.",
      "A formal Fairness Opinion issued by an independent investment bank, validating that the transaction price is financially reasonable.",
      "A registered underwriting solvency guarantee signed by the National Stock Exchange's clearing corporation.",
      "A mandatory debenture covenant waiver issued by the lead commercial bank's credit risk management committee."
    ],
    correctAnswer: 1,
    reason: "A Fairness Opinion is a professional, independent report that evaluates the financial terms of a transaction. It provides objective evidence to shareholders that the board acted in good faith and secured a fair price, protecting the directors from breach-of-fiduciary-duty lawsuits."
  },
  {
    id: 12,
    question: "Two dominant Indian cement manufacturing giants announce an agreement to merge their operations. Their corporate advisors warn them that the unified company will control nearly 58% of the cement supply in Western India, potentially giving them unfair price-fixing power. Which Indian statutory regulatory body has the legal authority to review, alter, or block this corporate advisory transaction?",
    options: [
      "The Securities and Exchange Board of India (SEBI), under the provisions of the Insider Trading Regulations.",
      "The Reserve Bank of India (RBI), under the strict guidelines of the Foreign Exchange Management Act.",
      "The Competition Commission of India (CCI), under the provisions of the Competition Act, to prevent anti-competitive combinations.",
      "The National Company Law Tribunal (NCLT), acting strictly as an international tax arbitration clearinghouse."
    ],
    correctAnswer: 2,
    reason: "The Competition Commission of India (CCI) is tasked with reviewing large mergers and acquisitions to ensure they do not result in an Appreciable Adverse Effect on Competition (AAEC) or create an unfair monopoly within the Indian market."
  },
  {
    id: 13,
    question: "A state government wants to build a new metro rail line. They want a private infrastructure company to construct and maintain it, but the government wants to eliminate the private company's risk of losing money if passenger ticket sales are low. The advisory desk structures a model where the government pays the developer a fixed, guaranteed biannual fee for 20 years just for keeping the tracks operational, while the government collects the actual ticket cash. Which standard Public-Private Partnership (PPP) framework has the project advisory team implemented here?",
    options: [
      "Merchant Facility Model, where the private developer takes 100% of the long-term traffic and commercial pricing risk.",
      "Annuity Model, where the government removes traffic risk by making fixed, periodic payments to the developer for building the asset.",
      "Leveraged Capital Grant Model, where the government pays for the entire construction upfront using physical gold reserves.",
      "Delisting Carve-out Model, where the metro line is converted into a private corporate entity on the stock exchange."
    ],
    correctAnswer: 1,
    reason: "In an Annuity PPP model, the concessionaire (private developer) does not bear the risk of fluctuating user traffic. The government makes regular, fixed payments (annuities) to the developer over a set period, providing a highly predictable and low-risk return structure for investors."
  },
  {
    id: 14,
    question: "An infrastructure developer is building a high-speed rail corridor in India. They are sourcing heavy locomotives and specialized tracks from a Japanese manufacturing company, requiring a massive payment in Japanese Yen (JPY) in exactly 24 months. The project advisory team is worried that if the Indian Rupee (INR) weakens against the Yen over the next two years, the project's construction costs will spiral out of control. Which proactive risk-management solution should the project advisory team integrate into the financial plan?",
    options: [
      "Force the Japanese manufacturer to accept physical Indian retail shopping vouchers as full payment for the trains.",
      "Arrange a Currency Forward or Swap contract through a financial desk to lock in the INR-to-JPY exchange rate right now.",
      "Advise the developer to stop construction for 24 months and wait for global currency markets to naturally stabilize.",
      "Convert the entire railway project into a short-term venture capital startup to bypass local foreign exchange laws."
    ],
    correctAnswer: 1,
    reason: "Project advisors use financial derivatives like forward contracts or currency swaps to manage macroeconomic risks. By locking in the exchange rate ahead of time, they eliminate currency volatility risk, ensuring that sudden fluctuations won't cause a project budget blowout."
  },
  {
    id: 15,
    question: "An Indian solar energy developer requires ₹3,500 Crore to build a mega solar farm. A single private commercial bank likes the project but refuses to lend the entire amount alone because doing so would breach their statutory single-borrower exposure limits set by the RBI. How does the mechanism of a syndicated loan solve this operational risk control challenge for both the bank and the borrower?",
    options: [
      "It automatically forces the Reserve Bank of India to provide interest-free sovereign cash grants to cover the balance.",
      "It allows the lead bank to distribute chunks of the single large loan across a group of multiple banks, spreading the default risk.",
      "It splits the energy company into 20 tiny independent firms so each can apply for a small retail bank loan.",
      "It legally converts the entire long-term debt package into an active equity initial public offering (IPO) overnight."
    ],
    correctAnswer: 1,
    reason: "Loan syndication allows multiple financial institutions to fund different portions of a single, massive loan facility. This enables individual banks to participate in large transactions without exceeding their internal credit risk exposure boundaries."
  },
  {
    id: 16,
    question: "An investment bank is syndicating a ₹1,800 Crore debt package for a new pharmaceutical manufacturing lab. The lead arranger compiles a highly detailed, 150-page document containing the company's audited financials, project cash projections, asset valuations, and risk factors to present to potential participating banks. What is the formal financial name and conceptual purpose of this primary syndication document?",
    options: [
      "Red Herring Equity Prospectus, designed to market public shares directly to regular retail individual investors.",
      "Information Memorandum (or IM), designed to provide potential syndicate member banks with the necessary data to perform credit evaluations.",
      "Mandatory Debt Covenant Waiver, designed to legally excuse the borrower from making future interest payments.",
      "Article of Association Addendum, designed to change the corporate promoter voting rights on the stock exchange."
    ],
    correctAnswer: 1,
    reason: "The Information Memorandum (IM) is the confidential document created by the Lead Arranger. It outlines the financial and operational health of the borrower, allowing other banks to conduct their internal due diligence before joining the syndicate."
  },
  {
    id: 17,
    question: "An Indian infrastructure company that borrowed ₹3,000 Crore through a syndicated loan faces a severe cash-flow crisis due to an economic downturn. They realize they cannot make their upcoming quarterly principal repayment and request an emergency 2-year extension on the loan tenure. How must the lead agent bank handle this operational decision according to standard syndication rules?",
    options: [
      "The agent bank can automatically grant the 2-year extension on its own without informing any other syndicate member.",
      "The agent bank must immediately sue the borrower in bankruptcy court and liquidate all assets without a vote.",
      "The agent bank must call a vote among all syndicate members, as changing core repayment terms requires majority or unanimous lender consent.",
      "The agent bank must force the borrower to convert the entire infrastructure project into an interest-free government grant."
    ],
    correctAnswer: 2,
    reason: "A syndicated loan is a collective agreement. Material changes to core loan terms—such as modifying the interest rate, extending maturity, or releasing primary collateral—cannot be decided by one bank; they require a vote and formal consent from the syndicate members according to the loan agreement rules."
  },
  {
    id: 18,
    question: "A logistics company is midway through a ₹2,000 Crore loan syndication process. Suddenly, the government passes a law that outlaws the company's primary transport fleet mechanism, instantly wiping out 70% of its projected future revenues. The lead arranger immediately invokes the \"Material Adverse Change\" (MAC) clause in the credit agreement. What is the tactical purpose of a MAC clause within a loan syndication transaction?",
    options: [
      "It allows lenders to legally withdraw from their funding commitments or declare a default if the borrower suffers a catastrophic financial decline.",
      "It forces the borrower to automatically double the salary of all working factory laborers using bank treasury funds.",
      "It legally exempts the borrowing company from ever having to pay corporate income taxes to the central government.",
      "It requires the stock exchange to permanently halt all trading activities for the borrower's public retail stock."
    ],
    correctAnswer: 0,
    reason: "A Material Adverse Change (MAC) clause is a crucial protective covenant. It gives lenders the legal right to stop funding or cancel a loan facility if a drastic, unforeseen event occurs that severely threatens the borrower's ability to repay the debt."
  },
  {
    id: 19,
    question: "A food-tech startup raised a Series A round at a share price of ₹100. One year later, due to a severe economic slowdown and intense competition, the company is running out of cash and is forced to raise a Series B round at a lower share price of ₹60 (a \"Down Round\"). The Series A VC investor invokes their \"Anti-Dilution\" clause. What is the practical purpose of an Anti-Dilution clause within a venture capital shareholder agreement?",
    options: [
      "It protects early investors from economic loss by adjusting their share conversion ratio if the company issues shares at a lower price in later rounds.",
      "It legally forces the startup founders to return 100% of all past investment cash to the investors immediately in physical gold.",
      "It automatically requires the stock exchanges to permanently ban the company from ever launching a public IPO.",
      "It converts all employee stock options into short-term high-interest debt liabilities backed by parent company real estate."
    ],
    correctAnswer: 0,
    reason: "An anti-dilution clause protects early venture capital investors if the startup falls into a \"down round\" (selling shares cheaper than before). The clause recalculates the conversion price or issues extra fractional shares to the early investor, shielding their capital from a severe loss of value."
  },
  {
    id: 20,
    question: "A VC fund is about to invest ₹10 Crore in a revolutionary drone startup. The fund is terrified that the genius tech co-founder might take the investment cash on day one, quit the company, and start a rival business while still keeping his massive 40% equity stake. Which standard venture capital structural mechanism must the VC build into the legal term sheet to ensure the co-founder stays aligned with the business long-term?",
    options: [
      "Immediate Public Delisting Order",
      "Stock Vesting Schedule, which requires founders to earn their equity allocation gradually over a multi-year period of continuous work.",
      "Debt Service Coverage Covenant",
      "Reverse Book-Building Allotment"
    ],
    correctAnswer: 1,
    reason: "Equity vesting is a mandatory standard in venture capital. Founders do not own 100% of their shares unconditionally on day one; instead, they \"earn\" ownership monthly or yearly over a set period (typically 4 years). If a founder leaves early, they forfeit their unvested shares back to the company."
  },
  {
    id: 21,
    question: "An MBA student is analyzing how a venture capital firm operates. She notes that the firm consists of two entities: wealthy institutions (like pension funds) that provide 99% of the investment cash but do not pick startups, and professional fund managers who select the startups and run daily fund operations. Based on corporate structures in venture finance, what are the formal industry titles of these two separate fund participants?",
    options: [
      "Retail Individual Broker and Lead Clearinghouse Broker",
      "Underwritten Book Runner and Participating Institutional Underwriter",
      "Limited Partners (LPs) who provide the capital, and General Partners (GPs) who manage the investment fund.",
      "Primary Secured Creditor and Secondary Subordinated Creditor"
    ],
    correctAnswer: 2,
    reason: "Venture capital funds are typically structured as limited partnerships. The Limited Partners (LPs) are the passive investors who supply the cash (endowments, family offices), while the General Partners (GPs) are the professional venture capitalists who source, evaluate, and manage the startup investments."
  },
  {
    id: 22,
    question: "An AI startup secures a Series A cash injection of ₹12 Crore. The startup's monthly fixed operational expenses (salaries, office space, server costs) total ₹50 Lakh, and they generate zero revenue. Their project advisory desk calculates that the startup has a \"Runway\" of exactly 24 months before they hit zero cash. What is the formal financial name for this monthly rate of cash consumption in a venture-backed startup?",
    options: [
      "Amortization Spread Ratio",
      "Liquidation Arbitrage Margin",
      "Dividend Yield Capacity",
      "Burn Rate, which measures the net speed at which a pre-revenue company consumes its capital reserves to fund daily operations."
    ],
    correctAnswer: 3,
    reason: "The \"Burn Rate\" represents the speed at which a startup spends its cash reserves to cover operational overheads before generating positive cash flow from operations. Monitoring the burn rate helps founders calculate their remaining operational runway."
  },
  {
    id: 23,
    question: "A PE firm wants to buy a mature, cash-generating Indian plastic packaging company for ₹500 Crore. Instead of using ₹500 Crore of their own money, the PE firm puts up ₹100 Crore of its own cash and borrows the remaining ₹400 Crore from commercial banks, using the packaging company's physical machinery as collateral. Which classic Private Equity transaction model is being executed in this situation?",
    options: [
      "Leveraged Buyout (LBO), which uses a high percentage of borrowed money secured by the target's assets to fund the purchase.",
      "Angel Placement Allocation, which connects wealthy family offices with pre-revenue smartphone apps.",
      "Follow-on Public Offer (FPO), which issues fresh equities to regular individual retail buyers on the NSE.",
      "Mezzanine Lease Swap, which trades short-term supplier bills for retail shopping vouchers."
    ],
    correctAnswer: 0,
    reason: "A Leveraged Buyout (LBO) is a defining strategy of Private Equity. The PE firm uses a heavy mix of debt (leverage) to buy control of a mature company. The target company's steady cash flows are then used to pay off the bank loans over time."
  },
  {
    id: 24,
    question: "An MBA student is comparing two private investment funds. Fund X completely avoids raw tech prototypes, focusing instead on buying massive controlling stakes in mature, cash-generating dairy businesses. Fund Y focuses on buying minor 5% stakes in unproven, high-growth AI software apps. Based on standard introductory definitions, how should the student classify Fund X and Fund Y?",
    options: [
      "Fund X is a Public Sector Unit; Fund Y is a Distressed Asset Consortium.",
      "Fund X is a Private Equity Fund; Fund Y is a Venture Capital Fund.",
      "Fund X is a Subordinated Debt Desk; Fund Y is an Underwritten Book Runner.",
      "Both funds represent identical early-stage angel brackets backed by sovereign gold reserves."
    ],
    correctAnswer: 1,
    reason: "Traditional Private Equity (PE) targets mature, stable, and profitable companies with established cash flows. Venture Capital (VC) is a subset of PE that specifically targets early-stage, high-risk, pre-profit startups that have massive exponential growth potential."
  },
  {
    id: 25,
    question: "A Private Equity firm raises ₹1,000 Crore from large pension funds. The fund's legal contract contains a clause stating that the professional PE managers will receive zero performance bonuses unless they first manage to deliver a minimum annualized return of at least 8% to their pension fund backers. What is the introductory industry term for this minimum baseline return threshold required by investors?",
    options: [
      "Dividend Yield Target",
      "Debt Service Coverage Ratio",
      "Hurdle Rate",
      "Treasury Bill Discount Rate"
    ],
    correctAnswer: 2,
    reason: "The Hurdle Rate is the minimum rate of return that a private equity fund must achieve for its investors (Limited Partners) before the fund managers (General Partners) are allowed to take their share of the performance profits."
  },
  {
    id: 26,
    question: "A large steel mill in India falls into deep financial distress, defaults on its commercial loans, and enters bankruptcy proceedings. A specialized private equity fund steps in and buys up these unpaid bank loans at a deep 60% discount, aiming to convert that debt into a controlling equity stake and turn the factory around. Which private equity strategy describes this process of investing in the cheap liabilities of failing corporations?",
    options: [
      "Pre-Seed Angel Allocation",
      "Greenfield Project Advisory",
      "Distressed Debt",
      "Follow-on Public Underwriting"
    ],
    correctAnswer: 2,
    reason: "Distressed debt investing involves buying up the credit or debt papers of troubled or near-bankrupt companies at a fraction of their face value. The PE firm uses this debt ownership position to swap the liabilities for equity control during bankruptcy or restructuring court procedures."
  },
  {
    id: 27,
    question: "Two prominent Indian quick-commerce delivery apps complete a friendly merger. Their investment banking advisors demonstrate that by sharing the same physical delivery fleets, unifying local dark stores, and using a single technical server grid, the combined company can save ₹200 Crore annually. What is the formal financial term for these specific cost-saving benefits generated by combining the two firms?",
    options: ["Revenue Synergies", "Financial Arbitrage", "Cost Synergies", "Liquidity Premiums"],
    correctAnswer: 2,
    reason: "Cost synergies refer to the duplicate operating expenses that a combined company can cut out after an M&A transaction to maximize operating profit margins."
  },
  {
    id: 28,
    question: "An Indian private bank acquires a premium health insurance company. The bank's marketing directors plan to immediately pitch insurance policies directly to the bank's existing 15 million credit card holders, aiming to boost total group revenue. Which specific synergy type are the corporate advisors trying to unlock for the bank group?",
    options: ["Capital Structure Synergies", "Revenue Synergies", "Production Scale Synergies", "Regulatory Tax Arbitrage"],
    correctAnswer: 1,
    reason: "Revenue synergies are achieved when the combined company generates higher total sales than the two firms could manage independently, typically via cross-selling products to an expanded customer base."
  },
  {
    id: 29,
    question: "During a high-profile corporate transaction negotiation reported on the business news, an analyst refers to a global private equity fund as \"The Bidder.\" In the basic terminology of mergers and acquisitions, which entity does \"The Bidder\" represent?",
    options: ["The Target Company", "The Intermediary Bank", "The Regulatory Watchdog", "The Acquiring Company"],
    correctAnswer: 3,
    reason: "In M&A terminology, the bidding company (or acquirer) is the entity initiating the transaction and attempting to purchase a piece of another business."
  },
  {
    id: 30,
    question: "A legacy Indian consumer goods conglomerate is evaluating whether to sell its organic skincare division to a foreign buyer. In the investment banking pitch documents, this specific division is labeled as \"The Target.\" Based on introductory financial definitions, what does \"The Target\" signify?",
    options: ["The regulatory clearance desk", "The company being acquired", "The underwritten book runner", "The lead syndication arranger"],
    correctAnswer: 1,
    reason: "\"The Target\" is the standard term used to identify the specific corporate entity, subsidiary, or asset pool that an acquirer wants to buy."
  },
  {
    id: 31,
    question: "A wealthy investment group starts buying up public shares of an Indian software developer from the open market. The group announces a plan to replace the board of directors, even though the current founders and management strongly oppose the buyout. How should the corporate advisory desk classify this type of acquisition attempt?",
    options: ["Friendly Takeover", "Hostile Takeover", "Voluntary Amalgamation", "Concentric Divestiture"],
    correctAnswer: 1,
    reason: "A hostile takeover occurs when an acquirer bypasses management and attempts to gain control of a target company against the explicit wishes of its current board of directors."
  },
  {
    id: 32,
    question: "The founders of a premium tea estate brand realize they need global capital to scale up. They approach a major beverage conglomerate, share their financial books willingly, and both corporate boards mutually agree on a fair stock swap deal. What is the correct financial classification for this corporate transaction style?",
    options: ["Open Market Raid", "Proxy Contest Buyout", "Friendly Takeover", "Leveraged Carve-out"],
    correctAnswer: 2,
    reason: "A friendly takeover happens when the target company's management and board of directors approve the transaction terms and advise their shareholders to accept the acquisition offer."
  },
  {
    id: 33,
    question: "A high-frequency trading desk notices that a company's stock is trading at ₹500 on the Bombay Stock Exchange (BSE) and simultaneously trading at ₹501.50 on the National Stock Exchange (NSE). The financial engineer programs an automated algorithm to instantly buy shares on the BSE and sell them on the NSE to lock in a risk-free profit. What fundamental financial concept is this algorithmic strategy exploiting?",
    options: ["Speculation", "Arbitrage", "Hedging", "Leverage"],
    correctAnswer: 1,
    reason: "Arbitrage is the simultaneous purchase and sale of an asset in different markets to exploit small price differences and lock in a riskless profit."
  },
  {
    id: 34,
    question: "A proprietary trader believes that a sudden political event next week will cause the price of gold to crash. He buys a large volume of high-risk derivative contracts to bet on this downward price movement, hoping to turn a massive profit using minimal upfront capital. In the context of financial engineering market participants, how is this trader classified?",
    options: ["Hedger", "Speculator", "Arbitrageur", "Underwriter"],
    correctAnswer: 1,
    reason: "Speculators knowingly take on high market risks to profit from anticipated price movements, often utilizing the leverage provided by derivative contracts."
  },
  {
    id: 35,
    question: "A corporate financial engineer uses a small ₹5 Lakh margin deposit to secure an active futures contract position controlling ₹1 Crore worth of steel commodities. A sudden 6% drop in steel prices wipes out the company's entire initial margin and triggers massive additional losses. Which core feature of derivative engineering creates this amplified risk profile?",
    options: ["Tokenization", "Hedging", "Leverage", "Arbitrage"],
    correctAnswer: 2,
    reason: "Leverage involves using a relatively small amount of capital (margin) to control a much larger underlying asset position, which magnifies both potential profits and potential losses."
  },
  {
    id: 36,
    question: "A large infrastructure firm needs a highly customized derivative contract to hedge against an unusual mix of local cement prices and freight inflation. They negotiate the exact terms directly over the telephone with a specific private investment bank, bypassing the public exchange completely. How should the financial engineer classify the delivery channel of this customized contract?",
    options: ["Over-the-Counter Contract", "Exchange-Traded Contract", "Standardized Futures Contract", "Public Cleared Option"],
    correctAnswer: 0,
    reason: "Over-the-Counter (OTC) derivatives are private, custom-tailored financial contracts negotiated directly between two counterparties without the intermediation of a public stock or commodity exchange."
  },
  {
    id: 37,
    question: "An institutional fund manager buys 500 gold futures contracts on a regulated commodities exchange. The manager is highly confident that even if the unknown seller on the other side of the contract goes bankrupt tomorrow, the exchange itself will step in to guarantee that the transaction is settled. Which specific structural entity within the exchange framework eliminates this counterparty risk?",
    options: ["Credit Rating Registry", "Central Clearinghouse", "Underwriting Syndicate", "Asset Escrow Board"],
    correctAnswer: 1,
    reason: "The Central Clearinghouse acts as the intermediary for exchange-traded derivatives, becoming the buyer to every seller and the seller to every buyer, thereby eliminating individual counterparty default risk."
  },
  {
    id: 38,
    question: "A jewelry manufacturer signs a forward contract with a bullion dealer to buy 10 kg of silver at ₹80,000 per kg in exactly 60 days. On the settlement date, the market price of silver drops to ₹70,000 per kg. The manufacturer complains that they do not want to buy at the contract price anymore. Based on introductory legal and financial engineering rules, what is the manufacturer's obligation under this contract?",
    options: [
      "They can pay a small penalty fee to automatically cancel the deal.",
      "They can convert the forward contract into a discretionary call option.",
      "They must buy the silver at ₹80,000 as a forward contract is a binding obligation.",
      "They can request the central bank to provide a pricing bailout grant."
    ],
    correctAnswer: 2,
    reason: "Unlike options, forward and futures contracts create a binding, mutual legal obligation on both parties to execute the transaction at the pre-agreed price on the settlement date, regardless of where the spot market moves."
  },
  {
    id: 39,
    question: "An investment banking conglomerate is handling two sensitive operations. Desk X is advising a client company on how to smoothly acquire a listed competitor. At the same time, Desk Y operates a proprietary trading floor that actively buys and sells the competitor's shares to generate short-term market profits. Which critical structural boundary or internal information barrier must the bank enforce to ensure compliance and prevent illegal information leaks between these desks?",
    options: ["Public Clearing Portal", "Chinese Wall", "Debt Escrow Covenant", "Assignment Registry"],
    correctAnswer: 1,
    reason: "A \"Chinese Wall\" (or information barrier) is a strict regulatory and structural isolation protocol within an investment bank. It legally prevents confidential, non-public inside information from corporate advisory desks (Front Office) from leaking to trading desks (Sales & Trading) to prevent insider trading."
  },
  {
    id: 40,
    question: "A financial professional inside a large investment bank spends her day analyzing the trading desk's daily exposure limits, stress-testing portfolios against sudden interest rate shifts, and ensuring that traders comply with SEBI's strict net-worth capitalization rules. Within the organizational structure of the investment bank, where does this risk-control function sit?",
    options: ["Middle Office", "Front Office", "Back Office", "Principal Desk"],
    correctAnswer: 0,
    reason: "The Middle Office acts as the risk-management and compliance engine of an investment bank. It does not generate revenue directly (unlike the Front Office) or settle daily paperwork (unlike the Back Office); instead, it monitors market risk, credit risk, and compliance."
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Introduction to Banking in India",
  professor: "ANIL AGGARWAL",
  date: "25th June",
  totalQuestions: 40,
  totalMarks: 160,
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
