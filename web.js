const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const reveals = document.querySelectorAll(".reveal");

function revealSection() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSection);

revealSection();
