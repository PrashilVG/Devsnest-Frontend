const car = document.querySelector(".car");

car.onmousedown = function (event) {
  car.style.position = "absolute";

  function moveAt(pageX, pageY) {
    car.style.left = pageX - car.offsetWidth / 2 + "px";
    car.style.top = pageY - car.offsetHeight / 2 + "px";
  }

  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  car.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    car.onmouseup = null;
  };

  car.ondragstart = function () {
    return false;
  };
};