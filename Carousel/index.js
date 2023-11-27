// Contenu pour le premier carousel
const text1_options = ["Homepage", "Page_contact"];
const text2_options = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor est, accumsan quis arcu vitae.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor est, accumsan quis arcu vitae.",
];
const color_options = ["#555", "#666", "#777", "#888"];
const image_options = ["./img/first-hover.jpg", "./img/first.jpg"];

// Contenu pour le deuxième carousel
const text1_options_2 = ["Test_1", "Test_2"];
const text2_options_2 = ["Description du Test 1.", "Description du Test 2."];
const color_options_2 = ["#123", "#456", "#789", "#ABC"];
const image_options_2 = ["./img/first-hover.jpg", "./img/first.jpg"];

// Pour le premier carousel
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

// Pour le deuxième carousel
var i2 = 0;
const currentOptionText1_2 = document.getElementById("current-option-text1-2");
const currentOptionText2_2 = document.getElementById("current-option-text2-2");
const currentOptionImage_2 = document.getElementById("image-2");
const carousel_2 = document.getElementById("carousel-wrapper2");
const mainMenu_2 = document.getElementById("menu-2");
const optionPrevious_2 = document.getElementById("previous-option-2");
const optionNext_2 = document.getElementById("next-option-2");

// Fonction d'initialisation du premier carousel
function initializeCarousel1() {
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
}

// Fonction d'initialisation du deuxième carousel
function initializeCarousel2() {
  currentOptionText1_2.innerText = text1_options_2[i2];
  currentOptionText2_2.innerText = text2_options_2[i2];
  currentOptionImage_2.style.backgroundImage =
    "url(" + image_options_2[i2] + ")";
  mainMenu_2.style.background = color_options_2[i2];
}

// Appelle les fonctions d'initialisation lors du chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  initializeCarousel1();
  initializeCarousel2();
});

// Ajoute des gestionnaires d'événements pour le premier carousel
optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};

// Ajoute des gestionnaires d'événements pour le deuxième carousel
optionNext_2.onclick = function () {
  i2 = i2 + 1;
  i2 = i2 % text1_options_2.length;
  currentOptionText1_2.dataset.nextText = text1_options_2[i2];
  currentOptionText2_2.dataset.nextText = text2_options_2[i2];
  mainMenu_2.style.background = color_options_2[i2];
  carousel_2.classList.add("anim-next");

  setTimeout(() => {
    currentOptionImage_2.style.backgroundImage =
      "url(" + image_options_2[i2] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1_2.innerText = text1_options_2[i2];
    currentOptionText2_2.innerText = text2_options_2[i2];
    carousel_2.classList.remove("anim-next");
  }, 650);
};

optionPrevious_2.onclick = function () {
  if (i2 === 0) {
    i2 = text1_options_2.length;
  }
  i2 = i2 - 1;
  currentOptionText1_2.dataset.previousText = text1_options_2[i2];
  currentOptionText2_2.dataset.previousText = text2_options_2[i2];
  mainMenu_2.style.background = color_options_2[i2];
  carousel_2.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage_2.style.backgroundImage =
      "url(" + image_options_2[i2] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1_2.innerText = text1_options_2[i2];
    currentOptionText2_2.innerText = text2_options_2[i2];
    carousel_2.classList.remove("anim-previous");
  }, 650);
};
