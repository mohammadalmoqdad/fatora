// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml14 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({ loop: true })
//   .add({
//     targets: '.ml14 .line',
//     scaleX: [0, 1],
//     opacity: [0.5, 1],
//     easing: "easeInOutExpo",
//     duration: 900
//   }).add({
//     targets: '.ml14 .letter',
//     opacity: [0, 1],
//     translateX: [40, 0],
//     translateZ: 0,
//     scaleX: [0.3, 1],
//     easing: "easeOutExpo",
//     duration: 800,
//     offset: '-=600',
//     delay: (el, i) => 150 + 25 * i
//   }).add({
//     targets: '.ml14',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
// alert("")

function showImage() {
  console.log("Hellllllllllooooooooooo")
  let img = document.getElementById("animated-images");
  // img.classList.remove("svg-image-container");
  // img.classList.add("svg-image-container2");
  // img.setAttribute("opacity", "1")

  console.log(img)
}


window.addEventListener("scroll", function () {
  var elementTarget = document.getElementById("animated-images");
  if (window.scrollY < (elementTarget.offsetTop + elementTarget.offsetHeight)) {
    // alert("You've scrolled past the second div");
    elementTarget.classList.remove("svg-image-container");
    elementTarget.classList.add("svg-image-container2");
  }
});