# 💰 Financial Command Center

**Janette & Partner · Personal Financial Hub**

A living financial dashboard that updates automatically when you edit `data.js`. No coding knowledge required for routine updates.

---

## 🗂 File Structure

```
financial-hub/
│
├── index.html          ← Command center home (never edit)
├── personal.html       ← Janette personal budget (never edit)
├── couples.html        ← Couples dashboard (never edit)
├── categories.html     ← Budget categories (never edit)
├── nomad.html          ← Nomad scenario planner (never edit)
├── debt.html           ← Personal vs debt explorer (never edit)
├── data.js             ← ✏️ THE ONLY FILE YOU EVER EDIT
└── README.md           ← This file
```

**Rule:** You only ever touch `data.js`. Everything else is built by Claude and updated by Claude when you want new features.

---

## ✏️ How to Update Biweekly (5 minutes)

### Step 1 — Open data.js
1. Go to your GitHub repository
2. Click `data.js`
3. Click the **pencil icon** (Edit this file)

### Step 2 — Update your numbers
Only change the numbers. Don't change anything else. Examples:

```javascript
// Update loan balances
janetteLoan:      18500,    // ← just change the number
partnerLoan:      127300,   // ← just change the number

// Update savings
hysaBalance:      2400,
emergencyFundSaved: 4200,
hokkaido:         550,

// Update Roth balance (monthly)
janetteRothBalance: 28400,

// Update checking buffers
janetteChecking:  1900,
jointChecking:    1200,
```

### Step 3 — Update the date
```javascript
lastUpdated:    "May 14, 2026",
nextUpdateDue:  "May 28, 2026",
```

### Step 4 — Commit
1. Scroll to the bottom
2. Click **"Commit changes"**
3. Add a note like "May 14 biweekly update"
4. Click **"Commit changes"** again
5. Your live site updates in ~60 seconds

---

## 🔄 When to Update What

| Data | How often |
|---|---|
| Loan balances | Every 2 weeks |
| HYSA balance + buckets | Every 2 weeks |
| Checking buffers | Every 2 weeks |
| Roth IRA balance | Monthly |
| Roth holdings (shares, price) | Monthly |
| Income | When it changes |
| Monthly allocations | When it changes |

---

## 🆕 When to Ask Claude for Help

Ask Claude when you want:
- A new tab or section added to a dashboard
- A new chart or visualization
- A new scenario to model
- Something is broken or displaying wrong
- You want to add a new life event or milestone

**How to ask Claude:**
1. Start a new conversation
2. Say: *"Here is my financial context and current data.js — I want to [describe the change]"*
3. Paste the contents of `data.js`
4. Paste the contents of whichever dashboard file needs changing
5. Claude makes the targeted change and gives you back the updated file
6. Paste it into GitHub and commit

---

## 📊 Dashboard Descriptions

| Dashboard | What it does |
|---|---|
| **index.html** | Command center — net worth, debt progress, savings buckets, milestone tracker, nomad countdown |
| **personal.html** | Janette's personal budget with editable sliders, Roth vs loan decision, April 15 deadline tracker |
| **couples.html** | Joint finances — fair split calculator (35/65 equity adjustment), debt tracker, equity balance, shared goals, phase plan |
| **categories.html** | Every expense categorized into personal/joint/HYSA with 42 gray area rules pre-decided |
| **nomad.html** | Jan 2027 vs Jun 2027 vs no nomad — side by side debt and net worth charts, month-by-month tables |
| **debt.html** | Slider-based explorer — drag personal spending sliders and watch debt payoff timeline update live |

---

## 🌐 Your Live URLs

Once GitHub Pages is set up, your dashboards are always at:

```
https://[yourusername].github.io/financial-hub/
https://[yourusername].github.io/financial-hub/personal.html
https://[yourusername].github.io/financial-hub/couples.html
https://[yourusername].github.io/financial-hub/categories.html
https://[yourusername].github.io/financial-hub/nomad.html
https://[yourusername].github.io/financial-hub/debt.html
```

These links never change. Bookmark them all.

---

## ⚙️ First Time GitHub Setup (do once)

1. Go to [github.com](https://github.com) → create a free account
2. Click **"New repository"**
3. Name it `financial-hub`
4. Set to **Public**
5. Click **"Create repository"**
6. Upload all files (drag and drop into the repo)
7. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
8. Click **Save**
9. Wait ~2 minutes — your site is live at `https://[yourusername].github.io/financial-hub`

---

## 🔑 Key Numbers Reference

| Item | Current | Target |
|---|---|---|
| Janette take-home | $4,510/mo | $8,888.88/mo |
| Partner take-home | $5,521/mo | — |
| Janette loan | $21,000 @ 9% | $0 by end 2026 |
| Partner loan | $130,000 @ 9% | $0 by late 2029 |
| Emergency fund | $3,925 | $25,000 (pre-move-out) |
| Roth IRA | ~$27,000 | Max $7K/yr forever |
| Nomad year start | June 2027 target | — |
| Return location | 18 Battery Place | $3,000/mo rent |
| Net worth goal | — | $500,000+ by age 33–35 |
| Both debt-free | — | Late 2029 |

---

## 💡 Tips

- **Never delete lines in data.js** — only change the values after the colons
- **Keep the commas** at the end of each line — they matter
- **If something looks broken** after an update — check that all commas are in place and no extra characters were added
- **The Roth holdings section** requires updating both `shares` and `price` — get current price from Vanguard app
- **Loan balance** — update after each payment clears your servicer account, not when you make the payment

---

*Built with Claude · Updated biweekly · Last updated April 30, 2026*
