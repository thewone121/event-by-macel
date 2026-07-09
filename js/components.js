/* =========================================================================
   EVENT BY MACEL — Shared render helpers, lightbox, testimonial carousel
   ========================================================================= */

function renderInto(selector, htmlArray){
  const el = document.querySelector(selector);
  if(el) el.innerHTML = htmlArray.join("");
}

function featureCardHTML(e){
  return (
    '<div class="feature-card reveal">' +
      '<img src="' + e.image + '" alt="' + e.title.replace(/&amp;/g,"&") + ' — placeholder event photo" loading="lazy" width="700" height="860">' +
      '<span class="tag">' + e.tag + '</span>' +
      '<div class="info"><h3>' + e.title + '</h3><span>View the story &rarr;</span></div>' +
    '</div>'
  );
}

function serviceCardHTML(s){
  return (
    '<div class="service-card reveal">' +
      '<span class="idx">' + s.idx + '</span>' +
      '<h3>' + s.name + '</h3>' +
      '<p>' + s.desc + '</p>' +
      '<a href="contact.html" class="text-link">Enquire &rarr;</a>' +
    '</div>'
  );
}

function masonryItemHTML(item, index){
  const w = item.w || 800, h = item.h || 1000;
  return (
    '<figure class="masonry-item" data-cat="' + item.cat + '" data-idx="' + index + '">' +
      '<img src="' + item.src + '" alt="' + item.cat + ' event styling — placeholder photo" loading="lazy" width="' + w + '" height="' + h + '">' +
      '<div class="overlay"><span>View</span></div>' +
    '</figure>'
  );
}

function teamCardHTML(t){
  return (
    '<div class="team-card reveal">' +
      '<div class="photo"><img src="' + t.photo + '" alt="' + t.name + ' — placeholder team photo" loading="lazy" width="400" height="500"></div>' +
      '<h4>' + t.name + '</h4><span>' + t.role + '</span>' +
    '</div>'
  );
}

function igItemHTML(url){
  return '<a href="https://www.instagram.com/eventbymacelgh/" target="_blank" rel="noopener"><img src="' + url + '" alt="Event by Macel on Instagram — placeholder photo" loading="lazy" width="300" height="300"></a>';
}

function reviewCardHTML(t){
  return (
    '<div class="review-card">' +
      starsMarkup(t.rating) +
      '<p>&ldquo;' + t.quote + '&rdquo;</p>' +
      '<div class="t-who" style="justify-content:flex-start">' +
        '<img src="' + t.avatar + '" alt="' + t.name + '">' +
        '<div style="text-align:left"><strong>' + t.name + '</strong><span>' + t.role + '</span></div>' +
      '</div>' +
    '</div>'
  );
}

/* ---------------- Testimonial carousel ---------------- */
function initTestimonialCarousel(containerSelector, items){
  const container = document.querySelector(containerSelector);
  if(!container) return;
  const slidesHTML = items.map((t, i) => (
    '<div class="t-slide' + (i===0 ? " active" : "") + '" data-slide="' + i + '" role="group" aria-roledescription="slide" aria-label="' + (i+1) + ' of ' + items.length + '" ' + (i===0 ? "" : 'hidden') + '>' +
      '<span class="t-quote-mark" aria-hidden="true">&ldquo;</span>' +
      '<p class="quote">' + t.quote + '</p>' +
      starsMarkup(t.rating) +
      '<div class="t-who"><img src="' + t.avatar + '" alt="' + t.name + '"><div><strong>' + t.name + '</strong><span>' + t.role + '</span></div></div>' +
    '</div>'
  )).join("");
  const dotsHTML = items.map((_, i) => '<button type="button" data-dot="' + i + '" class="' + (i===0 ? "active" : "") + '" aria-label="Go to testimonial ' + (i+1) + '" aria-current="' + (i===0 ? "true" : "false") + '"></button>').join("");

  container.setAttribute("role", "region");
  container.setAttribute("aria-roledescription", "carousel");
  container.setAttribute("aria-label", "Client testimonials");
  container.innerHTML =
    '<div class="t-slides" aria-live="polite">' + slidesHTML + '</div>' +
    '<div class="t-controls">' +
      '<button type="button" class="t-arrow" id="tPrev" aria-label="Previous testimonial">&larr;</button>' +
      '<div class="t-dots">' + dotsHTML + '</div>' +
      '<button type="button" class="t-arrow" id="tNext" aria-label="Next testimonial">&rarr;</button>' +
    '</div>';

  let current = 0;
  const slides = container.querySelectorAll(".t-slide");
  const dots = container.querySelectorAll(".t-dots button");

  function goTo(i){
    current = (i + items.length) % items.length;
    slides.forEach((s, idx) => {
      const isActive = idx === current;
      s.classList.toggle("active", isActive);
      if(isActive) s.removeAttribute("hidden"); else s.setAttribute("hidden", "");
    });
    dots.forEach((d, idx) => {
      const isActive = idx === current;
      d.classList.toggle("active", isActive);
      d.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }
  container.querySelector("#tPrev").addEventListener("click", () => goTo(current - 1));
  container.querySelector("#tNext").addEventListener("click", () => goTo(current + 1));
  dots.forEach((d, idx) => d.addEventListener("click", () => goTo(idx)));

  let autoTimer = setInterval(() => goTo(current + 1), 6500);
  container.addEventListener("mouseenter", () => clearInterval(autoTimer));
  container.addEventListener("mouseleave", () => { autoTimer = setInterval(() => goTo(current + 1), 6500); });
}

/* ---------------- Lightbox ---------------- */
function initLightbox(triggerSelector, images){
  let current = 0;
  let lastFocused = null;
  let lightbox = document.querySelector(".lightbox");
  if(!lightbox){
    lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Image viewer");
    lightbox.innerHTML =
      '<button class="lightbox-close" aria-label="Close">&times;</button>' +
      '<button class="lightbox-prev" aria-label="Previous image">&larr;</button>' +
      '<img src="" alt="">' +
      '<button class="lightbox-next" aria-label="Next image">&rarr;</button>' +
      '<div class="lightbox-caption"></div>';
    document.body.appendChild(lightbox);
  }
  const imgEl = lightbox.querySelector("img");
  const captionEl = lightbox.querySelector(".lightbox-caption");

  function open(i, triggerEl){
    current = i;
    imgEl.src = images[current].src;
    imgEl.alt = (images[current].cat || "Event") + " — placeholder photo, image " + (current + 1) + " of " + images.length;
    captionEl.textContent = images[current].cat || "";
    if(triggerEl) lastFocused = triggerEl;
    lightbox.classList.add("show");
    lightbox.querySelector(".lightbox-close").focus();
  }
  function close(){
    lightbox.classList.remove("show");
    if(lastFocused){ lastFocused.focus(); lastFocused = null; }
  }
  function next(){ open((current + 1) % images.length); }
  function prev(){ open((current - 1 + images.length) % images.length); }

  document.querySelectorAll(triggerSelector).forEach(el => {
    el.addEventListener("click", () => open(Number(el.getAttribute("data-idx")), el));
  });
  lightbox.querySelector(".lightbox-close").addEventListener("click", close);
  lightbox.querySelector(".lightbox-next").addEventListener("click", next);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", prev);
  lightbox.addEventListener("click", (e) => { if(e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => {
    if(!lightbox.classList.contains("show")) return;
    if(e.key === "Escape") close();
    if(e.key === "ArrowRight") next();
    if(e.key === "ArrowLeft") prev();
  });
}

/* ---------------- Before / after drag slider ---------------- */
function initBeforeAfterSlider(selector){
  document.querySelectorAll(selector).forEach(slider => {
    const afterImg = slider.querySelector(".after-img");
    const handle = slider.querySelector(".handle");
    let dragging = false;

    function setPosition(clientX){
      const rect = slider.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      afterImg.style.clipPath = "inset(0 0 0 " + pct + "%)";
      handle.style.left = pct + "%";
    }
    slider.addEventListener("mousedown", () => dragging = true);
    window.addEventListener("mouseup", () => dragging = false);
    window.addEventListener("mousemove", (e) => { if(dragging) setPosition(e.clientX); });
    slider.addEventListener("touchstart", () => dragging = true, { passive:true });
    window.addEventListener("touchend", () => dragging = false);
    slider.addEventListener("touchmove", (e) => { if(dragging) setPosition(e.touches[0].clientX); }, { passive:true });
    slider.addEventListener("click", (e) => setPosition(e.clientX));
  });
}
