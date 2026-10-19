document.addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("message");
  const button = document.getElementById("change-message");
  const clickCount = document.getElementById("click-count");

  let count = 0;

  if (button && message && clickCount) {
    button.addEventListener("click", () => {
      count += 1;
      message.textContent = `Button clicked ${count} time${count === 1 ? "" : "s"}.`;
      clickCount.textContent = `Click count: ${count}`;
    });
  }
});
