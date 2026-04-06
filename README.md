# digital-maturity-scorecard

**A digital maturity assessment by [diShine Digital Agency](https://dishine.it).**

**digital-maturity-scorecard** is a single-file interactive assessment that helps organisations evaluate their digital maturity across **Data**, **AI**, **Experience**, **Governance**, and **Performance**. It is designed for CMOs, CDOs, digital transformation leads, consultants, and agency prospects who need a fast but credible view of capability gaps and next-step priorities.

The tool combines a structured twenty-question scorecard, a live radar chart, dynamic real-time insights, and a printable one-page **Digital Health Report**. As answers are entered, the interface recalculates dimension scores, updates the overall maturity stage, and generates a focused ninety-day roadmap.

Built by [diShine](https://dishine.it)

---

## At a glance

| Attribute | Details |
| --- | --- |
| Repository purpose | Interactive digital maturity assessment for agencies, consultants, and transformation teams |
| Stack | Single-file HTML, CSS, and vanilla JavaScript |
| Dependencies | None (html2pdf.js for PDF export) |
| Output | Live maturity profile, radar chart, dynamic insights, tailored recommendations, printable report |
| Assessment dimensions | Data, AI, Experience, Governance, Performance |
| Primary value | Turns a discovery conversation into a structured diagnostic and action plan |

## Why this tool creates real value

Many maturity assessments stop at scoring. This repository is intentionally built to go further. It translates raw answers into a practical advisory output that can be used in discovery calls, internal planning workshops, client diagnostics, and post-audit recommendations.

This means the scorecard is not just a visual gadget or lead magnet. It functions as a compact strategic instrument. It helps agencies and transformation teams move from vague digital ambition to a more concrete understanding of capability gaps, priority constraints, and the next practical steps required to improve execution.

| Value area | What the tool delivers |
| --- | --- |
| Diagnostic clarity | Exposes where digital capability is uneven, not just where it is weak overall |
| Executive communication | Converts assessment inputs into a concise one-page Digital Health Report |
| Strategic direction | Produces a ninety-day roadmap rather than a score with no follow-through |
| Dynamic insights | Real-time, dimension-specific insights that adapt to the nature of results |
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
| Live radar chart | Updates instantly as users answer the assessment with properly positioned dimension labels |
| Six-dimension scoring | Calculates per-dimension averages and an overall maturity score |
| Maturity stage logic | Interprets the average score into a narrative maturity stage |
| Dynamic insights section | Real-time insights that adapt to the nature of results, showing core advantages, critical constraints, and strategic focus |
| Tailored report | Generates key findings, strategic implications, and service recommendations |
| Ninety-day roadmap | Builds prioritised actions from the lowest-scoring dimensions |
| Local persistence | Saves progress in browser storage so the user can resume later |
| PDF export | Generates a branded, professional PDF report with all insights and recommendations |
| Print-ready output | Optimised print CSS for browser-based PDF generation |
| Responsive interface | Works across desktop and mobile screen sizes |

## What the tool does in practice

In a real discovery or consulting context, the scorecard helps convert a broad digital conversation into a more structured assessment. As the user scores each prompt, the tool identifies where maturity is concentrated, where execution is blocked, and where the greatest leverage for improvement is likely to be found.

The live radar chart makes imbalance immediately visible. The dynamic insights section updates in real time with dimension-specific guidance, showing the current strength, primary constraint, strategic focus, and a practical 90-day roadmap. The report layer then interprets the scores through a maturity-stage narrative and produces a professional PDF export that can support proposals, workshops, strategic reviews, or internal planning sessions.

| Practical output | Advisory use |
| --- | --- |
| Strongest dimension | Shows where the organisation already has momentum to build on |
| Weakest dimension | Identifies the most likely operational bottleneck |
| Overall maturity stage | Gives leadership a concise narrative summary |
| Dynamic insights | Provides dimension-specific guidance tailored to the assessment results |
| Recommended services | Connects diagnostic findings to concrete intervention areas |
| Ninety-day roadmap | Helps convert diagnosis into action planning |

---

## Repository structure

This project is intentionally minimal.

| Path | Purpose |
| --- | --- |
| `index.html` | The full application, including layout, styling, scoring logic, chart rendering, insights generation, and export functionality |
| `README.md` | Repository overview, installation, usage, and customisation guidance |
| `CHANGELOG.md` | Version history |
| `LICENSE` | Open-source licence |
| `.gitignore` | Excludes local editor and generated verification artifacts |

## How to use the scorecard

Start by entering the organisation name and the primary transformation ambition. Then complete the twenty assessment prompts using the five-level maturity scale. The tool will calculate the maturity profile automatically and refresh the right-hand summary in real time.

As you answer questions, the **Dynamic Assessment Insights** section updates with real-time guidance including overall maturity snapshot, key findings, strategic focus areas, and a 90-day roadmap tailored to your lowest-scoring dimensions.

When the assessment is complete, review the live radar chart, the overall maturity stage, the strongest and weakest dimensions, and the recommended service areas. To create a shareable output, select **Export Digital Health Report** and the tool will generate a branded PDF with all insights, grades, and recommendations.

| Step | User action | Tool output |
| --- | --- | --- |
| 1 | Enter organisation name | Personalises the report header and insights |
| 2 | Enter transformation ambition | Tailors the narrative focus of the recommendations |
| 3 | Score assessment prompts | Updates dimension averages, overall maturity, and dynamic insights in real time |
| 4 | Review live insights | Identifies the main strategic constraint, strongest capability, and dimension-specific guidance |
| 5 | Export report | Creates a branded PDF with complete assessment results, insights, and roadmap |

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

Each dimension contains four prompts scored from **1** to **5**.

| Score | Meaning |
| --- | --- |
| 1 | Fragmented |
| 2 | Emerging |
| 3 | Structured |
| 4 | Integrated |
| 5 | Optimised |

The dimension score is the average of its four prompts. The overall maturity score is the average of the five dimension scores. The maturity stage narrative is then selected from score bands that reflect increasing operational coherence and optimisation.

## Report output

The generated **Digital Health Report** is intended to be short enough to use in meetings and clear enough to support executive discussion. Rather than overwhelming the reader with raw scoring detail, it distils the results into a maturity snapshot, key findings, recommended service areas, and a practical ninety-day roadmap.

| Report section | Purpose |
| --- | --- |
| Overall maturity snapshot | Summarises the current maturity level and strategic implication |
| Key findings | Highlights the strongest and weakest capability areas with dimension-specific guidance |
| Strategic focus | Connects the stated transformation ambition to the output narrative |
| Recommended support | Aligns findings with relevant diShine-style intervention areas |
| Ninety-day roadmap | Provides an action-oriented path across the next three phases of improvement |

---

## Customisation guidance

The tool is easy to adapt for different propositions, sectors, or agency offers. All core content sits in JavaScript data objects inside `index.html`.

| Customisation need | Where to edit |
| --- | --- |
| Questions and prompts | The `dimensions` array |
| Dimension descriptions | The `dimensions` array |
| Service recommendations | The `services` lists per dimension |
| Roadmap recommendations | The `roadmap` object per dimension |
| Insight models | The `insightModels` object for dimension-specific guidance |
| Brand colours and visual style | CSS variables in `:root` |
| Report wording | The `getStage`, `buildFindings`, and `refresh` functions |

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

The application is built with standard modern browser capabilities, including Canvas for the radar chart and `localStorage` for persistence. Current versions of Chrome, Edge, Firefox, and Safari should work well.

---

## About diShine

At [diShine](https://dishine.it), we build practical digital systems, growth architectures, and advisory tools that help organisations move from fragmented execution to scalable performance. This repository reflects that same philosophy: make the diagnostic useful, make the output actionable, and make the experience simple enough to deploy anywhere.

If you want to extend this scorecard into a fuller consulting product, a future iteration could add CRM capture, backend persistence, analytics, sector-specific models, or integration into wider transformation workflows.

## Licence

This repository is released under the **MIT License**. See the `LICENSE` file for full terms.

## Maintainer notes

This project is intentionally framework-free so that it remains easy to audit, fork, and customise for client engagements. If you want a future version with CRM capture, downloadable branded PDFs, multi-user analytics, or backend persistence, that can be added as a later iteration.

## Contact

For digital strategy, maturity diagnostics, analytics architecture, AI enablement, or custom advisory tooling, visit [diShine](https://dishine.it).
