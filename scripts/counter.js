(function () {
  "use strict";

  function ctrls(
    decrement,
    counterContainer,
    counterNum,
    counterInput,
    increment
  ) {
    var _this = this;

    this.counter = 1;
    this.els = {
      decrement: decrement,
      counter: {
        container: counterContainer,
        num: counterNum,
        input: counterInput,
      },
      increment: increment,
    };

    this.decrement = function () {
      var counter = _this.getCounter();
      var nextCounter = _this.counter > 1 ? --counter : counter;
      _this.setCounter(nextCounter);
    };

    this.increment = function () {
      var counter = _this.getCounter();
      var nextCounter = counter < 99 ? ++counter : counter;
      _this.setCounter(nextCounter);
    };

    this.getCounter = function () {
      return _this.counter;
    };

    this.setCounter = function (nextCounter) {
      _this.counter = nextCounter;
    };

    this.debounce = function (callback) {
      setTimeout(callback, 100);
    };

    this.render = function (hideClassName, visibleClassName) {
      _this.els.counter.num.classList.add(hideClassName);

      setTimeout(function () {
        _this.els.counter.num.innerText = _this.getCounter();
        _this.els.counter.input.value = _this.getCounter();
        _this.els.counter.num.classList.add(visibleClassName);
      }, 100);

      setTimeout(function () {
        _this.els.counter.num.classList.remove(hideClassName);
        _this.els.counter.num.classList.remove(visibleClassName);
      }, 200);
    };

    this.ready = function () {
      _this.els.decrement.addEventListener("click", function () {
        _this.debounce(function () {
          _this.decrement();
          _this.render("is-decrement-hide", "is-decrement-visible");
        });
      });

      _this.els.increment.addEventListener("click", function () {
        _this.debounce(function () {
          _this.increment();
          _this.render("is-increment-hide", "is-increment-visible");
        });
      });

      _this.els.counter.input.addEventListener("input", function (e) {
        var parseValue = parseInt(e.target.value);
        if (!isNaN(parseValue)) {
          if (parseValue >= 1 && parseValue <= 99) {
            _this.setCounter(parseValue);
          } else if (parseValue > 99) {
            _this.setCounter(99);
          }
          _this.render();
        }
      });

      _this.els.counter.input.addEventListener("focus", function (e) {
        _this.els.counter.container.classList.add("is-input");
      });

      _this.els.counter.input.addEventListener("blur", function (e) {
        _this.els.counter.container.classList.remove("is-input");
        _this.render();
      });
    };

    this.ready();
  }

  // init
  document.addEventListener("DOMContentLoaded", function () {
    var counters = document.querySelectorAll(".global-modal-counter-container");
    counters.forEach(function (container) {
      var decrement = container.querySelector(".ctrl-button-decrement");
      var counterContainer = container.querySelector(".ctrl-counter");
      var counterNum = container.querySelector(".ctrl-counter-num");
      var counterInput = container.querySelector(".ctrl-counter-input");
      var increment = container.querySelector(".ctrl-button-increment");

      new ctrls(
        decrement,
        counterContainer,
        counterNum,
        counterInput,
        increment
      );
    });
  });
})();
