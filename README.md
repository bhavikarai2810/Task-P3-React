# DEV@Deakin — SIT313 P3 Home Page

A React + Vite migration of the supplied Task 1 personal website, redesigned as a DEV@Deakin-style student article home page.

## Run locally
1. Install Node.js (LTS).
2. Extract this project and open the `Task-P3-React` folder in VS Code.
3. Open a terminal in that folder and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.

## React component structure
- `src/App.jsx` — combines the page components and stores article data in an array.
- `src/components/Header.jsx` — site logo, search input, and navigation.
- `src/components/Hero.jsx` — welcome banner.
- `src/components/ArticleSection.jsx` — reusable article section; renders articles with `map()`.
- `src/components/Footer.jsx` — footer navigation, social links, and newsletter form.
- `src/styles.css` — responsive layout and styling.

## P3 requirements covered
- React parent-child component architecture.
- Article data stored in an array and displayed using `.map()`.
- Images and Lucide icons.
- Footer with navigation and social links.
- Responsive layout and `.gitignore` excluding `node_modules/`.

## Before submission
- Replace any sample content/images with your own if required.
- Check that the external images load with an internet connection.
- Create a GitLab project named **Task P3** and set visibility to **Internal**.
- Ensure `.env`, `node_modules/`, and `dist/` are not committed.
- Commit source files with meaningful messages.
- Capture screenshots and record a 2–4 minute walkthrough for Panopto.
