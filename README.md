# BadmintonTraining App

## Description
BadmintonTraining est une application web développée avec Vue.js qui propose des vidéos d'entraînement de badminton organisées par catégories. 

## Fonctionnalités
- **Navigation responsive** : Interface adaptative pour mobile et desktop
- **Catégories d'entraînement** :
  - Revers
  - Coup Droit
  - Service et Retour
  - Filet
  - Footwork (Déplacements)
  - Tactique
  - Musculation

## Structure du projet
```
badTrainingApplication/
├── public/
│   └── videos/
│       ├── coupdroit/
│       ├── filet/
│       ├── footwork/
│       ├── gym/
│       ├── revers/
│       ├── service/
│       └── tactique/
└── src/
    ├── components/
    │   ├── pages/
    │   │   ├── CoupDroit.vue
    │   │   ├── Filet.vue
    │   │   ├── Footwork.vue
    │   │   ├── Muscu.vue
    │   │   ├── Revers.vue
    │   │   ├── Service&Return.vue
    │   │   └── Tactics.vue
    │   ├── Accueil.vue
    │   ├── Navigation.vue
    │   └── VideoPlayer.vue
    └── router/
        └── index.js
```

## Technologies utilisées
- Vue.js 3
- Vue Router
- Tailwind CSS
- Vite

## Installation
1. Cloner le repository
```bash
git clone <url-du-repo>
```

2. Installer les dépendances
```bash
cd badTrainingApplication
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

## Déploiement
L'application est configurée pour être déployée sous le chemin `/BadmintonTraining/`. Pour construire l'application :
```bash
npm run build
```

## Sources des vidéos
- Instagram : [@rupeshp_bad](https://www.instagram.com/rupeshp_bad/)
- Instagram : [@birdie_badminton](https://www.instagram.com/birdie_badminton/)





## Animations de transition
L'application utilise des transitions Vue.js pour animer le menu mobile. La transition `slide-fade` applique automatiquement plusieurs classes CSS aux différentes étapes de l'animation :

| État | Classes CSS appliquées |
|------|----------------------|
| Avant l'entrée | `.slide-fade-enter-from` |
| Pendant l'entrée | `.slide-fade-enter-active` + `.slide-fade-enter-from`, puis `.slide-fade-enter-to` |
| Avant la sortie | `.slide-fade-leave-from` |
| Pendant la sortie | `.slide-fade-leave-active` + `.slide-fade-leave-from`, puis `.slide-fade-leave-to` |

Ces classes permettent d'animer l'apparition et la disparition du menu mobile de manière fluide.




## Système de Routes
L'application utilise Vue Router pour gérer la navigation entre les différentes pages.

### Configuration des Routes
Les routes sont définies dans `src/router/index.js` :

```javascript
const routes = [
  { path: '/', component: Accueil },
  { path: '/revers', component: Revers },
  { path: '/coup-droit', component: CoupDroit },
  { path: '/filet', component: Filet },
  { path: '/footwork', component: Footwork },
  { path: '/service&retour', component: Service },
  { path: '/tactique', component: Tactics },
  { path: '/musculation', component: Muscu }
]
```

### Base URL
L'application est configurée pour fonctionner avec un chemin de base `/BadmintonTraining/`. Cette configuration est définie dans :

- `vite.config.js` pour le build :
  ```javascript
  base: "/BadmintonTraining/"
  ```
- `router/index.js` pour le routage :
  ```javascript
  createWebHistory('/BadmintonTraining/')
  ```

### Navigation
La navigation peut se faire de deux manières :

1. **Via les composants `<router-link>` :**
```vue
<router-link to="/coup-droit">Coup Droit</router-link>
```

2. **Programmatiquement :**
```javascript
this.$router.push('/coup-droit')
```

### Affichage des Pages
Le composant `<router-view />` dans `App.vue` affiche dynamiquement le composant correspondant à la route actuelle.

### Mode Histoire
L'application utilise le mode histoire (`createWebHistory`), ce qui permet :
- Des URLs propres sans '#'
- Une navigation plus naturelle
- Un meilleur référencement



## Composant Timer

Le Timer est un composant d'entraînement interactif qui permet de gérer des séances d'intervalles.

### Fonctionnalités

- **Préréglages rapides** :
  - 30/30 (30s travail / 30s repos)
  - 45/15 (45s travail / 15s repos)
  - 20/10 (20s travail / 10s repos)
  - 40/20 (40s travail / 20s repos)

- **Configuration personnalisée** :
  - Temps de travail ajustable
  - Temps de repos ajustable
  - Nombre de séries configurable

- **Feedback sonore** :
  - Bip aigu au début du temps de travail
  - Bip grave à la fin du temps de travail
  - Bips courts pendant le compte à rebours

### Utilisation

1. **Configuration** :
   - Sélectionnez un préréglage ou
   - Définissez manuellement vos paramètres

2. **Contrôles** :
   - Démarrer : Lance le timer avec un compte à rebours de 5 secondes
   - Pause : Met en pause le timer
   - Reset : Réinitialise tous les paramètres

3. **Affichage** :
   - Temps restant au format MM:SS
   - État actuel (PRÉPARATION/TRAVAIL/REPOS)
   - Numéro de la série en cours

### Implémentation technique

- Utilisation de l'API Web Audio pour les signaux sonores
- État géré avec Vue.js Composition API (ref)
- Transitions fluides entre les phases
- Nettoyage automatique des intervalles lors du démontage



## Compilation et Déploiement

### Structure de Build
Lors de la compilation (`npm run build`), le projet est transformé en fichiers statiques :
```
dist/
├── index.html              # Point d'entrée HTML
├── assets/
│   ├── index-[hash].js    # JavaScript compilé
│   ├── index-[hash].css   # CSS compilé
│   └── ...                # Autres assets (images, etc.)
```

### Processus de Compilation
1. **Transformation des Composants**
   - Les fichiers `.vue` sont compilés en JavaScript
   - Les templates sont convertis en fonctions de rendu
   - Le CSS est extrait et optimisé
   - Les assets sont hashés pour la gestion du cache

2. **Optimisations**
   - Minification du code
   - Tree-shaking (élimination du code non utilisé)
   - Splitting des chunks
   - Compression des assets

### Différences Environnements

#### Développement (`npm run dev`)
- Serveur de développement Vite actif
- Hot Module Replacement (HMR)
- Compilation à la demande
- Source maps pour le débogage

#### Production (Build)
- Fichiers statiques optimisés
- Pas de serveur Node.js requis
- Performance optimisée
- Taille réduite

### Déploiement

Le projet compilé peut être déployé sur n'importe quel serveur web statique :

1. **GitHub Pages**
```bash
npm run deploy
```

2. **Serveur Web Traditionnel (Apache/Nginx)**
- Copier le contenu du dossier `dist`
- Configurer les redirections vers `index.html`

#### Configuration Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Configuration Nginx
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Notes Importantes
- L'application est une SPA (Single Page Application)
- Tout le routing est géré côté client
- Les fichiers statiques peuvent être mis en cache par le navigateur
- Le serveur doit rediriger toutes les routes vers `index.html`



## Configuration Vite

La configuration de Vite (`vite.config.js`) comprend plusieurs optimisations et mesures de sécurité :

### Sécurité
```javascript
server: {
  headers: {
    'X-Frame-Options': 'DENY',           // Prévient le clickjacking
    'X-Content-Type-Options': 'nosniff', // Prévient MIME-type sniffing
    'X-XSS-Protection': '1; mode=block', // Protection XSS
    'Strict-Transport-Security': 'max-age=31536000' // Force HTTPS
  }
}
```

### Optimisations de Build
```javascript
build: {
  minify: 'terser',      // Minification du code
  sourcemap: false,      // Désactivé en production pour la sécurité
  
  rollupOptions: {
    output: {
      manualChunks: {    // Séparation du code
        'vendor': ['vue', 'vue-router'],
        'tailwind': ['tailwindcss']
      }
    }
  },
  
  // Limites et compressions
  assetsInlineLimit: 4096,          // Inline les fichiers < 4kb
  chunkSizeWarningLimit: 500,       // Alerte si chunks > 500kb
  
  terserOptions: {
    compress: {
      drop_console: true,           // Supprime console.log
      drop_debugger: true          // Supprime debugger
    }
  }
}
```

### Dépendances
```javascript
optimizeDeps: {
  include: ['vue', 'vue-router']    // Pré-bundling des dépendances
}
```

### Base URL
```javascript
base: "/BadmintonTraining/"         // URL de base pour GitHub Pages
```

### Pourquoi ces configurations ?

1. **Sécurité** :
   - Protection contre les attaques XSS
   - Prévention du clickjacking
   - Forçage HTTPS
   - Headers de sécurité essentiels

2. **Performance** :
   - Minification du code
   - Chunking intelligent des dépendances
   - Optimisation des assets
   - Suppression du code de debug

3. **Déploiement** :
   - Configuration pour GitHub Pages
   - Gestion optimisée des routes
   - Compression des assets