const container = document.querySelector(".container");

window.addEventListener("keydown", (e) => {
  container.innerHTML = `
  <div class="card">
  ${e.keyCode}
  </div>;
  <div class="key">
      ${e.key === " " ? "Space" : e.key}
      <span> Key is Pressed</span>
  </div>`;
});