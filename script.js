const nav = document.querySelector("#nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.style.backgroundColor = "#fff"; // Change to your desired color
  } else {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
