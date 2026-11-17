# Alex Héroux — Portfolio

My personal portfolio: a small static site (plain HTML, CSS and JavaScript, no build step) in **English and French**, with a project grid that fills itself from my public GitHub repositories.

🌐 **Live:** <https://x0vah.github.io>

## Features

- **Bilingual (EN / FR)**: language picked from the browser, switchable with the button in the header and remembered in `localStorage`.
- **Live project grid**: fetched from the GitHub REST API (`/users/X0vaH/repos`), forks and archived repos excluded, filterable by language, cached for one hour to stay under the API rate limit, with a fallback link if GitHub is unreachable.
- Experience and education timelines, skills, contact.
- Light and dark themes (follows the system setting), responsive down to phone width, keyboard accessible.

## Structure

```
index.html   Page skeleton (text keys marked with data-i18n)
data.js      All content: projects overrides, skills, experience, education, EN/FR strings
main.js      Rendering, language switch, GitHub fetch + cache
styles.css   Styles (CSS variables, light/dark)
assets/      Favicon
```

## Editing the content

Everything lives in **`data.js`**:

- `hiddenRepos`: repositories never shown in the grid.
- `projects`: optional nicer title, EN/FR description and display order (`featured`) per repository. Repositories not listed still appear with their GitHub name and description.
- `experience`, `education`, `skills`: CV content in both languages.
- `I18N`: interface text.

## Run locally

No build step — any static server works:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Deployment

Hosted with **GitHub Pages** from the `main` branch of the `X0vaH.github.io` repository. Every push to `main` redeploys the site.
