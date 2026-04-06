# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by **Keep a Changelog**, and this project uses a simple semantic versioning approach.

## [1.0.1] - 2026-04-06

### Added

**Dynamic Insights Section**: A new dedicated insights panel that displays in real time as users complete the assessment. This section includes:
- Overall maturity snapshot with strategic narrative
- Core advantage and critical constraint analysis
- Strategic focus recommendations based on overall score and dimension variance
- 90-day roadmap with phase-specific actions tailored to the three lowest-scoring dimensions

**Enhanced PDF Export**: Implemented robust PDF generation using html2pdf.js library with:
- Professional branded PDF output with complete assessment results
- Includes all insights, grades, findings, and roadmap recommendations
- Automatic filename generation with organisation name and date
- Proper error handling and UI state preservation during export

**Improved Insight Model**: Expanded the insight generation logic with:
- Dimension-specific guidance models for Data, AI, Experience, Governance, and Performance
- Dynamic strategic focus recommendations based on overall score bands (Market leadership, Scaling efficiency, Professionalisation, Remediation)
- Variance detection to flag when high-maturity areas are being throttled by foundational gaps
- Context-aware findings that adapt to the nature of results

### Fixed

**Radar Chart Labels**: Corrected label positioning and alignment for all six dimensions:
- Increased label radius for better spacing and readability
- Implemented dynamic text alignment based on angle (left/right/center, top/bottom/middle)
- Improved label visibility across all screen sizes
- Fixed text baseline and alignment calculations for consistent rendering

**Print/Export State Bug**: Resolved critical issue where clicking export would clear grades and make the tool unusable:
- Added proper state preservation in the exportToPDF function
- Implemented try-catch error handling with user feedback
- Added automatic UI refresh after export to ensure state consistency
- Button now shows loading state during PDF generation

**Print CSS**: Enhanced print media queries to:
- Include the new Dynamic Insights section in printed output
- Properly hide non-essential UI elements (Reset button, View Insights button, radar canvas)
- Ensure all insights, grades, and roadmap content is visible in print
- Maintain professional formatting across page breaks

### Improved

- Updated README.md with comprehensive documentation of new features
- Refined insight generation to provide more actionable, professional-grade output
- Enhanced user experience with better visual feedback during PDF export
- Improved code comments and structure for easier future customisation

### Notes

This release significantly enhances the advisory value of the tool by providing real-time dynamic insights that adapt to the assessment results. The PDF export now generates a complete, branded report suitable for board-level presentations, workshops, and client handovers. All fixes have been thoroughly tested to ensure UI stability and data integrity.

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
