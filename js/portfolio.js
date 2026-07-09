document.addEventListener("DOMContentLoaded", () => {
  const html = PORTFOLIO_PROJECTS.map(p => (
    '<article class="case-study">' +
      '<div class="mask-reveal reveal"><img src="' + p.images[0] + '" alt="' + p.title.replace(/&amp;/g,"&") + ' — placeholder event photo" loading="lazy" width="700" height="875"></div>' +
      '<div class="reveal">' +
        '<div class="section-label"><span class="num">&#10022;</span><span class="rule"></span><span class="txt">' + p.category + '</span></div>' +
        '<h3 style="font-size:2rem;margin-bottom:14px">' + p.title + '</h3>' +
        '<p style="color:var(--charcoal-70)">' + p.desc + '</p>' +
        '<div class="meta">' +
          '<div><strong>' + p.guests + '</strong>Guests</div>' +
          '<div><strong>' + p.duration + '</strong>Planning Time</div>' +
          '<div><strong>' + p.budgetTier + '</strong>Tier</div>' +
          '<div><strong>' + p.location.split(",")[0] + '</strong>Location</div>' +
        '</div>' +
      '</div>' +
    '</article>'
  )).join("");
  document.getElementById("caseStudyList").innerHTML = html;

  initBeforeAfterSlider("#baSlider");
});
