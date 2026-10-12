```javascript
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selected = button.dataset.filter;

      buttons.forEach(function (item) {
        item.setAttribute(
          "aria-pressed",
          String(item === button)
        );
      });

      cards.forEach(function (card) {
        const matches =
          selected === "tutti" ||
          card.dataset.category === selected;

        card.hidden = !matches;
      });
    });
  });
});
```