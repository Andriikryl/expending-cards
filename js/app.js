const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
});
