/* ==========================================================================
   projects.js — renders project cards from window.PROJECTS.

   Any element with  data-projects="all"       gets every project.
   Any element with  data-projects="featured"  gets only featured ones.
   Reference designators (U1, U2 ...) are assigned automatically.
   ========================================================================== */

(function () {
  "use strict";

  const projects = window.PROJECTS || [];

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Projects without a photo get a small block-diagram drawn from their tags.
  function blockDiagram(p) {
    const blocks = p.tags.slice(0, 3);
    const w = 400, h = 300, bw = 100, bh = 56, y = h / 2 - bh / 2;
    const gap = (w - blocks.length * bw) / (blocks.length + 1);
    let x = gap;
    let out = "";
    blocks.forEach((t, i) => {
      out += `<rect class="body" x="${x}" y="${y}" width="${bw}" height="${bh}"/>`;
      out += `<text class="des" x="${x}" y="${y - 8}">U${i + 1}</text>`;
      out += `<text class="lbl" x="${x + bw / 2}" y="${y + bh / 2 + 4}" text-anchor="middle" font-size="10">${escapeHtml(t.length > 13 ? t.slice(0, 12) + "…" : t)}</text>`;
      if (i < blocks.length - 1) {
        out += `<path class="w" d="M${x + bw} ${h / 2} h${gap}"/>`;
        out += `<circle class="fill" cx="${x + bw + gap / 2}" cy="${h / 2}" r="3"/>`;
      }
      x += bw + gap;
    });
    // ground under the middle block
    const gx = w / 2;
    out += `<path class="w" d="M${gx} ${y + bh} v30 M${gx - 14} ${y + bh + 30} h28 M${gx - 9} ${y + bh + 36} h18 M${gx - 4} ${y + bh + 42} h8"/>`;
    return `<svg class="schematic" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeHtml(p.alt)}">${out}</svg>`;
  }

  function card(p, index) {
    const ref = `U${index + 1}`;
    const media = p.image
      ? `<img src="${p.image}" alt="${escapeHtml(p.alt)}" loading="lazy" width="800" height="600">`
      : blockDiagram(p);
    const meta = [p.year].filter(Boolean).join(" · ");
    const tags = p.tags.map((t) => `<li>${escapeHtml(t)}</li>`).join("");
    const award = p.award ? `<span class="badge">${escapeHtml(p.award)}</span>` : "";
    const link = p.link
      ? `<a class="chip-link" href="${p.link}" target="_blank" rel="noopener">${escapeHtml(p.linkLabel || "Read more")} &rarr;</a>`
      : "";

    return `
      <article class="chip" id="${p.id}">
        <span class="chip-ref">${ref}</span>
        <div class="chip-media">${media}</div>
        <div class="chip-body">
          ${meta ? `<div class="chip-meta">${meta}</div>` : ""}
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.summary)}</p>
          <div class="chip-foot">
            <ul class="tags">${tags}</ul>
            ${award}
            ${link}
          </div>
        </div>
      </article>`;
  }

  document.querySelectorAll("[data-projects]").forEach((el) => {
    const list = el.dataset.projects === "featured" ? projects.filter((p) => p.featured) : projects;
    el.innerHTML = list.map(card).join("");
  });
})();
