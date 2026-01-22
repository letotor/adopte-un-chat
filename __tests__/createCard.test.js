const { createCard } = require('../src/index.js');

describe('createCard()', () => {

  describe('Structure et classes CSS', () => {

    test('devrait créer une carte avec la structure correcte', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');

      expect(card).toBeDefined();
      expect(card.tagName).toBe('DIV');
      expect(card.classList.contains('card')).toBe(true);
    });

    test('devrait contenir un élément card-header', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');
      const cardHeader = card.querySelector('.card-header');

      expect(cardHeader).not.toBeNull();
      expect(cardHeader.tagName).toBe('DIV');
    });

    test('devrait contenir un élément card-img dans le card-header', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');
      const cardImg = card.querySelector('.card-header .card-img');

      expect(cardImg).not.toBeNull();
      expect(cardImg.tagName).toBe('DIV');
    });

    test('devrait contenir un élément card-body', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');
      const cardBody = card.querySelector('.card-body');

      expect(cardBody).not.toBeNull();
      expect(cardBody.tagName).toBe('DIV');
    });

    test('devrait contenir un titre h2 avec la classe card-title', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');
      const cardTitle = card.querySelector('.card-body .card-title');

      expect(cardTitle).not.toBeNull();
      expect(cardTitle.tagName).toBe('H2');
    });

    test('devrait contenir un bouton avec la classe card-button', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');
      const cardButton = card.querySelector('.card-body .card-button');

      expect(cardButton).not.toBeNull();
      expect(cardButton.tagName).toBe('BUTTON');
    });
  });

  describe('Contenu et données', () => {

    test('devrait définir le texte du titre correctement', () => {
      const testTitle = 'Minou';
      const card = createCard(testTitle, 'https://example.com/cat.jpg');
      const cardTitle = card.querySelector('.card-title');

      expect(cardTitle.textContent).toBe(testTitle);
    });

    test('devrait définir l\'URL de l\'image de fond correctement', () => {
      const testUrl = 'https://example.com/fluffy-cat.jpg';
      const card = createCard('Test Cat', testUrl);
      const cardImg = card.querySelector('.card-img');

      expect(cardImg.style.backgroundImage).toBe(`url(${testUrl})`);
    });

    test('devrait définir le texte du bouton sur "Adopt Now"', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');
      const cardButton = card.querySelector('.card-button');

      expect(cardButton.textContent).toBe('Adopt Now');
    });

    test('devrait gérer les noms d\'animaux avec des caractères spéciaux', () => {
      const specialNames = ['Léo', 'Charly', 'Félix & Minou', 'Chat N°1'];

      specialNames.forEach(name => {
        const card = createCard(name, 'https://example.com/cat.jpg');
        const cardTitle = card.querySelector('.card-title');
        expect(cardTitle.textContent).toBe(name);
      });
    });

    test('devrait gérer les URLs d\'images avec des paramètres', () => {
      const complexUrl = 'https://placekitten.com/200/300?format=jpg&quality=80';
      const card = createCard('Test Cat', complexUrl);
      const cardImg = card.querySelector('.card-img');

      expect(cardImg.style.backgroundImage).toBe(`url(${complexUrl})`);
    });
  });

  describe('Validation des paramètres', () => {

    test('devrait lancer une erreur si le titre est manquant', () => {
      expect(() => {
        createCard(null, 'https://example.com/cat.jpg');
      }).toThrow('Le paramètre title est requis');
    });

    test('devrait lancer une erreur si le titre est undefined', () => {
      expect(() => {
        createCard(undefined, 'https://example.com/cat.jpg');
      }).toThrow('Le paramètre title est requis');
    });

    test('devrait lancer une erreur si le titre est une chaîne vide', () => {
      expect(() => {
        createCard('', 'https://example.com/cat.jpg');
      }).toThrow('Le paramètre title est requis');
    });

    test('devrait lancer une erreur si le titre n\'est pas une chaîne', () => {
      expect(() => {
        createCard(123, 'https://example.com/cat.jpg');
      }).toThrow('Le paramètre title est requis et doit être une chaîne de caractères');
    });

    test('devrait lancer une erreur si l\'imageUrl est manquante', () => {
      expect(() => {
        createCard('Test Cat', null);
      }).toThrow('Le paramètre imageUrl est requis');
    });

    test('devrait lancer une erreur si l\'imageUrl est undefined', () => {
      expect(() => {
        createCard('Test Cat', undefined);
      }).toThrow('Le paramètre imageUrl est requis');
    });

    test('devrait lancer une erreur si l\'imageUrl est une chaîne vide', () => {
      expect(() => {
        createCard('Test Cat', '');
      }).toThrow('Le paramètre imageUrl est requis');
    });

    test('devrait lancer une erreur si l\'imageUrl n\'est pas une chaîne', () => {
      expect(() => {
        createCard('Test Cat', 12345);
      }).toThrow('Le paramètre imageUrl est requis et doit être une chaîne de caractères');
    });

    test('devrait lancer une erreur si les deux paramètres sont manquants', () => {
      expect(() => {
        createCard();
      }).toThrow();
    });
  });

  describe('Retour de la fonction', () => {

    test('devrait retourner un élément DOM', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');

      expect(card).toBeInstanceOf(HTMLElement);
    });

    test('ne devrait pas être attaché au document', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');

      expect(card.parentNode).toBeNull();
    });

    test('devrait retourner un nouvel élément à chaque appel', () => {
      const card1 = createCard('Cat 1', 'https://example.com/cat1.jpg');
      const card2 = createCard('Cat 2', 'https://example.com/cat2.jpg');

      expect(card1).not.toBe(card2);
    });
  });

  describe('Hiérarchie DOM', () => {

    test('card-header devrait être un enfant direct de card', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');
      const cardHeader = card.querySelector('.card-header');

      expect(cardHeader.parentNode).toBe(card);
    });

    test('card-img devrait être un enfant direct de card-header', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');
      const cardImg = card.querySelector('.card-img');
      const cardHeader = card.querySelector('.card-header');

      expect(cardImg.parentNode).toBe(cardHeader);
    });

    test('card-body devrait être un enfant direct de card', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');
      const cardBody = card.querySelector('.card-body');

      expect(cardBody.parentNode).toBe(card);
    });

    test('card-title devrait être un enfant direct de card-body', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');
      const cardTitle = card.querySelector('.card-title');
      const cardBody = card.querySelector('.card-body');

      expect(cardTitle.parentNode).toBe(cardBody);
    });

    test('card-button devrait être un enfant direct de card-body', () => {
      const card = createCard('Test Cat', 'https://example.com/cat.jpg');
      const cardButton = card.querySelector('.card-button');
      const cardBody = card.querySelector('.card-body');

      expect(cardButton.parentNode).toBe(cardBody);
    });
  });
});
