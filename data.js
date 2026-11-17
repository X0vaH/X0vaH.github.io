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
    "meta.title": "Alex Héroux — Developer · Looking for an internship",
    "nav.skip": "Skip to content",
    "nav.projects": "projects",
    "nav.experience": "experience",
    "nav.skills": "skills",
    "nav.education": "education",
    "nav.contact": "contact",
    "lang.switch": "Passer en français",
    "cv.short": "cv.pdf",
    "cv.button": "View my CV (PDF)",
    "hero.typed": "whoami",
    "hero.role": "Computer science technology student · web, mobile & desktop developer",
    "hero.lead": "I build full-stack apps — Laravel APIs, React front ends, Android (Kotlin/Java) and Electron clients — and I like shipping things that work end to end.",
    "hero.ctaContact": "Contact me",
    "internship.file": "internship.txt",
    "internship.badge": "OPEN TO WORK",
    "internship.title": "Looking for a development internship",
    "internship.whenLabel": "when",
    "internship.when": "March 31 → May 25, 2027",
    "internship.whatLabel": "field",
    "internship.what": "Web, mobile or software development",
    "internship.whereLabel": "based in",
    "internship.where": "Saint-Jean-sur-Richelieu, QC",
    "internship.langLabel": "languages",
    "internship.lang": "French · English",
    "about.file": "about.md",
    "about.text": "I'm finishing my diploma in Computer Science Technology at Cégep de Saint-Jean-sur-Richelieu, and I'm looking for an internship from March 31 to May 25, 2027 to put my skills to work on a real team. Three IT internships at the Department of National Defence gave me real experience in a professional IT environment, and my school projects taught me to build and ship complete applications. After my diploma, I want to start my career as a developer and eventually pursue university studies in computer science.",
    "projects.sub": "# loaded live from my public GitHub repositories",
    "projects.loading": "Loading projects…",
    "projects.error": "# error: couldn't reach the GitHub API right now.",
    "projects.errorLink": "See them on GitHub ↗",
    "projects.all": "all",
    "projects.code": "code",
    "projects.demo": "live",
    "projects.updated": "updated",
    "projects.empty": "# no projects for this filter",
    "experience.file": "experience.log",
    "experience.present": "now",
    "experience.tech": "IT",
    "skills.file": "skills.json",
    "skills.languages": "languages",
    "skills.frameworks": "frameworks_tools",
    "skills.soft": "soft_skills",
    "education.file": "education.log",
    "contact.cmd": "contact",
    "contact.text": "Have an internship from March 31 to May 25, 2027? I'd love to hear from you.",
    "contact.cityLabel": "city",
    "contact.references": "# references available upon request",
    "footer.built": "# plain HTML, CSS & JS — hosted on GitHub Pages"
  },
  fr: {
    "meta.title": "Alex Héroux — Développeur · À la recherche d'un stage",
    "nav.skip": "Aller au contenu",
    "nav.projects": "projets",
    "nav.experience": "experience",
    "nav.skills": "competences",
    "nav.education": "formation",
    "nav.contact": "contact",
    "lang.switch": "Switch to English",
    "cv.short": "cv.pdf",
    "cv.button": "Voir mon CV (PDF)",
    "hero.typed": "whoami",
    "hero.role": "Étudiant en techniques de l'informatique · développeur web, mobile et logiciel",
    "hero.lead": "Je développe des applications complètes — API Laravel, interfaces React, apps Android (Kotlin/Java) et clients Electron — et j'aime livrer des projets qui fonctionnent de bout en bout.",
    "hero.ctaContact": "Me contacter",
    "internship.file": "stage.txt",
    "internship.badge": "DISPONIBLE",
    "internship.title": "À la recherche d'un stage en développement",
    "internship.whenLabel": "quand",
    "internship.when": "du 31 mars au 25 mai 2027",
    "internship.whatLabel": "domaine",
    "internship.what": "Développement web, mobile ou logiciel",
    "internship.whereLabel": "basé à",
    "internship.where": "Saint-Jean-sur-Richelieu, QC",
    "internship.langLabel": "langues",
    "internship.lang": "Français · Anglais",
    "about.file": "a-propos.md",
    "about.text": "Je termine ma formation en Techniques de l'informatique au Cégep de Saint-Jean-sur-Richelieu et je cherche un stage du 31 mars au 25 mai 2027 pour mettre mes compétences en pratique au sein d'une vraie équipe. Trois stages en TI au ministère de la Défense nationale m'ont donné une vraie expérience dans un milieu professionnel, et mes projets scolaires m'ont appris à concevoir et livrer des applications complètes. Après mon diplôme, je veux commencer ma carrière comme développeur et éventuellement poursuivre des études universitaires en informatique.",
    "projects.sub": "# chargés en direct depuis mes dépôts GitHub publics",
    "projects.loading": "Chargement des projets…",
    "projects.error": "# erreur : impossible de joindre l'API GitHub pour le moment.",
    "projects.errorLink": "Les voir sur GitHub ↗",
    "projects.all": "tous",
    "projects.code": "code",
    "projects.demo": "démo",
    "projects.updated": "màj",
    "projects.empty": "# aucun projet pour ce filtre",
    "experience.file": "experience.log",
    "experience.present": "auj.",
    "experience.tech": "TI",
    "skills.file": "competences.json",
    "skills.languages": "langages",
    "skills.frameworks": "frameworks_outils",
    "skills.soft": "savoir_etre",
    "education.file": "formation.log",
    "contact.cmd": "contact",
    "contact.text": "Vous avez un stage du 31 mars au 25 mai 2027? J'aimerais beaucoup en discuter.",
    "contact.cityLabel": "ville",
    "contact.references": "# références fournies sur demande",
    "footer.built": "# HTML, CSS et JS simples — hébergé sur GitHub Pages"
  }
};
