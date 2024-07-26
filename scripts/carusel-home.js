document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#promoBaner", {
    type: "loop",
    pagination: false,
    arrows: false,
    autoWidth: true,
    drag: true,
    gap: 24,
    // autoScroll: {
    //   speed: 0.3,
    //   pauseOnHover: true,
    // },
  });
  splide.mount();
  //   splide.mount(window.splide.Extensions);
});
