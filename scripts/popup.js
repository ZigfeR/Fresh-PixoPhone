//отключение сскачивание изображений
$(document).ready(function () {
  $("img").on("contextmenu", function (e) {
    return false; // Отключение правого клика
  });

  $("img").on("dragstart", function (e) {
    return false; // Отключение перетаскивания
  });
});

//Открытие меню
$(document).ready(function () {
  // Функция для открытия/закрытия меню
  function toggleMenu() {
    const $menu = $("#vertical-menu");
    const $tabs = $(".common-template__tabs.fixed");
    const isVisible = $menu.is(":visible");

    if (isVisible) {
      $menu.fadeOut();
      if (!$(".pop-up-search-modal").is(":visible")) {
        $("html").removeClass("no-scroll");
        $(".screen").removeClass("overflow");
      }
      $tabs.show(); // Показываем блок с классом fixed
    } else {
      $menu.css("display", "inline-block").hide().fadeIn();
      $("html").addClass("no-scroll");
      $(".screen").addClass("overflow");
      $tabs.hide(); // Скрываем блок с классом fixed
    }
  }

  // Обработчик для клика на кнопку
  $(".header-bottom-catalog__desc").on("click", function (event) {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleMenu();
  });

  // Обработчик для клика вне меню
  $(document).on("click", function (event) {
    const $menu = $("#vertical-menu");
    const $button = $(".header-bottom-catalog__desc");
    const $tabs = $(".common-template__tabs.fixed");

    if (
      !$menu.is(event.target) &&
      $menu.has(event.target).length === 0 &&
      !$button.is(event.target)
    ) {
      if ($menu.is(":visible")) {
        $menu.fadeOut();
        if (!$(".pop-up-search-modal").is(":visible")) {
          $("html").removeClass("no-scroll");
          $(".screen").removeClass("overflow");
        }
        $tabs.show(); // Показываем блок с классом fixed
      }
    }
  });

  // Обработчики для поиска
  $(".header-search-form__input").on("click", function () {
    $(".pop-up-search-modal").fadeIn();
    $("html").addClass("no-scroll");
    $(".screen").addClass("overflow");
    $(".screen.overflow").css("z-index", "22");

    // Фокус на новый инпут в модальном окне
    $(".pop-up-header-search-form__input").focus();
  });

  $(".header-search-form__search-btn-close").on("click", function () {
    $(".pop-up-search-modal").fadeOut();
    if (!$("#vertical-menu").is(":visible")) {
      $("html").removeClass("no-scroll");
      $(".screen").removeClass("overflow");
    }
    $(".screen").css("z-index", "20");
  });

  $(window).on("click", function (event) {
    if ($(event.target).is("#popUpSearchModal")) {
      $("#popUpSearchModal").fadeOut(function () {
        $(".pop-up-search-modal").fadeOut();
      });
      if (!$("#vertical-menu").is(":visible")) {
        $("html").removeClass("no-scroll");
        $(".screen").removeClass("overflow");
      }
      $(".screen").css("z-index", "20");
    }
  });
});

// //Обормление поиска
// $(document).ready(function () {
//   $(".header-search-form__input").on("focus", function () {
//     $("html").addClass("no-scroll");
//     $(".header-bottom-search").css("z-index", "100");
//     $(".screen").addClass("overflow");
//   });

//   $(".header-search-form__input").on("blur", function () {
//     $("html").removeClass("no-scroll");
//     $(".header-bottom-search").css("z-index", "");
//     $(".screen").removeClass("overflow");
//   });
// });

//Открытие фото
$(document).ready(function () {
  function initPopUpPhoto(carouselImg, modalPopUp, modalClose) {
    $(carouselImg).on("click", ".cloud-zoom-wrap", function () {
      $(modalPopUp).css("display", "flex").hide().fadeIn();
      $("html").addClass("no-scroll");
    });

    $(modalClose).on("click", function () {
      $(modalPopUp).fadeOut(function () {
        $(this).css("display", "none");
      });
      $("html").removeClass("no-scroll");
    });

    $(window).on("click", function (event) {
      if (
        !$(event.target).closest(".cloud-zoom-wrap").length &&
        !$(event.target).closest(modalPopUp).length
      ) {
        $(modalPopUp).fadeOut(function () {
          $(this).css("display", "none");
        });
        $("html").removeClass("no-scroll");
      }
    });
  }

  initPopUpPhoto(
    ".gen-tab__carousel-img",
    "#popUpPhotoModal",
    ".pop-up-photo-close"
  );
});

//Универсальная логика для других попап
$(document).ready(function () {
  function initModal(
    triggerClass,
    modalClass,
    closeClass,
    overlayId,
    sendBtn,
    backToClass
  ) {
    $(triggerClass).on("click", function () {
      $(modalClass).fadeIn();
      $("html").addClass("no-scroll");
      $(".screen").addClass("overflow");
      $(".screen.overflow").css("z-index", "22");
    });

    function outSpec() {
      $(modalClass).fadeOut();
      $("html").removeClass("no-scroll");
      $(".screen").removeClass("overflow");
      $(".screen").css("z-index", "20");
    }

    $(closeClass).on("click", function () {
      outSpec();
    });

    $(backToClass).on("click", function () {
      outSpec();
    });

    $(sendBtn).on("click", function () {
      outSpec();
    });

    $(window).on("click", function (event) {
      if ($(event.target).is(overlayId)) {
        $(overlayId).fadeOut(function () {
          $(modalClass).fadeOut();
        });
        if (!$(overlayId).is()) {
          outSpec();
        }
      }
    });
  }

  function initOverlow(
    triggerClass,
    modalClass,
    closeClass,
    overlayId,
    sendBtn,
    backToClass
  ) {
    $(triggerClass).on("click", function () {
      $(modalClass).addClass("overflow");
      $("html").addClass("no-scroll");
      $(".screen").addClass("overflow");
      $(".screen.overflow").css("z-index", "22");

      if (modalClass === "#popUpToCart") {
        $(".to-cart-counter-num").css("visibility", "visible");
      }
      if (modalClass === "#popUpCart") {
        $(".cart-counter-num").css("visibility", "visible");
      }
    });

    function outOverlow() {
      $(modalClass).removeClass("overflow");
      $("html").removeClass("no-scroll");
      $(".screen").removeClass("overflow");
      $(".screen").css("z-index", "20");
      $(".to-cart-counter-num").css("visibility", "hidden");
      $(".cart-counter-num").css("visibility", "hidden");
    }

    $(closeClass).on("click", function () {
      outOverlow();
    });

    $(backToClass).on("click", function () {
      outOverlow();
    });

    $(sendBtn).on("click", function () {
      outOverlow();
    });

    $(window).on("click", function (event) {
      if ($(event.target).is(overlayId)) {
        $(overlayId).removeClass("overflow");
        if (!$(overlayId).is()) {
          outOverlow();
        }
      }
    });
  }

  //Показать блок версий смартфонов
  initModal(
    ".gen-tab__device-version-a__more",
    ".pop-up-smartphone-version-modal",
    ".pop-up-smartphone-version-close",
    "#popUpSmartphoneVersion"
  );
  //Показать блок создания оповещения
  initModal(
    ".gen-tab__to-notify-button",
    ".pop-up-notify-modal",
    ".pop-up-notify-close",
    "#popUpNotify",
    ".pop-up-notify-button"
  );
  //Показать блок создания оповещения
  initModal(
    ".soon-waiting-order-button",
    ".pop-up-notify-modal",
    ".pop-up-notify-close",
    "#popUpNotify",
    ".pop-up-notify-button"
  );
  //Показать блок вопроса
  initModal(
    ".inf-tab__to-questions-button",
    ".pop-up-user-question-modal",
    ".pop-up-user-question-close",
    "#popUpUserQuestion",
    ".pop-up-user-question-button"
  );
  //Показать блок отзывов
  initModal(
    ".inf-tab__to-reviews-button",
    ".pop-up-user-review-modal",
    ".pop-up-user-review-close",
    "#popUpUserReview",
    ".pop-up-user-review-button"
  );
  //Показать блок быстрого заказа
  initModal(
    ".gen-tab__to-fast-buy-button",
    ".pop-up-fast-buy-modal",
    ".pop-up-fast-buy-close",
    "#popUpFastBuy",
    ".pop-up-fast-buy-button"
  );
  //Показать блок заказа
  initOverlow(
    ".gen-tab__to-buy-button",
    "#popUpToCart",
    ".pop-up-to-cart-close",
    "#popUpToCart",
    ".pop-up-to-cart-button",
    ".pop-up-to-cart-bottom-left"
  );
  //Показать блок заказа
  initModal(
    ".offers-page-description-show-more",
    "#popUpBuProducts",
    ".pop-up-bu-close",
    "#popUpBuProducts"
  );
  //Показать блок заказа
  initModal(
    ".gen-tab__credit-btn",
    "#popUpCreditCalculator",
    ".pop-up-credit-calculator-close",
    "#popUpCreditCalculator"
  );

  initModal(
    ".delivery-options-header-location",
    "#popUpLocation",
    ".pop-up-location-close",
    "#popUpLocation"
  );

  initModal(
    ".city-switch",
    "#popUpLocation",
    ".pop-up-location-close",
    "#popUpLocation"
  );

  initOverlow(
    ".p-short-info-button",
    "#popUpToCart",
    ".pop-up-to-cart-close",
    "#popUpToCart",
    ".pop-up-to-cart-button",
    ".pop-up-to-cart-bottom-left"
  );
  initOverlow(
    ".inf-tab__to-buy-button",
    "#popUpToCart",
    ".pop-up-to-cart-close",
    "#popUpToCart",
    ".pop-up-to-cart-button",
    ".pop-up-to-cart-bottom-left"
  );
  //Показать блок корзины
  initOverlow(
    ".header-bottom__cart-btn",
    "#popUpCart",
    ".pop-up-cart-close",
    "#popUpCart",
    ".pop-up-cart-button",
    ".pop-up-cart-bottom-left"
  );
});

$(document).ready(function () {
  $(".gen-tab__add-services-header").on("click", function () {
    $(this).closest(".gen-tab__block").toggleClass("active");
  });
});

$(document).ready(function () {
  // Обработчик клика по стрелке контейнера
  $(".credit-offer-container-arrow").on("click", function () {
    var $block = $(this).closest(".credit-offer-block");
    // Проверяем, есть ли у блока класс open
    if ($block.hasClass("open")) {
      // Если есть, удаляем класс
      $block.removeClass("open");
    } else {
      // Если нет, закрываем все открытые блоки и открываем текущий
      $(".credit-offer-block.open").removeClass("open");
      $block.addClass("open");
    }
  });

  // Обработчик клика по элементу выбора количества месяцев
  $(".months-select").on("click", function () {
    // Добавляем класс active к выбранному элементу и удаляем его у остальных
    $(this).addClass("active").siblings().removeClass("active");
  });

  // Обработчик изменения выбора предложения
  $(".info").on("click", function () {
    // Находим радио-инпут внутри текущего элемента .info
    var radio = $(this).find('input[name="credit-offer"]');
    // Устанавливаем флажок, если радио-инпут найден
    if (radio.length) {
      radio.prop("checked", true);
      // Получаем ID offerId из ID радио-инпута
      var offerId = radio.attr("id").replace("offerInput", "");
      // Удаляем класс selected у всех блоков и добавляем его к выбранному блоку
      $(".credit-offer-block").removeClass("selected");
      $("#offer" + offerId)
        .closest(".credit-offer-block")
        .addClass("selected");
    }
  });
});

$(document).ready(function () {
  $(".pop-up-credit-calculator-buy-button").on("click", function () {
    var selectedOffer = $('input[name="credit-offer"]:checked').attr("id");
    // Проверяем, выбран ли какой-либо из радио-инпутов
    if (selectedOffer) {
      // Скрываем все блоки credit-offer-block, кроме выбранного
      $(".credit-offer-block").not(".selected").css("display", "none");
      // Убираем класс choice и добавляем класс paperwork у элемента credit-calculator
      $(".credit-calculator").removeClass("choice").addClass("paperwork");
    }
  });

  $(".cart-modal-sentences-show-more").on("click", function () {
    // Удаляем класс paperwork и добавляем класс choice у элемента credit-calculator
    $(".credit-offer-block").not(".selected").css("display", "flex");
    $(".credit-calculator").removeClass("paperwork").addClass("choice");
  });
});

$(document).ready(function () {
  $(".gen-tab__credit-block__btn").on("click", function () {
    // Получаем ID кнопки и радио-инпута
    var buttonId = $(this).attr("id");
    var radioId = buttonId.replace("gen-tab__credit-", "#offerInput");
    // console.log(buttonId);
    // console.log(radioId);
    $(".credit-offer-block").removeClass("selected");

    $(radioId).closest(".credit-offer-block").addClass("selected open");
    // Вызываем функцию initModal
    $("#popUpCreditCalculator").fadeIn();
    $("html").addClass("no-scroll");
    $(".screen").addClass("overflow");
    $(".screen.overflow").css("z-index", "22");

    // Отмечаем соответствующий радио-инпут
    $(radioId).prop("checked", true);
  });
});

$(document).ready(function () {
  $(".contain-submenu").click(function () {
    // Remove active class from all menu items and content blocks
    $(".contain-submenu").removeClass("active");
    $(".nav-block").removeClass("active");

    // Add active class to the clicked menu item
    $(this).addClass("active");

    // Get the target content block from data-target attribute
    var target = $(this).data("target");

    // Add active class to the corresponding content block
    $("." + target).addClass("active");
  });
});
