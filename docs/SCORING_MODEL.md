# Scoring Model & Analytical Engine

This document explains the complete scoring model, analytical engine, and insight generation mechanisms used in the **Digital Maturity Scorecard**.

---

## Table of contents

1. [Assessment structure](#assessment-structure)
2. [Scoring mechanics](#scoring-mechanics)
3. [Maturity stages](#maturity-stages)
4. [Insight tier system](#insight-tier-system)
5. [Pattern detection engine](#pattern-detection-engine)
6. [Cross-dimensional intelligence](#cross-dimensional-intelligence)
7. [Question-level gap analysis](#question-level-gap-analysis)
8. [Dynamic narrative generation](#dynamic-narrative-generation)
9. [AI-powered strategic analysis](#ai-powered-strategic-analysis)
10. [Report generation](#report-generation)

---

## Assessment structure

The scorecard evaluates digital maturity across **five dimensions**, each containing **six questions** — 30 questions in total.

| Dimension | Key | What it assesses |
| --- | --- | --- |
| Data & Analytics | `data` | Collection, unification, quality, governance, predictive use, and attribution |
| AI & Automation | `ai` | Use-case clarity, production deployment, governance, enablement, task reduction, vendor evaluation |
| Customer Experience | `experience` | Journey mapping, channel consistency, personalisation, feedback loops, testing, segmentation |
| Governance & Operations | `governance` | Ownership, policy compliance, approval speed, tool management, cybersecurity, change management |
| Performance & Optimisation | `performance` | KPI discipline, experimentation, channel ROI, analytics accuracy, underperformance management, strategic alignment |

Each question probes a specific operational capability and includes a "why this matters" explanation that educates while assessing.

---

## Scoring mechanics

### Question-level scoring

Each question is scored from **1 to 5** on a maturity scale:

| Score | Label | Meaning |
| --- | --- | --- |
| 1 | Fragmented | Ad hoc, inconsistent, mostly reactive |
| 2 | Emerging | Basic practice exists but remains uneven |
| 3 | Structured | Repeatable approach with partial alignment |
| 4 | Integrated | Cross-functional, governed, and scalable |
| 5 | Optimised | Continuously improved and value-led |

### Dimension scoring

Each dimension score is the **arithmetic mean** of its six question scores:

```
dimension_score = sum(question_scores) / 6
```

Only answered questions contribute to the numerator, but the denominator is always 6. This means unanswered questions pull the dimension average down, incentivising complete assessment.

### Overall scoring

The overall maturity score is the **arithmetic mean** of all dimensions that have at least one answered question:

```
overall_score = sum(dimension_averages_with_answers) / count(dimensions_with_answers)
```

This prevents incomplete dimensions from artificially deflating the overall score.

### Completion tracking

Completion percentage counts only valid current question IDs against answered questions:

```
completion = answered_valid_questions / total_valid_questions × 100
```

Stale localStorage entries from previous assessment versions are excluded.

---

## Maturity stages

The overall score maps to one of **eight granular maturity stages**:

| Score range | Stage | Description |
| --- | --- | --- |
| 4.7–5.0 | Transformational leader | Digital capability is a core growth engine — deeply embedded, continuously optimised, and driving competitive advantage across every function |
| 4.2–4.6 | Optimised performer | Strong cross-functional integration with mature governance and data-driven decision-making |
| 3.7–4.1 | Scaling integrator | Core capabilities are well-established and starting to compound |
| 3.2–3.6 | Structured executor | Repeatable processes are in place with growing consistency across teams |
| 2.7–3.1 | Developing practitioner | Foundations are forming with pockets of good practice |
| 2.2–2.6 | Emerging operator | Basic capabilities exist but remain inconsistent and under-governed |
| 1.5–2.1 | Ad hoc responder | Digital activity is largely reactive, siloed, and dependent on individual effort |
| 0–1.4 | Foundational gap | Earliest stage with critical gaps across most dimensions |

---

## Insight tier system

Each dimension score maps to one of **five insight tiers** that determine the specificity and tone of generated guidance:

| Tier | Score range | Label | Colour | Guidance focus |
| --- | --- | --- | --- | --- |
| `critical` | < 1.5 | Critical gap | Red | Capabilities are absent — extreme urgency, foundational action required |
| `low` | 1.5–2.1 | Weak | Orange | Significant gaps limiting effectiveness — basic structures needed |
| `mid` | 2.2–3.1 | Developing | Amber | Inconsistent but developing — structure and standards will accelerate progress |
| `advancing` | 3.2–3.9 | Advancing | Teal | Solid foundations — focus on optimisation, automation, and scaling |
| `high` | 4.0+ | Strong | Green | Mature and differentiated — maintain, innovate, and extend |

Each dimension has unique insight text for all five tiers, providing specific, actionable guidance appropriate to the maturity level — not generic descriptions.

---

## Pattern detection engine

The analytical engine detects **13 patterns** from the score distribution:

### Score distribution patterns

| Pattern | Condition | Meaning |
| --- | --- | --- |
| `allLow` | All dimensions < 2.0 | Systemic underinvestment across the entire digital operating model |
| `allMid` | All dimensions 2.0–3.5 | "Stuck in the middle" — plateau risk without clear differentiation |
| `allHigh` | All dimensions > 3.5 | Advanced maturity — focus shifts to innovation and leadership |
| `uniform` | Max − Min < 0.8 | Balanced development with no major imbalances |
| `polarized` | Max − Min > 2.0 | Extreme imbalance creating ceiling effects and wasted investment |
| `oneOutlierHigh` | One dimension > Mean + 1.5 | Single area of excellence disconnected from the rest |
| `oneOutlierLow` | One dimension < Mean − 1.5 | Single critical bottleneck dragging everything down |
| `topHeavy` | Top 2 avg > Bottom 2 avg + 1.5 | Strategy-oriented capabilities ahead of operational execution |
| `bottomHeavy` | Bottom 2 avg > Top 2 avg + 1.5 | Operational basics ahead of strategic capabilities |

### Cross-dimensional relationship patterns

| Pattern | Condition | Meaning |
| --- | --- | --- |
| `dataAiGap` | Data < 2.5, AI higher | AI ambitions constrained by data foundation gaps |
| `governanceBottleneck` | Governance is weakest, ≥2 others higher | Operational discipline limiting ability to scale capabilities |
| `executionGap` | Performance is lowest | Can't measure or prove the value of other investments |
| `experienceDisconnect` | Experience > 3.0, Data < 2.5 | Customer experience decisions based on assumptions rather than evidence |

---

## Cross-dimensional intelligence

The engine generates contextual cross-dimensional insights by analysing how dimension scores interact. Each insight includes a title, explanation, and severity level.

### Relationship rules

| When | Insight generated | Severity |
| --- | --- | --- |
| Data < 2.5 AND AI ≥ 2.5 | "Data Foundation Limits AI Potential" — AI tools without quality data produce unreliable outputs | high |
| Governance < 2.5 AND (Data ≥ 3 OR AI ≥ 3) | "Governance Gap Creates Scaling Risk" — advanced capabilities without governance create organisational risk | high |
| Performance < 2.5 AND Experience ≥ 3 | "Strong Experiences, Weak Proof" — great CX with no measurement means value can't be demonstrated | medium |
| Data ≥ 3.5 AND Performance < 2.5 | "Data Rich, Insight Poor" — data infrastructure exists but isn't driving optimisation | medium |
| AI ≥ 3 AND Governance < 2.5 | "AI Adoption Outpacing Governance" — ungoverned AI creates compliance and quality risks | high |
| All uniform AND all low | "Systemic Underinvestment" — consistent gaps suggest structural rather than capability-specific issues | high |
| All uniform AND all mid | "Plateau Risk" — organisation is stuck in the middle without clear differentiation | medium |
| Polarized scores | "Critical Maturity Imbalance" — extreme variance wastes investment in strong areas | high |
| Experience < 2.5 AND Performance ≥ 3 | "Measurement Without Impact" — optimising poorly designed experiences won't improve outcomes | medium |

---

## Question-level gap analysis

Within each dimension, the engine identifies the **weakest individual questions** (lowest scores) and surfaces them as specific capability gaps. This enables:

- Precise identification of which capabilities within a dimension need attention
- Actionable improvement targets rather than vague dimension-level advice
- Understanding whether a dimension's score is driven by uniform weakness or specific gaps

For each dimension with answers, the two lowest-scoring questions are surfaced with their abbreviated titles and scores.

---

## Dynamic narrative generation

The narrative engine generates unique, multi-paragraph analysis text that adapts to the specific score profile. The narrative considers:

1. **Overall score level**: Different opening framing for low, mid, and high overall scores
2. **Detected patterns**: Specific commentary for uniform scores, polarized scores, outliers
3. **Cross-dimensional relationships**: References to how dimension scores interact
4. **Company name**: Personalised throughout the narrative
5. **Specific dimensions**: Named references to strongest and weakest areas

Unlike static tier-based text, the narrative combines multiple variables to produce output that is genuinely unique to each assessment profile.

### Narrative structure

1. **Opening assessment**: Pattern-aware framing (e.g., "systemic gaps" vs "strong foundation with specific bottlenecks")
2. **Pattern-specific insight**: What the detected pattern means strategically
3. **Cross-dimensional analysis**: How dimension relationships create opportunities or constraints
4. **Priority recommendation**: What to focus on first and why, based on the specific profile

---

## AI-powered strategic analysis

The AI Advisor section provides five analytical outputs entirely generated client-side with zero external dependencies:

### Pattern diagnosis

Identifies and explains all detected patterns from the score distribution. Each pattern is shown with its meaning and strategic implication.

### Cross-dimensional intelligence

Displays all identified cross-dimensional relationships with severity indicators and specific explanations of how dimension interactions create constraints or opportunities.

### Question-level gap analysis

For each scored dimension, surfaces the specific questions (capabilities) with the lowest scores, enabling targeted improvement planning.

### Strategic priority matrix

Generates a prioritised list of improvement actions based on:
- **Impact**: How much improving this dimension would affect the overall score
- **Current gap**: How far below the mean this dimension sits
- **Cross-dimensional dependencies**: Whether other dimensions depend on this one (e.g., data supports AI)

### What-if scenarios

Models the impact of improving each dimension by 1 point:
- New dimension score
- New overall score
- New maturity stage (if it changes)
- Whether the change would unlock improvements in dependent dimensions

---

## Report generation

### Summary text logic

The report summary adapts its language based on the strongest dimension score:

| Strongest score | Summary approach |
| --- | --- |
| < 2.0 | "Every dimension requires foundational investment" — no false momentum language |
| 2.0–2.4 | "No dimension has reached a sustainable level yet" — honest assessment |
| 2.5–3.5 | "Early momentum in [strongest] provides a foundation" — acknowledges progress |
| > 3.5 | "Strong capabilities in [strongest] provide a platform for growth" — celebrates achievement |

### Key findings generation

Findings are generated dynamically based on:
1. **Core Advantage**: The strongest dimension with tier-appropriate guidance
2. **Critical Constraint**: The weakest dimension with specific improvement actions
3. **Strategic Trajectory**: One of four trajectory narratives based on overall score and imbalance detection

### Service recommendations

Services are selected deterministically from the weakest dimensions:
- Top 2 services from each of the two weakest dimensions
- One service from the third weakest for breadth
- No random selection — consistent output on every refresh

### 90-day roadmap

The roadmap maps the three weakest dimensions to three time phases:
- **Days 1–30**: Weakest dimension — stabilise the basics
- **Days 31–60**: Second weakest — build the operating layer
- **Days 61–90**: Third weakest — scale what works

Each phase includes specific, actionable recommendations unique to the dimension.

---

## Gap analysis visualisation

Each dimension shows a visual status indicator:

| Tier | Indicator | Colour |
| --- | --- | --- |
| Critical gap | Red dot | `#fb7185` |
| Weak | Orange dot | `#fb923c` |
| Developing | Amber dot | `#ffd166` |
| Advancing | Teal dot | `#4fd1c5` |
| Strong | Green dot | `#34d399` |

---

## Per-dimension micro-feedback

As users answer questions, each dimension card shows a real-time micro-feedback bar displaying:
- Current dimension score
- Tier label and colour
- One-line contextual insight appropriate to the current tier

This provides immediate, ongoing feedback during the assessment rather than forcing users to wait until completion.

---

## Data persistence

Assessment state is stored in browser `localStorage` under the key `dishine_digital_maturity_scorecard`. The state object includes:
- `companyName`: Organisation name
- `primaryGoal`: Transformation ambition text
- `answers`: Object mapping question IDs to scores (1–5)

State is saved after every answer change and loaded on page refresh. The Reset function clears both the state object and the localStorage entry.

---

## Technical notes

- The entire application runs client-side with zero external dependencies (except html2pdf.js for PDF export)
- No data is transmitted to any server — all analysis is performed in the browser
- The AI-powered analysis uses a sophisticated rule-based engine, not an external AI service
- Pattern detection uses statistical analysis (mean, variance, min/max) of the score distribution
- Cross-dimensional insights use domain-specific knowledge about how digital capabilities interact
- The engine is designed to produce genuinely unique, specific output for every possible combination of scores
