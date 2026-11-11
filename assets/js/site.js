/* ==========================================================================
   site.js — shared header, footer, and navigation for every page.

   Each page sets <body data-page="..."> and includes empty
   <header id="site-header"> and <footer id="site-footer"> placeholders.
   This script fills them in so the nav and footer live in ONE place.
   To add a page: add an entry to PAGES below.
   ========================================================================== */

(function () {
  "use strict";

  const PAGES = [
    { id: "home",      href: "index.html",     label: "Home",     title: "Top level" },
    { id: "about",     href: "about.html",     label: "About",    title: "About me" },
    { id: "projects",  href: "projects.html",  label: "Projects", title: "Projects" },
    { id: "discovery", href: "discovery.html", label: null,       title: "Discovery project", parent: "projects" },
    { id: "goals",     href: "goals.html",     label: "Goals",    title: "Career goals" },
    { id: "resume",    href: "resume.html",    label: "Resume",   title: "Resume" },
    { id: "contact",   href: "contact.html",   label: "Contact",  title: "Contact" },
  ];

  const LINKS = {
    email: "raunak.singh.inventor@gmail.com",
    linkedin: "https://www.linkedin.com/in/raunak-singh-67415631a/",
    hackster: "https://www.hackster.io/Raunak-Singh-Inventor",
  };

  const REVISION = "1.0";
  const REV_DATE = "2026-11";

  const pageId = document.body.dataset.page || "home";
  const sheetIndex = Math.max(0, PAGES.findIndex((p) => p.id === pageId));
  const page = PAGES[sheetIndex];
  const activeNav = page.parent || page.id;

  // Small IC package used as the logo
  const LOGO_SVG = `
    <svg viewBox="0 0 44 44" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.6">
        <rect x="9" y="6" width="26" height="32" fill="#fff"/>
        <path d="M3 12h6M3 19h6M3 26h6M3 33h6M35 12h6M35 19h6M35 26h6M35 33h6"/>
        <circle cx="14" cy="11" r="1.6"/>
      </g>
      <text x="22" y="27" text-anchor="middle" font-family="IBM Plex Mono, monospace"
            font-size="11" font-weight="600" fill="currentColor">RS</text>
    </svg>`;

  function buildHeader() {
    const el = document.getElementById("site-header");
    if (!el) return;

    const navItems = PAGES.filter((p) => p.label)
      .map((p) => {
        const current = p.id === activeNav ? ' aria-current="page"' : "";
        return `<li><a class="net" href="${p.href}"${current}><span>${p.label}</span></a></li>`;
      })
      .join("");

    el.className = "site-header";
    el.innerHTML = `
      <a class="brand" href="index.html" aria-label="Raunak Singh, home">
        ${LOGO_SVG}
        <span class="brand-text">
          <span class="brand-name">Raunak Singh</span>
          <span class="brand-sub">CMPE @ GEORGIA TECH</span>
        </span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">MENU</button>
      <nav class="site-nav" id="site-nav" aria-label="Main">
        <ul>${navItems}</ul>
      </nav>`;

    // Zone ruler above the header, like the edge of a drawing sheet
    const zones = document.createElement("div");
    zones.className = "zones";
    zones.setAttribute("aria-hidden", "true");
    zones.innerHTML = [1, 2, 3, 4, 5, 6].map((n) => `<span>${n}</span>`).join("");
    el.before(zones);

    const toggle = el.querySelector(".nav-toggle");
    const nav = el.querySelector(".site-nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "CLOSE" : "MENU";
    });
  }

  function buildFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;

    el.className = "site-footer";
    el.innerHTML = `
      <div class="footer-contact">
        <a href="mailto:${LINKS.email}">${LINKS.email}</a>
        <a href="${LINKS.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        <a href="${LINKS.hackster}" target="_blank" rel="noopener">Hackster.io</a>
      </div>
      <dl class="title-block" aria-label="Page information">
        <div><dt>TITLE</dt><dd>${page.title}</dd></div>
        <div><dt>DRAWN BY</dt><dd>R. Singh</dd></div>
        <div><dt>SHEET</dt><dd>${sheetIndex + 1} of ${PAGES.length}</dd></div>
        <div><dt>REV</dt><dd>${REVISION} · ${REV_DATE}</dd></div>
      </dl>`;
  }

  buildHeader();
  buildFooter();
})();
