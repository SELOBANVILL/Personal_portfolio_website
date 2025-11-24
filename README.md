# Moses — Portfolio (Tech Dark Theme)

A dark-mode, tech-styled portfolio with maroon accents and interactive widgets. Built for GitHub Pages.

## Structure
- `index.html` — landing page with widgets & project previews
- `about.html` — biography, skills
- `portfolio.html` — full projects gallery (cards open modal)
- `work-experience.html` — experience
- `certificates.html` — achievements page
- `contact.html` — contact form (static)
- `style.css` — single stylesheet
- `script.js` — UI interactivity (theme, modal, animations)
- images: use the three provided assets (paths in repo)

## Image file paths included (already used in templates)
- `/mnt/data/87a8302f-7ff4-4d49-9b40-85569bec0abf.png`
- `/mnt/data/2b4b46c2-a61f-43e6-866b-09d3926db06b.png`
- `/mnt/data/8f0ad82b-14fa-4472-a2d1-8173dffa931a.png`

> Replace with your own images in `images/` if you prefer; update `src` as needed.

## Deployment (GitHub Pages)
1. Create a repo (e.g. `moses-portfolio`).
2. Add these files and an `images/` folder (or keep the provided paths).
3. Commit & push to `main`.
4. In repo **Settings → Pages**, choose branch `main` and folder `/root`.
5. Visit: `https://<username>.github.io/<repo>/`

## Customization ideas
- Add a mobile hamburger menu toggle that slides the menu from the side (can be extended in JS).
- Link project cards to live demos & GitHub repos.
- Add resume download button (PDF) on About page.
- Add analytics widget or contact form endpoint (Netlify Forms / Formspree).

## Notes
- Theme persists via `localStorage`.
- All transitions use subtle timing and an eased curve for a techy yet sharp feel.
