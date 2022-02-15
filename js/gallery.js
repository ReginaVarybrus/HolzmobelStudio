document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide").mount()
})

var splide = new Splide(".splide", {
  type: "fade",
  rewind: true,
})

splide.mount()
