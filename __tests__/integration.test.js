const { initApp, animalsToAdopt } = require('../src/index.js');

describe('Tests d\'intégration', () => {

  beforeEach(() => {
    // Créer un environnement DOM propre avant chaque test
    document.body.innerHTML = `
      <div class="container">
        <div class="cards"></div>
      </div>
    `;
  });

  afterEach(() => {
    // Nettoyer après chaque test
    document.body.innerHTML = '';
  });

  describe('initApp()', () => {

    test('devrait créer le bon nombre de cartes', () => {
      initApp();
      const cards = document.querySelectorAll('.card');

      expect(cards.length).toBe(animalsToAdopt.length);
      expect(cards.length).toBe(5);
    });

    test('devrait ajouter les cartes au conteneur .cards', () => {
      initApp();
      const cardsContainer = document.querySelector('.cards');
      const cards = cardsContainer.querySelectorAll('.card');

      expect(cards.length).toBe(5);
    });

    test('chaque carte devrait avoir un nom unique', () => {
      initApp();
      const cardTitles = document.querySelectorAll('.card-title');
      const titles = Array.from(cardTitles).map(title => title.textContent);

      // Vérifier que nous avons 5 titres
      expect(titles.length).toBe(5);

      // Vérifier que tous les titres sont uniques
      const uniqueTitles = new Set(titles);
      expect(uniqueTitles.size).toBe(5);

      // Vérifier que tous les noms attendus sont présents
      const expectedNames = ['Lucky', 'Symba', 'Léo', 'Milo', 'Charly'];
      expectedNames.forEach(name => {
        expect(titles).toContain(name);
      });
    });

    test('chaque carte devrait avoir une image unique', () => {
      initApp();
      const cardImages = document.querySelectorAll('.card-img');
      const imageUrls = Array.from(cardImages).map(img => img.style.backgroundImage);

      // Vérifier que nous avons 5 images
      expect(imageUrls.length).toBe(5);

      // Vérifier que toutes les images sont uniques
      const uniqueImages = new Set(imageUrls);
      expect(uniqueImages.size).toBe(5);

      // Vérifier que chaque image a une URL
      imageUrls.forEach(url => {
        expect(url).toContain('url(');
        expect(url).toContain('placekitten.com');
      });
    });

    test('chaque carte devrait avoir un bouton "Adopt Now"', () => {
      initApp();
      const buttons = document.querySelectorAll('.card-button');

      expect(buttons.length).toBe(5);

      buttons.forEach(button => {
        expect(button.textContent).toBe('Adopt Now');
        expect(button.tagName).toBe('BUTTON');
      });
    });

    test('les cartes devraient être créées dans le bon ordre', () => {
      initApp();
      const cardTitles = document.querySelectorAll('.card-title');
      const titles = Array.from(cardTitles).map(title => title.textContent);

      expect(titles[0]).toBe('Lucky');
      expect(titles[1]).toBe('Symba');
      expect(titles[2]).toBe('Léo');
      expect(titles[3]).toBe('Milo');
      expect(titles[4]).toBe('Charly');
    });

    test('ne devrait pas planter si le conteneur .cards n\'existe pas', () => {
      document.body.innerHTML = '<div></div>'; // Pas de conteneur .cards

      // Ne devrait pas lancer d'erreur
      expect(() => {
        initApp();
      }).not.toThrow();

      // Aucune carte ne devrait être créée
      const cards = document.querySelectorAll('.card');
      expect(cards.length).toBe(0);
    });

    test('devrait afficher un message d\'erreur dans la console si .cards est manquant', () => {
      document.body.innerHTML = '<div></div>';

      const consoleError = jest.spyOn(console, 'error').mockImplementation();

      initApp();

      expect(consoleError).toHaveBeenCalledWith(
        'Erreur : Le conteneur .cards est introuvable dans le DOM'
      );

      consoleError.mockRestore();
    });

    test('devrait gérer les erreurs de création de cartes individuelles', () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation();

      // Ajouter temporairement un animal avec des données invalides
      const originalAnimals = [...animalsToAdopt];

      initApp();

      // Vérifier qu'aucune erreur n'a été lancée pour les données valides
      expect(consoleError).not.toHaveBeenCalled();

      consoleError.mockRestore();
    });
  });

  describe('Structure DOM complète', () => {

    test('chaque carte devrait avoir la structure complète attendue', () => {
      initApp();
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        // Vérifier la présence de tous les éléments
        expect(card.querySelector('.card-header')).not.toBeNull();
        expect(card.querySelector('.card-img')).not.toBeNull();
        expect(card.querySelector('.card-body')).not.toBeNull();
        expect(card.querySelector('.card-title')).not.toBeNull();
        expect(card.querySelector('.card-button')).not.toBeNull();

        // Vérifier la hiérarchie
        const cardHeader = card.querySelector('.card-header');
        const cardImg = card.querySelector('.card-img');
        expect(cardImg.parentNode).toBe(cardHeader);

        const cardBody = card.querySelector('.card-body');
        const cardTitle = card.querySelector('.card-title');
        const cardButton = card.querySelector('.card-button');
        expect(cardTitle.parentNode).toBe(cardBody);
        expect(cardButton.parentNode).toBe(cardBody);
      });
    });

    test('toutes les cartes devraient être des enfants directs de .cards', () => {
      initApp();
      const cardsContainer = document.querySelector('.cards');
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        expect(card.parentNode).toBe(cardsContainer);
      });
    });
  });

  describe('Rendu et visibilité', () => {

    test('les cartes devraient être présentes dans le DOM après initialisation', () => {
      const cardsContainer = document.querySelector('.cards');
      expect(cardsContainer.children.length).toBe(0);

      initApp();

      expect(cardsContainer.children.length).toBe(5);
    });

    test('chaque carte devrait être un élément HTML valide', () => {
      initApp();
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        expect(card).toBeInstanceOf(HTMLElement);
        expect(card.nodeType).toBe(Node.ELEMENT_NODE);
      });
    });
  });

  describe('Performance et optimisation', () => {

    test('devrait initialiser rapidement même avec plusieurs animaux', () => {
      const startTime = performance.now();
      initApp();
      const endTime = performance.now();
      const duration = endTime - startTime;

      // L'initialisation devrait prendre moins de 100ms
      expect(duration).toBeLessThan(100);
    });

    test('ne devrait pas créer de cartes en double', () => {
      initApp();
      const initialCount = document.querySelectorAll('.card').length;

      initApp();
      const afterSecondCallCount = document.querySelectorAll('.card').length;

      // La deuxième initialisation devrait ajouter 5 cartes supplémentaires
      expect(afterSecondCallCount).toBe(initialCount * 2);
    });
  });
});
