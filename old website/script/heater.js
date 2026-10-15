let heather_a = document.querySelectorAll("Header a");
let truu = false;
heather_a.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const buttonX = parseInt(e.clientX - item.getBoundingClientRect().left);
    const buttonY = parseInt(e.clientY - item.getBoundingClientRect().top);

    item.style.setProperty("--xim", buttonX + "px");
    item.style.setProperty("--yim", buttonY + "px");
  });
});

let turn = true;
let section = document.querySelector(".newsection");
let anam = document.querySelector(".ana");
let homem = document.getElementById("Home2");
let aboutm = document.getElementById("About2");
let portfoliom = document.getElementById("Portfolio2");
let servicesm = document.getElementById("Services2");
let contectm = document.getElementById("Contact2");

homem.addEventListener("click", () => {
  if (turn) {
    anam.style.transform = "translateY(0)";
    section.style.height = "400%";
    turn = false;
  } else {
    anam.style.transform = "translateY(0%)";
    section.style.height = "60%";
    turn = true;
  }
  window.removeEventListener("scroll", handleScroll);
  setTimeout(() => {
    window.addEventListener("scroll", handleScroll);
  }, 750);
});

aboutm.addEventListener("click", () => {
  if (turn) {
    anam.style.transform = "translateY(0)";
    section.style.height = "400%";
    turn = false;
  } else {
    anam.style.transform = "translateY(-20%)";
    section.style.height = "60%";
    turn = true;
  }
  window.removeEventListener("scroll", handleScroll);
  setTimeout(() => {
    window.addEventListener("scroll", handleScroll);
  }, 750);
});

portfoliom.addEventListener("click", () => {
  if (turn) {
    anam.style.transform = "translateY(0)";
    section.style.height = "400%";
    turn = false;
  } else {
    anam.style.transform = "translateY(-40%)";
    section.style.height = "60%";
    turn = true;
  }
  window.removeEventListener("scroll", handleScroll);
  setTimeout(() => {
    window.addEventListener("scroll", handleScroll);
  }, 750);
});

servicesm.addEventListener("click", () => {
  if (turn) {
    anam.style.transform = "translateY(0)";
    section.style.height = "400%";
    turn = false;
  } else {
    anam.style.transform = "translateY(-60%)";
    section.style.height = "60%";
    turn = true;
  }
  window.removeEventListener("scroll", handleScroll);
  setTimeout(() => {
    window.addEventListener("scroll", handleScroll);
  }, 750);
});

contectm.addEventListener("click", () => {
  if (turn) {
    anam.style.transform = "translateY(0)";
    section.style.height = "400%";
    turn = false;
  } else {
    anam.style.transform = "translateY(-80%)";
    section.style.height = "60%";
    turn = true;
  }
  window.removeEventListener("scroll", handleScroll);
  setTimeout(() => {
    window.addEventListener("scroll", handleScroll);
  }, 750);
});

function handleScroll() {
  var scrolledInVh = parseInt((window.scrollY / window.innerHeight) * 100);
  console.log(scrolledInVh + " vh");
  if (scrolledInVh < 50) {
    anam.style.transform = "translateY(0)";
  } else if (scrolledInVh > 50 && scrolledInVh < 170) {
    anam.style.transform = "translateY(-20%)";
  } else if (scrolledInVh > 170 && scrolledInVh < 270) {
    anam.style.transform = "translateY(-40%)";
  } else if (scrolledInVh > 270 && scrolledInVh < 370) {
    anam.style.transform = "translateY(-60%)";
  } else if (scrolledInVh > 370 && scrolledInVh < 470) {
    anam.style.transform = "translateY(-80%)";
  }
  section.style.height = "60%";
}

window.addEventListener("scroll", handleScroll);
