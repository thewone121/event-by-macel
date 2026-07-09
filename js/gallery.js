document.addEventListener("DOMContentLoaded", () => {
  function render(filter){
    const items = filter === "all" ? GALLERY_IMAGES : GALLERY_IMAGES.filter(g => g.cat === filter);
    renderInto("#fullMasonry", items.map(masonryItemHTML));
    initLightbox("#fullMasonry .masonry-item", items);
  }
  render("all");

  document.querySelectorAll(".gallery-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".gallery-filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.getAttribute("data-filter"));
    });
  });
});
