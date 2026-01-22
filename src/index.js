// Données des animaux à adopter
const animalsToAdopt = [
  {
    name: "Lucky",
    picture: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=287&fit=crop"
  },
  {
    name: "Symba",
    picture: "https://images.unsplash.com/photo-1573865526739-10c1de0ac5b0?w=200&h=200&fit=crop"
  },
  {
    name: "Léo",
    picture: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=200&h=200&fit=crop"
  },
  {
    name: "Milo",
    picture: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&h=200&fit=crop"
  },
  {
    name: "Charly",
    picture: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=200&h=200&fit=crop"
  }
];

/**
 * Crée un élément de carte pour un animal
 * @param {string} title - Le nom de l'animal
 * @param {string} imageUrl - L'URL de l'image de l'animal
 * @returns {HTMLElement} L'élément de carte créé
 * @throws {Error} Si les paramètres sont manquants ou invalides
 */
function createCard(title, imageUrl) {
  // Validation des paramètres
  if (!title || typeof title !== 'string') {
    throw new Error('Le paramètre title est requis et doit être une chaîne de caractères');
  }
  if (!imageUrl || typeof imageUrl !== 'string') {
    throw new Error('Le paramètre imageUrl est requis et doit être une chaîne de caractères');
  }

  // Création de la carte principale
  const card = document.createElement("div");
  card.classList.add("card");

  // Création de l'en-tête de la carte
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  // Création de l'image de la carte
  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  // Création du corps de la carte
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  // Création du titre de la carte
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;
  cardBody.appendChild(cardTitle);

  // Création du bouton d'adoption
  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.textContent = "Adopt Now";
  cardBody.appendChild(cardButton);

  return card;
}

/**
 * Initialise l'application en créant les cartes pour tous les animaux
 */
function initApp() {
  const cardsContainer = document.querySelector(".cards");

  // Vérification que le conteneur existe
  if (!cardsContainer) {
    console.error('Erreur : Le conteneur .cards est introuvable dans le DOM');
    return;
  }

  // Création et ajout des cartes pour chaque animal
  animalsToAdopt.forEach(animal => {
    try {
      const card = createCard(animal.name, animal.picture);
      cardsContainer.appendChild(card);
    } catch (error) {
      console.error(`Erreur lors de la création de la carte pour ${animal.name}:`, error);
    }
  });
}

// Initialisation de l'application au chargement du DOM
if (typeof document !== 'undefined') {
  initApp();
}

// Export pour les tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createCard,
    initApp,
    animalsToAdopt
  };
}
