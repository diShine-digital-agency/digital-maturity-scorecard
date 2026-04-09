# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by **Keep a Changelog**, and this project uses a simple semantic versioning approach.

## [2.1.1] - 2026-04-09

### Fixed

**PDF Export – Blank Pages Resolved**: The "Export Digital Health Report" button downloaded a multi-page PDF with completely blank pages. Root cause: the `pdf-exporting` CSS class applied during export only set `background: #ffffff` and `color: #101828` on the root report element but did not override CSS custom properties (`--text`, `--muted`, `--brand`, etc.) or the hard-coded dark backgrounds on child elements (`.report-card`, `.insights-section`, `.ai-advisor-section`). Since `html2pdf.js` uses `html2canvas` (which captures the on-screen render, not `@media print` styles), dark-theme text (e.g. `#ecf3ff`) was rendered on a white canvas — producing invisible content.

**Changes made:**

- **Consolidated export CSS**: Replaced the minimal `pdf-exporting` class with the comprehensive `pdf-export-mode` class that overrides all 11 CSS custom properties (`--bg`, `--panel`, `--panel-soft`, `--text`, `--muted`, `--brand`, `--brand-2`, `--line`, `--shadow`, `--accent`, `--danger`, `--good`) plus hard-coded backgrounds on `.report`, `.report-card`, `.insight-card`, `.priority`, `.ai-advisor-section`, `.ai-card`, `.ai-badge`, `.ai-priority-quadrant`, `.ai-cross-insight`, `.score-ring::after`, `.insights-badge`, and `.priority span`
- **Added text colour overrides** for badges and pills that had hard-coded light text (`#bffcf2`, `#c4cbff`, `#bffcf2`) now forced to readable dark colours in export mode
- **Full report export**: Export now wraps all three report sections (Digital Health Report, Dynamic Assessment Insights, AI-Powered Strategic Analysis) in a temporary light-themed container — previously only the report header section was captured
- **Explicit white background** added to `html2canvas` configuration (`backgroundColor: '#ffffff'`) to prevent transparent canvas issues
- **DOM restoration**: After export completes (or fails), all sections are moved back to their original positions in the page with correct ordering, ensuring the live page remains fully functional
- **Animation frame timing**: Export uses `requestAnimationFrame()` to ensure the light-theme CSS class takes full effect before `html2canvas` captures the DOM

### Hardened (post-audit)

- **Export cleanup resilience**: Wrapped DOM restoration in `try/catch/finally` with `wrapper.parentNode` guards — prevents `_pdfExporting` flag from permanently locking the export button if cleanup encounters an error
- **Export timeout guard**: Added 30-second timeout on `html2pdf().save()` — if the library hangs (e.g. CDN issues, large DOM), cleanup fires automatically and the export button unlocks
- **Maturity DNA code background**: Changed from `rgba(255,255,255,0.08)` (invisible on white) to `rgba(0,0,0,0.06)` (visible on both dark and light backgrounds) — fixes fingerprint display in PDF export
- **Analytics summary colour**: Changed `reportAnalyticsSummary` inline style from hardcoded `color:#666` to `color:var(--muted)` for consistency with the CSS variable system and correct light/dark theme handling

---

## [2.1.0] - 2026-04-09

### Added

**Statistical & Analytical Engine Enhancements**:
- **Standard deviation** per dimension measuring internal scoring consistency (σ)
- **Confidence scoring** combining completion ratio and consistency into a High/Medium/Low confidence level per dimension
- **Dimension-level stage classification** (Optimised/Integrated/Developing/Emerging/Critical) with colour coding
- **Per-dimension completion indicators** showing X/6 answered in each dimension header

**Composite Strategic Indices**: Four weighted composite scores providing cross-cutting strategic views:
- **Digital Foundation Index**: Data (60%) + Governance (40%) — core infrastructure strength
- **Innovation Readiness Index**: AI (55%) + Experience (45%) — capacity for advanced capabilities
- **Operational Excellence Index**: Governance (50%) + Performance (50%) — process maturity
- **Customer Value Index**: Experience (40%) + Data (35%) + Performance (25%) — customer-facing capability

**Digital Risk Score**: 0–100 risk assessment combining four weighted factors:
- Lowest dimension score (40%), score variance (25%), governance gaps (20%), data gaps (15%)
- Five risk levels: Critical (70+), High (50-69), Moderate (30-49), Low (15-29), Minimal (0-14)
- Visual factor breakdown in insights section

**Maturity DNA Fingerprint**: Compact alphanumeric representation of the maturity profile (e.g., `D28·A22·E35·G27·P19`)

**Per-Question Contextual Answer Labels**: 150 unique descriptions (30 questions × 5 levels) providing question-specific interpretation for each maturity level, replacing generic labels

**Industry & Company Size Context**:
- **Industry selector** with 11 sectors (Retail, Finance, Healthcare, Manufacturing, Technology, Professional Services, Media, Public Sector, Hospitality, Energy, Other)
- **Company size selector** with 6 options (1-10 to 5,000+)
- Industry-specific and size-specific context paragraphs in the dynamic narrative

**Enhanced Pattern Detection**: 6 new cross-dimensional patterns:
- `aiExperienceGap`: AI advancing without mature CX to leverage it
- `performanceAiGap`: AI investments without measurement to validate impact
- `dataGovernanceGap`: Strong data infrastructure without proportionate governance
- `foundationFirst`: Solid data/governance base ready for innovation
- `innovationFirst`: Innovation outpacing foundations (fragility risk)
- `measurementLast`: Performance consistently weakest dimension

**Adjacent Capability Gap Detection**: Dependency-graph-based analysis identifying when downstream capabilities exceed their upstream foundations (e.g., Experience outpacing Data, AI outpacing Data)

**Benchmark Radar Overlay**: Dashed-line benchmark polygon on the radar chart showing industry-average reference scores for visual comparison

**Capability Heatmap**: Question-level scoring grid across all dimensions with colour-coded cells and legend

**ROI Impact Estimation**: Per-dimension, per-tier-transition business impact estimates displayed in dimension micro-feedback

**Composite Indices & Risk Visualisations**: Bar visualisations in sidebar and full detailed cards in insights section

**PDF Export Enhancements**:
- html2pdf.js integration with proper A4 configuration
- Radar chart canvas-to-image conversion for PDF inclusion
- Analytics summary in PDF (DNA, risk score, composite indices, industry/size)
- Completeness validation warning before incomplete exports
- Branded footer with diShine attribution

**Algorithm Documentation**: New `docs/ALGORITHM.md` with comprehensive mathematical reference covering all formulas, statistical methods, composite index weights, risk factor calculations, pattern detection algorithms, dependency graphs, and the complete report generation pipeline

### Fixed

- **experienceDisconnect threshold**: Corrected data threshold from `< 2.0` to `< 2.5` to align with documented pattern detection rules and be consistent with other cross-dimensional thresholds

### Improved

- **Outlier pattern reporting** now returns specific dimension names (e.g., "AI & Automation significantly above the mean") instead of generic "One dimension is significantly above the mean"
- **Dynamic narrative** now includes industry context, company size context, maturity DNA, and risk score summary
- **Radar chart** shows benchmark overlay polygon for visual comparison against industry averages
- **Pattern diagnosis** expanded from 13 to 19 detected patterns with more specific cross-dimensional relationships
- **Cross-dimensional insights** expanded with 6 additional relationship rules and dependency-graph-based gap detection

### Notes

This release significantly expands the analytical depth of the scorecard while maintaining its single-file, zero-dependency architecture. The addition of composite indices, risk scoring, statistical measures, and benchmark data transforms the tool from a maturity diagnostic into a comprehensive digital strategy assessment platform. All new features are fully documented in `docs/ALGORITHM.md`.

### Audit & Quality Fixes (post-release)

**Duplicate Content Removed**: The Digital Health Report (PDF/print section) was duplicating the exact same findings and service recommendations that appear in the Dynamic Assessment Insights section. Report now shows a unique **dimension breakdown table** with progress bars and tier indicators instead.

**Function Consolidation**: Merged `buildRoadmap` and `buildInsightRoadmap` into a single parameterised function to eliminate code duplication and ensure consistent roadmap content.

**Performance**: Composite indices and risk score are now computed once per refresh cycle and passed to sub-functions, eliminating 3× redundant computation on every answer change.

**Defensive Guards**: Added null/empty-array checks in `generateDynamicNarrative()` and `updateInsightsSection()` to prevent runtime errors when no questions have been answered.

**PDF Export Hardened**: Fixed a scoping bug where `cachedIndices` was referenced outside its declaring function. Added canvas null check, reportEl null check, and double-click prevention guard.

**Pattern Detection Precision**: Replaced exact floating-point equality (`===`) with epsilon-based comparison (`Math.abs(a - b) < 0.01`) in `governanceBottleneck` and `executionGap` pattern detection to prevent false negatives from floating-point arithmetic.

**Documentation**: Updated `docs/SCORING_MODEL.md` with correct pattern count (19), complete v2.1.0 sections as first-class headings, expanded cross-references to `ALGORITHM.md`, and updated table of contents.

---

## [2.0.0] - 2026-04-06

### Added

**AI-Powered Strategic Analysis Section**: New dedicated analysis section providing intelligent, pattern-based insights entirely client-side with zero external dependencies:
- **Pattern Diagnosis**: Detects 13 distinct score patterns (all-low, polarized, uniform, outlier, top-heavy, bottom-heavy, data-AI gap, governance bottleneck, execution gap, experience disconnect, and more) and explains their strategic meaning
- **Cross-Dimensional Intelligence**: Analyses how dimensions interact and constrain each other (e.g., "Data Foundation Limits AI Potential", "AI Adoption Outpacing Governance", "Strong Experiences, Weak Proof") with severity indicators
- **Question-Level Gap Analysis**: Surfaces the specific weakest questions within each dimension, enabling precise capability targeting instead of vague dimension-level advice
- **Strategic Priority Matrix**: Impact-based prioritisation of improvement actions considering cross-dimensional dependencies
- **What-If Scenarios**: Models the impact of improving the weakest dimension by 1 point — showing new scores, new maturity stage, and whether the change unlocks dependent dimensions
- No API, no installation, no data transmission — all analysis runs in the browser

**5-Tier Insight Model**: Expanded from 3 tiers (low/mid/high) to 5 granular tiers with distinct, actionable guidance per dimension:
- `critical` (< 1.5): Capabilities absent — extreme urgency messaging
- `low` (1.5–2.1): Significant gaps — basic structures needed
- `mid` (2.2–3.1): Developing but inconsistent — standards focus
- `advancing` (3.2–3.9): Solid foundations — optimisation and scaling focus
- `high` (4.0+): Mature and differentiated — innovation focus

**Per-Dimension Micro-Feedback**: Real-time contextual status bar appears below each dimension's questions as users answer, showing:
- Current dimension score with tier-appropriate colour coding
- Tier label (Critical gap / Weak / Developing / Advancing / Strong)
- One-line contextual insight matched to the current maturity level

**Dynamic Narrative Generation Engine**: Replaces static tier-based text with multi-variable narrative generation that produces genuinely unique analysis for every score profile, considering:
- Overall score level and maturity stage
- Detected score patterns (uniform, polarized, outlier, etc.)
- Cross-dimensional relationships and dependencies
- Company name personalisation throughout

**Scoring Model Documentation**: New `docs/SCORING_MODEL.md` explaining the complete scoring mechanism, analytical engine, pattern detection, cross-dimensional intelligence, and all insight generation logic.

### Fixed

**"Keep Momentum" Bug**: Fixed critical insight quality issue where the summary said "preserving momentum in [strongest]" even when the strongest dimension was scored 1.0/5. The summary now adapts its language based on actual score levels:
- Strongest < 2.0: "Every dimension requires foundational investment"
- Strongest < 2.5: "No dimension has reached a sustainable level yet"
- Strongest ≤ 3.5: "Early momentum in [strongest] provides a foundation to build on"
- Strongest > 3.5: "Strong capabilities in [strongest] provide a platform for growth"

### Improved

**Insight Specificity**: All insights are now contextually aware of the complete score profile rather than responding to dimensions in isolation. Cross-dimensional analysis identifies how capabilities interact (data limits AI, governance limits scaling, etc.) and surfaces these relationships explicitly.

**Pattern-Based Diagnosis**: The engine now detects when all scores are uniformly low, uniformly mid, polarized, or show specific bottleneck patterns — and generates different advice for each pattern rather than treating every low score the same way.

**Gap Analysis Granularity**: Gap analysis now operates at the question level (identifying specific weak capabilities) and cross-dimensional level (identifying how dimensions constrain each other), not just the dimension level.

### Notes

This release represents a fundamental upgrade from a static scoring model to an intelligent analytical engine. The tool now functions as a genuine diagnostic instrument that detects patterns, analyses cross-dimensional relationships, and generates unique, specific insights for every possible score combination — all running entirely in the browser with no external dependencies.

---

## [1.1.0] - 2026-04-06

### Added

**Expanded Assessment Model**: Increased from 20 generic prompts to **30 specific, pain-point oriented questions** across all five dimensions. Each question now:
- Targets a specific operational capability rather than abstract maturity language
- Includes a detailed "why this matters" explanation that educates while assessing
- Probes real symptoms of digital immaturity (e.g., data silos, tool sprawl, vanity metrics, ungoverned AI)
- Uses direct, honest language that resonates with practitioners, not just executives

**Per-Dimension Gap Analysis**: New visual gap analysis card in the Dynamic Insights section showing:
- Each dimension with its score, colour-coded status indicator (red/amber/green)
- Status labels: Critical gap, Developing, Strong
- Instant visual overview of where the organisation stands across all five areas

**8-Level Maturity Stage Scale**: Expanded from 5 coarse stages to **8 granular maturity levels** with more precise score bands:
- 4.7–5.0: Transformational leader
- 4.2–4.6: Optimised performer
- 3.7–4.1: Scaling integrator
- 3.2–3.6: Structured executor
- 2.7–3.1: Developing practitioner
- 2.2–2.6: Emerging operator
- 1.5–2.1: Ad hoc responder
- 0–1.4: Foundational gap

**3-Tier Insight Models**: Each dimension now has three insight tiers (low/mid/high) instead of two, providing:
- More nuanced, context-aware guidance that matches the actual score
- Specific immediate actions for each maturity tier
- Clear "next frontier" direction for high-performing dimensions
- Mid-tier guidance that addresses the common "stuck in the middle" pattern

**Missing Insights Section HTML**: Added the complete HTML markup for the Dynamic Assessment Insights section that was previously referenced in JavaScript but missing from the page structure.

### Fixed

**Completion Percentage Bug**: Fixed critical calculation error that could cause completion to exceed 100%:
- Changed from counting all `state.answers` keys to only counting valid current question IDs
- Prevents stale localStorage entries from inflating the completion count
- Ensures percentage is always 0-100%

**Overall Score Calculation**: Fixed the overall average calculation to divide by the count of dimensions with answers (not always 5):
- Previously, if only 2 dimensions were answered, the score was still divided by 5
- Now accurately reflects the average of answered dimensions only

**Radar Chart Labels Clipped**: Resolved label truncation issue where dimension names were cut off:
- Reduced radar radius from 0.33 to 0.30 to create more label space
- Increased label radius from radius+45 to radius+50
- Implemented multi-line label rendering with line wrapping
- Reduced font size from 15px to 13px for better fit
- Uses abbreviated 2-line labels (e.g., "Customer\nExperience" instead of "Customer Experience (CX)")

### Improved

**Service Recommendations**: Changed from random selection to deterministic, targeted recommendations:
- Selects the top 2 services from each of the two weakest dimensions
- Adds one service from the third weakest for breadth
- Ensures consistent output on every page refresh

**Assessment Questions Quality**: Every question now follows a diagnostic pattern:
- States a specific, measurable capability assertion
- Provides a detailed explanation of why the capability matters
- Highlights the business impact of gaps in this area
- Uses language that surfaces real operational pain points

**Insight Depth**: Insights now provide genuinely actionable guidance:
- Immediate actions with specific steps, not just descriptions of the problem
- Business impact context (e.g., "wastes 20-40% of analyst time")
- Concrete next steps appropriate to the maturity tier
- Bold formatting for key action items within insight text

**Dimension List Sidebar**: Increased dimension name column width from 110px to 140px to prevent name truncation in the sidebar bar charts.

**Hero Metrics**: Updated prompt count from "20 evidence-based prompts" to "30 evidence-based prompts" to reflect the expanded assessment.

### Notes

This release represents a substantial overhaul of the assessment quality, scoring precision, and insight depth. The tool now functions as a genuine diagnostic instrument that surfaces specific pain points and provides actionable recommendations — not just a score with generic commentary.

---

## [1.0.0] - 2026-04-06

### Added

The first production release of **digital-maturity-scorecard** has been created.

| Area | Details |
| --- | --- |
| Core application | Built a single-file interactive scorecard in `index.html` using HTML, CSS, and vanilla JavaScript |
| Assessment model | Added a five-dimension maturity framework covering Data, AI, Experience, Governance, and Performance |
| Interactivity | Implemented live scoring, per-dimension averaging, overall maturity calculation, and real-time report updates |
| Visualisation | Added a radar chart rendered through the browser canvas API |
| Advisory output | Added key findings, maturity-stage narrative, recommended service areas, and a ninety-day roadmap |
| Export support | Added print-optimised styling for browser-based PDF export of the Digital Health Report |
| Persistence | Added browser local storage support so users can resume progress |
| Repository hygiene | Added `README.md`, `LICENSE`, `.gitignore`, and this `CHANGELOG.md` |

### Notes

This release is intentionally dependency-free so it can be deployed quickly on any static hosting platform or opened directly in a browser.
