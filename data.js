/*
 * Site content (English + French).
 * Edit this file to update the text, experience, education or skills.
 */
window.SITE = {
  githubUser: "X0vaH",

  // Repositories never shown in the project grid.
  hiddenRepos: ["X0vaH.github.io", "TP1-mobile"],

  // Optional per-repo overrides: nicer title (string, or { en, fr }), English/French description, order.
  // Anything not listed here is still shown using its GitHub name and description.
  projects: {
    "sheet-happens": {
      title: "Sheet Happens",
      featured: 1,
      en: "Full-stack D&D 5e character builder for a real client: guided creation, rules applied automatically, level-up 1 → 5. React + Laravel, Dockerized with Nginx.",
      fr: "Créateur de personnages D&D 5e full-stack pour un vrai client : création guidée, règles appliquées automatiquement, montée de niveau 1 → 5. React + Laravel, Docker et Nginx."
    },
    "harmony": {
      title: "Harmony",
      featured: 2,
      en: "Cross-platform chat app with end-to-end encrypted DMs (RSA + AES): Laravel Reverb API, Electron desktop client and Expo / React Native mobile app.",
      fr: "Messagerie multiplateforme avec messages privés chiffrés de bout en bout (RSA + AES) : API Laravel Reverb, client Electron et app mobile Expo / React Native."
    },
    "ProjetClassementLNH-Android": {
      title: { en: "NHL Standings — Android", fr: "Classement LNH — Android" },
      featured: 3,
      en: "NHL standings app in Kotlin + Jetpack Compose (MVVM): offline Room cache, WorkManager sync, JSON export service, token auth and Firebase push notifications.",
      fr: "Classement de la LNH en Kotlin + Jetpack Compose (MVVM) : cache Room hors ligne, synchronisation WorkManager, export JSON, authentification par jeton et notifications push Firebase."
    },
    "jeu-de-dames": {
      title: { en: "Checkers — Android", fr: "Jeu de dames — Android" },
      featured: 4,
      en: "International draughts (10×10) Android app in Java with a reusable game engine: Manoury notation, captures, kings, undo, and JUnit / Espresso tests.",
      fr: "Jeu de dames internationales (10×10) sur Android en Java avec un moteur réutilisable : notation Manoury, prises, dames, annulation, tests JUnit / Espresso."
    },
    "donjon-console": {
      title: "Donjon",
      featured: 5,
      en: "Console roguelike in C# / .NET 6: random dungeon, treasures, traps, a monster chasing you every turn, and JSON save/resume.",
      fr: "Roguelike en console en C# / .NET 6 : donjon aléatoire, trésors, pièges, monstre qui vous poursuit et sauvegarde JSON."
    },
    "tirelire-banque-csharp": {
      title: { en: "Piggy Bank → Bank Account", fr: "Tirelire → Compte bancaire" },
      featured: 6,
      en: "Object-oriented C# in 9 steps, from a static piggy bank to a bank account (inheritance, exceptions), menu-driven console app, JSON persistence, 100 MSTest tests.",
      fr: "POO en C# en 9 étapes, d'une tirelire statique à un compte bancaire (héritage, exceptions), console à menus, persistance JSON, 100 tests MSTest."
    },
    "discord-voice-bot": {
      title: "Discord Voice Bot",
      featured: 7,
      en: "Python Discord bot that DMs you when someone joins a voice channel on your server.",
      fr: "Bot Discord en Python qui vous avertit en message privé quand quelqu'un rejoint un salon vocal."
    }
  },

  skills: {
    languages: ["Java", "Kotlin", "C#", "PHP", "JavaScript", "Python", "SQL", "HTML / CSS"],
    frameworks: ["Laravel", "React", "ASP.NET", "Jetpack Compose", "Electron", "Expo / React Native", "Docker", "Git"],
    soft: {
      en: ["Hard-working", "Logical", "Punctual", "Dedicated", "Respectful", "Disciplined"],
      fr: ["Travaillant", "Logique", "Ponctuel", "Dévoué", "Respectueux", "Discipliné"]
    }
  },

  experience: [
    {
      start: "2026", end: null,
      en: { role: "Parts Clerk (part-time)", org: "Canadian Tire", place: "Saint-Jean-sur-Richelieu" },
      fr: { role: "Commis aux pièces (temps partiel)", org: "Canadian Tire", place: "Saint-Jean-sur-Richelieu" }
    },
    {
      start: "2025", end: "2025",
      en: { role: "Dishwasher (part-time)", org: "Amélys, Résidence Vivre Ensemble", place: "Saint-Jean-sur-Richelieu" },
      fr: { role: "Plongeur (temps partiel)", org: "Amélys, Résidence Vivre Ensemble", place: "Saint-Jean-sur-Richelieu" }
    },
    {
      start: "2025", end: "2025", tech: true,
      en: { role: "IT Coordinator — CTC St-Jean (summer internship)", org: "Department of National Defence — IT Services Management Centre, National Cadet and Junior Canadian Rangers Support Group", place: "Saint-Jean-sur-Richelieu" },
      fr: { role: "Coordonnateur des technologies de l'information du CEC St-Jean (stage d'été)", org: "MDN — Centre de gestion des services TI, Gr Cadets et Rangers juniors canadiens", place: "Saint-Jean-sur-Richelieu" }
    },
    {
      start: "2024", end: "2025",
      en: { role: "Seasonal Sales Associate", org: "Best Buy", place: "Saint-Jean-sur-Richelieu" },
      fr: { role: "Vendeur saisonnier", org: "Best Buy", place: "Saint-Jean-sur-Richelieu" }
    },
    {
      start: "2024", end: "2024", tech: true,
      en: { role: "IT Coordinator — CTC Bagotville (summer internship)", org: "Department of National Defence — Bagotville Cadet Training Centre, under the IT Services Management Centre", place: "Bagotville" },
      fr: { role: "Coordonnateur des technologies de l'information du CEC Bagotville (stage d'été)", org: "MDN — Centre d'entraînement des cadets de Bagotville, sous le CGS TI du CRJC", place: "Bagotville" }
    },
    {
      start: "2023", end: "2023", tech: true,
      en: { role: "IT Student Intern (3 months)", org: "Department of National Defence — IT Services Management Centre, National Cadet and Junior Canadian Rangers Support Group", place: "Saint-Jean-sur-Richelieu" },
      fr: { role: "Stagiaire en informatique (3 mois)", org: "MDN — Centre de gestion des services TI, Gr Cadets et Rangers juniors canadiens", place: "Saint-Jean-sur-Richelieu" }
    },
    {
      start: "2022", end: "2024",
      en: { role: "Grocery Clerk", org: "Maxi & Cie", place: "Saint-Jean-sur-Richelieu" },
      fr: { role: "Commis d'épicerie", org: "Maxi & Cie", place: "Saint-Jean-sur-Richelieu" }
    },
    {
      start: "2020", end: "2022",
      en: { role: "Grocery Clerk", org: "IGA extra", place: "Saint-Jean-sur-Richelieu" },
      fr: { role: "Commis d'épicerie", org: "IGA extra", place: "Saint-Jean-sur-Richelieu" }
    }
  ],

  education: [
    {
      start: "2020", end: "2026", tech: true,
      en: { role: "DEC — Computer Science Technology", org: "Cégep de Saint-Jean-sur-Richelieu" },
      fr: { role: "DEC — Techniques de l'informatique", org: "Cégep de Saint-Jean-sur-Richelieu" }
    },
    {
      start: "2026", end: "2026",
      en: { role: "College studies — Accounting and Marketing Technology", org: "Cégep de Saint-Jean-sur-Richelieu" },
      fr: { role: "Études collégiales — Techniques de comptabilité et marketing", org: "Cégep de Saint-Jean-sur-Richelieu" }
    },
    {
      start: "2023", end: "2023",
      en: { role: "College studies — Electronics Technology", org: "Cégep de Saint-Jean-sur-Richelieu" },
      fr: { role: "Études collégiales — Technique électronique", org: "Cégep de Saint-Jean-sur-Richelieu" }
    },
    {
      start: "2015", end: "2020",
      en: { role: "High School Diploma (DES)", org: "École secondaire Marcellin-Champagnat" },
      fr: { role: "Diplôme d'études secondaires (DES)", org: "École secondaire Marcellin-Champagnat" }
    }
  ]
};

/* Interface text. Keys match the data-i18n attributes in index.html. */
window.I18N = {
  en: {
    "nav.skip": "Skip to content",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.eyebrow": "// computer science technology student",
    "hero.hello": "Hi, I'm",
    "hero.lead": "I build web, mobile and desktop applications — from Laravel APIs and React front ends to Android and Electron clients.",
    "hero.languages": "🗣️ French · English",
    "hero.ctaProjects": "See my projects",
    "hero.ctaContact": "Contact me",
    "about.title": "About",
    "about.text": "I'm finishing my diploma in Computer Science Technology at Cégep de Saint-Jean-sur-Richelieu. My goal is to join the job market as a developer and eventually pursue university studies in computer science, while continuing to grow my skills and gain experience.",
    "projects.title": "Projects",
    "projects.sub": "Loaded live from my public GitHub repositories.",
    "projects.loading": "Loading projects…",
    "projects.error": "Couldn't load projects from GitHub right now.",
    "projects.errorLink": "See them on GitHub ↗",
    "projects.all": "All",
    "projects.code": "Code",
    "projects.demo": "Live",
    "projects.updated": "Updated",
    "projects.empty": "No projects for this filter.",
    "experience.title": "Experience",
    "experience.present": "Present",
    "experience.tech": "IT",
    "skills.title": "Skills",
    "skills.languages": "Programming languages",
    "skills.frameworks": "Frameworks & tools",
    "skills.soft": "Soft skills",
    "education.title": "Education",
    "contact.title": "Contact",
    "contact.text": "Looking for an intern or a junior developer? I'd be happy to talk.",
    "contact.references": "References available upon request.",
    "footer.built": "Plain HTML, CSS & JavaScript — hosted on GitHub Pages.",
    "lang.switch": "Passer en français",
    "meta.title": "Alex Héroux — Developer"
  },
  fr: {
    "nav.skip": "Aller au contenu",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "hero.eyebrow": "// étudiant en techniques de l'informatique",
    "hero.hello": "Salut, je suis",
    "hero.lead": "Je développe des applications web, mobiles et de bureau — des API Laravel et interfaces React jusqu'aux clients Android et Electron.",
    "hero.languages": "🗣️ Français · Anglais",
    "hero.ctaProjects": "Voir mes projets",
    "hero.ctaContact": "Me contacter",
    "about.title": "À propos",
    "about.text": "Je termine ma formation en Techniques de l'informatique au Cégep de Saint-Jean-sur-Richelieu. Mon objectif est d'intégrer le marché du travail comme développeur et éventuellement de poursuivre des études universitaires en informatique, tout en continuant à développer mes compétences et à acquérir de l'expérience.",
    "projects.title": "Projets",
    "projects.sub": "Chargés en direct depuis mes dépôts GitHub publics.",
    "projects.loading": "Chargement des projets…",
    "projects.error": "Impossible de charger les projets depuis GitHub pour le moment.",
    "projects.errorLink": "Les voir sur GitHub ↗",
    "projects.all": "Tous",
    "projects.code": "Code",
    "projects.demo": "Démo",
    "projects.updated": "Mis à jour",
    "projects.empty": "Aucun projet pour ce filtre.",
    "experience.title": "Expérience",
    "experience.present": "Aujourd'hui",
    "experience.tech": "TI",
    "skills.title": "Compétences",
    "skills.languages": "Langages de programmation",
    "skills.frameworks": "Frameworks et outils",
    "skills.soft": "Savoir-être",
    "education.title": "Formation",
    "contact.title": "Contact",
    "contact.text": "Vous cherchez un stagiaire ou un développeur junior? Ce sera un plaisir d'en discuter.",
    "contact.references": "Références fournies sur demande.",
    "footer.built": "HTML, CSS et JavaScript simples — hébergé sur GitHub Pages.",
    "lang.switch": "Switch to English",
    "meta.title": "Alex Héroux — Développeur"
  }
};
