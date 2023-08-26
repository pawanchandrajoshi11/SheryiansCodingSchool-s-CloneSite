const nav = document.querySelector("#nav-main");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.style.backgroundColor = "#fff"; // Change to your desired color
  } else {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});

// const navbar = document.getElementById("nav-main-overlay");
// let scrolled = false;

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {         //if scrolled
//     if (!scrolled) {
//       navbar.style.backgroundColor = "#fff"; // Change to your desired color
//       scrolled = true;
//     }
//   } else {
//     if (scrolled) {         //if not scrolled
//       navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";  //transparent
//       scrolled = false;
//     }
//   }
// });

// This code adds or removes the "overflow-hidden" class based on scroll behavior
window.addEventListener("scroll", () => {
  if (window.scrollY > -1) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});
