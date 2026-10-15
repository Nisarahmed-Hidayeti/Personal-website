// Small helpers
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

// kept for backwards compatibility with the old nav (scrolls to a % of the viewport)
function goes(x) {
  window.scrollTo({ top: (x * window.innerHeight) / 100, behavior: "smooth" });
}
