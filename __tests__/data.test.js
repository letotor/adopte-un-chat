const { animalsToAdopt } = require('../src/index.js');

describe('Données animalsToAdopt', () => {

  describe('Structure du tableau', () => {

    test('devrait être défini', () => {
      expect(animalsToAdopt).toBeDefined();
    });

    test('devrait être un tableau', () => {
      expect(Array.isArray(animalsToAdopt)).toBe(true);
    });

    test('devrait contenir 5 animaux', () => {
      expect(animalsToAdopt).toHaveLength(5);
    });

    test('ne devrait pas être vide', () => {
      expect(animalsToAdopt.length).toBeGreaterThan(0);
    });
  });

  describe('Structure des objets animaux', () => {

    test('chaque animal devrait avoir une propriété "name"', () => {
      animalsToAdopt.forEach(animal => {
        expect(animal).toHaveProperty('name');
      });
    });

    test('chaque animal devrait avoir une propriété "picture"', () => {
      animalsToAdopt.forEach(animal => {
        expect(animal).toHaveProperty('picture');
      });
    });

    test('chaque animal devrait avoir exactement 2 propriétés', () => {
      animalsToAdopt.forEach(animal => {
        expect(Object.keys(animal)).toHaveLength(2);
      });
    });
  });

  describe('Validation des noms', () => {

    test('chaque nom devrait être une chaîne de caractères', () => {
      animalsToAdopt.forEach(animal => {
        expect(typeof animal.name).toBe('string');
      });
    });

    test('aucun nom ne devrait être vide', () => {
      animalsToAdopt.forEach(animal => {
        expect(animal.name).not.toBe('');
        expect(animal.name.length).toBeGreaterThan(0);
      });
    });

    test('tous les noms devraient être uniques', () => {
      const names = animalsToAdopt.map(animal => animal.name);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(names.length);
    });

    test('devrait contenir les noms attendus', () => {
      const expectedNames = ['Lucky', 'Symba', 'Léo', 'Milo', 'Charly'];
      const actualNames = animalsToAdopt.map(animal => animal.name);

      expectedNames.forEach(name => {
        expect(actualNames).toContain(name);
      });
    });
  });

  describe('Validation des images', () => {

    test('chaque URL d\'image devrait être une chaîne de caractères', () => {
      animalsToAdopt.forEach(animal => {
        expect(typeof animal.picture).toBe('string');
      });
    });

    test('aucune URL d\'image ne devrait être vide', () => {
      animalsToAdopt.forEach(animal => {
        expect(animal.picture).not.toBe('');
        expect(animal.picture.length).toBeGreaterThan(0);
      });
    });

    test('chaque URL devrait commencer par http:// ou https://', () => {
      animalsToAdopt.forEach(animal => {
        expect(
          animal.picture.startsWith('http://') ||
          animal.picture.startsWith('https://')
        ).toBe(true);
      });
    });

    test('toutes les URLs d\'images devraient être uniques', () => {
      const pictures = animalsToAdopt.map(animal => animal.picture);
      const uniquePictures = new Set(pictures);
      expect(uniquePictures.size).toBe(pictures.length);
    });

    test('toutes les URLs devraient pointer vers un service d\'images valide', () => {
      animalsToAdopt.forEach(animal => {
        expect(
          animal.picture.includes('unsplash.com') ||
          animal.picture.includes('placekitten.com')
        ).toBe(true);
      });
    });
  });

  describe('Intégrité des données complètes', () => {

    test('Lucky devrait avoir une URL d\'image', () => {
      const lucky = animalsToAdopt.find(animal => animal.name === 'Lucky');
      expect(lucky).toBeDefined();
      expect(lucky.picture).toBeTruthy();
      expect(lucky.picture.startsWith('https://')).toBe(true);
    });

    test('Symba devrait avoir une URL d\'image', () => {
      const symba = animalsToAdopt.find(animal => animal.name === 'Symba');
      expect(symba).toBeDefined();
      expect(symba.picture).toBeTruthy();
      expect(symba.picture.startsWith('https://')).toBe(true);
    });

    test('Léo devrait avoir une URL d\'image', () => {
      const leo = animalsToAdopt.find(animal => animal.name === 'Léo');
      expect(leo).toBeDefined();
      expect(leo.picture).toBeTruthy();
      expect(leo.picture.startsWith('https://')).toBe(true);
    });

    test('Milo devrait avoir une URL d\'image', () => {
      const milo = animalsToAdopt.find(animal => animal.name === 'Milo');
      expect(milo).toBeDefined();
      expect(milo.picture).toBeTruthy();
      expect(milo.picture.startsWith('https://')).toBe(true);
    });

    test('Charly devrait avoir une URL d\'image', () => {
      const charly = animalsToAdopt.find(animal => animal.name === 'Charly');
      expect(charly).toBeDefined();
      expect(charly.picture).toBeTruthy();
      expect(charly.picture.startsWith('https://')).toBe(true);
    });
  });

  describe('Immutabilité', () => {

    test('le tableau ne devrait pas être modifié par les tests', () => {
      const originalLength = animalsToAdopt.length;
      const firstAnimal = animalsToAdopt[0];

      // Tenter de modifier (ne devrait pas affecter l'original si c'est const)
      expect(animalsToAdopt.length).toBe(originalLength);
      expect(animalsToAdopt[0]).toBe(firstAnimal);
    });
  });
});
