# Raunak Singh — ePortfolio

A static, hand-coded portfolio site styled like an engineering schematic
(black ink on white, net-label navigation, IC-package project cards, and a
drawing title block in the footer). No build step or framework: plain HTML,
CSS, and JavaScript, ready for GitHub Pages.

## Folder structure

```
eportfolio/
├── index.html          Sheet 1 · Home (welcome + top-level schematic)
├── about.html          Sheet 2 · Story, education, experience, skills, awards
├── projects.html       Sheet 3 · Discovery Project feature + all projects
├── discovery.html      Sheet 4 · Discovery Project write-up (fill in before Showcase)
├── goals.html          Sheet 5 · Career goals and roadmap
├── resume.html         Sheet 6 · Resume viewer + downloads
├── contact.html        Sheet 7 · Contact
├── assets/
│   ├── css/
│   │   ├── base.css        tokens (colors, fonts), reset, typography
│   │   ├── layout.css      sheet frame, header/nav, sections, footer title block
│   │   └── components.css  net labels, buttons, chip cards, tables, timeline …
│   ├── js/
│   │   ├── site.js           shared header + footer + mobile menu (edit nav here)
│   │   ├── projects-data.js  THE list of projects (edit to add/remove projects)
│   │   └── projects.js       renders project cards from projects-data.js
│   ├── img/             favicon + your own photos
│   └── docs/            resume PDFs
└── .claude/            local preview server config (not part of the site)
```

## Common edits

- **Add a project:** copy an object in `assets/js/projects-data.js` and edit it.
  Set `featured: true` to also show it on the home page. Card numbers (U1, U2 …)
  are assigned automatically.
- **Add a page:** copy any page, change `<body data-page="...">`, then add an
  entry to `PAGES` in `assets/js/site.js`. The nav and footer update everywhere.
- **Update the resume:** replace `assets/docs/raunak-singh-resume.pdf` (keep the file name).
- **Unfinished content** is highlighted in yellow stripes (`class="todo"`).
  Search for `todo` to find every spot, and remove the class when done.

## Preview locally

In VS Code, the Live Server extension works. Or from this folder:

```bash
powershell -ExecutionPolicy Bypass -File .claude/serve.ps1
```

Then open http://localhost:8080.

## Publish on GitHub Pages (free)

1. Create a public repo on GitHub named `<your-username>.github.io`.
2. Upload everything in this folder (or `git push` it) to the `main` branch.
3. In the repo, go to **Settings → Pages**, set the source to `main` / root.
4. After a minute, the site is live at `https://<your-username>.github.io/`.
   Submit that link on Canvas, and have a friend open it to confirm it works.
