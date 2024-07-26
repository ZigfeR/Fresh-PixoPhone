// scripts.js
$(document).ready(function () {
  function marqueeAnimation(selector, speed) {
    var marquee = $(selector);
    var marqueeWidth = marquee.width();
    var containerWidth = marquee.parent().width();

    function animateMarquee() {
      marquee.animate({ left: -marqueeWidth }, speed, "linear", function () {
        marquee.css("left", containerWidth);
        animateMarquee();
      });
    }

    marquee.css("left", containerWidth);
    animateMarquee();
  }

  marqueeAnimation("#marquee1 .marquee", 30000); // Скорость для первой строки
  marqueeAnimation("#marquee2 .marquee", 40000); // Скорость для второй строки
});
