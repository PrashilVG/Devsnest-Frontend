let events = ["seeking", "playing", "play", "pause", "ended"];

let video = document.querySelector("video");

for (let event of events) {
  video.addEventListener(event, () => {
    console.log(event);
  });
}

document.body.addEventListener("click", (event) => {
  console.log("clicked body");
  console.log(event);
  event.stopPropagation();
});

document.documentElement.addEventListener("click", () => {
  console.log("clicked doc");
});