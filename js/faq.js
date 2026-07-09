document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      const row = btn.closest(".faq-row");
      const panel = row.querySelector(".faq-panel");
      const wasOpen = row.classList.contains("open");
      document.querySelectorAll(".faq-row.open").forEach(openRow => {
        openRow.classList.remove("open");
        openRow.querySelector(".faq-panel").style.maxHeight = null;
        openRow.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
      });
      if(!wasOpen){
        row.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
});
