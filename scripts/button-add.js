function toggleAddAcessBtn(event, button) {
  event.preventDefault();
  button.classList.toggle("add-product");
  button.classList.toggle("success");
}

function toggleShowMoreBtn(event) {
  event.preventDefault();
  const button = event.target;
  const showMoreContainer = button.closest(".show-more");
  if (showMoreContainer) {
    showMoreContainer.classList.toggle("show");
  }
}
// Получаем все элементы с классом global-block-content-container
var containers = document.querySelectorAll(".global-block-content-container");

// Перебираем каждый контейнер
containers.forEach(function (container) {
  // Получаем все кнопки в текущем контейнере
  var buttons = container.querySelectorAll("button");

  // Перебираем каждую кнопку
  buttons.forEach(function (button) {
    // Проверяем, содержится ли кнопка в блоке с классом block-cheaper-container
    if (
      !button.closest(".block-cheaper-container") &&
      !button.closest(".global-button-used")
    ) {
      // Если кнопка не содержится в блоке block-cheaper-container, убираем у нее текст
      button.textContent = "";
    }
  });
});
