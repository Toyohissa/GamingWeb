let title = document.querySelectorAll(".title");
let main = document.querySelector(".main_page");
let esports = document.querySelector(".esports");
let gamespage = document.querySelector(".games_page");
let gamename = document.querySelectorAll(".game_name");
let chosen = document.querySelector(".game_chosen");
let aboutus = document.querySelector(".about_us");
let navigator = document.querySelectorAll(".slide_navigator");
let slide = document.querySelectorAll(".slide");
let slides = document.querySelector(".slides");
let arr = [
  { name: "box1", color: "red" },
  { name: "box2", color: "green" },
  { name: "box3", color: "blue" },
];

function renderBoxes() {
  while (slides.hasChildNodes()) {
    slides.removeChild(slides.firstChild);
  }
  arr.forEach((box) => {
    const element = document.createElement("div");
    element.classList.add("slide");
    element.style.backgroundColor = box.color;
    slides.append(element);
  });
}

renderBoxes();

navigator[0].addEventListener("click", () => {
  let tempobj = [];

  for (let i = 0; i < arr.length; i++) {
    tempobj[i] = arr[i + 1];
    if (i == arr.length - 1) {
      tempobj[i] = arr[0];
    }
  }
  arr = tempobj;

  renderBoxes();
});
navigator[1].addEventListener("click", () => {
  let tempobj = [];

  for (let i = 0; i < arr.length; i++) {
    tempobj[i] = arr[i - 1];
    if (i == 0) {
      tempobj[i] = arr[arr.length - 1];
    }
  }
  arr = tempobj;

  renderBoxes();
});

title[1].addEventListener("click", () => {
  main.style.display = "none";
  esports.style.display = "flex";
  gamespage.style.display = "none";
  chosen.style.display = "none";
  aboutus.style.display = "none";
});
title[0].addEventListener("click", () => {
  main.style.display = "flex";
  esports.style.display = "none";
  gamespage.style.display = "none";
  chosen.style.display = "none";
  aboutus.style.display = "none";
});
title[2].addEventListener("click", () => {
  main.style.display = "none";
  esports.style.display = "none";
  gamespage.style.display = "flex";
  chosen.style.display = "none";
  aboutus.style.display = "none";
});

for (let i = 0; i < gamename.length; i++) {
  gamename[i].addEventListener("click", () => {
    main.style.display = "none";
    esports.style.display = "none";
    gamespage.style.display = "none";
    chosen.style.display = "flex";
    aboutus.style.display = "none";
  });
}
title[3].addEventListener("click", () => {
  main.style.display = "none";
  esports.style.display = "none";
  gamespage.style.display = "none";
  chosen.style.display = "none";
  aboutus.style.display = "flex";
});
