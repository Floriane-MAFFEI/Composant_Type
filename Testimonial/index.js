// Sélection des différents éléments
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = testimonialsContainer.querySelector(".testimonial");
const logo = testimonialsContainer.querySelector(".logo");
const username = testimonialsContainer.querySelector(".username");
const role = testimonialsContainer.querySelector(".role");

// Contient les témoiignages
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

// Appelle de la fonction toute les 10 secondes
setInterval(updateTestimonial, 10000);
