(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");
  const navLinks = document.querySelectorAll(".site-nav a");
  const sections = document.querySelectorAll("main section[id]");
  const revealItems = document.querySelectorAll(".reveal");
  const rotatingText = document.getElementById("rotating-text");
  const yearNode = document.getElementById("year");

  const rotateValues = [
    "Google Cloud networking",
    "hybrid infrastructure",
    "automation and reliability",
    "technical leadership",
    "practical GenAI workflows"
  ];
  let rotateIndex = 0;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const toDark = theme === "light";
    themeToggle?.setAttribute("aria-label", toDark ? "Switch to dark mode" : "Switch to light mode");
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") || "light";
    setTheme(current === "light" ? "dark" : "light");
  }

  function setActiveNav() {
    let currentId = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("is-active", isActive);
    });
  }

  function closeNav() {
    navToggle?.setAttribute("aria-expanded", "false");
    siteNav?.classList.remove("is-open");
  }

  function openNav() {
    navToggle?.setAttribute("aria-expanded", "true");
    siteNav?.classList.add("is-open");
  }

  function toggleNav() {
    if (!siteNav || !navToggle) return;
    const isOpen = siteNav.classList.contains("is-open");
    if (isOpen) closeNav();
    else openNav();
  }

  function rotateLine() {
    if (!rotatingText) return;
    rotateIndex = (rotateIndex + 1) % rotateValues.length;
    rotatingText.textContent = rotateValues[rotateIndex];
  }

  function setupReveal() {
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  themeToggle?.addEventListener("click", toggleTheme);
  navToggle?.addEventListener("click", toggleNav);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });

  window.addEventListener("scroll", setActiveNav, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 780) closeNav();
  });

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  setTheme(root.getAttribute("data-theme") || "light");
  setActiveNav();
  setupReveal();
  window.setInterval(rotateLine, 2600);
})();
