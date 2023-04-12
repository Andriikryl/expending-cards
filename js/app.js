const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  console.log(activePanel);
  toggleAcordian(activePanel);
});

function toggleAcordian(panelToActive) {
  const buttons = panelToActive.parentElement.querySelectorAll("button");
  console.log(buttons);
  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", false);
  });
}
