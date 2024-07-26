document.addEventListener("DOMContentLoaded", function () {
  const scrolls = document.getElementsByClassName("scrolling");

  Array.from(scrolls).forEach((e) => {
    const childw = e.children[0].offsetWidth;
    const parentw = e.offsetWidth;

    let children = "";
    for (let i = 0; i < Math.ceil(parentw / childw) + 1; i++) {
      children += e.innerHTML;
    }

    e.innerHTML += children;
  });
});

const coin = document.getElementById("coin");

// Функция для подбрасывания монеты
function flipCoin() {
  coin.classList.add("half-flipped");
  setTimeout(() => {
    coin.classList.remove("half-flipped");
  }, 1000); // Длительность анимации
}

// Запускает автоматическое воспроизведение с паузой
function startAutoPlay() {
  const flipInterval = 300; // Интервал между подбрасываниями монеты (в миллисекундах)
  const pauseDuration = 2000; // Длительность паузы между циклами (в миллисекундах)

  function playCycle() {
    flipCoin();

    setTimeout(() => {
      playCycle();
    }, flipInterval + pauseDuration);
  }

  playCycle();
}

// Запускаем автоматическое воспроизведение сразу после загрузки страницы
window.addEventListener("load", startAutoPlay);
