```javascript
/* =====================================
   BUALUANG 101
   MAIN JAVASCRIPT
===================================== */


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);

});


/* =========================
   HEADER SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu() {

  menuButton.classList.toggle("active");
  mobileMenu.classList.toggle("open");

  document.body.classList.toggle("menu-open");

}

menuButton.addEventListener("click", toggleMenu);


/* Close menu when clicking links */

const mobileLinks =
  document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    menuButton.classList.remove("active");
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");

  });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {
  revealObserver.observe(element);
});


/* =========================
   SMOOTH ANCHOR SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetID =
      link.getAttribute("href");

    const target =
      document.querySelector(targetID);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =========================
   HERO PARALLAX
========================= */

const heroNumber =
  document.querySelector(".hero-number");

window.addEventListener("scroll", () => {

  if (!heroNumber) return;

  const scrollY = window.scrollY;

  if (scrollY < window.innerHeight) {

    heroNumber.style.transform =
      `translateY(${scrollY * 0.12}px)`;

  }

});


/* =========================
   ACTIVITY CARD TILT
========================= */

const cards =
  document.querySelectorAll(".activity-card");

cards.forEach(card => {

  card.addEventListener("mousemove", event => {

    if (window.innerWidth < 900) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -2;

    const rotateY =
      ((x - centerX) / centerX) * 2;

    card.style.transform =
      `perspective(900px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-8px)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform = "";

  });

});


/* =========================
   ACTIVE NAV
========================= */

const sections =
  document.querySelectorAll("section[id]");

const navLinks =
  document.querySelectorAll(".desktop-nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });


  navLinks.forEach(link => {

    link.classList.remove("active");

    const href =
      link.getAttribute("href");

    if (href === `#${current}`) {
      link.classList.add("active");
    }

  });

});


/* =========================
   KEYBOARD ESCAPE
========================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    menuButton.classList.remove("active");
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");

  }

});
```
