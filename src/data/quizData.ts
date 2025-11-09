export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "TVS Motors launches a ₹500 crore electric scooter project. It specifies a performance milestone — if market share stays below 5% after 3 years, it will stop production and sell machinery to another EV startup for 40% of cost. Which interpretation best captures the strategic use of financial flexibility here?",
    options: [
      "A typical sunk cost scenario with no recovery potential.",
      "An embedded put option allowing partial value recovery if outcomes are poor.",
      "An option to expand since the project could scale if successful.",
      "A fixed-cost exposure that increases operating leverage."
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Torrent Pharma can invest ₹400 crore in three projects: (1) Domestic generics: IRR 21%, NPV ₹120 cr; (2) USFDA-compliant oncology R&D: IRR 17%, NPV ₹110 cr; (3) Nutraceutical diversification: IRR 25%, NPV ₹90 cr. Which choice represents a strategic capital rationing mindset rather than a purely financial one?",
    options: [
      "Select Project 1 and 3 for maximum NPV and IRR.",
      "Choose Project 2 for strategic capability creation despite a lower IRR.",
      "Postpone all projects to next cycle and preserve liquidity.",
      "Select Project 3 only, as it diversifies into a high-growth segment."
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Shakti Pumps focuses on its solar irrigation systems (growing fast). Management debates entering EV motor manufacturing — a distant but related opportunity. If the firm's cashflows are currently stretched and debt ratios high, which strategy aligns best with the McKinsey model without overexposing capital?",
    options: [
      "Strengthen existing solar pump business first, and monitor EV space as Horizon 3 scouting.",
      "Enter EV business immediately to capture early mover advantage.",
      "Divest solar operations to fund the EV initiative.",
      "Wait until competition defines the EV market, then follow."
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Dabur India launches a new premium organic range that increases revenue growth from 10% to 14% but reduces EBITDA margin from 21% to 18% due to higher raw material costs. Capital employed remains unchanged. According to the strategic value equation (Value = ROIC – WACC + Growth premium), what is the most likely impact on firm value?",
    options: [
      "Value increases because revenue growth outweighs margin compression.",
      "Value declines because lower margins reduce ROIC below the cost of capital.",
      "Value remains the same as long as total profit is constant.",
      "Value increases only if market share crosses the break-even scale threshold."
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Tata Motors invests in a modular platform that can be used for multiple models — SUVs, EVs, and compact cars — reducing per-unit cost by 8%. However, it increases R&D and tooling expenses by 20% upfront. From a strategic cost architecture viewpoint, what is Tata Motors actually building?",
    options: [
      "Cost efficiency through economies of scale.",
      "Structural flexibility enabling long-term cost leadership.",
      "Short-term operating leverage at the expense of differentiation.",
      "Product diversification supported by marketing synergy."
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Godrej Consumer Products Ltd. introduces contract packaging in rural markets. When sales volume fell 10%, cost fell only 4%. What does this indicate about cost flexibility?",
    options: [
      "CFI = 0.4 → costs are inflexible; high fixed cost presence.",
      "CFI = 0.6 → balanced flexibility.",
      "CFI = 1.0 → fully variable structure.",
      "CFI = 0.8 → cost reduction matches volume change fairly well."
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Bharti Airtel is forecasting future interest rate trends for debt planning. Three scenarios: (1) Rates fall; (2) Rates rise; (3) Volatile environment. Which strategy best aligns with scenario-based financial planning?",
    options: [
      "Increase leverage to lock in cheap debt under the falling-rate scenario.",
      "Maintain conservative leverage but keep refinancing options open.",
      "Fix long-term rates aggressively under all scenarios.",
      "Avoid new borrowing until volatility stabilizes."
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Dabur India is building a long-term strategic model for its personal care business. The model uses advertising spend and cost of goods sold (COGS) as key growth drivers. However, management notes these do not reflect the company's shift to digital and premium products. Which of the following would represent a better choice of strategic drivers in the new context?",
    options: [
      "COGS % of sales and interest coverage ratio",
      "Advertising spend as % of sales and brand count growth",
      "Product mix premiumization rate and digital channel share of revenue",
      "EBITDA margin trend and total asset turnover"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "A manufacturing firm can invest ₹100 crore today or wait one year. If it waits, demand may increase by 30% (probability 0.5) or fall by 20% (probability 0.5). If demand rises, NPV = ₹40 crore; if it falls, NPV = –₹10 crore. Discount rate = 10%. What is the expected strategic NPV if the firm waits for one year?",
    options: [
      "₹15 crore",
      "₹13.6 crore",
      "₹10.5 crore",
      "₹8.2 crore"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Laurus Labs is deciding whether to invest ₹200 crore in an R&D facility that will enable entry into complex generics. The NPV based on current pipeline is small, but the facility offers future product diversification. How can the firm best capture the strategic value of this project?",
    options: [
      "Increase project life to reflect ongoing benefits.",
      "Compute adjusted NPV using a higher growth rate.",
      "Add a real option premium representing flexibility for future projects.",
      "Use payback method to highlight early cash flows."
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Amber Enterprises invests ₹100 crore in a pilot plant. If successful (prob. 0.4), it can expand with an extra ₹150 crore investment for NPV = ₹80 crore. If unsuccessful (prob. 0.6), project is abandoned. Discount rate = 10%. What is the option value of expansion?",
    options: [
      "₹6 crore",
      "₹9 crore",
      "₹12 crore",
      "₹15 crore"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Minda Corporation has multiple business units. Unit A earns NOPAT ₹45 crore with capital employed ₹300 crore; WACC = 12%. Unit B earns NOPAT ₹30 crore with capital employed ₹150 crore; WACC = 14%. Which unit adds more strategic value in EVA terms?",
    options: [
      "Unit A, because it has higher profit",
      "Unit B, because it earns higher ROCE",
      "Both have same EVA",
      "Unit A, because its EVA is ₹9 crore higher"
    ],
    correctAnswer: 3
  },
  {
    id: 13,
    question: "Godrej Agrovet has a division with NOPAT ₹25 crore and capital employed ₹300 crore. WACC = 10%. If divested, the ₹300 crore could be invested elsewhere yielding 12% return. What strategic decision does EVA support?",
    options: [
      "Retain the division, since it's profitable",
      "Divest, since EVA is negative ₹–5 crore",
      "Retain, as NOPAT covers cost of capital",
      "Indifferent, as EVA equals zero"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Tata Metaliks cuts energy cost by ₹12 crore annually through technology upgrades costing ₹60 crore. WACC = 10%, tax rate = 30%. How will this decision affect EVA?",
    options: [
      "EVA improves if after-tax savings > cost of capital charge",
      "EVA declines because fixed assets increase",
      "EVA remains unchanged as operating profit and cost both change",
      "EVA impact can't be measured for cost savings"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Trident Ltd., a mid-size textile exporter, plans to increase its debt ratio from 30% to 70% to benefit from interest tax shields. Analysts warn of increased bankruptcy probability. Which statement best captures the realistic implication under M&M with imperfections?",
    options: [
      "Firm value will keep increasing as debt increases due to tax shield benefits",
      "Beyond a certain leverage, bankruptcy cost offsets tax shield advantage",
      "Firm value is totally independent of leverage",
      "Equity holders' required return will remain constant with higher debt"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Auro Motors Ltd. produces 10,000 units at ₹500 each. Fixed Costs = ₹20 lakh, Variable Cost = ₹300/unit. If sales increase by 10%, what will be the % change in EBIT?",
    options: [
      "15%",
      "25%",
      "33%",
      "50%"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "Rolta Ltd. has: Debt = ₹400 crore, Equity = ₹100 crore, EBIT = ₹120 crore, Interest = ₹40 crore, Tax rate = 30%. Which interpretation reflects its financial leverage risk?",
    options: [
      "Interest coverage ratio = 3.0 → comfortable debt capacity",
      "Interest coverage ratio = 2.0 → moderate risk",
      "Debt-equity ratio = 4:1 → high leverage despite good coverage",
      "Return on assets will automatically rise with higher debt"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "Two firms, Alpha Ltd. and Beta Ltd., both earn EBIT ₹100 lakh on total assets of ₹500 lakh. Alpha has no debt. Beta has ₹200 lakh debt @10%, tax 30%. Which statement is most accurate?",
    options: [
      "Both have same ROI but Beta's ROE is higher due to leverage",
      "Beta's ROI and ROE are both higher",
      "Alpha's ROE is higher as it has no interest cost",
      "ROI and ROE both fall with leverage"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "A CFO observes: Interest Coverage = 4×, Cash Coverage = 5×, DSCR = 1.3×. Which inference is most accurate?",
    options: [
      "Company is profitable but principal repayments are consuming cash",
      "Debt is fully comfortable; no action needed",
      "Interest rates must be renegotiated",
      "EBIT is low; DSCR appears strong due to tax shelter"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "A fast-growing EV component startup with limited tangible assets seeks funding for capacity expansion. What should be the guiding principle for its capital structure?",
    options: [
      "Use more equity as collateral and cash flow support are limited",
      "Prefer long-term debt since growth will improve repayment ability",
      "Balance short-term loans and preference capital",
      "Go for high leverage to boost early ROE"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "As the CFO of Neon Plastics Ltd., you've recorded a strong profit year. Your company needs cash for a major R&D investment next year. Which dividend decision best aligns with long-term shareholder value?",
    options: [
      "Declare a high dividend to reward investors' patience",
      "Maintain a stable dividend and retain excess profits for R&D",
      "Skip dividend entirely and reinvest all profits",
      "Issue bonus shares instead of paying cash dividend"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "A firm wants to maintain an SGR of 12%. Its ROE is 16%. What dividend payout ratio should the CFO target?",
    options: [
      "20%",
      "25%",
      "30%",
      "40%"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "A company's D/E ratio before buyback is 1.2:1. It uses ₹100 crore debt to finance the buyback. What is the most likely impact?",
    options: [
      "D/E increases, financial risk rises",
      "D/E decreases due to equity reduction",
      "D/E unchanged because assets reduce",
      "EPS and D/E both fall"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "A bank introduces a performance-linked bonus plan for its relationship managers to push SME loan sales. Within a year, NPAs rise sharply. Which architectural flaw is most evident?",
    options: [
      "Misaligned performance measures and rewards",
      "Lack of delegation",
      "Poor communication system",
      "Over-centralized decision making"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: "The CFO of a mid-size manufacturing firm allows plant managers to approve capital expenditure up to ₹20 lakh but retains larger investment approvals at head office. What principle of authority design is being followed?",
    options: [
      "Decentralization for flexibility, centralization for strategic control",
      "Full decentralization to encourage initiative",
      "Complete centralization to avoid duplication",
      "Matrix-based delegation to production staff"
    ],
    correctAnswer: 0
  }
];

export const quizInfo = {
  title: "NORTH CAP UNIVERSITY : STUDENTS QUIZ",
  date: "07.11.25",
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