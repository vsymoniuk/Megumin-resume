const wibratingElements = document.querySelectorAll(
  "p,h2,h3,h4,li,img,.name,.job,.divider"
);

explosionBtn.addEventListener("click", () => {


  const video = document.createElement("video");
  video.setAttribute("src", "../video/explosion.mp4");

  video.play();

  toggle();
  setTimeout(() => {
    toggle();
  }, 7200);
});

function toggle() {
  main.classList.toggle("megumin");
  page.classList.toggle("page-wibro");
  Array.from(wibratingElements).forEach((element) => {
    element.classList.toggle("wibro");
  });
}
