/* ╔══════════════════════════════════════════════════════════════╗
   ║            🛒  NOVAPLAY — Liste des produits               ║
   ║                                                            ║
   ║  Pour ajouter un produit :                                 ║
   ║  1. Copie un bloc { ... }                                  ║
   ║  2. Ajoute une virgule après le bloc précédent             ║
   ║  3. Remplis les champs                                     ║
   ║                                                            ║
   ║  Champs disponibles :                                      ║
   ║  id       → identifiant unique, sans espaces               ║
   ║  icon     → emoji affiché sur la carte                     ║
   ║  badge    → "Nouveau" | "Populaire" | "" (= pas de badge)  ║
   ║  cat      → catégorie (filtre automatique dans la shop)    ║
   ║  name     → nom du produit                                 ║
   ║  desc     → description courte (1-2 lignes)                ║
   ║  features → tableau de points forts (max 4)                ║
   ║  price    → prix en euros (nombre décimal)                 ║
   ║  stripe   → ton lien Stripe Payment Link                   ║
   ║  paypal   → ton lien paypal.me/... ou bouton PayPal        ║
   ╚══════════════════════════════════════════════════════════════╝ */

const PRODUCTS = [

  {
    id:       "bot-discord",
    icon:     "🤖",
    badge:    "Nouveau",
    cat:      "Bot Discord",
    name:     "Bot Discord Complet",
    desc:     "Bot Discord complet avec toutes les fonctionnalités essentielles pour gérer votre serveur.",
    features: [
      "Configuration incluse",
      "Support 7j/7",
      "Mises à jour gratuites",
      "Livraison instantanée"
    ],
    price:   9.99,
    stripe:  "#",
    paypal:  "#"
  },

  {
    id:       "cheat-cs2",
    icon:     "💻",
    badge:    "Populaire",
    cat:      "Cheats",
    name:     "Source Code Cheat CS2",
    desc:     "Source code complet pour cheat CS2 professionnel.",
    features: [
      "Code source complet",
      "Bien documenté",
      "Facilement modifiable",
      "Livraison instantanée"
    ],
    price:   29.99,
    stripe:  "#",
    paypal:  "#"
  },

  {
    id:       "combat-master",
    icon:     "⚔️",
    badge:    "Nouveau",
    cat:      "Cheats",
    name:     "Source Code Cheat Combat Master",
    desc:     "Outil de combat avancé et performance optimisée.",
    features: [
      "Interface intuitive",
      "Très performant",
      "Support complet",
      "Mise à jour régulière"
    ],
    price:   19.99,
    stripe:  "#",
    paypal:  "#"
  }

];
