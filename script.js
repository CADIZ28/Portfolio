/* ===============================
   INTRO CINEMATIC LOADER
================================ */
window.addEventListener("load", () => {
  const loader = document.querySelector(".intro-loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 2800);

  // Profile entrance animation
  document.querySelector(".profile-left")?.classList.add("slide-left");
  document.querySelector(".profile-right")?.classList.add("slide-right");
});

/* ===============================
   SCROLL REVEAL
================================ */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 120;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===============================
   PARALLAX HERO
================================ */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (!hero) return;

  const offset = window.scrollY * 0.4;
  hero.style.setProperty("--parallax-offset", `${offset}px`);
});

/* ===============================
   HERO TITLE CINEMATIC FADE
================================ */
const heroTitle = document.querySelector(".hero-title");

window.addEventListener("scroll", () => {
  if (!heroTitle) return;

  const scrollY = window.scrollY;
  heroTitle.style.opacity = Math.max(1 - scrollY / 320, 0);
  heroTitle.style.transform = `translateY(${scrollY * 0.25}px)`;
});

/* ===============================
   SCROLL INDICATOR HIDE
================================ */
const scrollIndicator = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {
  if (!scrollIndicator) return;

  if (window.scrollY > 80) {
    scrollIndicator.style.opacity = "0";
    scrollIndicator.style.pointerEvents = "none";
  } else {
    scrollIndicator.style.opacity = "1";
    scrollIndicator.style.pointerEvents = "auto";
  }
});

/* ===============================
   MOTION BLUR SCROLL
================================ */
let lastScroll = 0;
let blurTimeout;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const speed = Math.abs(currentScroll - lastScroll);

  if (speed > 25) {
    document.body.classList.add("motion-blur");
    clearTimeout(blurTimeout);

    blurTimeout = setTimeout(() => {
      document.body.classList.remove("motion-blur");
    }, 160);
  }

  lastScroll = currentScroll;
});