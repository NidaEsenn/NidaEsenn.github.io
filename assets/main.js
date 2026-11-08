(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- generated cover art (theme-aware via CSS vars) ---------- */
  function rng(seed) { let s = 0; for (const c of seed) s = (s * 31 + c.charCodeAt(0)) >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
  const A = "var(--accent)", B = "var(--accent-2)", L = "var(--line)", M = "var(--muted)";
  const bg = id => `<defs><linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--card-2)"/><stop offset="1" stop-color="var(--bg-2)"/></linearGradient>
    <pattern id="p${id}" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="${L}" stroke-width=".6"/></pattern></defs>
    <rect width="400" height="250" fill="url(#g${id})"/><rect width="400" height="250" fill="url(#p${id})" opacity=".55"/>`;

  const ART = {
    fold: id => `${bg(id)}
      <path d="M40 210 L95 150 L150 120" stroke="${A}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M360 210 L305 150 L250 120" stroke="${B}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="95" cy="150" r="7" fill="var(--bg)" stroke="${A}" stroke-width="3"/><circle cx="305" cy="150" r="7" fill="var(--bg)" stroke="${B}" stroke-width="3"/>
      <path d="M150 120 l14 -10 M150 120 l16 2" stroke="${A}" stroke-width="4" stroke-linecap="round"/>
      <path d="M250 120 l-14 -10 M250 120 l-16 2" stroke="${B}" stroke-width="4" stroke-linecap="round"/>
      <path d="M160 128 C190 112 210 144 240 128 L250 190 C220 204 180 178 150 194 Z" fill="${A}" opacity=".18" stroke="${A}" stroke-width="2"/>
      <path d="M200 124 L200 192" stroke="${A}" stroke-width="1.5" stroke-dasharray="5 5"/>
      <text x="200" y="60" text-anchor="middle" font-family="JetBrains Mono" font-size="14" fill="${M}">π₀.₅ · action chunk →</text>`,
    sim2real: id => `${bg(id)}
      <g stroke="${A}" stroke-width="1.6" fill="none" opacity=".9">
        <path d="M70 150 l50 -25 l50 25 l-50 25z M70 150 v50 l50 25 v-50 M170 150 v50 l-50 25"/>
        <path d="M70 150 l50 25 M120 125 v50" stroke-dasharray="3 4" opacity=".5"/></g>
      <text x="120" y="80" text-anchor="middle" font-family="JetBrains Mono" font-size="13" fill="${M}">sim</text>
      <path d="M190 160 h40" stroke="${M}" stroke-width="2" stroke-dasharray="4 5"/><path d="M228 153 l10 7 -10 7" fill="none" stroke="${M}" stroke-width="2"/>
      <g><path d="M250 150 l50 -25 l50 25 l-50 25z" fill="${B}" opacity=".55"/><path d="M250 150 v50 l50 25 v-50z" fill="${B}" opacity=".35"/><path d="M350 150 v50 l-50 25 v-50z" fill="${B}" opacity=".22"/></g>
      <text x="300" y="80" text-anchor="middle" font-family="JetBrains Mono" font-size="13" fill="${M}">real</text>
      <rect x="276" y="96" width="48" height="20" rx="4" fill="none" stroke="${A}" stroke-width="1.5"/><text x="300" y="110" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="${A}">IoU</text>`,
    data: id => { const r = rng(id); let bars = "";
      for (let i = 0; i < 46; i++) { const h = 20 + r() * 90, x = 22 + i * 7.8, bad = [9, 10, 23, 31, 32, 33].includes(i);
        bars += `<rect x="${x}" y="${170 - h}" width="5" height="${h}" rx="2" fill="${bad ? B : A}" opacity="${bad ? .95 : .55}"/>`; }
      return `${bg(id)}${bars}<line x1="20" y1="172" x2="380" y2="172" stroke="${L}" stroke-width="2"/>
      <path d="M30 205 C90 185 130 225 200 205 S310 185 370 205" stroke="${A}" stroke-width="2.5" fill="none"/>
      <path d="M30 205 C90 185 130 225 200 205 S310 185 370 205" stroke="${B}" stroke-width="2.5" fill="none" transform="translate(14 0)" opacity=".8"/>
      <text x="380" y="40" text-anchor="end" font-family="JetBrains Mono" font-size="13" fill="${M}">episode audit · lag 108 ms</text>`; },
    marl: id => { const r = rng(id); let s = `${bg(id)}`;
      for (let k = 1; k <= 5; k++) s += `<circle cx="285" cy="95" r="${k * 26}" fill="none" stroke="${B}" stroke-opacity="${.5 - k * .08}" stroke-width="1.5"/>`;
      s += `<circle cx="285" cy="95" r="8" fill="${B}"/>`;
      [[60, 200], [110, 215], [70, 140]].forEach(([x, y], i) => { const tx = 200 + i * 25, ty = 130 + i * 18;
        s += `<path d="M${x} ${y} Q ${(x + tx) / 2} ${y - 60 - r() * 30} ${tx} ${ty}" stroke="${A}" stroke-width="2" fill="none" stroke-dasharray="5 5"/>
        <circle cx="${tx}" cy="${ty}" r="9" fill="var(--bg)" stroke="${A}" stroke-width="3"/>
        <rect x="${tx - 14}" y="${ty + 14}" width="28" height="4" rx="2" fill="${L}"/><rect x="${tx - 14}" y="${ty + 14}" width="${8 + i * 7}" height="4" rx="2" fill="${A}"/>`; });
      return s + `<text x="22" y="236" font-family="JetBrains Mono" font-size="13" fill="${M}">dose budget · λᵢ per robot</text>`; },
    tracking: id => { const r = rng(id); let s = `${bg(id)}`;
      for (let i = 0; i < 26; i++) { const x = 20 + r() * 350, y = 40 + r() * 170, w = 16 + r() * 8, h = w * 2.1, c = i % 3 ? A : B;
        s += `<path d="M${x + w / 2 - 30 * r()} ${y + h} Q ${x} ${y + h + 6} ${x + w / 2} ${y + h}" stroke="${c}" stroke-opacity=".35" fill="none"/>
        <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}" fill-opacity=".08" stroke="${c}" stroke-width="1.4" rx="2"/>
        <text x="${x}" y="${y - 3}" font-family="JetBrains Mono" font-size="8" fill="${c}">${(i * 7 + 3) % 97}</text>`; }
      return s; },
    llm: id => `${bg(id)}
      <rect x="40" y="40" width="220" height="170" rx="12" fill="var(--bg)" stroke="${L}"/>
      <circle cx="58" cy="56" r="4" fill="${B}"/><circle cx="72" cy="56" r="4" fill="${A}"/><circle cx="86" cy="56" r="4" fill="${M}"/>
      <g font-family="JetBrains Mono" font-size="11.5"><text x="56" y="88" fill="${M}">{</text>
      <text x="70" y="108" fill="${A}">"action":</text><text x="140" y="108" fill="${B}">"nav2_reroute"</text>
      <text x="70" y="128" fill="${A}">"fault":</text><text x="128" y="128" fill="${B}">"obstacle"</text>
      <text x="70" y="148" fill="${A}">"cmd_vel":</text><text x="146" y="148" fill="${B}">0.0</text>
      <text x="56" y="168" fill="${M}">}  ✓ schema</text></g>
      <rect x="290" y="130" width="70" height="44" rx="10" fill="${A}" opacity=".2" stroke="${A}" stroke-width="2"/>
      <circle cx="306" cy="184" r="9" fill="var(--bg)" stroke="${A}" stroke-width="3"/><circle cx="344" cy="184" r="9" fill="var(--bg)" stroke="${A}" stroke-width="3"/>
      <path d="M325 130 v-24 m-20 0 h40" stroke="${A}" stroke-width="2"/><path d="M265 125 h20" stroke="${M}" stroke-dasharray="3 4" stroke-width="2"/>`,
    crash: id => `${bg(id)}
      <path d="M150 250 L195 90 h10 L250 250" fill="${L}" opacity=".5"/><path d="M200 100 v150" stroke="${M}" stroke-width="2" stroke-dasharray="10 12"/>
      <path d="M0 110 H400" stroke="${L}"/>
      <rect x="165" y="150" width="46" height="34" rx="6" fill="${A}" opacity=".3" stroke="${A}" stroke-width="2"/>
      <rect x="200" y="125" width="38" height="26" rx="5" fill="${B}" opacity=".35" stroke="${B}" stroke-width="2" transform="rotate(18 219 138)"/>
      <path d="M205 150 l8 -14 l4 10 l10 -8" stroke="#fbbf24" stroke-width="2.5" fill="none"/>
      <rect x="230" y="24" width="150" height="26" rx="6" fill="var(--bg)" stroke="${L}"/><text x="240" y="41" font-family="JetBrains Mono" font-size="11" fill="${M}">report → scene → video</text>`,
    agents: id => { let s = `${bg(id)}`; const hub = [200, 125];
      const nodes = [[80, 60, "GitHub"], [320, 60, "CloudWatch"], [70, 195, "Review"], [330, 195, "Health"]];
      nodes.forEach(([x, y, t], i) => { s += `<path d="M${hub[0]} ${hub[1]} L${x} ${y}" stroke="${i % 2 ? B : A}" stroke-width="2" stroke-dasharray="6 5"/>
        <rect x="${x - 44}" y="${y - 16}" width="88" height="32" rx="16" fill="var(--bg)" stroke="${i % 2 ? B : A}" stroke-width="2"/>
        <text x="${x}" y="${y + 4}" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="var(--text)">${t}</text>`; });
      return s + `<circle cx="200" cy="125" r="32" fill="${A}" opacity=".2" stroke="${A}" stroke-width="2.5"/><text x="200" y="130" text-anchor="middle" font-family="JetBrains Mono" font-size="12" fill="var(--text)">LangGraph</text>
      <rect x="168" y="196" width="64" height="24" rx="6" fill="${B}" opacity=".25" stroke="${B}"/><text x="200" y="212" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="var(--text)">approve?</text>`; },
    movie: id => { let s = `${bg(id)}`;
      [[-14, 120, B], [0, 150, A], [14, 180, B]].forEach(([rot, x, c], i) => {
        s += `<g transform="rotate(${rot} ${x + 45} 200)"><rect x="${x}" y="50" width="90" height="135" rx="10" fill="var(--bg)" stroke="${c}" stroke-width="2"/>
        <rect x="${x + 10}" y="60" width="70" height="80" rx="6" fill="${c}" opacity=".22"/><rect x="${x + 10}" y="150" width="50" height="6" rx="3" fill="${L}"/><rect x="${x + 10}" y="162" width="34" height="6" rx="3" fill="${L}"/></g>`; });
      return s + `<circle cx="95" cy="120" r="20" fill="none" stroke="#f87171" stroke-width="3"/><path d="M87 112 l16 16 m0 -16 l-16 16" stroke="#f87171" stroke-width="3"/>
      <circle cx="320" cy="120" r="20" fill="none" stroke="#34d399" stroke-width="3"/><path d="M310 120 l7 7 l13 -14" fill="none" stroke="#34d399" stroke-width="3"/>`; },
    rag: id => { let s = `${bg(id)}`;
      [[60, 60], [90, 45], [120, 30]].forEach(([x, y], i) => { s += `<rect x="${x}" y="${y}" width="120" height="160" rx="8" fill="var(--bg)" stroke="${L}" stroke-width="1.5"/>`;
        for (let k = 0; k < 9; k++) s += `<rect x="${x + 14}" y="${y + 20 + k * 14}" width="${60 + ((k * 37 + i * 13) % 40)}" height="5" rx="2.5" fill="${i === 2 && (k === 3 || k === 4) ? A : L}"/>`; });
      return s + `<path d="M250 110 h30" stroke="${M}" stroke-width="2" stroke-dasharray="4 5"/>
      <rect x="285" y="80" width="90" height="62" rx="10" fill="${A}" opacity=".18" stroke="${A}" stroke-width="2"/>
      <text x="330" y="108" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="var(--text)">answer</text><text x="330" y="126" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="${A}">[p. 214]</text>`; }
  };
  const cover = p => p.img
    ? `<img src="${p.img}" alt="${esc(p.title)} preview" loading="lazy">`
    : `<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(p.title)} illustration">${ART[p.art](p.id)}</svg>`;

  /* ---------- project grid ---------- */
  const grid = $("#projectGrid");
  grid.innerHTML = PROJECTS.map(p => `
    <button class="card proj reveal" data-id="${p.id}" data-cat="${p.cat.join(" ")}">
      <div class="cover">${cover(p)}<span class="badge">${esc(p.badge)}</span></div>
      <div class="proj-body">
        <h4>${esc(p.title)}</h4>
        <p>${esc(p.sub)}</p>
        <div class="tags">${p.tags.slice(0, 4).map(t => `<span>${esc(t)}</span>`).join("")}</div>
      </div>
    </button>`).join("");

  document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(x => x.classList.toggle("active", x === b));
    const f = b.dataset.filter;
    grid.querySelectorAll(".proj").forEach(c => c.classList.toggle("hide", f !== "all" && !c.dataset.cat.split(" ").includes(f)));
  }));

  /* ---------- modal ---------- */
  const modal = $("#modal"), body = $("#modalBody");
  function openProject(id) {
    const p = PROJECTS.find(x => x.id === id); if (!p) return;
    body.innerHTML = `
      <div class="m-cover">${cover(p)}</div>
      <div class="m-body">
        <h3>${esc(p.title)}</h3>
        <p class="m-sub">${esc(p.sub)}</p>
        ${p.stats?.length ? `<div class="m-stats">${p.stats.map(([b, s]) => `<div><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join("")}</div>` : ""}
        ${p.body.map(t => `<p>${esc(t)}</p>`).join("")}
        ${p.gallery ? `<div class="m-gallery">${p.gallery.map(g => `<img src="${g}" alt="" loading="lazy">`).join("")}</div>` : ""}
        <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
        ${p.links.length ? `<div class="m-links">${p.links.map(([t, u], i) => `<a class="btn ${i ? "" : "primary"}" href="${u}" target="_blank" rel="noopener">${esc(t)} ↗</a>`).join("")}</div>` : ""}
      </div>`;
    modal.showModal(); modal.scrollTop = 0;
    history.replaceState(null, "", "#project-" + id);
  }
  grid.addEventListener("click", e => { const c = e.target.closest(".proj"); if (c) openProject(c.dataset.id); });
  $("#modalClose").addEventListener("click", () => modal.close());
  modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });
  modal.addEventListener("close", () => { if (location.hash.startsWith("#project-")) history.replaceState(null, "", "#projects"); });
  if (location.hash.startsWith("#project-")) openProject(location.hash.slice(9));

  /* ---------- theme, menu, nav highlight, reveal ---------- */
  $("#themeBtn").addEventListener("click", () => {
    const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = t; try { localStorage.setItem("theme", t); } catch (e) {}
  });
  const links = $("#navlinks");
  $("#menuBtn").addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", e => { if (e.target.tagName === "A") links.classList.remove("open"); });

  const navA = [...links.querySelectorAll("a")];
  const spy = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) navA.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  navA.forEach(a => { const s = document.querySelector(a.getAttribute("href")); if (s) spy.observe(s); });

  document.querySelectorAll(".section-title, .stats > div, .timeline > li, .skills .card, .about-grid > *").forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  $("#year").textContent = new Date().getFullYear();
})();
