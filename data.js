// ============================================================
//  FINANCIAL HUB — DATA FILE
//  Edit this file every 2 weeks. All dashboards update automatically.
//  Last updated: April 30, 2026
// ============================================================

const FINANCIAL_DATA = {

  // ── META ───────────────────────────────────────────────────
  lastUpdated:        "April 30, 2026",
  nextUpdateDue:      "May 14, 2026",

  // ── PEOPLE ─────────────────────────────────────────────────
  her:                "Janette",
  him:                "Partner",

  // ── INCOME ─────────────────────────────────────────────────
  janetteIncome:      4510,     // monthly take-home after taxes
  partnerIncome:      5521,     // monthly take-home after taxes + 401k
  partnerJobStart:    "May 2026",

  // ── LOAN BALANCES (update every 2 weeks) ──────────────────
  janetteLoan:        21000,
  partnerLoan:        130000,
  loanRate:           0.09,

  // ── SAVINGS BALANCES (update every 2 weeks) ───────────────
  janetteRothBalance: 27000,
  hysaBalance:        1925,     // joint HYSA total
  janetteChecking:    1900,     // her checking buffer
  jointChecking:      1000,     // joint checking (her share $500)
  partnerCash:        5000,     // his graduate loan cash

  // ── HYSA BUCKETS (update monthly) ─────────────────────────
  emergencyFundSaved: 3925,     // current total emergency fund
  emergencyFundTarget:25000,    // target before move-out
  babyFundSaved:      0,
  babyFundTarget:     20000,
  moveOutFundSaved:   0,
  moveOutFundTarget:  15000,
  hokkaido:           200,      // Hokkaido 2027 fund
  hokkaidoTarget:     6000,
  holidayFund:        0,
  holidayTarget:      1200,
  travelFund:         0,
  travelTarget:       5000,

  // ── CC DEBT ────────────────────────────────────────────────
  ccDebt:             0,        // eliminated April 2026
  ccPaidOff:          44920,    // total Janette contributed

  // ── MONTHLY BUDGET ALLOCATIONS ────────────────────────────
  janetteAllowance:   800,      // her personal checking transfer
  partnerAllowance:   2000,     // his personal checking transfer
  familyContrib:      800,      // his family contribution (from his allowance)
  sharedExpenses:     1608,     // truly shared joint expenses
  janetteRothMonthly: 583,      // $7,000 ÷ 12
  partnerRothMonthly: 583,
  janetteEfund:       300,      // monthly to emergency fund
  partnerEfund:       300,
  hysaBuckets:        800,      // monthly to shared HYSA buckets
  janetteLoanPmt:     2427,     // total loan payment (min + extra)
  partnerLoanPmt:     2500,

  // ── ACCOUNT FLOORS (never go below these) ─────────────────
  janetteFloor:       1000,     // her personal checking floor
  partnerFloor:       1500,     // his personal checking floor
  jointFloor:         2000,     // joint checking floor (pre move-out)

  // ── INVESTMENT DETAILS ────────────────────────────────────
  rothHoldings: [
    { ticker: "VTSAX", name: "Vanguard Total Stock Market", shares: 94.289, price: 157.35, gain: 8025.53 },
    { ticker: "VXUS",  name: "Vanguard Total International", shares: 0, price: 57.00, gain: 0 },
    { ticker: "HASI",  name: "HA Sustainable Infrastructure", shares: 43.861, price: 37.57, gain: -612.97 },
    { ticker: "DOC",   name: "Healthpeak Properties", shares: 43.740, price: 16.38, gain: -438.19 },
    { ticker: "NHI",   name: "National Health Investors", shares: 9.350, price: 81.75, gain: 103.64 },
    { ticker: "STAG",  name: "Stag Industrial", shares: 20.665, price: 36.21, gain: 54.88 },
  ],

  // ── LIFE EVENTS & MILESTONES ──────────────────────────────
  columbiaGrad:       "Summer 2026",
  healthInsuranceDate:"August 2026",
  nomadStart:         "June 2027",
  nomadBudgetMonthly: 4000,
  nomadItinerary:     "Japan (Jan–Mar) → Shanghai (Apr–Sep) → Taiwan (Oct–Dec)",
  returnLocation:     "18 Battery Place",
  returnRent:         3000,
  returnDate:         "June 2028",
  babyAge:            30,       // target age for first child

  // ── LONG-TERM GOALS ───────────────────────────────────────
  incomeGoal:         8888.88,  // monthly take-home target
  netWorthGoal:       500000,
  debtFreeTarget:     "Late 2029",
  firmLaunchAge:      "33–38",

  // ── EQUITY TRACKING ───────────────────────────────────────
  equityContributed:  44920,    // Janette's CC debt contribution
  equityAdjustment:   "35/65",  // shared expense split during equity period
  equityPeriod:       "2–3 years after partner starts job",
};
