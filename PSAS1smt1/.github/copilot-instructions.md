# Copilot Instructions for This Project

## Project Overview
This project is a static travel agency website built with HTML and CSS. It is designed to showcase travel packages, customer testimonials, and contact information for a fictional agency "Mau Kemana Nih?". The site is fully client-side, with no backend or build system.

## Key Files
- `PSAS1.html`: Main HTML file containing all page structure, content, and minimal JavaScript for menu toggling.
- `style.css`: Main stylesheet for all layout, typography, and responsive design.

## Architecture & Patterns
- **Single Page Structure**: All content is in one HTML file, organized into semantic sections (hero, form, why-section, packages, testimonials, footer, etc.).
- **CSS-Driven Layout**: All styling and responsiveness are handled in `style.css`. Media queries are used for mobile adaptation.
- **Minimal JavaScript**: Only a single function (`toggleMenu`) is used for mobile navigation.
- **Image Assets**: The HTML references several images (e.g., `Logo Mau Kemana Nih _.png`, `Banjarmasin.jpg`). These must be present in the same directory for correct display.

## Developer Workflows
- **No Build Step**: Open `PSAS1.html` directly in a browser to view the site. No compilation or bundling is required.
- **No Automated Tests**: There are no test scripts or frameworks.
- **No External Dependencies**: All code is self-contained; no npm, pip, or other package managers are used.

## Project-Specific Conventions
- **Class Naming**: CSS classes use English names with dashes (e.g., `form-container`, `hero-text`, `btn-search`).
- **Section IDs**: Used for navigation anchors (e.g., `#Beranda`, `#Perjalanan`, `#Testimonial`, `#Kontak`).
- **Responsive Design**: Media queries in `style.css` adjust layout for screens <900px and <600px.
- **Form Elements**: Forms are present for search and contact, but have no backend action or validation.
- **Language**: Most content is in Indonesian, with some English for UI elements.

## Integration Points
- **Static Assets**: All images and referenced files must be in the same directory as `PSAS1.html`.
- **No API Calls**: There is no dynamic data fetching or backend integration.

## Examples
- To add a new travel package, duplicate a `.card` div in the `cards-section` of `PSAS1.html` and update the content.
- To change the color scheme, edit the relevant CSS variables or color values in `style.css`.

## Recommendations for AI Agents
- Maintain the single-file structure for HTML and CSS unless explicitly instructed to modularize.
- When adding new sections, follow the existing semantic and class naming patterns.
- Ensure all new image references are added to the project directory.
- Do not introduce JavaScript frameworks or build tools unless requested.

---
If any conventions or workflows are unclear, please request clarification from the user before making major changes.
