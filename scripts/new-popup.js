$(document).ready(function () {
  // Caching jQuery selectors
  const $html = $("html");
  const $screen = $(".screen");
  const $mobileNavTabs = $(".mobile-nav__tabs");
  const $popUpLogin = $("#popUpLogin");
  const $popUpLoginNumber = $("#popUpLoginNumber");
  const $popUpLoginEmail = $("#popUpLoginEmail");
  const $popUpRecoverPassword = $("#popUpRecoverPassword");
  const $popUpRecoverMessage = $("#popUpRecoverMessage");
  const $popUpRegistred = $("#popUpRegistred");
  const $formGroupContainer = $(
    ".form-group-container.global-button-send-fast-buy"
  );
  const $verificationInputs = $(".verification__input");
  const $passwordInput = $(".form-control-password");
  const $togglePassword = $("#toggle-password");

  function toggleModalVisibility(modal, action) {
    modal.fadeIn().css("display", action === "show" ? "flex" : "none");
  }

  function updateClasses(action) {
    if (action === "add") {
      $html.addClass("no-scroll");
      $screen.addClass("overflow");
      $mobileNavTabs.addClass("video");
    } else {
      $html.removeClass("no-scroll");
      $screen.removeClass("overflow");
      $mobileNavTabs.removeClass("video");
    }
  }

  // Show modal with animation
  $(".left-home__authorized-btn").click(function () {
    toggleModalVisibility($popUpLogin, "show");
    updateClasses("add");
  });

  // Close modals
  function closeModals() {
    toggleModalVisibility($popUpLoginNumber, "hide");
    toggleModalVisibility($popUpLogin, "hide");
    toggleModalVisibility($popUpLoginEmail, "hide");
    toggleModalVisibility($popUpRecoverPassword, "hide");
    toggleModalVisibility($popUpRecoverMessage, "hide");
    toggleModalVisibility($popUpRegistred, "hide");
    updateClasses("remove");
  }

  $(".global-pop-up-close").click(closeModals);

  $(window).click(function (event) {
    if (
      $(event.target).is(
        "#popUpLogin, #popUpLoginNumber, #popUpLoginEmail, #popUpRecoverPassword, #popUpRecoverMessage, #popUpRegistred"
      )
    ) {
      closeModals();
    }
  });

  // Handle phone input length
  $("#check-form-contact-phone").on("input", function () {
    const phoneInputLength = $(this).val().trim().length;
    $formGroupContainer.toggleClass("disable", phoneInputLength < 19);
  });

  // Show modals
  function showModal(modal) {
    closeModals();
    toggleModalVisibility(modal, "show");
    updateClasses("add");
  }

  $('#popUpLogin button[type="submit"]').click(function (event) {
    event.preventDefault();
    if (!$formGroupContainer.hasClass("disable")) {
      showModal($popUpLoginNumber);
    }
  });

  $(".global-button-sign-email").click(() => showModal($popUpLoginEmail));
  $(".global-button-send-sms, .global-button-send-number").click(() =>
    showModal($popUpLogin)
  );

  // Show popUpRecoverPassword on reset password button click
  $(".global-button-reset-password").click(function () {
    closeModals();
    toggleModalVisibility($popUpRecoverPassword, "show");
    updateClasses("add");
  });

  // Show popUpRecoverMessage on recover message button click
  $(".global-button-recover-message").click(function () {
    closeModals();
    toggleModalVisibility($popUpRecoverMessage, "show");
    updateClasses("add");
  });

  // Show popUpRegistred on sign up button click
  $(".global-button-sign-up").click(function () {
    closeModals();
    toggleModalVisibility($popUpRegistred, "show");
    updateClasses("add");
  });

  // Show popUpLogin on login button click
  $(".global-button-login").click(function () {
    closeModals();
    toggleModalVisibility($popUpLogin, "show");
    updateClasses("add");
  });

  // Handle verification inputs
  $verificationInputs.each(function (index) {
    $(this)
      .on("input", function () {
        $(this).val(
          $(this)
            .val()
            .replace(/[^0-9]/g, "")
        );
        if ($(this).val().length >= $(this).attr("maxLength")) {
          const nextInput = $verificationInputs.eq(index + 1);
          if (nextInput.length) nextInput.focus();
        }
      })
      .on("keydown", function (event) {
        if (
          event.key === "Backspace" &&
          $(this).val().length === 0 &&
          index > 0
        ) {
          $verificationInputs.eq(index - 1).focus();
        }
      });
  });

  // Navigation with arrow keys
  $(document).on("keydown", function (event) {
    const key = event.key.toLowerCase();
    const $activeElement = $(document.activeElement);

    if ($activeElement.is($verificationInputs)) {
      const index = $verificationInputs.index($activeElement);
      if (key === "arrowleft" && index > 0) {
        $verificationInputs.eq(index - 1).focus();
      } else if (
        key === "arrowright" &&
        index < $verificationInputs.length - 1
      ) {
        $verificationInputs.eq(index + 1).focus();
      }
    }
  });

  // Toggle password visibility
  $togglePassword.on("click", function () {
    const inputType = $passwordInput.attr("type");
    $passwordInput.attr("type", inputType === "password" ? "text" : "password");
    $(this).toggleClass("show-password hide-password");
  });

  // Validate inputs in popUpRegistred
  function validateInputs() {
    const allFilled = $("#popUpRegistred .form-group input")
      .toArray()
      .every((input) => $(input).val().trim() !== "");
    $formGroupContainer.toggleClass("disable", !allFilled);
  }

  // Check inputs on change and on page load
  $("#popUpRegistred .form-group input").on("input", validateInputs);
  validateInputs();

  // Handle email input for password recovery
  $("#popUpRecoverPassword input[type='email']").on("input", function () {
    const emailInput = $(this).val().trim();
    const submitButtonContainer = $(this)
      .closest("#popUpRecoverPassword")
      .find(".form-group-container.global-button-send-fast-buy");
    submitButtonContainer.toggleClass("disable", emailInput === "");
  });
});
