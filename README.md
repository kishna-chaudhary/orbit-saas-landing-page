# Orbit — SaaS landing page

A polished, responsive landing page for **Orbit**, a fictional project-planning and team-focus SaaS product. The page uses a dark, editorial look with lime accents, a CSS-built 3D product preview, and small interactive details.

## Live site

[https://assignment-omega-azure.vercel.app](https://assignment-omega-azure.vercel.app)

## Run locally

No installation or build step is needed.

1. Download or clone this folder.
2. Open `index.html` in a modern browser.

For a local development server, run `python -m http.server 8000` from this folder and visit [http://localhost:8000](http://localhost:8000).

## Technologies

- Semantic HTML
- CSS (responsive layout, custom illustration, 3D transforms, motion preferences)
- Vanilla JavaScript (mobile navigation, pricing switch, validated demo-request form)
- Vercel static hosting

The demo form validates input in the browser and displays a success confirmation; it does not send data to a backend.

## Design and implementation notes

- The interface uses a restrained charcoal palette and bright lime accents to keep the visual hierarchy clear.
- The hero's floating workspace illustration is built with HTML and CSS rather than a static screenshot.
- Feature cards and the orbital process graphic reuse the same visual language as the hero.
- Mobile navigation collapses into an accessible menu, while pricing cards reflow into a single column on narrow screens.
- The pricing switch updates the displayed per-seat prices. The demo form checks required fields and email format before showing confirmation.
- Reduced-motion preferences are respected, and the navigation and form remain usable with a keyboard.


