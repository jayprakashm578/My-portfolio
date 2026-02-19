// Smooth Scroll -->
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  

//   Section Reveal -->
 
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  sections.forEach(sec => observer.observe(sec));
  

const navLinks = document.querySelectorAll(".nav-links a");
const sectionsAll = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sectionsAll.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.style.color = "#e5e7eb";
    if (link.getAttribute("href").includes(current)) {
      link.style.color = "#38bdf8";
    }
  });
});


