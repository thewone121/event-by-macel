document.addEventListener("DOMContentLoaded", () => {
  renderInto("#serviceGridFull", SERVICES.map(serviceCardHTML));
});
