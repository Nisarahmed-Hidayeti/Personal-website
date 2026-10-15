// Navigation: mobile menu, scrolled state and active-link highlighting
(function () {
  const header = document.querySelector("header");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  function closeMenu() {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav")) closeMenu();
  });

  window.addEventListener(
    "scroll",
    () => header.classList.toggle("scrolled", window.scrollY > 40),
    { passive: true }
  );

  // highlight the link of the section currently in view
  const ids = ["home", "about", "portfolio", "services", "contact"];
  const navLinks = {};
  document.querySelectorAll("[data-nav]").forEach((a) => {
    navLinks[a.dataset.nav] = a;
  });
  function spy() {
    const line = window.innerHeight * 0.35;
    let current = "home";
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) current = id;
    });
    Object.entries(navLinks).forEach(([id, a]) =>
      a.classList.toggle("active", id === current)
    );
  }
  window.addEventListener("scroll", spy, { passive: true });
  window.addEventListener("resize", spy);
  spy();
})();
