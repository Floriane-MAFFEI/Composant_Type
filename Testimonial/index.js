// Ajoutez ces lignes au début de votre fichier JS pour stocker l'ID de l'intervalle
let intervalId;

// Sélection des différents éléments
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = testimonialsContainer.querySelector(".testimonial");
const logo = testimonialsContainer.querySelector(".logo");
const username = testimonialsContainer.querySelector(".username");
const role = testimonialsContainer.querySelector(".role");

// Contient les témoignages
const testimonials = [
  {
    name: "John Doe",
    position: "DevOps",
    photo: "./img/avatar.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,ullam?",
  },
  {
    name: "Flo Smith",
    position: "Software Engineer",
    photo: "./img/avatar.jpg",
    text: "Totam expedita amet ipsam corrupti tempore maxime quibusdam inventore, aut iusto consectetur sapiente. Voluptas labore sunt expedita quo. Iure, doloremque!",
  },
  {
    name: "Martin Dupont",
    position: "Marketing",
    photo: "./img/avatar.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,ullam? Totam expedita amet ipsam corrupti tempore maxime quibusdam inventore, aut iusto consectetur sapiente. Voluptas labore sunt expedita quo. Iure, doloremque!",
  },
];

// Initialisation de l'index sur le témoignage actuel
let index = 1;

// Fonction de mise à jour du témoignage dans le DOM
function updateTestimonial() {
  // Récupération des propriétés du témoignage actuel
  let { name, position, photo, text } = testimonials[index];

  // Mise à jour des éléments HTML avec les propriétés extraites
  testimonial.innerHTML = text;
  logo.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  // On incrémente l'indice pour passer au témoignage suivant
  index++;

  // Si l'indice dépasse la longueur du tableau,
  // remise à zéro pour créer une boucle
  // et redémarrer au premier témoignage
  if (index > testimonials.length - 1) {
    index = 0;
  }
}

// Appelle de la fonction toutes les 10 secondes
intervalId = setInterval(updateTestimonial, 10000);

// Ajoutez ces fonctions pour changer de témoignage en utilisant les flèches
function changeTestimonial(direction) {
  // Arrêtez l'intervalle avant de changer de témoignage
  clearInterval(intervalId);

  // Mettez à jour l'indice en fonction de la direction (1 pour suivant, -1 pour précédent)
  index += direction;

  // Si l'indice dépasse la longueur du tableau, remise à zéro pour créer une boucle
  // et redémarrer au premier témoignage
  if (index >= testimonials.length) {
    index = 0;
  } else if (index < 0) {
    index = testimonials.length - 1;
  }

  // Mise à jour du témoignage dans le DOM
  updateTestimonial();

  // Réinitialisez la barre de progression
  resetProgressBar();

  // Redémarrez l'intervalle après le changement de témoignage
  intervalId = setInterval(updateTestimonial, 10000);
}

// Fonction pour réinitialiser la barre de progression
function resetProgressBar() {
  const progressBar = testimonialsContainer.querySelector(".progress-bar");
  progressBar.style.animation = "none"; // Supprime l'animation actuelle
  void progressBar.offsetWidth; // Forcez une réinitialisation du style (retrigger reflow)
  progressBar.style.animation = "grow 10s linear infinite"; // Réapplique l'animation
}

// Ajoutez un gestionnaire d'événements pour arrêter l'intervalle lorsqu'on clique sur les flèches
document.querySelector(".arrow-right").addEventListener("click", function () {
  stopInterval();
  changeTestimonial(1);
});
