# ✏️ Exercice DOM - Adopte un chat
## 💪 Défi
Nous allons créer un petit site Internet pour l'adoption de chats.

Avec la manipulation du dom, nous pouvons créer facilement quelques éléments HTML à partir d'une liste d'éléments sans avoir à les recréer à l'infini.

Dans cet exercice, tu verras comment nous pouvons générer facilement des cartes à partir d'un tableau d'objets.

Dans le codesandbox qui suit, tu trouveras un fichier JavaScript appelé index.js dans lequel se trouve un tableau avec la liste de chats à adopter :
```JS  
const animalsToAdopt = [
  {
    name: "Lucky",
    picture: "https://placekitten.com/200/287"
  },
  {
    name: "Symba",
    picture: "https://placekitten.com/200/139"
  },
  {
    name: "Léo",
    picture: "https://placekitten.com/200/90"
  },
  {
    name: "Milo",
    picture: "https://placekitten.com/200/194"
  },
  {
    name: "Charly",
    picture: "https://placekitten.com/200/179"
  }
];
```  
Notre objectif est de créer une carte pour chaque animal.  

De cette façon, si nous voulons ajouter un nouvel animal à la liste, il nous suffira d'ajouter un nouvel objet dans le tableau.  

Pour cela, nous avons besoin d'une fonction, car nous ne voulons pas répéter le même code encore et encore. Pour rendre cet exercice plus simple, nous avons déjà créé la fonction pour toi.  
```JS  
function createCard(title, imageUrl) {
}
```  
Chaque carte aura un titre ("title") et une image ("imageUrl") différente.

Pour créer de nouveaux éléments DOM, nous devons utiliser document.createElement().

Nous avons ajouté quelques exemples sur la façon de procéder.
```JS  
const card = document.createElement("div");
card.classList.add("card");
cards.appendChild(card);
```  
Tu dois créer l'élément, puis ajouter la bonne classe, et enfin, ajouter l'élément à son parent.

Regarde l'exemple, et crée les éléments manquants:

cardBody : un div avec la classe card-body ajoutée à card.
cardTitle : un h2 avec la classe card-title, ajoute-le title passé en paramètre au contenu du h2 (avec innerHTML) et ajoute l'élément à cardBody.
cardButton : un bouton avec la classe "card-button", le texte 'Adopt Now' (avec innerHTML) et ajoute-le à "cardBody'
Une fois que tu as terminé, crée une boucle for, qui boucle sur animalsToAdopt et crée une carte pour chaque élément du tableau.  

## 🧐 Critères d'acceptation
 La carte contient tous les éléments
 Il y a une carte pour chaque élément du tableau

## 🧪 Tests

Ce projet inclut une suite de tests complète avec Jest :

### Commandes disponibles

```bash
# Lancer tous les tests
npm test

# Lancer les tests en mode surveillance (watch)
npm run test:watch

# Générer un rapport de couverture de code
npm run test:coverage
```

### Couverture de tests

Le projet atteint une excellente couverture de code :
- ✅ Statements: 97.43%
- ✅ Branches: 87.5%
- ✅ Functions: 100%
- ✅ Lines: 97.43%

Les tests couvrent :
- **Tests unitaires** pour la fonction `createCard()`
- **Tests de validation** des données `animalsToAdopt`
- **Tests d'intégration** pour l'initialisation complète de l'application

## 🚀 Déploiement sur Netlify

### Déploiement automatique

Le projet est configuré pour un déploiement automatique sur Netlify :

1. **Connectez votre dépôt GitHub à Netlify**
2. **Configuration automatique** : Le fichier `netlify.toml` configure tout automatiquement
3. **Build et déploiement** : Netlify exécutera `npm run build` et publiera le dossier `dist/`

### Configuration Netlify

Le fichier `netlify.toml` inclut :
- ✅ Commande de build automatique (`npm run build`)
- ✅ Répertoire de publication (`dist`)
- ✅ Headers de sécurité (X-Frame-Options, CSP, etc.)
- ✅ Cache optimisé pour les assets statiques
- ✅ Compression et minification automatique
- ✅ Redirections pour SPA

### Déploiement manuel

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Déployer
netlify deploy --prod
```

### Variables d'environnement

Le projet utilise Node.js v18. La version est spécifiée dans le fichier `.nvmrc`.

## 🛠️ Développement

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start

# Builder pour la production
npm run build
```

### Structure du projet

```
adopte-un-chat/
├── __tests__/              # Tests Jest
│   ├── createCard.test.js  # Tests unitaires
│   ├── data.test.js        # Tests de validation
│   └── integration.test.js # Tests d'intégration
├── src/
│   ├── index.js            # Code JavaScript principal
│   └── styles.css          # Styles CSS
├── public/
│   └── _redirects          # Redirections Netlify
├── index.html              # Point d'entrée HTML
├── jest.config.js          # Configuration Jest
├── netlify.toml            # Configuration Netlify
└── package.json            # Dépendances et scripts
```

## SOLUTION
[DEMO adpote-un-chat](https://adopte-un-chat-dgwebcreation.netlify.app 'demo')
![screenshot adpote-un-chat](https://imgur.com/iuU8EqSl.png 'demo')

