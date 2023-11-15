// Récupération de l'élément avec la classe "scroll-line"
// et stockage dans la variable "scrollline".
const scrollline = document.querySelector(".scroll-line");

function fillscrollline() {
  // Récupèration de la hauteur de la fenêtre du navigateur.
  const windowHeight = window.innerHeight;

  // Récupèration de la hauteur totale du contenu de la page,
  // y compris la partie non visible (scrollée).
  const fullHeight = document.body.clientHeight;

  // Récupèration de la quantité de pixels que la page a scrollée verticalement.
  const scrolled = window.scrollY;

  // Calcule du pourcentage de la page qui a été scrollée.
  const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

  // Modification de la largeur de l'élément avec la classe "scroll-line"
  // pour refléter le pourcentage scrollé.
  scrollline.style.width = percentScrolled + "%";
}

// Ajoute d'un écouteur d'événements pour détecter le défilement de la page
// qui appelera la fonction "fillscrollline" au déclenchement.
window.addEventListener("scroll", fillscrollline);
