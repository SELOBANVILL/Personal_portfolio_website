/* Global interactions: theme toggle, mobile menu, progress animations, modal */
(() => {
  // quick helpers
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  // YEAR
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // THEME TOGGLE (persist)
  const themeKey = "portfolio-theme";
  const applyTheme = (theme) => {
    document.body.classList.toggle("theme-dark", theme === "dark");
    localStorage.setItem(themeKey, theme);
  };
  const initTheme = () => {
    const saved = localStorage.getItem(themeKey) || "dark";
    applyTheme(saved);
  };
  initTheme();
  $$("#theme-toggle, #theme-toggle-2, #theme-toggle-3, #theme-toggle-4, #theme-toggle-5, #theme-toggle-6").forEach(btn=>{
    btn?.addEventListener("click", () => {
      const cur = document.body.classList.contains("theme-dark") ? "dark" : "light";
      applyTheme(cur === "dark" ? "light" : "dark");
    });
  });

  // MOBILE menu toggle (simple)
  $$("#hamburger, #hamburger-2, #hamburger-3, #hamburger-4, #hamburger-5, #hamburger-6").forEach(h=>{
    h?.addEventListener("click", (e)=>{
      const nav = document.querySelector(".nav-list");
      if (!nav) return;
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.background = "transparent";
      nav.style.position = "absolute";
      nav.style.right = "18px";
      nav.style.top = "64px";
      nav.style.padding = "12px";
      nav.style.borderRadius = "8px";
      nav.style.gap = "8px";
    });
  });

  // stat counters (count up)
  const animateCounters = () => {
    $$(".stat-num").forEach(el=>{
      const target = +el.dataset.target || 0;
      let start = 0;
      const duration = 900;
      const step = Math.ceil(target / (duration / 16));
      const id = setInterval(() => {
        start += step;
        if (start >= target) { el.textContent = target; clearInterval(id); }
        else el.textContent = start;
      }, 16);
    });
  };

  // skill bars
  const animateSkillBars = () => {
    $$(".skill-bar").forEach(bar => {
      const p = +bar.dataset.percent || 0;
      const inner = bar.querySelector("div");
      setTimeout(()=> inner.style.width = `${p}%`, 120);
    });
  };

  // run animations when in viewport once
  const onVisible = (selector, cb) => {
    const observed = $$(selector);
    if (!observed.length) return;
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => {
        if (e.isIntersecting) { cb(e.target); o.disconnect(); }
      });
    }, {threshold: 0.2});
    observed.forEach(el => obs.observe(el));
  };

  onVisible(".meta-widgets", animateCounters);
  onVisible(".skill-widgets", animateSkillBars);

  // Project modal open
  $$(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const title = card.dataset.title || card.querySelector("h3")?.innerText;
      const desc = card.dataset.desc || card.querySelector("p")?.innerText;
      const demo = card.dataset.demo || "#";
      $("#modal-title").textContent = title;
      $("#modal-desc").textContent = desc;
      $("#modal-demo").setAttribute("href", demo);
      $("#modal-git").setAttribute("href", "#");
      $("#modal").classList.add("show");
      $("#modal").setAttribute("aria-hidden", "false");
    });
  });

  $("#modal-close")?.addEventListener("click", () => {
    $("#modal").classList.remove("show");
    $("#modal").setAttribute("aria-hidden", "true");
  });

  // close modal on outside click
  $("#modal")?.addEventListener("click", (e) => {
    if (e.target === $("#modal")) {
      $("#modal").classList.remove("show");
      $("#modal").setAttribute("aria-hidden", "true");
    }
  });

  // smooth fade navigation (single page feel)
  document.querySelectorAll("a[href]").forEach(a => {
    if (a.getAttribute("href").startsWith("#")) return;
    a.addEventListener("click", (ev) => {
      // small fade-out then navigate
      ev.preventDefault();
      const href = a.getAttribute("href");
      document.getElementById("page")?.classList.add("fade-out");
      setTimeout(()=> window.location = href, 250);
    });
  });

  // small CSS hook for fade out
  const style = document.createElement("style");
  style.innerHTML = `.fade-out{opacity:0;transform:translateY(6px);transition:opacity .22s,var(--sharp);}`;
  document.head.appendChild(style);
})();
