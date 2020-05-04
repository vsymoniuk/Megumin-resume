const wibratingElements = document.querySelectorAll(
  "p,h2,h3,h4,li,img,.name,.job,.divider"
);

explosionBtn.addEventListener("click", () => {
  audio.crossOrigin = "anonymous";
  audio.play();
  toggle();
  setTimeout(() => {
    toggle();
  }, 7200);
});

function toggle() {
  main.classList.toggle("explosion-gif");
  page.classList.toggle("page-wibro");
  Array.from(wibratingElements).forEach((element) => {
    element.classList.toggle("wibro");
  });
}