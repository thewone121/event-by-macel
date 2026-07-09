/* =========================================================================
   EVENT BY MACEL — Shared site interactions
   No preloader — page is usable immediately; JS layers on progressive
   polish: header transition, reveals, counters, mobile menu, ripple.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });

  /* ---------- Header solid-on-scroll ---------- */
  const header = document.querySelector(".lux-header");
  if(header){
    const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive:true });
  }

  /* ---------- Mobile menu ---------- */
  const burger = document.querySelector(".lux-burger");
  const mobileMenu = document.querySelector(".lux-mobile-menu");
  function openMobileMenu(){
    mobileMenu.classList.add("open");
    mobileMenu.removeAttribute("aria-hidden");
    burger.setAttribute("aria-expanded", "true");
    const firstLink = mobileMenu.querySelector("a");
    if(firstLink) firstLink.focus();
  }
  function closeMobileMenu(){
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    burger.focus();
  }
  if(burger && mobileMenu){
    burger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    burger.addEventListener("click", () => {
      if(mobileMenu.classList.contains("open")) closeMobileMenu(); else openMobileMenu();
    });
    mobileMenu.querySelectorAll("a, .lux-mobile-close").forEach(el => el.addEventListener("click", closeMobileMenu));
    document.addEventListener("keydown", (e) => {
      if(e.key === "Escape" && mobileMenu.classList.contains("open")) closeMobileMenu();
    });
  }

  /* ---------- Mark active nav link ---------- */
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".lux-nav-group a, .lux-mobile-menu a").forEach(a => {
    if(a.getAttribute("href") === path) a.classList.add("active");
  });

  /* ---------- Reveal / mask-reveal (IntersectionObserver) ---------- */
  initReveals();

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll("[data-counter]");
  if(counters.length){
    const animateCounter = (el) => {
      const target = parseFloat(el.getAttribute("data-counter"));
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1600;
      const start = performance.now();
      function tick(now){
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = (target % 1 !== 0 ? val.toFixed(1) : Math.round(val)) + suffix;
        if(p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){ animateCounter(entry.target); cio.unobserve(entry.target); }
      });
    }, { threshold:0.5 });
    counters.forEach(el => cio.observe(el));
  }

  /* ---------- Button shimmer on hover (re-triggerable) ---------- */
  document.querySelectorAll(".lux-btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      const old = btn.querySelector(".shimmer");
      if(old) old.remove();
      const shimmer = document.createElement("span");
      shimmer.className = "shimmer";
      btn.appendChild(shimmer);
      setTimeout(() => shimmer.remove(), 950);
    });
  });

  /* ---------- Newsletter (front-end only) ---------- */
  document.querySelectorAll(".news-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type=email]");
      if(input && input.value){ showToast("You're on the list — thank you for subscribing."); form.reset(); }
    });
  });

  /* ---------- Parallax backgrounds (subtle) ---------- */
  const parallaxEls = document.querySelectorAll("[data-parallax]");
  if(parallaxEls.length){
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.15;
        el.style.transform = "translateY(" + (y * speed) + "px)";
      });
    }, { passive:true });
  }
});

/* ---------------- Toast ---------------- */
let luxToastTimer = null;
function showToast(message){
  let toast = document.querySelector(".lux-toast");
  if(!toast){
    toast = document.createElement("div");
    toast.className = "lux-toast";
    toast.innerHTML = '<span class="mark">&#10022;</span><span class="toast-msg"></span>';
    document.body.appendChild(toast);
  }
  toast.querySelector(".toast-msg").textContent = message;
  toast.classList.add("show");
  clearTimeout(luxToastTimer);
  luxToastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

/* ---------------- Reveal engine (reusable — call again after injecting
   dynamic content, e.g. from a page-specific render script) ---------------- */
let _revealIO = null;
function initReveals(){
  const revealEls = document.querySelectorAll(".reveal:not(.in), .reveal-stagger:not(.in), .mask-reveal:not(.in)");
  if(!revealEls.length) return;
  if(!("IntersectionObserver" in window)){
    revealEls.forEach(el => el.classList.add("in"));
    return;
  }
  if(!_revealIO){
    _revealIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("in");
          _revealIO.unobserve(entry.target);
        }
      });
    }, { threshold:0.16, rootMargin:"0px 0px -60px 0px" });
  }
  revealEls.forEach(el => _revealIO.observe(el));
}

// Safety net: automatically re-scan for newly injected reveal elements
// (covers content rendered by page-specific scripts after main.js's first
// pass). Disconnects after 6s — by then every page's initial render is long
// done, and later interactions (search, filters) re-render existing
// containers rather than introducing fresh .reveal elements, so watching
// the whole subtree indefinitely would just be wasted work.
if("MutationObserver" in window){
  document.addEventListener("DOMContentLoaded", () => {
    const mo = new MutationObserver(() => initReveals());
    mo.observe(document.body, { childList:true, subtree:true });
    setTimeout(() => mo.disconnect(), 6000);
  });
}
