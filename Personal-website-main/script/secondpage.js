// Page interactions: rotating hero text, scroll reveal, card glow,
// count-up numbers, YouTube videos and the contact form.
(function () {
  /* ---------- Hero entrance (after the loader finishes) ---------- */
  const hero = document.getElementById("home");
  const intro = document.getElementById("firstintroduce");
  const enter = () => hero.classList.add("entered");
  new MutationObserver((_, ob) => {
    if (intro.style.opacity === "1") { enter(); ob.disconnect(); }
  }).observe(intro, { attributes: true, attributeFilter: ["style"] });
  setTimeout(enter, 5500); // safety net

  /* ---------- Scroll progress bar ---------- */
  const bar = document.getElementById("progress");
  function progress() {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? scrollY / max : 0) + ")";
  }
  addEventListener("scroll", progress, { passive: true });
  progress();

  /* ---------- Subtle photo parallax (desktop) ---------- */
  const photo = document.querySelector(".photo-wrap");
  if (photo && matchMedia("(hover: hover) and (min-width: 901px)").matches) {
    hero.addEventListener("pointermove", (e) => {
      if (!hero.classList.contains("entered")) return;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      photo.classList.add("tilt");
      photo.style.transform = `translate(${x}px, ${y}px)`;
    });
    hero.addEventListener("pointerleave", () => { photo.style.transform = ""; });
  }

  /* ---------- Reveal directions ---------- */
  const dir = (sel, fn) => document.querySelectorAll(sel).forEach((el, i) => {
    el.dataset.anim = fn(i);
  });
  dir(".grid-about > .reveal", (i) => (i ? "right" : "left"));
  dir(".grid-projects > .reveal", (i) => (i ? "right" : "left"));
  dir(".grid-contact > .reveal", (i) => (i ? "right" : "left"));
  dir(".grid-two > div:first-child .reveal", () => "left");
  dir(".timeline li", () => "right");
  dir(".stat, .grid-skills .reveal, .grid-sites .reveal, .goals + *, .process .step", () => "zoom");
  dir(".grid-services .reveal", () => "zoom");
  document.querySelectorAll(".goals li").forEach((li) => (li.dataset.anim = "zoom"));

  /* ---------- Rotating hero words ---------- */
  const rot = document.getElementById("rotator");
  if (rot && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const words = ["AI tools", "smart-home hardware", "modern websites", "things that work"];
    let w = 0, n = words[0].length, deleting = false;
    (function tick() {
      const word = words[w];
      if (!deleting && n === word.length) { deleting = true; return setTimeout(tick, 2200); }
      if (deleting && n === 0) { deleting = false; w = (w + 1) % words.length; }
      n += deleting ? -1 : 1;
      rot.textContent = words[w].slice(0, n) || "\u00A0";
      setTimeout(tick, deleting ? 35 : 70);
    })();
  }

  /* ---------- Scroll reveal ---------- */
  const items = document.querySelectorAll(".reveal, .timeline");
  document.querySelectorAll(".timeline li").forEach((li, i) => li.style.setProperty("--d", i * 0.25 + "s"));
  // small stagger for siblings
  items.forEach((el) => {
    const sibs = [...el.parentElement.children].filter((n) => n.classList.contains("reveal"));
    el.style.setProperty("--d", Math.min(sibs.indexOf(el), 5) * 0.08 + "s");
  });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            if (e.target.classList.contains("timeline")) e.target.classList.add("grow");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Count-up numbers ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || "";
        const t0 = performance.now();
        (function step(t) {
          const p = Math.min((t - t0) / 1200, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + (p === 1 ? suf : "");
          if (p < 1) requestAnimationFrame(step);
        })(t0);
        co.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  }

  /* ---------- YouTube videos ----------
     Add your videos here. The ID is the part after "v=" in the video URL,
     e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  "dQw4w9WgXcQ"  */
  const VIDEOS = [
    // { id: "VIDEO_ID", title: "My video title" },
  ];
  const box = document.getElementById("videos");
  if (box) {
    if (VIDEOS.length) {
      box.innerHTML = VIDEOS.map(
        (v) => `<a class="card video reveal in" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">
          <img loading="lazy" src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="${v.title}" />
          <span>${v.title}</span></a>`
      ).join("");
    } else {
      box.innerHTML = `<div class="card video-empty reveal">
        <i class="fa-brands fa-youtube"></i>
        <div><h3 style="margin:0 0 .3rem">Videos on my channel</h3>
        <p>I share my builds, tutorials and experiments on YouTube &mdash; come say hi.</p></div></div>`;
      box.querySelector(".reveal") && requestAnimationFrame(() => box.querySelector(".reveal").classList.add("in"));
    }
  }

  /* ---------- Contact form (Netlify Forms) ---------- */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = form.querySelector("button");
      btn.disabled = true;
      status.className = "form-status";
      status.textContent = "Sending…";
      try {
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(new FormData(form)).toString(),
        });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.className = "form-status ok";
        status.textContent = "Thanks! Your message was sent — I'll get back to you soon.";
      } catch (err) {
        status.className = "form-status err";
        status.innerHTML = 'Couldn\'t send right now. Please email me at <a href="mailto:nisarahmedhidayeti@gmail.com">nisarahmedhidayeti@gmail.com</a>.';
      } finally {
        btn.disabled = false;
      }
    });
  }
})();
