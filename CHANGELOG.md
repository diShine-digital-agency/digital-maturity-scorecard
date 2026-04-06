# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by **Keep a Changelog**, and this project uses a simple semantic versioning approach.

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
