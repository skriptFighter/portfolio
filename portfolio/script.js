const hiddenElements = document.querySelectorAll(".hidden");
const hiddenLeft = document.querySelectorAll(".hidden-left");
const hiddenRight = document.querySelectorAll(".hidden-right");
const hiddenTop = document.querySelectorAll(".hidden-top");
const highlight = document.querySelectorAll(".paragraph--span");
const removeGrayScale = document.querySelectorAll(".img");

const typed = new Typed(".multi-text", {
  strings: ["Front End Developpement", "Gayming", "Graphic Design"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-l");
    } else {
      entry.target.classList.remove("show-l");
    }
  });
});

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-r");
    } else {
      entry.target.classList.remove("show-r");
    }
  });
});

const observerTop = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-t");
    } else {
      entry.target.classList.remove("show-t");
    }
  });
});

const observerHighlight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("highlight");
    } else {
      entry.target.classList.remove("highlight");
    }
  });
});

const observerGrayScale = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("removeGrayScale");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));
hiddenLeft.forEach((el) => observerLeft.observe(el));
hiddenRight.forEach((el) => observerRight.observe(el));
hiddenTop.forEach((el) => observerTop.observe(el));
highlight.forEach((el) => observerHighlight.observe(el));
removeGrayScale.forEach((el) => observerGrayScale.observe(el));
