const wibratingElements = document.querySelectorAll(
  "p,h2,h3,h4,li,img,.name,.job,.divider"
);

explosionBtn.addEventListener("click", () => {
    new Audio('../sound/explosion.mp3').play()
  toggle();
  setTimeout(() => {
    toggle();
  }, 8100);
});

function toggle() {
   main.classList.toggle('megumin')
  page.classList.toggle("page-wibro");
  Array.from(wibratingElements).forEach((element) => {
    element.classList.toggle("wibro");
  });
}
