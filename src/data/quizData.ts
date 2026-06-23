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
    question: "In 1978, a fast-growing Indian engineering firm wanted to raise equity capital from the public. They approached the State Bank of India's newly established merchant banking division for corporate guidance. Based on the structural focus of that specific historical era, what primary service did this early banking desk provide to the client?",
    options: [
      "Assisting the company with issue management, regulatory paperwork, and public issue coordination.",
      "Acting as a venture capital fund by directly investing the bank's own treasury cash into corporate equity.",
      "Designing complex cross-border derivative products to hedge the company against global currency risks.",
      "Structuring multi-billion-dollar international corporate mergers with manufacturing units in Europe."
    ],
    correctAnswer: 0,
    reason: "In the 1970s and 1980s, the sector was known strictly as \"merchant banking.\" It was primarily a service-oriented desk focused on issue management—helping domestic companies handle the heavy administrative paperwork, legal disclosures, and commercial banking coordination required to launch basic share issues."
  },
  {
    id: 2,
    question: "A modern Indian tech startup has achieved rapid operational scale and billions in revenue, but it is currently unprofitable due to heavy initial marketing expenditures. The founders want to launch a massive IPO on the main exchange board to fund further growth. How did India's capital market regulations adapt to allow these modern, loss-making tech unicorns to list and generate massive fees for investment banks?",
    options: [
      "SEBI completely removed the 3-year historical profitability requirement for all companies seeking a public main-board listing.",
      "SEBI allowed loss-making companies to list provided that they allocate at least 75% of the public issue to Qualified Institutional Buyers (QIBs).",
      "SEBI allowed investment banks to provide sovereign balance-sheet guarantees to fully insulate retail investors from capital losses.",
      "SEBI created a rule allowing tech companies to count projected user growth as actual net profit on their listing applications."
    ],
    correctAnswer: 1,
    reason: "To accommodate high-growth digital companies that scale fast but take time to turn profitable, SEBI modernized its rules. Loss-making firms can list on the main board, provided that at least 75% of the offer is sold to sophisticated institutional investors (QIBs) who possess the expertise to evaluate downside risk."
  },
  {
    id: 3,
    question: "A highly successful Indian electric scooter company needs ₹2,000 Crore to build a massive automated manufacturing plant. The founders do not want to borrow money from commercial banks; instead, they want to raise permanent capital by selling shares to the public for the first time. Which specific functional area within the scope of an investment bank will manage this entire process for the company?",
    options: [
      "Equity Capital Markets (ECM), by structuring and launching an Initial Public Offering (IPO).",
      "Corporate Restructuring Services, by converting existing corporate debt into liquid retail bonds.",
      "Project Advisory Services, by creating a 30-year operational cash flow model for the new factory.",
      "Debt Capital Markets (DCM), by organizing a multi-bank commercial loan syndication."
    ],
    correctAnswer: 0,
    reason: "When a company wants to raise permanent capital by selling ownership shares to the public for the first time, it falls under the Equity Capital Markets (ECM) pillar of investment banking, which specializes in structuring, pricing, and executing IPOs."
  },
  {
    id: 4,
    question: "A legacy Indian retail company is buried under massive debt, facing insolvency, and unable to pay its lenders. An investment banking desk is brought in to save the company from complete liquidation under the Insolvency and Bankruptcy Code (IBC). Which actionable strategy falls directly under the scope of Corporate Restructuring services to keep this distressed company alive?",
    options: [
      "Launching a high-budget public relations campaign to artificially inflate the company's daily retail sales.",
      "Renegotiating loan terms with lenders, selling non-core assets for cash, or converting debt into equity stakes.",
      "Forcing the existing shareholders to surrender all their personal savings to pay off the commercial banks.",
      "Immediately closing down all profitable stores to completely eliminate daily operational expenses."
    ],
    correctAnswer: 1,
    reason: "Corporate Restructuring deals with distressed assets. Bankers work to save a company by altering its financial structure—this includes renegotiating terms with creditors, selling off side assets to raise immediate cash, or swapping debt for equity to reduce interest burdens."
  },
  {
    id: 5,
    question: "The founders of a rapidly expanding Indian organic cosmetics brand need ₹100 Crore to build a global distribution supply chain. They want to protect their complete corporate voting power and are strictly unwilling to share future decision-making control with any external individuals. Based on corporate funding principles, which financial instrument should the investment banking team advise the company to issue?",
    options: [
      "Non-Convertible Debentures (NCDs), because raising debt does not dilute the existing founders' ownership or voting control.",
      "Initial Public Offering (IPO) shares, because public equity allows founders to retain permanent absolute voting rights without liabilities.",
      "Venture Capital common stock, because early-stage private equity completely insulates corporate founders from ownership dilution.",
      "Follow-on Public Offer (FPO) equities, because selling fresh public shares gives founders total voting veto power over regular lenders."
    ],
    correctAnswer: 0,
    reason: "Issuing debt via instruments like Non-Convertible Debentures (NCDs) allows a company to raise capital without giving away corporate voting rights or ownership stakes. The lenders are simply creditors, leaving the founders' control untouched."
  },
  {
    id: 6,
    question: "An Indian textile manufacturing firm is evaluating whether to raise funds by launching an IPO of equity shares or by issuing long-term corporate bonds through its debt capital markets advisory desk. From a cash-flow obligation perspective, what is a fundamental financial difference between paying equity shareholders versus paying debt bondholders?",
    options: [
      "Bondholders are paid completely discretionary returns, whereas equity shareholders possess a statutory legal right to mandatory monthly payouts.",
      "Equity shareholders must receive fixed interest payments regardless of corporate losses, whereas bondholders are paid only out of net profits.",
      "Bondholders must receive mandatory fixed interest payments regardless of company profit levels, whereas equity dividends are discretionary.",
      "Both instruments carry identical legal obligations, requiring mandatory matching interest payments under stock exchange listing laws."
    ],
    correctAnswer: 2,
    reason: "Debt creates a binding legal obligation; corporate interest must be paid to bondholders even if the company is bleeding losses. Conversely, equity dividends are paid at the discretion of the board of directors and are only distributed out of post-tax net profits."
  },
  {
    id: 7,
    question: "A corporate finance director argues that since equity shareholders do not have a mandatory legal right to receive fixed monthly cash payouts like bank lenders do, equity capital should be considered completely \"free of cost\" for the company. As an investment banker advising this firm, why is this conceptual assumption regarding the cost of equity entirely incorrect?",
    options: [
      "Equity carries a high implicit cost because shareholders expect a rate of return to compensate for taking on high capital risk.",
      "SEBI regulations impose an annual statutory cash penalty fee on any listed company that fails to declare matching public dividends.",
      "Stock exchanges legally require companies to match their equity dividend rates exactly with prevailing bank repo lending rates.",
      "Equity capital automatically triggers a mandatory monthly cash repayment liability onto the firm's primary balance sheet assets."
    ],
    correctAnswer: 0,
    reason: "Equity is never free; it is often the most expensive form of capital. Equity investors take on the highest risk because they are the last to be paid in case of liquidation, meaning they demand a premium expected rate of return (cost of equity) to justify deploying their cash."
  },
  {
    id: 8,
    question: "An Indian logistics company wants to issue corporate bonds to raise funds. Before the investment bank can market these bonds to long-term conservative institutions like provident funds, they must hire an independent third-party agency like CRISIL or ICRA. What is the primary conceptual purpose of securing a formal credit rating before launching a corporate debt issue?",
    options: [
      "To legally guarantee that the stock market price of the company's equity shares will never drop below face value.",
      "To independently evaluate the corporate issuer's financial capacity and calculate the default risk for potential bond investors.",
      "To secure an absolute tax exemption certificate from the Ministry of Finance for all future corporate earnings.",
      "To automatically force commercial banks to provide interest-free liquidity backing to the company's retail app."
    ],
    correctAnswer: 1,
    reason: "In debt capital management, a credit rating provides an objective evaluation of the corporate issuer's creditworthiness. It tells investors how likely the company is to repay its principal and interest on time, which helps determine the correct interest rate (coupon) for the bonds."
  },
  {
    id: 9,
    question: "A leading Indian commercial airline faces skyrocketing aviation turbine fuel costs. The corporate advisory desk suggests acquiring an automated tech-driven aircraft ground-handling services company to eliminate duplicate operational workflows and reduce third-party outsourcing costs. How should the advisory team classify this specific corporate strategy, and what primary value driver are they trying to unlock?",
    options: [
      "Inbound Vertical M&A, aiming to achieve clear Cost Synergies by integrating an operational vendor into the core business.",
      "Inbound Conglomerate M&A, aiming to achieve Revenue Synergies by cross-selling travel insurance to terminal passengers.",
      "Friendly Horizontal M&A, aiming to achieve Financial Synergies by cutting down the parent company's tax liabilities.",
      "Concentric M&A Asset-Acquisition, aiming to achieve Capital Arbitrage by selling off surplus airport real estate."
    ],
    correctAnswer: 0,
    reason: "This is a vertical acquisition because the airline is buying a company within its own operational supply chain (ground-handling). The primary driver is saving operational expenses by bringing a third-party service in-house, which is a classic example of achieving a cost synergy."
  },
  {
    id: 10,
    question: "While conducting buy-side due diligence on a regional FMCG target brand, the advisory team discovers that the target company's primary factory land has an ongoing, unresolved environmental lawsuit that could shut down production next year. The target's promoters hid this during initial talks. As the lead corporate advisor, what is your immediate strategic recommendation to the acquiring company's CEO?",
    options: [
      "Immediately declare the deal dead, issue a public press release exposing the target's hidden legal flaws, and sue for damages.",
      "Advise the CEO to proceed unchanged, as due diligence reports are purely internal formalities that do not affect final legal agreements.",
      "Demand an immediate downward adjustment to the transaction price and insist on a strict Indemnity Escrow clause in the contract.",
      "Convert the entire buy-side transaction framework into a hostile public open-offer to bypass the target company's promoters."
    ],
    correctAnswer: 2,
    reason: "Discovering a material risk during due diligence requires financial and legal adjustment. Rather than abandoning a strategically sound deal, an advisor should renegotiate a lower purchase price and create an escrow account (holding back cash) to cover potential future losses from that specific lawsuit."
  },
  {
    id: 11,
    question: "A top-tier Japanese electronics brand wants to manufacture smart appliances in India. They want to utilize an established local factory grid and domestic distribution channels but are legally unwilling to merge their parent corporate identity or absorb local liabilities permanently. Which corporate structure should the advisory teams from both nations design to meet these criteria?",
    options: [
      "A corporate Joint Venture (JV), creating a new, legally distinct shared entity while keeping both parent companies independent.",
      "An absolute statutory public sector amalgamation, dissolving both legacy companies into a new state enterprise.",
      "A fast-track Qualified Institutional Placement (QIP), selling 100% of the Japanese firm's shares to Indian retail buyers.",
      "A hostile leverage buyout (LBO), utilizing high-yield debt to forcefully buy out the Indian firm's public float."
    ],
    correctAnswer: 0,
    reason: "A Joint Venture allows two independent companies to pool resources and expertise to form a separate, new entity for a specific goal. This structure keeps their parent corporate identities independent and limits their risk exposure to the new venture."
  },
  {
    id: 12,
    question: "A major Indian commercial vehicle manufacturer wants to secure a guaranteed, steady supply of high-grade microchips for its automated dashboards. Their investment banking advisory desk suggests acquiring a specialized semiconductor design startup based in Bengaluru. How should the corporate advisory team classify this specific transaction based on its strategic direction?",
    options: [
      "Inbound Vertical Acquisition, because the manufacturer is buying a company within its own operational supply chain to secure inputs.",
      "Inbound Horizontal Merger, because both companies operate as direct competitors selling identical goods to retail consumers.",
      "Friendly Conglomerate Amalgamation, because it combines two completely unrelated consumer brands to maximize tax credits.",
      "Leveraged Carve-out, because the vehicle manufacturer is selling off its core assembly units to raise short-term cash."
    ],
    correctAnswer: 0,
    reason: "A vertical acquisition happens when a company buys an entity that sits either backward or forward within its existing operational supply chain. By buying a microchip supplier, the vehicle manufacturer is securing its backend production components."
  },
  {
    id: 13,
    question: "A private developer plans to build a massive Public-Private Partnership (PPP) toll expressway connecting two industrial cities in India. Before pitching the project to global infrastructure funds, they hire an investment bank to build a 25-year financial model to see if the toll revenues can comfortably cover construction costs, maintenance, and loan interest. Which primary metric should the project advisory team calculate to tell investors the exact percentage rate of return this multi-decade asset is expected to generate?",
    options: [
      "Internal Rate of Return (IRR), because it reflects the intrinsic annualized rate of return of the project's projected cash flows.",
      "Gross Profit Margin (GPM), because it measures the short-term trading profit earned from weekly toll booth cash collections.",
      "Working Capital Ratio (WCR), because it tracks the daily cash available to pay the construction labourers' wages.",
      "Debt-to-Equity Swap Multiplier, because it calculates how much factory land can be traded to eliminate short-term supplier bills."
    ],
    correctAnswer: 0,
    reason: "The Internal Rate of Return (IRR) is the standard metric used in project advisory to evaluate long-term infrastructure assets. It helps investors determine if the project's long-term future cash flows justify the heavy initial capital expenditure."
  },
  {
    id: 14,
    question: "An Indian solar energy conglomerate is setting up a mega 500-Megawatt solar park. The project is highly capital-intensive, and the conglomerate's CFO insists that if the solar park faces unexpected technical failures and defaults on its loans, the lending banks must not be legally allowed to seize the assets of the main parent company. How should the project advisory team structure the legal and financial framework of this transaction to protect the parent company?",
    options: [
      "Establish a Special Purpose Vehicle (SPV) to raise non-recourse project finance, isolating the project's liabilities strictly within the new entity.",
      "Launch a Follow-on Public Offer (FPO) on the main board to turn all parent company debt into public retail shares.",
      "Apply for a short-term commercial overdraft line secured against the parent company founders' personal residential property.",
      "Structure the transaction as a friendly horizontal corporate amalgamation, dissolving the parent company entirely."
    ],
    correctAnswer: 0,
    reason: "In project finance, creating a Special Purpose Vehicle (SPV) is a standard advisory practice. The SPV is a separate legal entity that holds the project's assets and liabilities. The debt raised is \"non-recourse,\" meaning if the project fails, lenders can only claim the SPV's assets, keeping the parent company safe."
  },
  {
    id: 15,
    question: "A major Indian steel manufacturer needs a massive ₹4,000 Crore loan to acquire coal mines in Australia. The company approaches State Bank of India (SBI) to structure the debt package, write the information memorandum, and invite other international commercial banks to join the lending pool. What is the formal financial title of SBI in this specific loan syndication framework?",
    options: [
      "Lead Arranger (or Mandated Lead Arranger), because they design the debt package and coordinate the entire syndication process.",
      "Escrow Agent, because they legally freeze the physical machinery assets of the steel manufacturing plants.",
      "Participating Underwriter, because they strictly provide retail insurance policies to secondary market individual buyers.",
      "Share Transfer Clearinghouse, because they convert the company's long-term liabilities into public stock options."
    ],
    correctAnswer: 0,
    reason: "The Lead Arranger is the primary investment or commercial bank hired by the borrower to structure the credit facility, negotiate terms, prepare the information documents, and organize the syndicate of lenders."
  },
  {
    id: 16,
    question: "A syndicated loan of ₹2,500 Crore has been successfully funded by a group of 12 commercial banks for an Indian shipping company. To keep operations simple, the shipping company does not want to write 12 separate monthly interest checks or deal with 12 separate bank audits every quarter. Which administrative entity is appointed within the syndicate to handle all ongoing cash collections, interest distributions, and compliance monitoring?",
    options: [
      "Book-Runner Lead Manager",
      "Qualified Institutional Buyer",
      "Third-Party Factoring Counterparty",
      "Facility Agent"
    ],
    correctAnswer: 3,
    reason: "Once a syndicated loan is finalized, the Facility Agent bank takes over the administrative duties. The borrower interacts with this single bank for disbursements and repayments, and the agent bank distributes the cash proportionally to the 12 syndicate members."
  },
  {
    id: 17,
    question: "A top-tier investment bank completes a complex ₹5,000 Crore loan syndication for a tech park developer. On the closing day, the bank receives a substantial upfront fee from the borrower for successfully designing, underwriting, and distributing the debt package across 15 participating banks. What is the standard industry name for this specific upfront fee earned by the lead arranger in a syndication transaction?",
    options: [
      "Retail Brokerage Commission",
      "Fixed Equity Retainer Premium",
      "Arrangement Fee",
      "Liquidation Arbitrage Margin"
    ],
    correctAnswer: 2,
    reason: "The Arrangement Fee is an upfront fee paid by the borrower to the Lead Arranger. It covers the costs of financial engineering, credit structuring, marketing, and successfully assembling the banking group."
  },
  {
    id: 18,
    question: "A consortium of 8 commercial banks has syndicated a ₹2,200 Crore manufacturing loan. The borrower misses three consecutive payments, triggering a formal default. One small participating bank in the syndicate wants to immediately rush to court independently to freeze the company's local office bank accounts to recover its specific 5% share of the loan. Which legal document signed by all lenders at the close of the deal prevents this single bank from taking independent, hostile legal action?",
    options: [
      "Red Herring Prospectus",
      "Equity Share Purchase Agreement",
      "Credit Rating Agency Certificate",
      "Intercreditor Agreement"
    ],
    correctAnswer: 3,
    reason: "The Intercreditor Agreement governs the relationship among the lenders. It ensures that all enforcement actions against a defaulting borrower are handled collectively and that any recovered cash is distributed proportionally, preventing individual banks from undermining the group."
  },
  {
    id: 19,
    question: "Two software engineers build a raw prototype for an AI-driven medical diagnostic app in their garage. They need ₹50 Lakh to pay for cloud servers and register their company before they even launch a product or secure their first testing customer. Which funding stage describes this initial cash injection used to turn a basic concept into a real corporate entity?",
    options: [
      "Seed Capital (or Pre-Seed), which provides the initial capital to build a prototype and test a business concept.",
      "Mezzanine Financing, which supplies late-stage debt capital to prepare an established firm for an immediate stock IPO.",
      "Series B Expansion, which funds large-scale global marketing pipelines for highly profitable software conglomerates.",
      "Leveraged Buyout, which uses high-yield debt to forcefully purchase a controlling stake in a listed retail chain."
    ],
    correctAnswer: 0,
    reason: "Seed financing is the earliest stage of venture funding. It is injected when the startup is a raw concept or early prototype, giving the founders enough runway to prove their business model, build a minimum viable product (MVP), and set up operations."
  },
  {
    id: 20,
    question: "A tech startup founder owns 100% of her company, which consists of 10,000 common shares. A Venture Capital (VC) firm agrees to invest ₹5 Crore in fresh cash, demanding a 20% equity stake in exchange. The VC insists that this must be done by issuing new shares. How does this fresh investment transaction structurally impact the founder's existing ownership shares and corporate control?",
    options: [
      "The founder retains 100% control because venture funds are legally barred from holding voting shares in India.",
      "The founder's total share count drops to 8,000 shares because the VC forcefully confiscates past ownership chunks.",
      "The founder's share count stays at 10,000, but her percentage ownership is diluted down to 80% as new shares are issued to the VC.",
      "The founder automatically loses all voting rights, converting her entire holding into short-term trade liabilities."
    ],
    correctAnswer: 2,
    reason: "When a startup takes venture financing via fresh equity issuance, it creates new shares for the investor. The founder's absolute number of shares stays the same, but their percentage ownership decreases (dilutes) because the total pool of shares has expanded."
  },
  {
    id: 21,
    question: "A logistics startup is negotiating a Series A round. The VC fund values the startup's existing business, team, and intellectual property at ₹20 Crore right now (Pre-Money Valuation) and agrees to wire ₹5 Crore in fresh cash into the startup's bank account. Based on standard venture capital accounting, what is the final \"Post-Money Valuation\" of the startup immediately after the investment is completed?",
    options: ["₹15 Crore", "₹20 Crore", "₹25 Crore", "₹100 Crore"],
    correctAnswer: 2,
    reason: "Post-Money Valuation is calculated using a simple baseline formula: Pre-Money Valuation + Investment Amount. In this case, ₹20 Crore (Pre-Money) + ₹5 Crore (Investment) = ₹25 Crore (Post-Money)."
  },
  {
    id: 22,
    question: "An early-stage e-commerce startup wants to raise capital from an angel investor. The founder says the company is growing so fast that it is impossible to calculate a fair, accurate share price valuation today. They want a financial instrument that defers the pricing valuation to a later, larger Series A round. Which standard venture financing contract should the advisor recommend to solve this pricing deadlock?",
    options: [
      "Fixed-Price Non-Convertible Debenture (NCD)",
      "Public Book-Building Prospectus",
      "Distressed Corporate Asset Lease Swap",
      "SAFE Note"
    ],
    correctAnswer: 3,
    reason: "A SAFE (Simple Agreement for Future Equity) or Convertible Note allows startups to secure quick capital without setting an explicit valuation today. The cash acts as an investment that automatically converts into shares when a future venture fund conducts a formal, priced Series A valuation round."
  },
  {
    id: 23,
    question: "A family-owned premium clothing brand in India is highly profitable and has 40 stores. They want to expand to 100 cities immediately, but they do not want a risky debt-heavy buyout, nor do they want to go public yet. An investment firm offers to give them ₹100 Crore purely for expansion in exchange for a minor 20% stake. Which core introductory Private Equity investment strategy matches this situation?",
    options: [
      "Growth Equity, which injects expansion capital into mature, profitable firms without changing control.",
      "Pre-Seed Venture Funding, which prints micro-grants to test raw startup tech concepts in a garage.",
      "Initial Public Offering (IPO), which automatically dilutes 100% of founder stakes across the stock exchange.",
      "Debt Capital Market Swap, which legally forces a company to shut down its stores to clear supplier debts."
    ],
    correctAnswer: 0,
    reason: "Growth Equity targets mature, already profitable companies that need capital to scale up operations, open new locations, or enter fresh markets. Unlike traditional buyouts, it typically involves minority stakes and doesn't rely on heavy debt."
  },
  {
    id: 24,
    question: "A Private Equity fund acquires an 81% controlling stake in an old, struggling Indian food manufacturing factory. Instead of sitting back passively waiting for annual dividends, the PE firm immediately changes the management team, installs modern inventory software, and closes down 3 wasteful warehouses. What is the primary conceptual reason a PE firm takes such an active, hands-on role in a company it buys?",
    options: [
      "To follow mandatory RBI rules that legally force investors to run daily factory operations.",
      "To actively create operational value, cutting out inefficiencies to maximize the firm's profits and final resale value.",
      "To convert the private factory into a non-profit government utility before the end of the fiscal year.",
      "To intentionally freeze all commercial banking accounts to trigger an immediate tax refund."
    ],
    correctAnswer: 1,
    reason: "Private Equity relies on active ownership. PE firms don't just buy shares passively; they use their operational expertise to turn businesses around, cut costs, upgrade technology, and increase efficiency so the company can be sold later at a much higher value."
  },
  {
    id: 25,
    question: "A prominent private equity fund notices that a well-known listed retail company on the National Stock Exchange (NSE) is severely undervalued by the public market due to temporary economic panic. The PE fund launches an open offer to buy up 100% of the public shares to remove it from the stock market completely. What is the introductory financial term for this specific type of corporate transaction?",
    options: [
      "Qualified Institutional Placement (QIP)",
      "Delisting Buyout",
      "Crowdfunded Venture Allotment (CVA)",
      "Reverse Book-Building Tokenization (RBT)"
    ],
    correctAnswer: 1,
    reason: "A \"Take-Private\" or delisting buyout transaction occurs when a private equity sponsor buys all the outstanding public shares of a listed company. Delisting it shields the business from short-term stock market pressure and quarterly earnings expectations while they fix the operations."
  },
  {
    id: 26,
    question: "An Indian private equity fund successfully fixes three factory assets and doubles their profits by year 6. The investors are happy, but the fund managers announce they must sell these highly profitable factories over the next 2 to 3 years rather than keeping them forever. Why must a typical Private Equity fund sell off its profitable portfolio investments instead of holding them permanently?",
    options: [
      "Stock exchange clearinghouses legally limit private company ownership to a maximum of 36 months.",
      "The Central Board of Direct Taxes automatically confiscates any private asset that shows a profit for 5 consecutive years.",
      "PE funds are structured with a fixed lifestyle and are contractually required to sell assets to return cash to their backers.",
      "Regular factory workers possess a statutory legal right to forcefully buy out their own company after year 7."
    ],
    correctAnswer: 2,
    reason: "Private Equity funds are closed-end vehicles, typically with a strict 10-year lifespan. Because they must return actual cash profits to their own institutional investors within that timeframe, they cannot hold onto businesses forever; an \"exit\" is mandatory."
  },
  {
    id: 27,
    question: "A leading Indian commercial vehicle manufacturer wants to secure its backend production chain. The board approves a plan to acquire a specialized automotive microchip designer based in Bengaluru. How should the corporate advisory team classify this specific transaction based on its strategic direction?",
    options: ["Horizontal Acquisition", "Vertical Acquisition", "Conglomerate Merger", "Market Extension Merger"],
    correctAnswer: 1,
    reason: "This is a vertical acquisition because the vehicle manufacturer is buying an enterprise that sits backward within its existing supply chain to secure crucial component inputs."
  },
  {
    id: 28,
    question: "Two regional private hospital chains operating in Western India agree to combine their businesses. The management states that by uniting, they can eliminate overlapping diagnostic centers in major cities and directly control a larger market share. Which type of corporate combination does this transaction represent?",
    options: ["Horizontal Merger", "Vertical Integration", "Conglomerate Takeover", "Concentric Divestiture"],
    correctAnswer: 0,
    reason: "A horizontal merger occurs when two independent companies operating in the same industry and selling identical or highly similar services combine forces to eliminate duplication and expand market share."
  },
  {
    id: 29,
    question: "A prominent Indian legacy group specializing strictly in steel manufacturing signs a definitive agreement to purchase 100% of a highly profitable domestic premium ice cream brand. How should an investment banking desk classify this transaction based on the relationship between the two businesses?",
    options: ["Product Extension Merger", "Backward Vertical Integration", "Conglomerate Acquisition", "Horizontal Takeover"],
    correctAnswer: 2,
    reason: "A conglomerate transaction combines two businesses that operate in completely unrelated industries with no overlapping supply chains or product commonalities."
  },
  {
    id: 30,
    question: "Corporate Finance Bank (Entity A) absorbs Housing Finance Group (Entity B). Following a complex restructuring process, Entity B is completely dissolved, its stock ticker is removed from the exchange, and its entire operational grid continues under the brand name of Entity A. Which specific legal transaction outcome has taken place?",
    options: ["Merger", "Amalgamation", "Joint Venture", "Carve-out"],
    correctAnswer: 0,
    reason: "In a legal merger, one dominant company absorbs another. The target company (Entity B) loses its independent legal identity and dissolves completely into the buyer (Entity A)."
  },
  {
    id: 31,
    question: "Two independent regional public sector commercial banks pool their balance sheet assets, physical branches, and staff liabilities to create a brand-new corporate banking identity. Both original banks dissolve their legal structures on the same day the new entity launches. What is the correct financial classification for this corporate combination model?",
    options: ["Backward Integration", "Hostile Asset Sweep", "Amalgamation", "Subsidiary Acquisition"],
    correctAnswer: 2,
    reason: "An amalgamation (or consolidation) involves two or more companies dissolving their existing individual corporate frameworks to build an entirely new legal entity from scratch."
  },
  {
    id: 32,
    question: "A massive global retail giant purchases a 77% controlling equity stake in a leading Indian online fashion application. Following the transaction, the fashion app keeps its original brand name, internal management, separate office, and continues to operate as a distinct legal company. Which type of M&A transaction model matches this operational outcome?",
    options: ["Acquisition", "Amalgamation", "Statutory Merger", "Corporate Spin-off"],
    correctAnswer: 0,
    reason: "In an acquisition or takeover, the buyer secures a controlling stake, but the target company doesn't dissolve; it continues to survive as a subsidiary under its own legal name."
  },
  {
    id: 33,
    question: "An Indian agribusiness conglomerate exports thousands of tons of spices to Europe annually. The financial engineering desk is tasked with designing a strategy to ensure that a sudden crash in the Euro-to-Rupee exchange rate next month will not destroy the company's profit margins. Which primary class of financial engineering instruments will the team use to lock in or manage this exchange risk?",
    options: ["Common Equity Stocks", "Alternative Investment Funds", "Derivative Contracts", "Non-Convertible Debentures"],
    correctAnswer: 2,
    reason: "Derivatives (such as forwards, futures, or options) are the fundamental building blocks of financial engineering used to hedge, transfer, or manage underlying market risks like currency fluctuations."
  },
  {
    id: 34,
    question: "A major manufacturing firm relies heavily on natural gas to run its boilers. The price of natural gas fluctuates wildly every week, making it impossible for the CFO to accurately forecast quarterly production costs. The financial engineer builds a contract with a bank where the firm pays a fixed price for gas over 12 months, while the bank pays the fluctuating market price. What specific standard financial engineering structure describes this transaction?",
    options: ["Swap", "Future", "Option", "Warrant"],
    correctAnswer: 0,
    reason: "A swap is a derivative contract through which two parties exchange financial cash flows (typically one fixed and one floating) over a specified period to manage price or interest rate volatility."
  },
  {
    id: 35,
    question: "An airline company wants to protect itself against a sudden spike in crude oil prices over the winter. However, they want the flexibility to benefit if oil prices drop. They pay an upfront premium to a financial institution to lock in a maximum purchase price, keeping the right but not the obligation to buy at that level. Which specific derivative instrument has the financial engineer deployed here?",
    options: ["Put Option", "Forward Contract", "Futures Contract", "Call Option"],
    correctAnswer: 3,
    reason: "A call option gives the buyer the right, but not the legal obligation, to buy an underlying asset at a specified strike price before a certain deadline, providing a ceiling against rising prices while allowing downside participation."
  },
  {
    id: 36,
    question: "An Indian software exporter expects to receive a payment of $5 million in exactly three months. The corporate treasury team wants to guarantee that they will not suffer losses if the US Dollar weakens dramatically, but they still want the freedom to enjoy extra gains if the Dollar strengthens. Which option contract should the financial engineer purchase to build this specific protective floor?",
    options: ["Put Option", "Call Option", "Swap Option", "Digital Warrant"],
    correctAnswer: 0,
    reason: "A put option gives the holder the right to sell an underlying asset at a specified price, making it the ideal engineering tool to establish a minimum floor price to protect a future cash receivable from a market decline."
  },
  {
    id: 37,
    question: "A commercial housing finance bank has thousands of small home loans on its balance sheet. To generate immediate cash liquidity to issue new loans, the bank hires a financial engineer to bundle these illiquid mortgages into a pool and issue tradeable interest-bearing bonds to institutional investors. What is the formal financial engineering name for this asset transformation process?",
    options: ["Underwritten Book Building", "Securitization", "Capital Restructuring", "Debt Syndication"],
    correctAnswer: 1,
    reason: "Securitization is the process of pooling various types of contractual, illiquid financial assets (like home loans or auto loans) and packaging them into liquid, tradeable security bonds sold to investors."
  },
  {
    id: 38,
    question: "A private wealth management bank wants to attract conservative clients who are terrified of stock market crashes. The financial engineering team designs a 3-year bond that guarantees the investor will get 100% of their initial principal back at maturity, plus a small bonus payout tied to the growth of the Nifty 50 index. How should the advisory desk classify this synthetic financial instrument?",
    options: ["Sovereign Treasury Bond", "Venture Common Stock", "Structured Product", "High-Yield Debenture"],
    correctAnswer: 2,
    reason: "Structured products are pre-packaged investment strategies that typically combine a traditional asset (like a zero-coupon bond) with one or more derivatives to create customized risk-return payoffs, such as principal protection."
  },
  {
    id: 39,
    question: "An MBA graduate joins a global investment bank in Mumbai. On his first day, he is assigned to a team that meets directly with corporate CEOs, builds financial models for upcoming technology acquisitions, and drafts pitch books to market public corporate security issues. Under which core operational division of an investment bank's structure is this graduate working?",
    options: ["Back Office", "Front Office", "Middle Office", "Settlement Clearinghouse"],
    correctAnswer: 1,
    reason: "The Front Office of an investment bank encompasses all revenue-generating, client-facing roles. This includes divisions like Corporate Advisory, Mergers & Acquisitions (M&A), and Capital Markets desks that interact directly with corporate clients to execute financial transactions."
  },
  {
    id: 40,
    question: "A specialized financial firm in Mumbai decides to completely avoid expensive sales and trading floors, does not offer corporate loan underwriting, and carries no balance-sheet capital. Instead, the firm focuses 100% of its business on providing elite corporate advisory services for high-value mergers and cross-border restructuring. Based on the structural classification of investment banks, how should this firm be categorized?",
    options: ["Elite Boutique Bank", "Bulge Bracket Bank", "Regional Commercial Bank", "Public Sector Consortium"],
    correctAnswer: 0,
    reason: "Elite Boutique banks are investment firms that specialize almost exclusively in asset-light corporate advisory (M&A and restructuring). They do not offer retail operations, trading desks, or large-scale loan underwriting, which distinguishes them from diversified financial conglomerates."
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  subtitle: "Introduction to Banking in India",
  professor: "ANIL AGGARWAL",
  date: "23rd June",
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
