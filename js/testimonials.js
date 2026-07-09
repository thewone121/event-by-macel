document.addEventListener("DOMContentLoaded", () => {
  initTestimonialCarousel("#fullTestimonialCarousel", TESTIMONIALS);
  renderInto("#reviewGrid", TESTIMONIALS.map(reviewCardHTML));
});
