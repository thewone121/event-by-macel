document.addEventListener("DOMContentLoaded", () => {
  renderInto("#featureGrid", FEATURED_EVENTS.map(featureCardHTML));
  renderInto("#serviceGridHome", SERVICES.slice(0, 4).map(serviceCardHTML));
  renderInto("#homeMasonry", GALLERY_IMAGES.slice(0, 8).map(masonryItemHTML));
  initLightbox("#homeMasonry .masonry-item", GALLERY_IMAGES.slice(0, 8));
  initTestimonialCarousel("#homeTestimonialCarousel", TESTIMONIALS.slice(0, 4));
  renderInto("#homeIgStrip", INSTAGRAM_PREVIEW.map(igItemHTML));
});
