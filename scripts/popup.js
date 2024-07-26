//отключение сскачивание изображений
$(document).ready(function () {
  $("img").on("contextmenu", function (e) {
    return false; // Отключение правого клика
  });

  $("img").on("dragstart", function (e) {
    return false; // Отключение перетаскивания
  });
});

$(document).ready(function () {
  $(".add-acces").on("click", function () {
    var parentBlock = $(this).closest(".tabs__link-menu-containers");
    var tabsLinkProductMobile = parentBlock.find(".tabs__link-product-mobile");
    var tabsLinkServices = parentBlock.find(".tabs__link-services");
    var addService = parentBlock.find(".add-service");

    if (tabsLinkProductMobile.hasClass("active")) {
      tabsLinkProductMobile.removeClass("active");
      $(this).removeClass("active");
    } else {
      tabsLinkProductMobile.addClass("active");
      tabsLinkServices.removeClass("active");
      $(this).addClass("active");
      addService.removeClass("active");
    }
  });

  $(".add-service").on("click", function () {
    var parentBlock = $(this).closest(".tabs__link-menu-containers");
    var tabsLinkServices = parentBlock.find(".tabs__link-services");
    var tabsLinkProductMobile = parentBlock.find(".tabs__link-product-mobile");
    var addAcces = parentBlock.find(".add-acces");

    if (tabsLinkServices.hasClass("active")) {
      tabsLinkServices.removeClass("active");
      $(this).removeClass("active");
    } else {
      tabsLinkServices.addClass("active");
      tabsLinkProductMobile.removeClass("active");
      $(this).addClass("active");
      addAcces.removeClass("active");
    }
  });

  function updateArrow($element) {
    // Проверяем, есть ли скролл у tabs__link-menu-list только на мобильных устройствах
    if ($(window).width() <= 719) {
      var $menuList = $element.find(".tabs__link-menu-list");
      if ($menuList[0].scrollHeight > $menuList.height()) {
        $element.find(".tabs__link-menu-list-bottom-arrow").addClass("active");
      } else {
        $element
          .find(".tabs__link-menu-list-bottom-arrow")
          .removeClass("active");
      }
    }
  }

  $(".gen-block-mobile-position-header").on("click", function () {
    // Найти соответствующий блок для текущего заголовка
    var $block = $(this).closest(".gen-block-mobile-position-block");

    // Переключить класс 'active' для выбранного блока
    $block.toggleClass("active");
  });

  $(".p-short-info-button, .gen-tab__to-buy-button").on("click", function () {
    var $popupCart = $(".pop-up-cart-mobile");

    // Проверяем, есть ли уже класс "add"
    if ($popupCart.hasClass("add")) {
      // Удаляем класс "add" и добавляем класс "delete"
      $popupCart.removeClass("add").addClass("delete");
    } else {
      // Удаляем класс "delete" и добавляем класс "add"
      $popupCart.removeClass("delete").addClass("add");
    }

    // Добавляем класс 'visible'
    $popupCart.removeClass("hidden");
    $popupCart.addClass("visible");

    // Удаляем класс 'visible' и добавляем класс 'hidden' через 2 секунды (2000 миллисекунд)
    setTimeout(function () {
      $popupCart.removeClass("visible").addClass("hidden");
    }, 2000);
  });

  $(".tlmsh").on("click", function () {
    var $container = $(this).closest(".tabs__link-menu-containers");

    $(".tabs__link-menu-list").addClass("right");
    $(".tabs__link-menu-list").removeClass("left");

    // Добавляем класс 'active' к соседнему .tabs__link-menu-position внутри текущего контейнера
    $container.find(".tabs__link-menu-position").addClass("active");

    // Update arrow state for active link menu
    updateArrow($(".tabs__link-mobile.active"));
  });

  $(".tabs__link-menu-header-arrow").on("click", function () {
    // Добавляем класс 'right' к '.tabs__link-menu-list'
    var $container = $(this).closest(".tabs__link-menu-containers");
    // setTimeout(() => {
    // }, 1000);
    $(".tabs__link-menu-list").addClass("left");
    $(".tabs__link-menu-list").removeClass("right");

    $container.find(".tabs__link-menu-position").addClass("right");
    $container.find(".tabs__link-menu-position").removeClass("active");
    // $(".tabs__link-menu-list-bottom-arrow").removeClass("active");
    // // Update arrow state for active link menu
    updateArrow($(".tabs__link-mobile.active"));
  });

  $(
    ".header-bottom-search, .gen-tab__credit-btn, .gen-tab__credit-block__btn, .gen-tab__to-all-product-button"
  ).on("click", function () {
    $(".p-short-info-mobile").addClass("mobile");
    $(".back-to-top").addClass("mobile");
    $(".video-container").addClass("closing");
    $(".mobile-nav__tabs").addClass("video");
  });

  $(
    "#pop-up-search-form__btn-close, .pop-up-credit-calculator-close, .pop-up-bu-cards-close, .pop-up-bu-close"
  ).on("click", function () {
    $(".p-short-info-mobile").removeClass("mobile");
    $(".back-to-top").removeClass("mobile");
    $(".video-container").removeClass("closing");
    $(".mobile-nav__tabs").removeClass("video");
  });

  $(".search-list.contain-submenu").not(".all_category").hide();

  // Добавляем обработчик события клика
  $(".all_category").click(function () {
    // Анимируем отображение элементов
    $(".search-list.contain-submenu").not(".all_category").animate(
      {
        height: "toggle",
      },
      "slow"
    );
  });

  $(".tabs__link-mobile").on("click", function (event) {
    event.stopPropagation();
    var $this = $(this);

    if ($this.hasClass("active")) {
      // Если текущий элемент активен, деактивируем его и удаляем классы
      $this.removeClass("active");
      $("html").removeClass("no-scroll");
      $(".screen").removeClass("overflow-mobile");
      $(".header_bottom").removeClass("mobile");
      $(".back-to-top").removeClass("mobile");
      $(".p-short-info-mobile").removeClass("mobile");
      $(".video-container").removeClass("closing");
      $this.find(".tabs__link-menu-list-bottom-arrow").removeClass("active");
    } else {
      // Если текущий элемент не активен, активируем его и обновляем классы на других элементах
      $(".tabs__link-mobile").removeClass("active");
      $(".tabs__link-menu-list-bottom-arrow").removeClass("active"); // Remove 'activ' from all arrows
      $this.addClass("active");
      $("html").addClass("no-scroll");
      $(".screen").addClass("overflow-mobile");
      $(".header_bottom").addClass("mobile");
      $(".p-short-info-mobile").addClass("mobile");
      $(".back-to-top").addClass("mobile");
      $(".video-container").addClass("closing");

      // Update arrow state for this element
      updateArrow($this);
    }
    // Удаляем классы 'right' и 'active' при переключении табов
    $(".tabs__link-menu-position").removeClass("active");
    $(".tabs__link-menu-list").removeClass("right");
    // Инициализация маски для поля ввода номера телефона
    $("#contact-phone").mask("+38 (999) 99-99-999");
  });

  // Предотвращаем закрытие при клике на дочерние элементы
  $(".tabs__link-mobile").on(
    "click",
    ".tabs__link-menu-list",
    function (event) {
      event.stopPropagation();
    }
  );

  // Обработчик прокрутки для tabs__link-menu-list
  $(".tabs__link-menu-list").on("scroll", function () {
    var $this = $(this);
    var scrollHeight = $this[0].scrollHeight;
    var scrollTop = $this.scrollTop();
    // scrollTop = Math.abs(scrollTop);
    var clientHeight = $this.height();
    var scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

    // Проверка, если содержимое прокручено на 95%
    if (scrollPercentage > 0.95) {
      $this
        .closest(".tabs__link-mobile")
        .find(".tabs__link-menu-list-bottom-arrow")
        .addClass("hide");
    } else {
      $this
        .closest(".tabs__link-mobile")
        .find(".tabs__link-menu-list-bottom-arrow")
        .removeClass("hide");
    }
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

      // Добавляем обработчик клика для закрытия модального окна при клике вне его
      $(document).on("click.closeModal", function (event) {
        if (
          !$(event.target).closest(".cloud-zoom-wrap").length &&
          !$(event.target).closest(modalPopUp).length
        ) {
          $(modalPopUp).fadeOut(function () {
            $(this).css("display", "none");
          });
          $("html").removeClass("no-scroll");

          // Удаляем этот обработчик после его выполнения
          $(document).off("click.closeModal");
        }
      });
    });

    $(modalClose).on("click", function () {
      $(modalPopUp).fadeOut(function () {
        $(this).css("display", "none");
      });
      $("html").removeClass("no-scroll");

      // Удаляем обработчик клика для закрытия модального окна при клике вне его
      $(document).off("click.closeModal");
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
  // initOverlow(
  //   ".gen-tab__to-buy-button",
  //   "#popUpToCart",
  //   ".pop-up-to-cart-close",
  //   "#popUpToCart",
  //   ".pop-up-to-cart-button",
  //   ".pop-up-to-cart-bottom-left"
  // );
  //Показать блок заказа
  initModal(
    ".gen-tab__to-all-product-button",
    "#popUpBuCardsProducts",
    ".pop-up-bu-cards-close",
    "#popUpBuCardsProducts"
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

  // initOverlow(
  //   ".p-short-info-button",
  //   "#popUpToCart",
  //   ".pop-up-to-cart-close",
  //   "#popUpToCart",
  //   ".pop-up-to-cart-button",
  //   ".pop-up-to-cart-bottom-left"
  // );
  // initOverlow(
  //   ".inf-tab__to-buy-button",
  //   "#popUpToCart",
  //   ".pop-up-to-cart-close",
  //   "#popUpToCart",
  //   ".pop-up-to-cart-button",
  //   ".pop-up-to-cart-bottom-left"
  // );
  // //Показать блок корзины
  // initOverlow(
  //   ".header-bottom__cart-btn",
  //   "#popUpCart",
  //   ".pop-up-cart-close",
  //   "#popUpCart",
  //   ".pop-up-cart-button",
  //   ".pop-up-cart-bottom-left"
  // );
});
$(document).ready(function () {
  $(".bu-splide__span").on("click", function () {
    $("#popUpBuProducts").fadeOut();
    $("#popUpBuCardsProducts").fadeIn();
  });

  $(".pop-up-bu-cards-close").on("click", function () {
    $("#popUpBuProducts").fadeOut();
  });

  $(".offers-page-description-show-more").on("click", function () {
    $("#popUpBuProducts").fadeIn();
    $("#popUpBuCardsProducts").fadeOut();
  });
});

$(document).ready(function () {
  // Attach a click event listener to each span
  $(".pop-up-bu-main-spec-span").click(function () {
    // Extract the class ending from the clicked span
    const classList = $(this).attr("class").split(" ");
    let specificClass = "";
    classList.forEach((cls) => {
      if (cls.startsWith("pop-up-bu-main-spec-span__")) {
        specificClass = cls.replace("pop-up-bu-main-spec-span__", "");
      }
    });
    // Hide all bu-main-spec-container elements and show only the containers with the specific class
    $(".bu-main-spec-block").fadeIn();
    $(`.bu-main-spec-container-${specificClass}`)
      .fadeIn()
      .css("display", "flex");
  });

  // Attach a click event listener to the close button
  $(".bu-main-spec-btn-close").click(function () {
    // Hide all bu-main-spec-container elements with animation
    $(".bu-main-spec-block").fadeOut();
    $(".bu-main-block-mobile-container").fadeOut();
  });
});
$(".offers-page-buy-guarantee-switch-compare").change(function () {
  $(".offers-page-buy-guarantee").toggleClass("hide");
});

// Логика для фильтра и сортировки мобайл
$(document).ready(function () {
  $(".sorting.BTN").click(function () {
    if (!$(this).hasClass("active")) {
      removeButtonActiveClasses();
      $(this).addClass("active");
      $(".offers-page-block__sorting").addClass("active");
    } else {
      $(this).removeClass("active");
      $(".offers-page-block__sorting").removeClass("active");
    }
    $(".offers-page-block__sorting").fadeToggle("slow"); // Анимация открытия и закрытия
  });

  $(".filter.BTN").click(function () {
    if (!$(this).hasClass("active")) {
      removeButtonActiveClasses();
      $(this).addClass("active");
      $(".offers-page-block__filter").addClass("active");
    } else {
      $(this).removeClass("active");
      $(".offers-page-block__filter").removeClass("active");
    }
    $(".offers-page-block__filter").fadeToggle("slow"); // Анимация открытия и закрытия
  });

  $(".header__close").click(function () {
    $(this)
      .closest(".offers-page-block__con")
      .find(".sorting.BTN, .filter.BTN")
      .removeClass("selected");
    $(".offers-page-block__sorting, .offers-page-block__filter").fadeOut(
      "slow",
      function () {
        removeActiveClasses();
        removeSelectedClasses();
      }
    );
  });

  $(".offers-page-block__container span").click(function () {
    $(this).toggleClass("active");
    addSelectedClasses();
  });

  function removeActiveClasses() {
    $(".active").removeClass("active");
  }

  function removeButtonActiveClasses() {
    $(".sorting.BTN, .filter.BTN").removeClass("active");
    $(".offers-page-block__sorting, .offers-page-block__filter")
      .removeClass("active")
      .hide(); // Убедимся, что элементы скрыты
  }

  function addSelectedClasses() {
    $(".sorting.BTN, .filter.BTN").each(function () {
      if ($(this).hasClass("active")) {
        $(this).addClass("selected");
      }
    });
  }

  function removeSelectedClasses() {
    $(".selected").removeClass("selected");
  }
});

$(document).ready(function () {
  $(".gen-tab__add-services-header").on("click", function () {
    $(this).closest(".gen-tab__block").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".gen-tab__carousel-arrow").on("click", function () {
    $(".flip").toggleClass("active");
    $(".video-container").toggleClass("closing");
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

  // Инициализация: копируем значение активного элемента months-select в months-mini-span-block
  $(".credit-offer-block").each(function () {
    var activeMonth = $(this).find(".months-select.active").text().trim();
    $(this).find(".months-mini-span-block").text(activeMonth);
  });

  // Обработка клика по элементам months-select
  $(".months-select").on("click", function () {
    // Добавляем класс active к выбранному элементу и удаляем его у остальных
    $(this).addClass("active").siblings().removeClass("active");

    // Находим ближайший родительский блок .credit-offer-block
    var parentBlock = $(this).closest(".credit-offer-block");

    // Находим внутри этого блока элемент .months-mini-span-block и копируем содержимое
    var selectedMonth = $(this).text().trim();
    parentBlock.find(".months-mini-span-block").text(selectedMonth);

    // Имитируем клик на .info в текущем блоке
    parentBlock.find(".info").trigger("click");
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
