const box = document.querySelectorAll(".box");
const booked = document.querySelector(".booked");
const unbooked = document.querySelector(".unbooked");

let a = 0,
  b = 49;

box.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("boxselected")) {
      item.classList.remove("boxselected");
      a = a - 1;
      b = b + 1;
      booked.innerHTML = a;
      unbooked.innerHTML = b;
    } else {
      item.classList.add("boxselected");
      a = a + 1;
      b = b - 1;
      booked.innerHTML = a;
      unbooked.innerHTML = b;
    }
  });
});
