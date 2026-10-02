/* =====================================
   BUALUANG 101
   MAIN JAVASCRIPT
   SAFE VERSION
===================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ELEMENTS
  ========================= */

  const header = document.getElementById("header");
  const loader = document.getElementById("loader");

  const menuButton =
    document.getElementById("menuButton");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const heroNumber =
    document.querySelector(".hero-number");


  /* =========================
     LOADER
  ========================= */

  if (loader) {

    // ให้หน้าเว็บแสดงแน่นอน แม้ JavaScript ส่วนอื่นมีปัญหา
    setTimeout(() => {

      loader.classList.add("hide");

    }, 700);

    // ลบ loader ออกจาก DOM หลัง animation
    setTimeout(() => {

      if (loader) {
        loader.style.display = "none";
      }

    }, 1600);

  }


  /* =========================
     HEADER SCROLL
  ========================= */

  function updateHeader() {

    if (!header) return;

    if (window.scrollY > 40) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  }

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();


  /* =========================
     MOBILE MENU
  ========================= */

  function closeMenu() {

    if (menuButton) {
      menuButton.classList.remove("active");
    }

    if (mobileMenu) {
      mobileMenu.classList.remove("open");
    }

    document.body.classList.remove("menu-open");

  }


  function toggleMenu() {

    if (!menuButton || !mobileMenu) return;

    menuButton.classList.toggle("active");

    mobileMenu.classList.toggle("open");

    document.body.classList.toggle(
      "menu-open"
    );

  }


  if (menuButton) {

    menuButton.addEventListener(
      "click",
      toggleMenu
    );

  }


  /* =========================
     MOBILE MENU LINKS
  ========================= */

  const mobileLinks =
    document.querySelectorAll(
      ".mobile-menu a"
    );

  mobileLinks.forEach(link => {

    link.addEventListener(
      "click",
      closeMenu
    );

  });


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    revealElements.length > 0 &&
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              revealObserver.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px"
        }
      );


    revealElements.forEach(element => {

      revealObserver.observe(
        element
      );

    });

  } else {

    // Fallback สำหรับ browser ที่ไม่รองรับ
    revealElements.forEach(element => {

      element.classList.add(
        "visible"
      );

    });

  }


  /* =========================
     SMOOTH ANCHOR SCROLL
  ========================= */

  const anchorLinks =
    document.querySelectorAll(
      'a[href^="#"]'
    );


  anchorLinks.forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const targetID =
          link.getAttribute("href");


        // "#" เฉย ๆ ไม่ต้องทำอะไร
        if (
          !targetID ||
          targetID === "#"
        ) {
          return;
        }


        let target = null;

        try {

          target =
            document.querySelector(
              targetID
            );

        } catch (error) {

          return;

        }


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


  /* =========================
     HERO PARALLAX
  ========================= */

  if (heroNumber) {

    let ticking = false;


    function updateParallax() {

      const scrollY =
        window.scrollY;


      if (
        scrollY <
        window.innerHeight
      ) {

        heroNumber.style.transform =
          `translate3d(0, ${scrollY * 0.12}px, 0)`;

      }


      ticking = false;

    }


    window.addEventListener(
      "scroll",
      () => {

        if (!ticking) {

          window.requestAnimationFrame(
            updateParallax
          );

          ticking = true;

        }

      },
      { passive: true }
    );

  }


  /* =========================
     ACTIVITY CARD TILT
  ========================= */

  const cards =
    document.querySelectorAll(
      ".activity-card"
    );


  cards.forEach(card => {

    card.addEventListener(
      "mousemove",
      event => {

        if (
          window.innerWidth < 900
        ) {
          return;
        }


        const rect =
          card.getBoundingClientRect();


        const x =
          event.clientX -
          rect.left;


        const y =
          event.clientY -
          rect.top;


        const centerX =
          rect.width / 2;


        const centerY =
          rect.height / 2;


        const rotateX =
          ((y - centerY) /
            centerY) * -2;


        const rotateY =
          ((x - centerX) /
            centerX) * 2;


        card.style.transform =
          `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-8px)
          `;
