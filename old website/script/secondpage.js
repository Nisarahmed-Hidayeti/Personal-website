// let mysecondpage = document.getElementById("secondpage");
// let mythirthpage = document.getElementById("thirthpage");
// let myfourthpage = document.getElementById("fourthpage");
// let myfifthpage = document.getElementById("fourthpage");
// window.addEventListener("scroll", function () {
//   var scrolledInVh = parseInt((window.scrollY / window.innerHeight) * 100);
//   // console.log(-(scrolledInVh - 120) + "kdlkfj");
//   if (scrolledInVh > 120) {
//     mysecondpage.style.marginLeft = -(scrolledInVh - 120) + "vw";
//     mythirthpage.style.left = -(scrolledInVh - 220) + "vw";
//     myfourthpage.style.left = -(scrolledInVh - 320) + "vw";
//     myfifthpage.style.left = -(scrolledInVh - 420) + "vw";
//   } else {
//     mysecondpage.style.marginLeft = 0 + "vw";
//     mythirthpage.style.left = 100 + "vw";
//     myfourthpage.style.left = 100 + "vw";
//     myfifthpage.style.left = 100 + "vw";
//   }
// });

function goes(x) {
  window.scrollTo({
    top: (x * window.innerHeight) / 100,
    behavior: "smooth",
  });
}
