# Algorithm & Mathematical Reference

This document provides a comprehensive, technical explanation of every mathematical operation, scoring formula, statistical method, and analytical algorithm used in the **Digital Maturity Scorecard v3.0.1**.

For a higher-level overview of how these algorithms integrate into the scoring model, insight tiers, and report generation, see [`SCORING_MODEL.md`](SCORING_MODEL.md). For usage instructions and feature overview, see the main [`README.md`](../README.md).

---

## Table of contents

1. [Scoring foundations](#scoring-foundations)
2. [Statistical measures](#statistical-measures)
3. [Composite indices](#composite-indices)
4. [Digital risk score](#digital-risk-score)
5. [Maturity DNA fingerprint](#maturity-dna-fingerprint)
6. [Pattern detection algorithms](#pattern-detection-algorithms)
7. [Cross-dimensional dependency graph](#cross-dimensional-dependency-graph)
8. [Adjacent capability gap detection](#adjacent-capability-gap-detection)
9. [Gap-to-next-stage calculator](#gap-to-next-stage-calculator)
10. [ROI impact estimation](#roi-impact-estimation)
11. [Confidence scoring](#confidence-scoring)
12. [Dynamic narrative engine](#dynamic-narrative-engine)
13. [What-if scenario modelling](#what-if-scenario-modelling)
14. [Benchmark overlay](#benchmark-overlay)
15. [Report generation pipeline](#report-generation-pipeline)
16. [Internationalisation system](#internationalisation-system)
17. [Help tooltip system](#help-tooltip-system)
18. [Completion-based warning logic](#completion-based-warning-logic)

---

## Scoring foundations

### Question-level scoring

Each of the 30 questions is scored on a discrete ordinal scale from **1** to **5**:

| Level | Label | Interpretation |
| --- | --- | --- |
| 1 | Fragmented | Ad hoc, inconsistent, mostly reactive |
| 2 | Emerging | Basic practice exists but uneven |
| 3 | Structured | Repeatable approach with partial alignment |
| 4 | Integrated | Cross-functional, governed, scalable |
| 5 | Optimised | Continuously improved and value-led |

In v3.0.1, each question also has **contextual answer descriptions** — 150 unique labels (30 questions × 5 levels) that provide question-specific interpretation of what each level means in that particular capability area. All question titles, hints, and answer labels are available in three languages (English, French, Italian) through the internationalisation system.

### Dimension scoring

Each dimension contains exactly 6 questions. The dimension score is the **arithmetic mean** with a fixed denominator:

```
dimension_score(d) = Σ(answered_question_scores) / 6
```

Key design choice: the denominator is always 6 (total questions), not the count of answered questions. This means unanswered questions implicitly score 0 and pull the average down, creating a natural incentive to complete the assessment. This is intentional — a partial assessment should produce conservative results.

### Overall scoring

The overall maturity score is the **arithmetic mean** of dimension scores, counting only dimensions that have at least one answered question:

```
scored_dimensions = { d ∈ D : dimension_score(d) > 0 }
overall_score = Σ(dimension_score(d)) / |scored_dimensions|
```

This prevents unanswered dimensions from pulling the overall average to zero. If a dimension has no answers, it is excluded entirely from the overall calculation (not counted as 0).

### Maturity stage classification

The overall score maps to one of **eight** maturity stages via threshold-based classification:

```
stage(s) =
  s ≥ 4.7 → "Transformational leader"
  s ≥ 4.2 → "Optimised performer"
  s ≥ 3.7 → "Scaling integrator"
  s ≥ 3.2 → "Structured executor"
  s ≥ 2.7 → "Developing practitioner"
  s ≥ 2.2 → "Emerging operator"
  s ≥ 1.5 → "Ad hoc responder"
  s <  1.5 → "Foundational gap"
```

Each stage has a paired narrative description that contextualises the score for executive communication.

---

## Statistical measures

### Standard deviation per dimension

For each dimension, the **population standard deviation** of answered question scores measures internal consistency:

```
σ(d) = √( Σ(xᵢ - μ)² / n )
```

Where:
- `xᵢ` = individual question score (only answered questions)
- `μ` = mean of answered question scores
- `n` = count of answered questions
- If `n < 2`, σ = 0 (insufficient data)

**Interpretation**: A low σ (< 0.5) indicates consistent capability across the dimension. A high σ (> 1.5) suggests uneven development — some capabilities are strong while others lag significantly within the same dimension.

### Dimension-level stage classification

Each dimension is also classified into a maturity stage with associated colour and icon:

```
dim_stage(s) =
  s ≥ 4.0 → Optimised (green)
  s ≥ 3.2 → Integrated (blue)
  s ≥ 2.2 → Developing (yellow)
  s ≥ 1.5 → Emerging (orange)
  s >  0   → Critical (red)
  s =  0   → Not assessed (grey)
```

---

## Composite indices

Four composite indices combine dimension scores with **weighted averaging** to provide cross-cutting strategic views:

### Digital Foundation Index

Measures the strength of core infrastructure:

```
DFI = (data_score × 0.6 + governance_score × 0.4) / (0.6 + 0.4)
```

Data is weighted 60% because it is the primary infrastructure layer; governance provides the control framework.

### Innovation Readiness Index

Measures capacity for advanced capability deployment:

```
IRI = (ai_score × 0.55 + experience_score × 0.45) / (0.55 + 0.45)
```

AI is weighted slightly higher because it is the primary innovation driver in most digital transformations.

### Operational Excellence Index

Measures process maturity and measurement discipline:

```
OEI = (governance_score × 0.5 + performance_score × 0.5) / (0.5 + 0.5)
```

Equal weighting because both governance and performance are equally essential to operational rigour.

### Customer Value Index

Measures the ability to understand, serve, and retain customers:

```
CVI = (experience_score × 0.4 + data_score × 0.35 + performance_score × 0.25) / (0.4 + 0.35 + 0.25)
```

Experience leads because it is the direct customer-facing capability. Data enables understanding, and performance enables proof of value.

### Missing dimension handling

If a dimension in a composite has no score (= 0), it is excluded from both numerator and denominator. If all dimensions in a composite are zero, the composite returns 0. This prevents unassessed dimensions from artificially diluting composite scores.

---

## Digital risk score

The risk score quantifies the overall digital risk exposure on a **0–100 scale**, combining four weighted risk factors:

### Risk factor formula

```
risk_score = min(100, risk_min + risk_variance + risk_governance + risk_data)
```

### Factor calculations

| Factor | Weight | Formula | Rationale |
| --- | --- | --- | --- |
| Lowest dimension risk | 40% | `max(0, (3.0 - min_score) / 3.0) × 40` | The weakest dimension creates the biggest vulnerability |
| Score variance risk | 25% | `min(σ / 1.5, 1) × 25` | High variance between dimensions indicates structural imbalance |
| Governance risk | 20% | `max(0, (3.0 - governance_score) / 3.0) × 20` | Governance gaps create compliance and scaling risk |
| Data risk | 15% | `max(0, (3.0 - data_score) / 3.0) × 15` | Data gaps undermine all other capabilities |

Where σ is the standard deviation of all scored dimension averages.

If a dimension has not been assessed, conservative default risk contributions are used:
- Governance: 10 points (of 20 possible)
- Data: 8 points (of 15 possible)

### Risk level classification

| Score range | Level | Colour |
| --- | --- | --- |
| 70–100 | Critical | Red |
| 50–69 | High | Orange |
| 30–49 | Moderate | Yellow |
| 15–29 | Low | Teal |
| 0–14 | Minimal | Green |

---

## Maturity DNA fingerprint

The DNA fingerprint provides a compact, scannable representation of the maturity profile:

```
DNA = D{score}·A{score}·E{score}·G{score}·P{score}
```

Where each dimension code is the first letter of the dimension key (D=Data, A=AI, E=Experience, G=Governance, P=Performance) followed by the dimension average multiplied by 10 and rounded to the nearest integer.

**Example**: `D28·A22·E35·G27·P19` indicates Data=2.8, AI=2.2, Experience=3.5, Governance=2.7, Performance=1.9.

If a dimension has no answers, `'-'` is used instead of a score.

---

## Pattern detection algorithms

The pattern detection engine analyses the set of scored dimensions to identify **19 distinct patterns**:

### Score distribution patterns

| Pattern | Condition | Description |
| --- | --- | --- |
| `allLow` | All scored dims < 2.0 (min 3 scored) | Systemic underinvestment |
| `allMid` | All scored dims in [2.0, 3.5] (min 3 scored) | Plateau risk |
| `allHigh` | All scored dims > 3.5 (min 3 scored) | Advanced maturity |
| `uniform` | max - min < 0.8 | Balanced but potentially undifferentiated |
| `polarized` | max - min > 2.0 | Critical imbalance creating ceiling effect |
| `oneOutlierHigh` | Any dim > mean + 1.5 | Isolated strength |
| `oneOutlierLow` | Any dim < mean - 1.5 | Single bottleneck |
| `topHeavy` | top2_avg > bottom2_avg + 1.5 (min 4 scored) | Investment concentrated in advanced areas |
| `bottomHeavy` | bottom2_avg > top2_avg + 1.5 (min 4 scored) | Foundations stronger than innovation |

### Cross-dimensional relationship patterns

| Pattern | Condition | Description |
| --- | --- | --- |
| `dataAiGap` | data < 2.5 AND ai > data + 0.5 | AI outpacing data foundation |
| `governanceBottleneck` | governance = min AND ≥2 dims > governance + 0.8 | Governance constraining scaling |
| `executionGap` | performance = min AND ≥2 other dims > performance + 0.5 | Can't prove value of investments |
| `experienceDisconnect` | experience ≥ 3.0 AND data < 2.5 | CX without data evidence |
| `aiExperienceGap` | ai ≥ 3.0 AND experience < 2.5 | AI without CX to leverage it |
| `performanceAiGap` | ai ≥ 3.0 AND performance < 2.0 | AI without measurement |
| `dataGovernanceGap` | data ≥ 3.0 AND governance < 2.0 | Data without controls |
| `foundationFirst` | data ≥ 3.0 AND governance ≥ 3.0 AND (ai < 2.5 OR experience < 2.5) | Strong base, untapped innovation |
| `innovationFirst` | (ai ≥ 3.0 OR experience ≥ 3.0) AND data < 2.5 AND governance < 2.5 | Innovation without foundation |
| `measurementLast` | performance lowest of all dims | Common pattern — proof of value is weakest |

### Outlier identification

When outlier patterns are detected, the engine returns the **names** of the specific outlier dimensions, enabling precise narrative references:

```
outlierHighDims = { d.name : d.avg > mean + 1.5 }
outlierLowDims  = { d.name : d.avg < mean - 1.5 }
```

---

## Cross-dimensional dependency graph

The system models interdependencies between dimensions using a directed acyclic graph (DAG):

```
Dependencies:
  AI → [Data]
  Experience → [Data, AI]
  Performance → [Data, Governance]
  Governance → []
  Data → []
```

This graph encodes the principle that:
- **AI** requires **Data** as its foundation
- **Experience** requires both **Data** (for personalisation) and **AI** (for intelligent automation)
- **Performance** requires **Data** (for measurement) and **Governance** (for process discipline)
- **Data** and **Governance** are foundational and have no upstream dependencies

---

## Adjacent capability gap detection

Using the dependency graph, the engine detects cases where a downstream capability significantly exceeds its required upstream foundations:

```
for each (downstream, upstreams) in dependency_graph:
  for each upstream in upstreams:
    if downstream_score > upstream_score + 1.0:
      → Adjacent gap detected (severity based on gap size)
```

Severity classification:
- Gap > 1.5: **High severity** — the downstream capability is built on an insufficient base
- Gap in (1.0, 1.5]: **Medium severity** — the upstream needs attention to sustain downstream progress

Each detected gap generates a natural-language explanation identifying both dimensions and the specific risk.

---

## Gap-to-next-stage calculator

For any score, the engine identifies the **next maturity stage threshold** and the gap to reach it:

```
thresholds = [1.5, 2.2, 2.7, 3.2, 3.7, 4.2, 4.7]

gap_to_next(score) =
  for t in thresholds:
    if score < t: return { target: t, gap: t - score, stage: stage(t) }
  return { target: 5.0, gap: 5.0 - score, stage: "Maximum maturity" }
```

This powers the "what-if" scenario modelling and improvement potential indicators.

---

## ROI impact estimation

Each dimension has **tier-specific ROI impact estimates** describing the expected business value of advancing from one maturity tier to the next:

```
tier = max(1, min(4, floor(current_score)))
transition = "tier → tier+1"
impact = roiImpactEstimates[dimension][transition]
```

Estimates are expressed as percentage ranges of improvement in key business metrics (e.g., "reduces analyst data-hunting time by 20–30%", "improves campaign ROI by 15–25%").

These estimates are based on industry research and consulting experience, not precise predictions — they provide directional guidance for business case development.

---

## Confidence scoring

Each dimension receives a **confidence score** (0–100) that combines:

1. **Completion ratio** (50% weight): What percentage of questions have been answered
2. **Consistency score** (50% weight): How internally consistent the answers are

```
answered_ratio = answered_questions / total_questions
consistency = max(0, 1 - (σ / 2))
confidence = round((answered_ratio × 0.5 + consistency × 0.5) × 100)
```

### Confidence levels

| Score | Level |
| --- | --- |
| ≥ 75 | High |
| 45–74 | Medium |
| < 45 | Low |

Low confidence suggests either incomplete answers or highly inconsistent scoring within the dimension — both of which reduce the reliability of the dimension score.

---

## Dynamic narrative engine

The narrative engine generates **multi-paragraph, unique analysis text** by combining:

1. **Opening paragraph**: Selected from 6 pattern-based templates (allLow, allHigh, polarized, uniform+allMid, outlierLow, default)
2. **Dimension-specific paragraphs**: 5-tier insight models (critical/low/mid/advancing/high) for each of the 5 dimensions — 25 unique paragraph templates total
3. **Cross-dimensional relationship paragraphs**: Generated from pattern detection (dataAiGap, governanceBottleneck, executionGap)
4. **Industry context**: Added when industry sector is selected
5. **Company size context**: Added when company size is selected
6. **Maturity fingerprint and risk summary**: DNA code and risk score appended

### Combinatorial uniqueness

The number of possible unique narrative outputs is:

```
Opening variants:     6
Dimension variants:   5^5 = 3,125 (5 tiers × 5 dimensions)
Pattern variants:     2^19 = 524,288 (each of 19 patterns is on/off)
Industry variants:    12 (11 + none)
Size variants:        7 (6 + none)
```

Total theoretical combinations: **6 × 3,125 × 524,288 × 12 × 7 ≈ 825 billion** unique narrative outputs. In practice, many pattern combinations are impossible (e.g., allLow and allHigh can't both be true), but the system still produces millions of genuinely distinct analyses.

---

## What-if scenario modelling

The what-if engine models the impact of improving the weakest dimension by 1 point:

```
weakest_dim = dim with lowest avg (from priority sort)
simulated_score = min(5.0, weakest_dim.avg + 1.0)
new_overall = (Σ other_dim_scores + simulated_score) / scored_count
new_stage = stage(new_overall)
stage_changed = new_stage ≠ current_stage
```

If a second-weakest dimension exists, the engine also models a dual-improvement scenario showing the combined impact.

---

## Benchmark overlay

The radar chart includes a **benchmark overlay polygon** showing industry-average reference scores:

| Dimension | Low benchmark | Mid benchmark | High benchmark |
| --- | --- | --- | --- |
| Data & Analytics | 2.1 | 2.8 | 3.5 |
| AI & Automation | 1.8 | 2.4 | 3.2 |
| Customer Experience | 2.3 | 3.0 | 3.7 |
| Governance & Operations | 2.0 | 2.7 | 3.4 |
| Performance & Optimisation | 1.9 | 2.6 | 3.3 |

The **mid** values are used for the benchmark polygon. The overlay is rendered as a dashed-line polygon behind the organisation's actual scores, providing immediate visual comparison.

---

## Report generation pipeline

The complete report generation follows this pipeline:

```
1. Collect answers → state.answers{}
2. Calculate dimension averages → getDimensionAverage()
3. Calculate statistical measures → getDimensionStdDev(), getDimensionConfidence()
4. Calculate overall average → getOverallAverage()
5. Classify maturity stage → getStage()
6. Sort by priority → getPriorityDimensions()
7. Detect patterns → analyzePatterns()
8. Compute composite indices → computeCompositeIndices()
9. Compute risk score → computeRiskScore()
10. Generate maturity DNA → getMaturityDNA()
11. Detect adjacent gaps → detectAdjacentGaps()
12. Generate cross-dimensional insights → generateCrossDimensionalInsights()
13. Generate dynamic narrative → generateDynamicNarrative()
14. Build findings → buildFindings() [Insights + Report]
14b. Build services, roadmap → buildServices(), buildRoadmap() [Report Card only]
15. Render all UI components → refresh()
16. Update radar chart with benchmark overlay → drawRadar()
17. Update heatmap (clickable cells) → insightHeatmap
18. Update composite/risk visualisations → insightCompositeIndices, insightRiskScore
19. Update AI analysis (patterns, cross-dim, gaps, priority matrix, what-if) → updateAISection()
```

All computation runs **client-side in the browser** with zero external dependencies. No data is transmitted, no API calls are made, and all analysis is deterministic given the same inputs.

---

## Internationalisation system

The i18n system provides full tri-lingual support (English, French, Italian) for every user-facing string in the application.

### Translation architecture

The system is built around three core functions:

```
t(key) → string
  Looks up the translation key in the current language's translation table.
  Falls back to English if the key is not found in the active language.
  Falls back to the raw key if not found in any language.

applyI18n()
  Scans the DOM for elements with data-i18n attributes and replaces their
  text content with the translated value of the attribute's key.
  Called once on page load and again whenever the language changes.

setLanguage(lang)
  Sets the active language ('en', 'fr', or 'it'), persists the choice
  in localStorage, updates the language switcher UI, and calls applyI18n()
  to refresh all translated strings in the DOM.
```

### Language detection and persistence

On page load, the system determines the active language using this priority:

```
1. localStorage value (user's previous explicit choice)
2. Default: 'en' (English)
```

The selected language is stored in `localStorage` alongside the assessment state, ensuring the preference persists across sessions.

### Translation coverage

Each language contains a complete translation table with over **250 keys** covering:
- All UI chrome (buttons, labels, headings, placeholders, navigation)
- All 30 question titles and their contextual hints
- All 150 contextual answer descriptions (30 questions × 5 levels)
- All 5 dimension names and descriptions
- All 8 maturity stage names and descriptions
- Insight section titles, tooltip content, and warning messages
- Footer text, credits, and licensing information

### Language switcher

The language switcher is rendered as a fixed-position button group in the top-right corner of the viewport:

```
[EN] [FR] [IT]
```

The active language button is visually highlighted. Clicking a different language triggers `setLanguage()`, which immediately updates all visible text without a page reload.

---

## Help tooltip system

The tooltip system provides contextual help for each insight section, explaining what the metric is, why it matters, and how it is calculated.

### Tooltip content

Sixteen tooltips are defined across three sections:

**Dynamic Assessment Insights** (6 tooltips):

| Section | Tooltip explains |
| --- | --- |
| Overall Maturity | How the overall score is calculated (arithmetic mean of dimension scores) and what the maturity stage represents |
| Key Findings | How the strongest/weakest dimensions are identified and how the 5-tier guidance works |
| Gap Analysis | How each dimension is classified into visual status tiers (Critical/Weak/Developing/Advancing/Strong) |
| Composite Indices | How the four weighted indices combine dimension scores for cross-cutting strategic views |
| Risk Assessment | How the 0–100 risk score combines four weighted risk factors |
| Heatmap | How the question-level colour grid maps scores to colour intensity |

**Digital Health Report** (3 tooltips):

| Section | Tooltip explains |
| --- | --- |
| Overall Maturity Snapshot | How the score ring represents the overall maturity score and stage |
| Strategic Focus | How the stated transformation ambition shapes the report narrative and service recommendations |
| 90-Day Roadmap | How the three weakest dimensions map to three improvement phases |

**AI-Powered Strategic Analysis** (5 tooltips):

| Section | Tooltip explains |
| --- | --- |
| Pattern Diagnosis | How 19 score patterns are detected and what they mean strategically |
| Cross-Dimensional Intelligence | How the dependency graph identifies inter-dimensional constraints |
| Question-Level Gap Analysis | How the weakest individual questions within each dimension are surfaced |
| Strategic Priority Matrix | How dimensions are plotted by impact and effort to guide investment |
| What-If Scenarios | How improving the weakest dimension by 1 point affects overall score and maturity stage |

### Tooltip behaviour

```
trigger = hover OR click
display_duration = 6–8 seconds (auto-dismiss)
position = adjacent to the (?) icon
translations = fully localised in EN, FR, IT
```

Tooltips are implemented as lightweight DOM elements that appear on demand and auto-dismiss after a timeout, avoiding permanent clutter in the interface.

---

## Completion-based warning logic

The warning system displays contextual alerts when the assessment is partially complete, preventing users from drawing conclusions or generating reports from incomplete data.

### Warning conditions

```
completion = answered_valid_questions / total_valid_questions × 100

show_insight_warning  = completion > 0 AND completion < 100
show_download_warning = completion > 0 AND completion < 100
hide_all_warnings     = completion = 0 OR completion = 100
```

### Warning placements

| Warning | Location | Purpose |
| --- | --- | --- |
| Insight warning | Top of insights section | Alerts users that displayed metrics may change as more questions are answered |
| Download warning | Near download buttons | Discourages generating reports before the assessment is fully complete |

Both warnings are hidden at 0% (fresh start — no misleading alerts on an empty assessment) and at 100% (complete — no unnecessary friction). The warning text is fully translated into all three supported languages.

---

## Technical specifications

| Property | Value |
| --- | --- |
| Questions | 30 (6 per dimension × 5 dimensions) |
| Score range per question | 1–5 (integer) |
| Dimension score range | 0.00–5.00 (float) |
| Overall score range | 0.00–5.00 (float) |
| Maturity stages | 8 |
| Insight tiers per dimension | 5 (critical, low, mid, advancing, high) |
| Detected patterns | 19 |
| Composite indices | 4 |
| Risk factors | 4 |
| Contextual answer labels | 150 (30 × 5) |
| Industry sectors | 11 |
| Company sizes | 6 |
| Dependency graph edges | 5 |
| ROI estimates | 20 (4 transitions × 5 dimensions) |
| Benchmark data points | 15 (3 tiers × 5 dimensions) |
| Languages | 3 (English, French, Italian) |
| Translation keys | ~750+ (250+ per language) |
| Help tooltips | 16 (6 insights + 3 report + 5 AI + 2 shared) |

---

*This document is part of the Digital Maturity Scorecard v3.0.1 by [diShine](https://dishine.it).*
