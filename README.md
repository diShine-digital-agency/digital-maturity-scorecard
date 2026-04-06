# digital-maturity-scorecard

**digital-maturity-scorecard** is a production-ready, single-file interactive assessment that helps organisations evaluate their digital maturity across **Data**, **AI**, **Experience**, **Governance**, and **Performance**. It is designed for CMOs, CDOs, digital transformation leads, consultants, and agency prospects who need a fast but credible view of capability gaps and next-step priorities.

The tool combines a structured twenty-question scorecard, a live radar chart, and a printable one-page **Digital Health Report**. As answers are entered, the interface recalculates dimension scores, updates the overall maturity stage, and generates a focused ninety-day roadmap tied to practical **diShine** service areas.

| Attribute | Details |
| --- | --- |
| Repository purpose | Interactive digital maturity assessment for agencies, consultants, and transformation teams |
| Stack | Single-file HTML, CSS, and vanilla JavaScript |
| Dependencies | None |
| Output | Live maturity profile, radar chart, tailored recommendations, printable report |
| Assessment dimensions | Data, AI, Experience, Governance, Performance |
| Primary value | Turns a discovery conversation into a structured diagnostic and action plan |

## Why this tool creates real value

Many maturity assessments stop at scoring. This repository is intentionally built to go further. It translates raw answers into a practical advisory output that can be used in discovery calls, internal planning workshops, client diagnostics, and post-audit recommendations.

| Value area | What the tool delivers |
| --- | --- |
| Diagnostic clarity | Exposes where digital capability is uneven, not just where it is weak overall |
| Executive communication | Converts assessment inputs into a concise one-page Digital Health Report |
| Strategic direction | Produces a ninety-day roadmap rather than a score with no follow-through |
| Agency relevance | Pins recommendations to diShine-style services so the output supports real consulting conversations |
| Ease of adoption | Runs anywhere as a static file with no build process, packages, or frameworks |

## Core features

The scorecard is designed to feel polished while remaining easy to deploy and maintain. The entire application lives in a single `index.html` file, which makes it lightweight, portable, and simple to customise.

| Feature | Description |
| --- | --- |
| Live radar chart | Updates instantly as users answer the assessment |
| Five-dimension scoring | Calculates per-dimension averages and an overall maturity score |
| Maturity stage logic | Interprets the average score into a narrative maturity stage |
| Tailored report | Generates key findings, strategic implications, and service recommendations |
| Ninety-day roadmap | Builds prioritised actions from the lowest-scoring dimensions |
| Local persistence | Saves progress in browser storage so the user can resume later |
| Print-ready export | Uses print CSS so the browser can save the report as PDF |
| Responsive interface | Works across desktop and mobile screen sizes |

## Repository structure

This project is intentionally minimal.

| Path | Purpose |
| --- | --- |
| `index.html` | The full application, including layout, styling, scoring logic, chart rendering, and print styles |
| `README.md` | Repository overview, installation, usage, and customisation guidance |
| `CHANGELOG.md` | Version history |
| `LICENSE` | Open-source licence |
| `.gitignore` | Excludes local editor and generated verification artifacts |

## How to run locally

Because the project is dependency-free, local usage is straightforward. You can either open the file directly in a browser or serve the folder with a tiny local web server.

### Option 1: Open directly

Open `index.html` in any modern browser.

### Option 2: Serve locally

From the repository root, run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## How to use the scorecard

Start by entering the organisation name and the primary transformation ambition. Then complete the twenty assessment prompts using the five-level maturity scale. The tool will calculate the maturity profile automatically and refresh the right-hand summary in real time.

When the assessment is complete, review the live radar chart, the overall maturity stage, the strongest and weakest dimensions, and the recommended service areas. To create a shareable output, select **Export Digital Health Report** and save the print view as PDF from the browser dialog.

| Step | User action | Tool output |
| --- | --- | --- |
| 1 | Enter organisation name | Personalises the report header |
| 2 | Enter transformation ambition | Tailors the narrative focus of the recommendations |
| 3 | Score all twenty prompts | Updates dimension averages and overall maturity |
| 4 | Review live summary | Identifies the main strategic constraint and strongest capability |
| 5 | Export report | Creates a one-page printable PDF-ready advisory snapshot |

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

## Customisation guidance

The tool is easy to adapt for different propositions, sectors, or agency offers. All core content sits in JavaScript data objects inside `index.html`.

| Customisation need | Where to edit |
| --- | --- |
| Questions and prompts | The `dimensions` array |
| Dimension descriptions | The `dimensions` array |
| Service recommendations | The `services` lists per dimension |
| Roadmap recommendations | The `roadmap` object per dimension |
| Brand colours and visual style | CSS variables in `:root` |
| Report wording | The `getStage`, `buildFindings`, and `refresh` functions |

## Deployment

This repository is ideal for static hosting. It can be published through GitHub Pages, Netlify, Vercel static hosting, Cloudflare Pages, or any standard web server.

For GitHub Pages, the simplest approach is to host the repository root so that `index.html` becomes the site entry point.

## Recommended use cases

The repository is especially useful when diShine or another consultancy wants to turn early-stage conversations into structured strategic diagnostics.

| Use case | Outcome |
| --- | --- |
| Lead generation | Prospects engage with a useful tool instead of a generic brochure asset |
| Discovery workshops | Teams align around a shared view of current maturity |
| Sales enablement | Consultants move from high-level claims to visible operational gaps |
| Internal transformation reviews | Leadership teams gain a concise diagnostic and action plan |
| Post-audit follow-up | Recommendations can be anchored to specific maturity gaps |

## Browser support

The application is built with standard modern browser capabilities, including Canvas for the radar chart and `localStorage` for persistence. Current versions of Chrome, Edge, Firefox, and Safari should work well.

## Licence

This repository is released under the **MIT License**. See the `LICENSE` file for full terms.

## Maintainer notes

This project is intentionally framework-free so that it remains easy to audit, fork, and customise for client engagements. If you want a future version with CRM capture, downloadable branded PDFs, multi-user analytics, or backend persistence, that can be added as a later iteration.
