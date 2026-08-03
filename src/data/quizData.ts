export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: number;
  reason?: string;
  marks?: number;
  caseStudy?: string;
  part?: string;
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

const P1 = "Part 1";
const P2 = "Part 2: Financial Feasibility & Means of Finance";
const P3 = "Part 3: Commercial Viability & Debt Metrics";
const P4 = "Part 4: Cost Benefit Analysis & IRR Dynamics";
const P5 = "Part 5: Risk Mitigation & Escrow Architecture";
const P6 = "Part 6: Complex Restructuring & Project Finance Mechanics";
const P7 = "Part 7: Advanced Balance Sheet & Sensitivity Appraisals";
const P8 = "Part 8: Regulatory Compliance & Prudential Norms";
const P9 = "Part 9: Forensic Fund Flow & Credit Security Analysis";
const P10 = "Part 10: Advanced Technical Case Scenarios";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    part: P1,
    question: "A promoter submits a DPR for a 50-MW solar plant. They include a ₹4.50 Crore central subsidy as part of the upfront equity margin. The subsidy guidelines state it is \"disbursed post-stabilization.\" How must you treat this?",
    options: [
      "Exclude the subsidy from the upfront margin calculation.",
      "Accept it if backed by a corporate guarantee.",
      "Treat it as a quasi-equity loan option.",
      "Deduct it directly from the primary loan amount."
    ],
    correctAnswer: 0,
    reason: "Back-ended subsidies cannot bridge upfront construction capital. Treating them as upfront margin creates an immediate funding deficit. Lenders must demand real cash equity upfront."
  },
  {
    id: 2,
    part: P1,
    question: "During a TEV study for a greenfield chemical plant expansion, you discover that the primary environmental clearance (EC) is signed but currently challenged in the National Green Tribunal (NGT). What is your credit action?",
    options: [
      "Disburse only the land-building component immediately.",
      "Hold all disbursements until the NGT issues a final order.",
      "Increase the interest rate by 150 bps to price the risk.",
      "Demand a personal guarantee to override the clearance hold."
    ],
    correctAnswer: 1,
    reason: "Active legal challenges to regulatory clearances introduce severe execution risk. If the NGT revokes the clearance mid-way, the asset becomes stranded. Disbursements must be frozen."
  },
  {
    id: 3,
    part: P1,
    question: "A promoter provides a TEV study showing a project break-even point at 35% utilization. Your internal review reveals they omitted fixed annual licensing renewals and escalated O&M costs by only 2% against a historical 6% inflation trend. What is the impact?",
    options: [
      "The true operational break-even remains completely unchanged.",
      "The project's Debt Equity Ratio requires a structural recasting.",
      "The real break-even point shifts significantly upward.",
      "The base Internal Rate of Return (IRR) expands artificially."
    ],
    correctAnswer: 2,
    reason: "Understating fixed operating expenses and inflation artificially lowers the projected break-even point. Recalculating with realistic figures pushes the break-even higher, compressing the safety margin."
  },
  {
    id: 4,
    part: P1,
    question: "Under the latest project finance guidelines, an infrastructure project's financial closure is legally recognized only when which condition is fully satisfied?",
    options: [
      "The draft Inter-Creditor Agreement (ICA) is circulated.",
      "The lead bank issues an in-principle sanction letter.",
      "At least 50% of the working capital lines are tied up.",
      "100% of the debt and equity funding is legally tied up."
    ],
    correctAnswer: 3,
    reason: "True financial closure requires all financing sources—both equity and debt lines across the entire consortium—to be legally executed, committed, and ready for deployment."
  },
  {
    id: 5,
    part: P2,
    question: "A corporate client requests a ₹15 Crore term loan for a brownfield factory expansion. Their provisional balance sheet displays an asset revaluation reserve of ₹8 Crore, which they count toward their Tangible Net Worth (TNW) to lower their leverage ratio. How do you assess this?",
    options: [
      "Deduct the revaluation reserve completely from the TNW.",
      "Accept 50% of the revaluation reserve as tier-2 equity.",
      "Allow it if verified by an empanelled valuer.",
      "Permit it provided the post-loan TOL/TNW stays under 3.0x."
    ],
    correctAnswer: 0,
    reason: "Revaluation reserves are non-cash accounting adjustments. They do not represent real tangible capital available to service debt or absorb losses. They must be deducted to find the true TNW."
  },
  {
    id: 6,
    part: P2,
    question: "An existing borrower uses an active ₹5 Crore short-term trade advance received from an overseas group company as their upfront equity margin for a new term loan. How do you evaluate the fund flow?",
    options: [
      "Accept it because the cash is visible inside the account.",
      "Reject it as it introduces high short-term call-back risk.",
      "Classify it as a long-term subordinated promoter debt line.",
      "Condition approval on a rolling 1-year rollover agreement."
    ],
    correctAnswer: 1,
    reason: "Trade advances from group companies are short-term liabilities, not permanent equity. If the advance is recalled, it creates a funding gap mid-construction. Equity must be long-term and unencumbered."
  },
  {
    id: 7,
    part: P2,
    question: "When reviewing a project's cost structure, you find the promoter has listed \"Machinery Contingencies\" at 25% of the total equipment cost, well above the standard 5-10% industry norm. What is the hidden risk?",
    options: [
      "The project will run into sudden working capital shortages.",
      "The debt service capability improves through excess buffers.",
      "The promoter is inflating project costs to reduce their equity contribution.",
      "The average maturity structure of the loan collapses."
    ],
    correctAnswer: 2,
    reason: "Artificially high contingency lines inflate the total project cost. This allows promoters to borrow more from the bank while keeping their own actual cash investment low."
  },
  {
    id: 8,
    part: P2,
    question: "A listed corporate borrower requests a term loan. Their parent company provides a \"Letter of Comfort\" instead of a formal Corporate Guarantee. What is the legal enforcement value of this document?",
    options: [
      "It holds the exact same legal weight as a co-obligant note.",
      "It allows the bank to automatically freeze parent accounts.",
      "It obligates the parent company to clear all payment shortfalls.",
      "It is an expression of intent with zero direct legal obligation."
    ],
    correctAnswer: 3,
    reason: "A Letter of Comfort is a non-binding statement of awareness and support. Unlike a corporate guarantee, it cannot be legally enforced to recover outstanding debt payments during a default."
  },
  {
    id: 9,
    part: P3,
    question: "A financial model projects a baseline DSCR of 1.45x. Your stress test shows that if capacity utilization falls by 15%, the DSCR drops to 0.95x. What does this sensitivity indicate?",
    options: [
      "High operating leverage and high vulnerability to demand drops.",
      "Low financial leverage with comfortable debt-servicing buffers.",
      "Excellent capacity to absorb input cost shocks.",
      "High working capital efficiency across operational cycles."
    ],
    correctAnswer: 0,
    reason: "A sharp drop in DSCR below unity from a modest utilization decline reveals a rigid fixed-cost structure. The project relies on near-perfect performance to meet its debt obligations."
  },
  {
    id: 10,
    part: P3,
    question: "A promoter structures a ₹20 Crore term loan with equal monthly principal repayments over 5 years, combined with a 6-month moratorium. What happens to the Average Maturity of the loan asset?",
    options: [
      "It expands past the door-to-door tenor limit.",
      "It shortens compared to a structured ballooning profile.",
      "It remains completely identical to a bullet model.",
      "It increases the bank's exposure to long-term tail-risk."
    ],
    correctAnswer: 1,
    reason: "Equal principal repayments return cash to the bank faster than a ballooning schedule. This shortens the asset's average maturity, reducing the bank's risk exposure over time."
  },
  {
    id: 11,
    part: P3,
    question: "A highway project operating under the Hybrid Annuity Model (HAM) encounters land acquisition delays. The construction phase extends by 12 months. Which regulatory flexibility can prevent a technical NPA classification?",
    options: [
      "Immediate conversion of the loan into a Working Capital demand line.",
      "Automatic write-off of the accrued interest during construction.",
      "A formal shift in the DCCO within allowed regulatory limits.",
      "Reducing the standard provisioning requirement to 0.25%."
    ],
    correctAnswer: 2,
    reason: "Banking guidelines allow lenders to extend a project's DCCO by up to 2 years for infrastructure projects due to non-promoter delays, keeping the asset standard without triggering a restructuring penalty."
  },
  {
    id: 12,
    part: P3,
    question: "A manufacturing project report displays a high accounting Net Profit margin but a negative Operating Cash Flow statement. What does this variance reveal about its debt service capability?",
    options: [
      "The project maintains excellent liquidity to clear long-term loans.",
      "The asset depreciation lifecycle is extended too far.",
      "The business requires an immediate debt equity conversion.",
      "Profits are tied up in inventory or unpaid receivables."
    ],
    correctAnswer: 3,
    reason: "High paper profits cannot service debt if cash is trapped in raw inventory or delayed customer payments. Lenders must look at free cash flows, not just net accounting profits."
  },
  {
    id: 13,
    part: P4,
    question: "A project's financial model shows an Equity IRR of 22% and a Project IRR of 11%. The bank's term loan interest rate is 9.5%. What does this divergence tell you?",
    options: [
      "The project uses high debt leverage to boost equity returns.",
      "The project is structurally unviable and cannot cover its interest costs.",
      "The promoter's upfront cash investment is too high.",
      "The economic asset life cycle is underestimated."
    ],
    correctAnswer: 0,
    reason: "When the Project IRR exceeds the cost of debt, borrowing heavily boosts the Equity IRR. This financial leverage creates high returns for shareholders but increases the bank's default risk if cash flows drop."
  },
  {
    id: 14,
    part: P4,
    question: "You run a sensitivity stress model for an industrial unit. A 10% increase in raw material costs drops the Project IRR from 15% to 8%, below the loan's interest rate. What is your credit mitigation requirement?",
    options: [
      "Extend the loan tenor to lower the annual principal dues.",
      "Mandate a long-term supply agreement with locked input prices.",
      "Convert the entire floating rate loan into a fixed rate asset.",
      "Scale down the primary collateral requirement by 20%."
    ],
    correctAnswer: 1,
    reason: "When a project's viability is highly sensitive to raw material costs, the bank must stabilize those margins. Enforcing a locked-price input contract removes the pricing volatility threat."
  },
  {
    id: 15,
    part: P4,
    question: "When checking a cash flow model, you note the promoter included non-operating rental income from an unrelated family property to calculate the project's Net Present Value (NPV). How should you handle this?",
    options: [
      "Approve it if the property is formally mortgaged to the bank.",
      "Accept it but apply a 20% haircut to the rental revenue line.",
      "Remove non-project revenues completely from the model calculations.",
      "Increase the project's internal hurdle rate by 100 bps."
    ],
    correctAnswer: 2,
    reason: "A project's financial feasibility must stand on its own operational cash flows. Including outside income distorts the project's true viability and hides its core operational risks."
  },
  {
    id: 16,
    part: P4,
    question: "Why is a project's Net Present Value (NPV) a more reliable credit metric for long-term lending decisions than the accounting Payback Period?",
    options: [
      "The Payback Period tracks cash flows after the loan is cleared.",
      "NPV completely ignores the compound time value of money.",
      "The Payback Period automatically adjusts for macro interest rate resets.",
      "NPV factors in the timing and risk of all future cash inflows."
    ],
    correctAnswer: 3,
    reason: "The Payback Period simply tracks how fast the initial investment is recovered, ignoring cash flows after that point. NPV discounts all future cash flows over the loan's lifespan, giving a clearer view of long-term debt-servicing capacity."
  },
  {
    id: 17,
    part: P5,
    question: "Under a standard Trust and Retention Account (TRA) cash waterfall agreement, which payment has the absolute highest priority?",
    options: [
      "Statutory government taxes and land dues.",
      "Bank term loan monthly principal installments.",
      "Promoter equity dividend distributions.",
      "Secondary vendor raw material procurement clearings."
    ],
    correctAnswer: 0,
    reason: "Statutory dues and taxes always sit at the top of a legal cash waterfall. Unpaid taxes can cause regulators to shut down operations, so they must be cleared before operational expenses or debt service."
  },
  {
    id: 18,
    part: P5,
    question: "A corporate borrower requests a loan restructure. They ask to convert unpaid construction interest into a Funded Interest Term Loan (FITL). How should you structure the FITL's maturity?",
    options: [
      "It must match the amortization profile of the working capital lines.",
      "Its tenor must fit within the remaining economic life of the asset.",
      "It should be structured as a bullet payment due in Year 15.",
      "Its maturity must extend past the primary loan's door-to-door tenor."
    ],
    correctAnswer: 1,
    reason: "An FITL is a deferred debt obligation. Its repayment timeline must fit within the asset's productive, revenue-generating lifespan to ensure there is active cash flow available to clear it."
  },
  {
    id: 19,
    part: P5,
    question: "A borrower has been regular on their term loan payments, but their working capital account has been overdrawn for 45 consecutive days due to inventory delays. What is the correct regulatory classification?",
    options: [
      "The entire exposure remains a Standard, regular account.",
      "The account must be downgraded to Sub-Standard immediately.",
      "The account must be flagged as an SMA-1 credit asset.",
      "The branch must place the term loan in a technical non-accrual hold."
    ],
    correctAnswer: 2,
    reason: "Overdue accounts or continuous overdrafts between 31 and 60 days require an automatic classification as Special Mention Account-1 (SMA-1). This applies across all facilities held by the borrower."
  },
  {
    id: 20,
    part: P5,
    question: "Under Basel-III regulatory capital guidelines, how does a loan restructuring affect the bank's internal balance sheet?",
    options: [
      "It reduces the credit risk-weighting to a flat 50%.",
      "It increases the bank's available Tier-1 capital surplus.",
      "It eliminates the need to maintain standard provisioning buffers.",
      "It locks up more core capital by increasing risk-weights and provisions."
    ],
    correctAnswer: 3,
    reason: "Restructuring an account signals higher credit risk. Regulators require banks to increase provisioning and assign higher risk-weights, which locks up more core capital and limits lending capacity."
  },
  {
    id: 21,
    part: P6,
    question: "A consortium introduces an Inter-Creditor Agreement (ICA) vote to restructure a stressed steel asset. Banks representing 80% of the value and 55% of the total number of lenders approve the plan. Is this decision legally binding?",
    options: [
      "No, because it requires approval from 60% of the lenders by number.",
      "Yes, because the value vote exceeds the 75% regulatory threshold.",
      "No, because value approval must reach a 90% supermajority.",
      "Yes, provided the lead bank signs an unconditional waiver."
    ],
    correctAnswer: 0,
    reason: "Under current resolution frameworks, a restructuring plan requires a dual majority: at least 75% by total outstanding value AND at least 60% by total number of lenders. Missing either threshold defeats the vote."
  },
  {
    id: 22,
    part: P6,
    question: "A promoter requests a 6-month extension on a manufacturing loan's moratorium. They offer to pledge additional family-owned agricultural land as collateral. How do you assess this security top-up?",
    options: [
      "Accept it because agricultural land value remains highly stable.",
      "Reject it as agricultural land is difficult to liquidate due to local legal restrictions.",
      "Accept it but apply a standard 75% haircut to its valuation.",
      "Allow it if the land is converted to commercial status within 30 days."
    ],
    correctAnswer: 1,
    reason: "Agricultural land faces strict legal restrictions on foreclosure and sale to non-agriculturists in many jurisdictions. This makes it an illiquid and ineffective collateral option for recovering commercial bank loans."
  },
  {
    id: 23,
    part: P6,
    question: "A corporate borrower opens a collection account with a non-consortium bank to deposit cash sales, bypassing the primary Escrow account. What credit risk signal does this action trigger?",
    options: [
      "An indicator of rapid working capital turnover.",
      "A positive sign of cash diversification across banking lines.",
      "An Early Warning Signal (EWS) indicating potential fund diversion.",
      "A technical breach that lowers the bank's capital adequacy requirements."
    ],
    correctAnswer: 2,
    reason: "Routing revenue outside the agreed consortium escrow account is a major red flag. It indicates the borrower is hiding cash to evade debt servicing obligations or divert funds to unapproved projects."
  },
  {
    id: 24,
    part: P6,
    question: "When appraising a port project, you note the concession agreement includes a \"Termination Payment\" clause where the government covers 90% of the debt if the contract is canceled. How does this affect your credit decision?",
    options: [
      "It requires the bank to double its standard provisioning rate.",
      "It forces the promoter to increase their upfront cash equity to 50%.",
      "It eliminates the need to set up a TRA waterfall mechanism.",
      "It lowers the project's default risk by providing a strong safety net."
    ],
    correctAnswer: 3,
    reason: "A sovereign-backed termination payment covers the bank's debt if the project fails due to regulatory shifts. This structural guarantee lowers the bank's ultimate loss exposure and improves the credit profile."
  },
  {
    id: 25,
    part: P7,
    question: "A company shows a current ratio of 2.1x but a quick ratio of 0.6x. What does this gap tell you about their financial position?",
    options: [
      "Liquidity is heavily trapped in slow-moving raw inventory.",
      "The company maintains excellent cash balances to cover short-term debt.",
      "The firm is highly over-leveraged on its long-term borrowing.",
      "Receivables are being collected faster than industry averages."
    ],
    correctAnswer: 0,
    reason: "A high current ratio alongside a low quick ratio shows that short-term assets are dominated by inventory rather than liquid cash or receivables. If sales slow down, the company will face an immediate liquidity crunch."
  },
  {
    id: 26,
    part: P7,
    question: "A promoter injects equity capital into an SPV via an unsecured loan from their parent company. The loan agreement allows the parent to withdraw funds if its own credit rating drops. How do you treat this loan?",
    options: [
      "Count it as clean promoter equity because the cash is inside the SPV.",
      "Reject it unless the loan is fully subordinated and cannot be withdrawn during the bank loan's tenor.",
      "Charge an extra 50 bps on the term loan to cover the rating risk.",
      "Permit it if the parent company maintains a standard TOL/TNW under 2.0x."
    ],
    correctAnswer: 1,
    reason: "Unsecured loans with call-back options are unstable. To count as equity margin, the loan must be fully subordinated, interest-free, and locked in place until the bank's term loan is completely repaid."
  },
  {
    id: 27,
    part: P7,
    question: "During sensitivity analysis for a toll road project, you find that a 5% drop in heavy truck traffic cuts the operating EBITDA by 25%. What type of risk does this reveal?",
    options: [
      "High raw material price risk across international markets.",
      "Excellent capacity to absorb variable cost spikes.",
      "High operating leverage where fixed maintenance costs squeeze margins.",
      "A compressed loan asset maturity structure that accelerates cash recovery."
    ],
    correctAnswer: 2,
    reason: "When a small revenue drop causes a large fall in EBITDA, it reveals high operating leverage. Fixed costs (like road maintenance) remain constant, meaning any revenue dip directly squeezes the cash available for debt service."
  },
  {
    id: 28,
    part: P7,
    question: "A firm requests a term loan to replace an old manufacturing asset. The replacement will reduce power consumption by 30% but will not expand total production capacity. How should you structure the repayment?",
    options: [
      "Schedule a steep ballooning profile that relies on future market expansion.",
      "Require a 100% upfront promoter equity contribution to eliminate risk.",
      "Structure a bullet repayment due at the end of Year 10.",
      "Match repayments directly with the verified cost savings generated by the new machine."
    ],
    correctAnswer: 3,
    reason: "Since this investment saves on costs rather than expanding sales, the loan must be amortized using those verified energy savings. This aligns the repayment schedule with the project's actual source of cash."
  },
  {
    id: 29,
    part: P8,
    question: "Under current Large Exposure Framework (LEF) rules, a bank's maximum exposure to a single connected corporate group is capped at what percentage of its Tier-1 Eligible Capital Base?",
    options: ["25%", "15%", "40%", "10%"],
    correctAnswer: 0,
    reason: "Regulatory frameworks cap a bank's maximum exposure to any single interconnected group of companies at 25% of its Tier-1 capital. This concentration limit protects the banking system from systemic shocks."
  },
  {
    id: 30,
    part: P8,
    question: "A bank finances a real estate project. The promoter requests a 12-month extension on the DCCO because local building approvals were delayed. What is the standard provisioning requirement for this asset while it is extended?",
    options: [
      "The provisioning rate falls to a flat 0.25%.",
      "The asset stays standard but carries a 1.00% provisioning rate.",
      "The loan requires an automatic 15% sub-standard provision.",
      "Provisions must increase by 20% every quarter until construction resumes."
    ],
    correctAnswer: 1,
    reason: "Commercial Real Estate (CRE) projects that extend their DCCO due to non-promoter delays can maintain a Standard classification, but they carry a higher 1.00% provisioning rate to account for the execution risk."
  },
  {
    id: 31,
    part: P8,
    question: "A corporate borrower requests a term loan to purchase shares in an international tech startup. Can a commercial bank fund this transaction under current lending guidelines?",
    options: [
      "Yes, if the shares are pledged as primary collateral.",
      "Yes, provided the borrower maintains a net worth above ₹100 Crore.",
      "No, commercial banks are generally banned from funding equity investments or share purchases.",
      "Yes, if the loan is structured with a short 2-year average maturity."
    ],
    correctAnswer: 2,
    reason: "Clean banking regulations prevent commercial banks from providing term loans to corporations for speculative share purchases or equity investments, as these activities carry high market risk."
  },
  {
    id: 32,
    part: P8,
    question: "A borrower's term loan account falls into arrears and is classified as a Sub-Standard asset on March 31. What baseline provisioning must the bank immediately allocate against the unsecured portion of this loan?",
    options: ["15%", "100%", "40%", "25%"],
    correctAnswer: 3,
    reason: "When a loan slides into the Sub-Standard category, the bank must immediately apply a 15% provision on the secured portion and a higher 25% provision on any unsecured shortfall."
  },
  {
    id: 33,
    part: P9,
    question: "A forensic audit shows a company's long-term bank loan increased by ₹10 Crore, while its fixed assets remained flat and net working capital contracted. What does this fund flow indicate?",
    options: [
      "High risk that long-term loan funds were diverted to unapproved uses.",
      "Efficient use of capital to scale up production.",
      "A healthy restructuring of the short-term debt portfolio.",
      "An expansion of the company's tangible net worth base."
    ],
    correctAnswer: 0,
    reason: "If long-term debt rises while fixed assets and working capital stay flat or shrink, the cash has left the core business. This pattern strongly indicates the borrower is diverting funds outside the approved project."
  },
  {
    id: 34,
    part: P9,
    question: "A promoter requests a term loan and offers a first charge on a factory building that sits on leased government land with a remaining lease tenor of 5 years. The loan repayment schedule spans 7 years. What is your credit decision?",
    options: [
      "Approve it if the promoter provides a personal guarantee.",
      "Reject the collateral as the lease expires before the loan is fully repaid.",
      "Accept it but apply a standard 60% haircut to the building's valuation.",
      "Condition approval on a 50 bps increase in the floating interest rate."
    ],
    correctAnswer: 1,
    reason: "Security sitting on leased land must have a lease tenor that extends well past the loan's maturity. If the lease expires in 5 years on a 7-year loan, the bank loses its primary security before the debt is cleared."
  },
  {
    id: 35,
    part: P9,
    question: "A data center project relies on an enterprise client contract that allows the client to terminate the lease with a 30-day notice. How should the credit team value this contract during appraisal?",
    options: [
      "Value it as a guaranteed, long-term cash flow line.",
      "Accept it if backed by a standard performance bond.",
      "Treat it as a highly volatile revenue stream that cannot guarantee long-term debt service.",
      "Triple the project's internal asset depreciation rate."
    ],
    correctAnswer: 2,
    reason: "Short-notice termination clauses remove income predictability. Lenders cannot rely on these volatile revenue streams to service a long-term, high-value term loan asset."
  },
  {
    id: 36,
    part: P9,
    question: "A corporate group requests a new project loan from Bank of India. Cross-checking the Central Repository of Information on Large Credits (CRILC) database reveals their group company holds an active SMA-2 status at another commercial bank. What is your underwriting action?",
    options: [
      "Process the loan independently if the local entity's account is clean.",
      "Increase the collateral coverage requirement to 200% and approve.",
      "Defer principal repayments by an extra 12 months to provide a buffer.",
      "Hold the application; group stress indicates high contagion and default risk."
    ],
    correctAnswer: 3,
    reason: "An SMA-2 status inside the corporate group reveals systemic liquidity stress. Funding a new project while an affiliated entity is on the verge of default creates severe contagion risk for the bank's capital."
  },
  {
    id: 37,
    part: P10,
    question: "A chemical manufacturing unit appraisal shows a Debt-to-Equity ratio of 4.0x, an average DSCR of 1.12x, and a project IRR of 9.0%. The market interest rate for industrial credit resets to 9.5%. What is the fundamental credit defect?",
    options: [
      "Negative real financial leverage where borrowing costs outpace asset returns.",
      "Excellent equity capitalization with comfortable cash cushions.",
      "High capacity to handle sudden market utilization shocks.",
      "An over-extended loan asset maturity structure that accelerates debt recovery."
    ],
    correctAnswer: 0,
    reason: "When a project's IRR falls below the interest rate on its debt, the leverage becomes destructive. Every rupee borrowed costs more than it earns, draining cash flow and making the structure highly unsafe."
  },
  {
    id: 38,
    part: P10,
    question: "A promoter requests a term loan to build a private jetty. They offer a negative pledge on their corporate headquarters instead of a formal mortgage. What protection does this pledge provide to the bank?",
    options: [
      "It grants the bank a direct right to seize and liquidate the headquarters.",
      "It only prevents the borrower from mortgaging the building to another lender.",
      "It automatically upgrades the asset classification to a super-secured status.",
      "It requires the bank to lower its capital adequacy reserve by 15%."
    ],
    correctAnswer: 1,
    reason: "A negative pledge is a restrictive covenant, not a property mortgage. It stops the borrower from giving a charge to another bank, but it does not give the lender a direct claim to seize or liquidate the asset during a default."
  },
  {
    id: 39,
    part: P10,
    question: "You are checking an infrastructure loan proposal. The financial model calculates the DSCR by adding interest on working capital to the denominator. How does this adjustment affect the metric?",
    options: [
      "It artificially inflates the project's apparent safety margin.",
      "It extends the loan asset's calculated average maturity profile.",
      "It lowers the calculated DSCR, giving a stricter view of cash availability.",
      "It reduces the bank's standard provisioning requirement by 10%."
    ],
    correctAnswer: 2,
    reason: "Adding short-term working capital interest to the denominator increases the total debt service line. This lowers the calculated DSCR, forcing the model to show a more conservative and strict view of cash availability."
  },
  {
    id: 40,
    part: P10,
    question: "A company seeks a term loan to fund an acquisition. Their consolidated balance sheet shows goodwill makes up 45% of their total asset base, while their tangible asset cover sits at 0.55x. What is the underwriting concern?",
    options: [
      "The company maintains excellent liquid reserves to handle market drops.",
      "The asset depreciation timeline is compressed too far.",
      "The business requires an immediate debt equity conversion.",
      "Balance sheet value relies heavily on intangible assets that provide no default recovery protection."
    ],
    correctAnswer: 3,
    reason: "Goodwill is an intangible asset that often disappears during business stress. If a borrower lacks tangible assets (like land or machinery), the bank has no effective collateral to liquidate to recover its funds if the acquisition fails."
  }
];

export const quizInfo = {
  title: "Quiz by Anil Aggarwal",
  professor: "ANIL AGGARWAL",
  date: "Aug 3, 2026",
  totalQuestions: 40,
  totalMarks: 100,
  marksPerQuestion: 2.5,
  timeLimit: 40,
  isStructure2: false,
  rules: [
    "Read each question carefully before answering",
    "All 40 questions carry 2.5 marks each (total 100 marks)",
    "Total time: 40 minutes",
    "You can navigate between questions and change your answers before submitting",
    "Click 'Submit Quiz' to finish, or the quiz will auto-submit when time expires"
  ]
};
