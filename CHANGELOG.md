# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by **Keep a Changelog**, and this project uses a simple semantic versioning approach.

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
