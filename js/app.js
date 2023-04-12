const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  console.log(activePanel);
  toggleAcordian(activePanel);
});

function toggleAcordian(panelToActive) {
  const buttons = panelToActive.parentElement.querySelectorAll("button");
  const contents =
    panelToActive.parentElement.querySelectorAll(".accordion-content");
  console.log(buttons);
  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", false);
  });

  contents.forEach((content) => {
    content.setAttribute("aria-hidden", true);
  });

  panelToActive.querySelector("button").setAttribute("aria-expanded", true);
  panelToActive
    .querySelector(".accordion-content")
    .setAttribute("aria-hidden", false);
}
