document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");
  if(!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Thank you — we'll be in touch within 48 hours to schedule your discovery call.");
    form.reset();
  });
});
