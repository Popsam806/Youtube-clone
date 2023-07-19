// Nav Toggle
let menu = document.querySelector(".menu");
let sideNav = document.querySelectorAll(".left-side .cont");
let colapseNav = document.querySelector(".collapse");

menu.addEventListener("click", () => {
  sideNav.forEach((side) => {
    side.classList.toggle("show_toggle");
  });
  colapseNav.classList.toggle("show_toggle");
});




let moreBtn = document.querySelectorAll(".more_vert");

moreBtn.forEach((btn) => {
  let options = btn.nextElementSibling;
  let allOptions = document.querySelectorAll(".options");

  btn.addEventListener("mousedown", () => {
    allOptions.forEach((option) => {});
  });

  btn.addEventListener("click", (e) => {
    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    options.style.top = btnTop + "px";
    options.style.left = btnLeft + "px";

    // allOptions.forEach(option => {
    //     option.classList.add('show_toggle')
    // })

    options.classList.toggle("show_toggle");
  });
});


