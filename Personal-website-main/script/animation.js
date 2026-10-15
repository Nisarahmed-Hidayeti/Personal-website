let myimg = document.getElementById("backgroundimg");
let myname = document.getElementById("name");
let mysirname = document.getElementById("sirname");
let myani = document.getElementById("animation");
let myheader = document.querySelector("header");
let mycontainer = document.querySelector(".container");
let mypic = document.getElementById("picofme");
let mytext = document.getElementById("firstintroduce");

document.addEventListener("DOMContentLoaded", (event) => {
  if (screen.width < 600) {
    myimg.style.width = "30%";
  } else {
    myimg.style.width = "10%";
  }
  myimg.style.transform = "translate(-50%, -50%) rotate(360deg)";
  setTimeout(() => {
    if (screen.width < 600) {
      myimg.style.animation = "ani2 1s cubic-bezier(0, 0, .65, 1.50) forwards";
    } else {
      myimg.style.animation = "ani 1s cubic-bezier(0, 0, .65, 1.50) forwards";
    }
  }, 1300);
  setTimeout(() => {
    if (screen.width < 600) {
      myname.style.width = "85%";
    } else {
      myname.style.width = "35%";
    }
  }, 2000);

  setTimeout(() => {
    animation.style.opacity = "0";
    myheader.style.opacity = "1";
    mytext.style.opacity = "1";
    mypic.style.opacity = "1";
    myheader.style.top = "0";
    myheader.style.filter = "blur(0)";
    handleResize();
  }, 4000);

  setTimeout(() => {
    animation.style.display = "none";
  }, 50000);
});

function handleResize() {
  var currentWidth = window.innerWidth;
  if (screen.width > 1024) {
    mypic.style.left = "25%";
    mytext.style.right = "5%";
  } else if (screen.width < 550) {
    mypic.style.left = "50%";
    mytext.style.right = "10%";
    console.log("550 550");
  } else if (screen.width < 768) {
    mypic.style.left = "50%";
    mytext.style.right = "10%";
    console.log("768px 768px");
  } else if (screen.width < 1024) {
    mypic.style.left = "25%";
    mytext.style.right = "5%";
    console.log("1000000x");
  }
}
window.addEventListener("resize", handleResize);
