$(document).ready(function () {
  $(".area__right-header-side").on("click", function () {
    // Находим родительский элемент area__right
    var parent = $(this).closest(".area__right");

    // Переключаем класс active у родительского элемента area__right
    parent.toggleClass("active");

    // Применяем slideToggle к элементу area__right-block внутри родительского элемента area__right
    if (parent.hasClass("active")) {
      parent.find(".area__right-block").slideDown().css("display", "flex");
    } else {
      parent.find(".area__right-block").slideUp();
    }
  });
});
