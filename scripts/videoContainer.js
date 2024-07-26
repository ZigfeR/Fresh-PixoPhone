document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.querySelector(".video-container");
  const videoBlock = videoContainer.querySelector(".video-block");
  const video = videoBlock.querySelector("video");
  const closet = videoBlock.querySelector(".closet");
  const fullscreenCloset = videoBlock.querySelector(".fullscreen-closet");

  videoContainer.addEventListener("click", function () {
    videoContainer.classList.toggle("video-fullscreen");
    if (videoContainer.classList.contains("video-fullscreen")) {
      // video.setAttribute('controls', 'controls');
      video.play();
      document.querySelector(".header_bottom").classList.add("mobile");
      document.querySelector(".mobile-nav__tabs").classList.add("video");
      document.documentElement.classList.add("no-scroll");
    } else {
      video.pause();
      closet.style.display = "flex";
      document.querySelector(".header_bottom").classList.remove("mobile");

      document.documentElement.classList.remove("no-scroll");
      document.querySelector(".mobile-nav__tabs").classList.remove("video");
    }
  });

  fullscreenCloset.addEventListener("click", function () {
    videoContainer.classList.remove("video-fullscreen");
    video.removeAttribute("controls");
    document.querySelector(".header_bottom").classList.remove("mobile");
    document.documentElement.classList.remove("no-scroll");

    document.querySelector(".mobile-nav__tabs").classList.remove("video");
  });
});
