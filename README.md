# 📊 Digital Maturity Scorecard: pattern-based maturity intelligence & pre-assessment

<div align="center">
  
[![diShine Logo](https://dishine.it/favicon.ico)](https://dishine.it/)

***Transform. Automate. Shine!***

[![Website](https://img.shields.io/badge/Website-dishine.it-blue)](https://dishine.it/blog/digital-maturity-assessment-scorecard-tool/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-diShine-blue)](https://linkedin.com/company/100682596)
[![Location](https://img.shields.io/badge/Location-Milan%2C%20Italy-green)]()
[![License: CC0](https://img.shields.io/badge/License-CC0%201.0-lightgrey)](LICENSE)

<p align="center">
  <img src="docs/images/digital_maturity_03_maturity_profile_scene.webp" alt="Digital Maturity" width="80%">
</p>

**digital-maturity-scorecard** is a single-file interactive assessment that helps organisations evaluate their digital maturity across **Data**, **AI**, **Experience**, **Governance**, and **Performance**. It is designed for CMOs, CDOs, digital transformation leads, consultants, and agency prospects who need a fast but credible view of capability gaps and next-step priorities.

### Try the scorecard live: click [here](https://digital-map.dishine.it/).

Built by [diShine Digital Agency](https://dishine.it). Read more on the [diShine blog](https://dishine.it/blog/digital-maturity-assessment-scorecard-tool/).

</div>

<p align="center">
  <img src="docs/images/digital_maturity_05_report_export_scene.webp" alt="Digital maturity report" width="65%">
</p>

The tool combines a structured thirty-question scorecard, a live radar chart with benchmark overlay, an intelligent analytical engine with pattern detection, composite strategic indices, digital risk scoring, cross-dimensional intelligence, a five-tier insight model, AI-powered strategic analysis, a capability heatmap, and a printable branded **Digital Health Report**. As answers are entered, the interface recalculates dimension scores, statistical measures, detects score patterns, analyses cross-dimensional relationships, and generates genuinely unique insights and recommendations tailored to the specific assessment profile.

<p align="center">
  <img src="docs/images/digital_maturity_04_insight_engine_scene.webp" alt="Digital maturity insight" width="65%">
</p>

---

## At a glance

| Attribute | Details |
| --- | --- |
| Repository purpose | Interactive digital maturity assessment with AI-powered analytical engine for agencies, consultants, and transformation teams |
| Stack | Single-file HTML, CSS, and vanilla JavaScript |
| Dependencies | None (jsPDF for PDF export) |
| Languages | English, French, Italian — full tri-lingual interface with native-quality translations |
| Output | Live maturity profile, radar chart with benchmark overlay, composite indices, digital risk score, heatmap, pattern-based diagnosis, cross-dimensional intelligence, AI-powered strategic analysis, per-dimension gap analysis, tailored recommendations, downloadable reports (PDF, Markdown, plain text) |
| Assessment dimensions | Data, AI, Experience, Governance, Performance |
| AI model | On-device intelligent engine — no API, no installation, no data leaves the browser |
| Primary value | Turns a discovery conversation into a structured diagnostic with genuinely unique, contextual insights |

## Why this tool creates real value

Many maturity assessments stop at scoring. This repository is intentionally built to go further. It translates raw answers into a practical advisory output that can be used in discovery calls, internal planning workshops, client diagnostics, and post-audit recommendations.

The intelligent analytical engine detects patterns across all five dimensions, identifies cross-dimensional constraints (e.g., how data gaps limit AI potential, or how governance bottlenecks block scaling), and generates genuinely unique narratives for every possible score profile. This means no two assessments produce the same generic output — the insights are always specific to the organisation's actual profile.

| Value area | What the tool delivers |
| --- | --- |
| Diagnostic clarity | Exposes where digital capability is uneven, not just where it is weak overall |
| Pattern intelligence | Detects 19 distinct score patterns and explains what they mean strategically |
| Cross-dimensional analysis | Identifies how dimensions interact — data limits AI, governance limits scaling, performance limits proof |
| Composite indices | Four strategic indices (Digital Foundation, Innovation Readiness, Operational Excellence, Customer Value) for cross-cutting analysis |
| Digital risk scoring | 0-100 risk assessment with factor breakdown showing governance, data, variance, and floor risks |
| AI-powered analysis | On-device intelligent engine provides unique, contextual insights with zero external dependencies |
| Executive communication | Converts assessment inputs into a concise branded Digital Health Report |
| Strategic direction | Produces a ninety-day roadmap with what-if scenario modelling |
| Question-level precision | Surfaces specific capability gaps within dimensions, not just dimension-level averages |
| Statistical depth | Standard deviation, confidence scoring, and benchmark comparison per dimension |
| Industry context | Industry-specific and company-size-specific interpretation of results |
| Agency relevance | Pins recommendations to diShine-style services so the output supports real consulting conversations |
| Ease of adoption | Runs anywhere as a static file with no build process, packages, or frameworks |

---

## Who this is for

The scorecard has been designed for organisations that need a pragmatic way to understand how mature their digital operating model really is. It is especially useful in early-stage advisory conversations, discovery projects, strategic audits, and internal transformation reviews.

| Audience | Why it fits |
| --- | --- |
| CMOs and marketing leaders | Reveals gaps across channel performance, data quality, content experience, and operating discipline |
| CDOs and transformation leads | Provides a compact diagnostic to support prioritisation and roadmap discussion |
| Agencies and consultants | Helps structure discovery calls and position advisory services with more precision |
| Leadership teams | Creates a shared language for current-state maturity and next-step planning |
| Prospects in qualification | Offers immediate value before a wider engagement begins |

## Quick start

Want to try the scorecard live, without installation? [Click here](https://digital-map.dishine.it)

Because the project is dependency-free, adoption is immediate. You can open it locally, host it on any static platform, or embed it into a wider discovery workflow.

### Option 1: Open directly

Open `index.html` in any modern browser.

### Option 2: Serve locally

From the repository root, run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

### Option 3: Publish as a static asset

Deploy the repository root to GitHub Pages, Netlify, Vercel static hosting, Cloudflare Pages, or any standard web server. Since the application is self-contained, there is no build step and no package installation.

---

## Core features

The scorecard is designed to feel polished while remaining easy to deploy and maintain. The entire application lives in a single `index.html` file, which makes it lightweight, portable, and simple to customise.

| Feature | Description |
| --- | --- |
| Live radar chart | Updates instantly with properly positioned labels and benchmark overlay polygon for industry comparison |
| Five-dimension scoring | Calculates per-dimension averages, standard deviations, and confidence scores |
| Composite strategic indices | Four weighted cross-cutting indices: Digital Foundation, Innovation Readiness, Operational Excellence, Customer Value |
| Digital risk score | 0-100 risk assessment with four weighted factors and severity classification |
| Maturity DNA fingerprint | Compact alphanumeric representation of the full maturity profile |
| Eight-level maturity scale | Interprets the average score into one of eight granular maturity stages for precise diagnostic output |
| Five-tier insight model | Each dimension has five insight tiers (critical/low/mid/advancing/high) with unique, actionable guidance |
| Pattern detection engine | Detects 19 distinct score patterns including uniform, polarized, outlier, and cross-dimensional relationships |
| Cross-dimensional intelligence | Analyses how dimensions interact and constrain each other with severity-rated insights and dependency-graph-based gap detection |
| AI-powered strategic analysis | On-device analytical engine providing pattern diagnosis, cross-dimensional intelligence, question-level gaps, priority matrix, and what-if scenarios — no API, no installation |
| Per-question contextual labels | 150 unique answer descriptions (30 questions × 5 levels) providing question-specific interpretation |
| Internationalisation (i18n) | Full tri-lingual support (EN/FR/IT) with language switcher, 250+ translation keys per language, and language preference persistence |
| Help tooltips | Contextual (?) icons on insight sections, Digital Health Report headers, and AI-Powered Strategic Analysis cards explaining what the metric is, why it matters, and how it is calculated |
| Incomplete assessment warnings | Smart banners in insights and download sections when the assessment is partially complete (1–99%) |
| Industry and company size context | 11 industry sectors and 6 company sizes with contextual narrative adaptation |
| Per-dimension micro-feedback | Real-time status bar showing tier, standard deviation, confidence level, and ROI improvement potential |
| Capability heatmap | Question-level colour-coded grid across all dimensions with legend — clickable cells navigate to the corresponding question |
| ROI impact estimation | Per-dimension, per-tier-transition business value estimates |
| Benchmark overlay | Industry-average reference polygon on the radar chart for visual comparison |
| Question-level gap analysis | Surfaces the specific weakest capabilities within each dimension, not just dimension averages |
| Dynamic narrative generation | Multi-variable engine producing genuinely unique analysis with industry and size context |
| What-if scenario modelling | Shows the impact of improving the weakest dimension by 1 point on overall score and maturity stage |
| Tailored report | Generates key findings, strategic implications, and service recommendations |
| Ninety-day roadmap | Builds prioritised actions from the lowest-scoring dimensions |
| Footer | Credits (diShine, Kevin Escoda), disclaimer, and MIT license explanation — fully translated |
| Empty initial state | Answers start empty on first visit with 0% completion and placeholder insight text |
| Local persistence | Saves progress and language preference in browser storage so the user can resume later |
| PDF export | Generates a formatted PDF report built directly from assessment data via jsPDF — no DOM capture, guaranteed non-blank output |
| Markdown export | Downloads the complete report as a `.md` file for docs, wikis, and repositories |
| Plain text export | Downloads the complete report as a `.txt` file for emails and notes |
| Print-ready output | Optimised print CSS for browser-based PDF generation |
| Responsive interface | Works across desktop and mobile screen sizes |

## What the tool does in practice

In a real discovery or consulting context, the scorecard helps convert a broad digital conversation into a more structured assessment. As the user scores each prompt, the tool identifies where maturity is concentrated, where execution is blocked, and where the greatest leverage for improvement is likely to be found.

The live radar chart makes imbalance immediately visible. The intelligent analytical engine detects score patterns (e.g., uniform low scores vs polarized scores vs single bottlenecks), analyses cross-dimensional relationships (e.g., how data gaps constrain AI potential), and generates genuinely unique narratives for every score profile. The AI-powered strategic analysis section provides pattern diagnosis, cross-dimensional intelligence, question-level gap analysis, a strategic priority matrix, and what-if scenario modelling — all running entirely in the browser with zero external dependencies.

The report layer then interprets the scores through a maturity-stage narrative and produces downloadable reports in three formats (PDF, Markdown, and plain text) that can support proposals, workshops, strategic reviews, or internal planning sessions.

| Practical output | Advisory use |
| --- | --- |
| Pattern diagnosis | Shows whether the organisation has uniform gaps, polarized strengths, bottleneck dimensions, or specific constraint patterns |
| Cross-dimensional intelligence | Identifies how dimensions interact — data limits AI, governance blocks scaling, performance limits proof of value |
| Question-level gap analysis | Surfaces the specific capabilities that are weakest within each dimension |
| Strongest dimension | Shows where the organisation already has capability to build on |
| Weakest dimension | Identifies the most likely operational bottleneck |
| Overall maturity stage | Gives leadership a concise narrative summary |
| What-if scenarios | Models the impact of improving the weakest dimension by 1 point |
| Dynamic insights | Provides five-tier dimension-specific guidance tailored to the assessment results, with per-dimension gap analysis |
| Recommended services | Connects diagnostic findings to concrete intervention areas |
| Ninety-day roadmap | Helps convert diagnosis into action planning |

---

## Repository structure

This project is intentionally minimal.

| Path | Purpose |
| --- | --- |
| `index.html` | The full application, including layout, styling, scoring logic, analytical engine, pattern detection, AI-powered analysis, chart rendering, insights generation, and export functionality |
| `docs/ALGORITHM.md` | Complete mathematical reference: all formulas, statistical methods, composite indices, risk scoring, pattern detection algorithms, dependency graphs, and report generation pipeline |
| `docs/SCORING_MODEL.md` | Complete documentation of the scoring model, analytical engine, pattern detection, cross-dimensional intelligence, and all insight generation mechanisms |
| `README.md` | Repository overview, installation, usage, and customisation guidance |
| `CHANGELOG.md` | Version history |
| `LICENSE` | Open-source licence |
| `.gitignore` | Excludes local editor and generated verification artifacts |

## How to use the scorecard

Start by selecting your preferred language using the **EN/FR/IT switcher** in the top-right corner — the entire interface updates instantly. Then enter the organisation name, the primary transformation ambition, your industry sector, and company size. Complete the thirty assessment prompts using the five-level maturity scale — each question shows **contextual answer descriptions** specific to that capability area, fully translated in all three languages. The tool will calculate the maturity profile automatically and refresh the right-hand summary in real time.

As you answer questions, each dimension shows **real-time micro-feedback** with a colour-coded tier status, standard deviation, confidence level, and ROI improvement potential. The sidebar displays **Maturity DNA**, **Digital Risk Score**, and **Composite Strategic Indices** updated live, along with a **Download Report** button for quick access to the export section. The **Dynamic Assessment Insights** section updates with real-time guidance including overall maturity snapshot, key findings, composite indices, risk assessment, a capability heatmap, and gap analysis. Each insight section title includes a **help tooltip** (?) that explains what the metric means and how it is calculated. If the assessment is partially complete, **warning banners** appear in the insights and download sections encouraging completion before generating reports.

The **AI-Powered Strategic Analysis** section provides pattern-based diagnosis (19 patterns), cross-dimensional intelligence with dependency-graph analysis, question-level gap analysis, a strategic priority matrix, and what-if scenario modelling — all running entirely in the browser with no external dependencies.

When the assessment is complete, review the live radar chart (with benchmark overlay), the overall maturity stage, the strongest and weakest dimensions, and the recommended service areas. To download a shareable output, scroll to the **Download Your Report** section at the bottom and choose your preferred format — **PDF** for print-ready sharing, **Markdown** for documentation and wikis, or **plain text** for emails and notes.

| Step | User action | Tool output |
| --- | --- | --- |
| 1 | Select language (EN/FR/IT) | Entire interface updates to the chosen language |
| 2 | Enter organisation name | Personalises the report header and insights |
| 3 | Enter transformation ambition | Tailors the narrative focus of the recommendations |
| 4 | Select industry sector | Adds industry-specific context to the narrative |
| 5 | Select company size | Adds size-appropriate interpretation of results |
| 6 | Score assessment prompts | Updates dimension averages, statistical measures, composite indices, risk score, and dynamic insights in real time |
| 7 | Review live insights | Identifies patterns, cross-dimensional constraints, risk factors, and dimension-specific guidance with benchmark comparison. Use (?) tooltips for metric explanations |
| 8 | Download report | Exports the complete assessment as PDF, Markdown, or plain text |

## Assessment dimensions

The framework is organised around five operational dimensions that together shape digital maturity. These dimensions were chosen to reflect how modern organisations actually execute digital strategy: through data quality, AI readiness, customer experience, governance discipline, and measurable performance improvement.

| Dimension | What it assesses |
| --- | --- |
| Data | Collection, accessibility, quality, consistency, and usefulness in decision-making |
| AI | Use-case clarity, workflow adoption, governance, and measurable value creation |
| Experience | Customer journey design, messaging coherence, relevance, and personalisation |
| Governance | Ownership, standards, workflows, approvals, compliance, and decision cadence |
| Performance | Measurement, experimentation, optimisation, and ROI visibility |

## Scoring model

Each dimension contains six prompts scored from **1** to **5**. For a high-level overview of the scoring model, see [`docs/SCORING_MODEL.md`](docs/SCORING_MODEL.md). For the complete mathematical specification of all algorithms and formulas, see [`docs/ALGORITHM.md`](docs/ALGORITHM.md).

| Score | Meaning |
| --- | --- |
| 1 | Fragmented |
| 2 | Emerging |
| 3 | Structured |
| 4 | Integrated |
| 5 | Optimised |

The dimension score is the average of its six prompts. The overall maturity score is the average of the dimension scores for dimensions with answers. The maturity stage narrative is then selected from eight score bands that reflect increasing operational coherence and optimisation.

### Maturity stages

| Score range | Stage | Description |
| --- | --- | --- |
| 4.7–5.0 | Transformational leader | Digital capability is a core growth engine |
| 4.2–4.6 | Optimised performer | Strong cross-functional integration with mature governance |
| 3.7–4.1 | Scaling integrator | Core capabilities well-established and starting to compound |
| 3.2–3.6 | Structured executor | Repeatable processes with growing consistency |
| 2.7–3.1 | Developing practitioner | Foundations forming with pockets of good practice |
| 2.2–2.6 | Emerging operator | Basic capabilities exist but remain inconsistent |
| 1.5–2.1 | Ad hoc responder | Digital activity is largely reactive and siloed |
| 0–1.4 | Foundational gap | Earliest stage with critical gaps across most dimensions |

## Report output

The generated **Digital Health Report** is intended to be short enough to use in meetings and clear enough to support executive discussion. Rather than overwhelming the reader with raw scoring detail, it distils the results into a maturity snapshot, key findings, recommended service areas, and a practical ninety-day roadmap.

| Report section | Purpose |
| --- | --- |
| Overall maturity snapshot | Summarises the current maturity level with context-aware language (never says "preserve momentum" when scores are low) |
| Key findings | Highlights the strongest and weakest capability areas with 5-tier (critical/low/mid/advancing/high) dimension-specific guidance |
| Gap analysis | Per-dimension visual status indicators showing Critical gap, Weak, Developing, Advancing, or Strong |
| Pattern diagnosis | Identifies score patterns (uniform, polarized, outlier, etc.) and their strategic meaning |
| Cross-dimensional intelligence | Shows how dimensions interact and constrain each other |
| Question-level gaps | Surfaces specific capability weaknesses within each dimension |
| Strategic priority matrix | Plots dimensions by impact and effort to guide investment decisions |
| What-if scenarios | Models the impact of improving the weakest dimension |
| Strategic focus | Connects the stated transformation ambition to the output narrative |
| Recommended support | Aligns findings with relevant diShine-style intervention areas |
| Ninety-day roadmap | Provides an action-oriented path across the next three phases of improvement |

---

## Customisation guidance

The tool is easy to adapt for different propositions, sectors, or agency offers. All core content sits in JavaScript data objects inside `index.html`.

| Customisation need | Where to edit |
| --- | --- |
| Questions and prompts | The `dimensions` array (6 questions per dimension) |
| Per-question answer labels | The `questionAnswerLabels` object (30 × 5 contextual descriptions) |
| Translations | The `translations` object — add keys or languages to extend i18n coverage |
| Dimension descriptions | The `dimensions` array |
| Service recommendations | The `services` lists per dimension |
| Roadmap recommendations | The `roadmap` object per dimension |
| Insight models | The `insightModels` object for 5-tier (critical/low/mid/advancing/high) dimension-specific guidance |
| Industry context | The `industryContext` object for sector-specific narrative |
| Company size context | The `companySizeContext` object for size-specific interpretation |
| Composite index weights | The `computeCompositeIndices` function |
| Risk factor weights | The `computeRiskScore` function |
| Benchmark data | The `benchmarkRanges` object |
| ROI estimates | The `roiImpactEstimates` object |
| Dimension dependencies | The `dimensionDependencies` graph |
| Cross-dimensional rules | The `generateCrossDimensionalInsights` function |
| Pattern detection | The `analyzePatterns` function |
| Brand colours and visual style | CSS variables in `:root` |
| Report wording | The `getStage` (8 levels), `buildFindings`, `generateDynamicNarrative`, and `refresh` functions |

## Deployment

This repository is ideal for static hosting. It can be published through GitHub Pages, Netlify, Vercel static hosting, Cloudflare Pages, or any standard web server.

For GitHub Pages, the simplest approach is to host the repository root so that `index.html` becomes the site entry point.

## Recommended use cases

The repository is especially useful to turn early-stage conversations into structured strategic diagnostics.

| Use case | Outcome |
| --- | --- |
| Lead generation | Prospects engage with a useful tool instead of a generic brochure asset |
| Discovery workshops | Teams align around a shared view of current maturity with real-time dynamic insights |
| Sales enablement | Consultants move from high-level claims to visible operational gaps with actionable guidance |
| Internal transformation reviews | Leadership teams gain a concise diagnostic, dynamic insights, and action plan |
| Post-audit follow-up | Recommendations can be anchored to specific maturity gaps with dimension-specific strategies |

## Browser support

The application is built with standard modern browser capabilities, including Canvas for the radar chart and `localStorage` for persistence and language preference. Current versions of Chrome, Edge, Firefox, and Safari should work well.

---

## About diShine

At [diShine](https://dishine.it), we build practical digital systems, growth architectures, and advisory tools that help organisations move from fragmented execution to scalable performance. This repository reflects that same philosophy: make the diagnostic useful, make the output actionable, and make the experience simple enough to deploy anywhere.

If you want to extend this scorecard into a fuller consulting product, a future iteration could add CRM capture, backend persistence, analytics, sector-specific models, or integration into wider transformation workflows.

## Credits

Framework by [diShine](https://dishine.it) | Kevin Escoda. Used internally for clients. Released open source for sharing.

## Licence

This repository is released under the **MIT License**. See the `LICENSE` file for full terms. A brief explanation of the MIT license is also displayed in the application footer.

## Maintainer notes

This project is intentionally framework-free so that it remains easy to audit, fork, and customise for client engagements. Reports are downloadable in three formats (PDF, Markdown, plain text) directly from the browser. If you want a future version with CRM capture, multi-user analytics, or backend persistence, that can be added as a later iteration.

## Contact

For digital strategy, maturity diagnostics, analytics architecture, AI enablement, or custom advisory tooling, visit [diShine](https://dishine.it).

---

## About diShine

[diShine](https://dishine.it) is a creative tech agency based in Milan. We create digital strategies, design process and build tools for clients, help businesses with AI strategy and MarTech architecture, and open-source some things we wish existed.

- Web: [dishine.it](https://dishine.it)
- GitHub: [github.com/diShine-digital-agency](https://github.com/diShine-digital-agency)
- Contact: kevin@dishine.it

