export const languages = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      technology: "Technology",
      tokenomics: "Tokenomics",
      compliance: "Compliance",
      team: "Team",
      roadmap: "Roadmap",
      getStarted: "Get Started",
    },
    // Hero Section
    hero: {
      badge: "SEC Reg D · FinCEN MSB Compliant",
      title: "VEL TOKEN",
      subtitle: "AI × Quant × Wealth Management",
      tagline: "Let Intelligence Drive Wealth",
      description: "VEL Token is a compliance-first intelligent digital asset powered by advanced AI algorithms and quantitative trading models, designed to deliver sustainable growth and transparent value creation.",
      issuedBy: "Issued by:",
      issuer: "Velar Capital Group",
      registered: "Registered:",
      location: "New York, USA",
      downloadWhitepaper: "Download Whitepaper",
    },
    // Stats
    stats: {
      aiAccuracy: "AI Prediction Accuracy",
      aum: "Assets Under Management",
      latency: "System Latency",
    },
    // Performance Dashboard
    performance: {
      title: "Live Performance Metrics",
      description: "Real-time system performance data powered by our AI infrastructure",
    },
    // Features
    features: {
      title: "Why VEL Token",
      aiPowered: {
        title: "AI-Powered Intelligence",
        description: "Advanced machine learning models and quantitative trading systems drive consistent, data-backed investment decisions.",
      },
      compliant: {
        title: "Regulatory Compliant",
        description: "Fully registered with SEC and FinCEN, ensuring investor protection and legal operating framework.",
      },
      transparent: {
        title: "Transparent & Auditable",
        description: "On-chain verification, quarterly audits, and real-time performance tracking ensure complete transparency.",
      },
    },
    // Technology Section
    technology: {
      title: "Pinnacle Quant System",
      description: "Institutional-grade AI infrastructure powering intelligent investment decisions",
      fourEngines: {
        title: "Four Intelligent Engines",
        items: [
          "Trading Signal Decision System",
          "Quantitative Trading System",
          "Investment Strategy Decision System",
          "Expert Investment Decision System",
        ],
      },
      aiRiskControl: {
        title: "AI Risk Control",
        items: [
          "Real-time market monitoring",
          "Self-learning optimization models",
          "Multi-layer risk management",
          "Dynamic position adjustment",
        ],
      },
      exploreTechnology: "Explore Technology →",
    },
    // Tokenomics Section
    tokenomics: {
      title: "Token Economics",
      description: "1 Billion VEL tokens with deflationary mechanics and multiple revenue streams",
      marketAppreciation: {
        title: "Market Appreciation",
        description: "Price growth driven by AI performance and ecosystem expansion",
      },
      quarterlyDividends: {
        title: "Quarterly Dividends",
        description: "Profit sharing based on holding ratio and lock-in duration",
      },
      deflationaryBurns: {
        title: "Deflationary Burns",
        description: "Regular buyback and burn programs reduce supply over time",
      },
      viewFullTokenomics: "View Full Tokenomics →",
    },
    // CTA
    cta: {
      title: "Join the Future of Intelligent Finance",
      description: "Explore VEL Token's technology, economics, and compliance framework",
      viewCompliance: "View Compliance Info",
      exploreTechnology: "Explore Technology",
    },
    // Footer
    footer: {
      tagline: "Let Intelligence Drive Wealth",
      description: "AI-powered intelligent digital asset built on compliance and transparency.",
      learn: "Learn",
      company: "Company",
      legal: "Legal",
      aboutUs: "About Us",
      careers: "Careers",
      contact: "Contact",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      regulatoryInfo: "Regulatory Info",
      connectWithUs: "Connect With Us",
      companyName: "Velar Capital Group LLC",
      registeredIn: "Registered in New York, USA",
      copyright: "© 2025 Velar Capital Group. All rights reserved.",
      compliance: "SEC Reg D Compliant · FinCEN MSB Registered",
    },
  },
  de: {
    // Navigation
    nav: {
      home: "Startseite",
      technology: "Technologie",
      tokenomics: "Tokenomics",
      compliance: "Compliance",
      team: "Team",
      roadmap: "Roadmap",
      getStarted: "Loslegen",
    },
    // Hero Section
    hero: {
      badge: "SEC Reg D · FinCEN MSB konform",
      title: "VEL TOKEN",
      subtitle: "KI × Quant × Vermögensverwaltung",
      tagline: "Lassen Sie Intelligenz Vermögen schaffen",
      description: "VEL Token ist ein Compliance-orientiertes intelligentes digitales Asset, das durch fortschrittliche KI-Algorithmen und quantitative Handelsmodelle unterstützt wird und nachhaltiges Wachstum und transparente Wertschöpfung bietet.",
      issuedBy: "Herausgegeben von:",
      issuer: "Velar Capital Group",
      registered: "Registriert:",
      location: "New York, USA",
      downloadWhitepaper: "Whitepaper herunterladen",
    },
    // Stats
    stats: {
      aiAccuracy: "KI-Vorhersagegenauigkeit",
      aum: "Verwaltetes Vermögen",
      latency: "Systemlatenz",
    },
    // Performance Dashboard
    performance: {
      title: "Live-Leistungsmetriken",
      description: "Echtzeit-Systemleistungsdaten, die von unserer KI-Infrastruktur unterstützt werden",
    },
    // Features
    features: {
      title: "Warum VEL Token",
      aiPowered: {
        title: "KI-gestützte Intelligenz",
        description: "Fortschrittliche maschinelle Lernmodelle und quantitative Handelssysteme treiben konsistente, datengestützte Investitionsentscheidungen voran.",
      },
      compliant: {
        title: "Regulierungskonform",
        description: "Vollständig bei SEC und FinCEN registriert, um Anlegerschutz und rechtliche Betriebsrahmenbedingungen zu gewährleisten.",
      },
      transparent: {
        title: "Transparent & Prüfbar",
        description: "On-Chain-Verifizierung, vierteljährliche Audits und Echtzeit-Leistungsverfolgung gewährleisten vollständige Transparenz.",
      },
    },
    // Technology Section
    technology: {
      title: "Pinnacle Quant System",
      description: "KI-Infrastruktur auf institutionellem Niveau für intelligente Investitionsentscheidungen",
      fourEngines: {
        title: "Vier intelligente Engines",
        items: [
          "Handelssignal-Entscheidungssystem",
          "Quantitatives Handelssystem",
          "Investitionsstrategie-Entscheidungssystem",
          "Experten-Investitionsentscheidungssystem",
        ],
      },
      aiRiskControl: {
        title: "KI-Risikokontrolle",
        items: [
          "Echtzeit-Marktüberwachung",
          "Selbstlernende Optimierungsmodelle",
          "Mehrstufiges Risikomanagement",
          "Dynamische Positionsanpassung",
        ],
      },
      exploreTechnology: "Technologie erkunden →",
    },
    // Tokenomics Section
    tokenomics: {
      title: "Token-Ökonomie",
      description: "1 Milliarde VEL-Token mit deflationärer Mechanik und mehreren Einnahmequellen",
      marketAppreciation: {
        title: "Marktwertschöpfung",
        description: "Preiswachstum durch KI-Leistung und Ökosystem-Expansion",
      },
      quarterlyDividends: {
        title: "Vierteljährliche Dividenden",
        description: "Gewinnbeteiligung basierend auf Haltequote und Sperrfrist",
      },
      deflationaryBurns: {
        title: "Deflationäre Burns",
        description: "Regelmäßige Rückkauf- und Burn-Programme reduzieren das Angebot im Laufe der Zeit",
      },
      viewFullTokenomics: "Vollständige Tokenomics anzeigen →",
    },
    // CTA
    cta: {
      title: "Werden Sie Teil der Zukunft intelligenter Finanzen",
      description: "Entdecken Sie VEL Tokens Technologie, Ökonomie und Compliance-Rahmen",
      viewCompliance: "Compliance-Informationen anzeigen",
      exploreTechnology: "Technologie erkunden",
    },
    // Footer
    footer: {
      tagline: "Lassen Sie Intelligenz Vermögen schaffen",
      description: "KI-gestütztes intelligentes digitales Asset auf Basis von Compliance und Transparenz.",
      learn: "Lernen",
      company: "Unternehmen",
      legal: "Rechtliches",
      aboutUs: "Über uns",
      careers: "Karriere",
      contact: "Kontakt",
      privacyPolicy: "Datenschutz",
      termsOfService: "Nutzungsbedingungen",
      cookiePolicy: "Cookie-Richtlinie",
      regulatoryInfo: "Regulierungsinformationen",
      connectWithUs: "Verbinden Sie sich mit uns",
      companyName: "Velar Capital Group LLC",
      registeredIn: "Registriert in New York, USA",
      copyright: "© 2025 Velar Capital Group. Alle Rechte vorbehalten.",
      compliance: "SEC Reg D konform · FinCEN MSB registriert",
    },
  },
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      technology: "Technologie",
      tokenomics: "Tokenomics",
      compliance: "Conformité",
      team: "Équipe",
      roadmap: "Feuille de route",
      getStarted: "Commencer",
    },
    // Hero Section
    hero: {
      badge: "Conforme SEC Reg D · FinCEN MSB",
      title: "VEL TOKEN",
      subtitle: "IA × Quant × Gestion de patrimoine",
      tagline: "Laissez l'intelligence générer de la richesse",
      description: "VEL Token est un actif numérique intelligent axé sur la conformité, alimenté par des algorithmes d'IA avancés et des modèles de trading quantitatif, conçu pour offrir une croissance durable et une création de valeur transparente.",
      issuedBy: "Émis par :",
      issuer: "Velar Capital Group",
      registered: "Enregistré :",
      location: "New York, USA",
      downloadWhitepaper: "Télécharger le livre blanc",
    },
    // Stats
    stats: {
      aiAccuracy: "Précision de prédiction IA",
      aum: "Actifs sous gestion",
      latency: "Latence système",
    },
    // Performance Dashboard
    performance: {
      title: "Métriques de performance en direct",
      description: "Données de performance système en temps réel alimentées par notre infrastructure IA",
    },
    // Features
    features: {
      title: "Pourquoi VEL Token",
      aiPowered: {
        title: "Intelligence alimentée par l'IA",
        description: "Des modèles d'apprentissage automatique avancés et des systèmes de trading quantitatif génèrent des décisions d'investissement cohérentes et basées sur les données.",
      },
      compliant: {
        title: "Conforme à la réglementation",
        description: "Entièrement enregistré auprès de la SEC et FinCEN, garantissant la protection des investisseurs et un cadre opérationnel légal.",
      },
      transparent: {
        title: "Transparent et vérifiable",
        description: "Vérification en chaîne, audits trimestriels et suivi des performances en temps réel garantissent une transparence totale.",
      },
    },
    // Technology Section
    technology: {
      title: "Système Pinnacle Quant",
      description: "Infrastructure IA de niveau institutionnel alimentant des décisions d'investissement intelligentes",
      fourEngines: {
        title: "Quatre moteurs intelligents",
        items: [
          "Système de décision de signaux de trading",
          "Système de trading quantitatif",
          "Système de décision de stratégie d'investissement",
          "Système de décision d'investissement expert",
        ],
      },
      aiRiskControl: {
        title: "Contrôle des risques IA",
        items: [
          "Surveillance du marché en temps réel",
          "Modèles d'optimisation auto-apprenants",
          "Gestion des risques multi-niveaux",
          "Ajustement dynamique des positions",
        ],
      },
      exploreTechnology: "Explorer la technologie →",
    },
    // Tokenomics Section
    tokenomics: {
      title: "Économie des tokens",
      description: "1 milliard de tokens VEL avec des mécanismes déflationnistes et plusieurs sources de revenus",
      marketAppreciation: {
        title: "Appréciation du marché",
        description: "Croissance des prix portée par les performances de l'IA et l'expansion de l'écosystème",
      },
      quarterlyDividends: {
        title: "Dividendes trimestriels",
        description: "Partage des bénéfices basé sur le ratio de détention et la durée de blocage",
      },
      deflationaryBurns: {
        title: "Brûlages déflationnistes",
        description: "Des programmes réguliers de rachat et de brûlage réduisent l'offre au fil du temps",
      },
      viewFullTokenomics: "Voir la tokenomics complète →",
    },
    // CTA
    cta: {
      title: "Rejoignez l'avenir de la finance intelligente",
      description: "Explorez la technologie, l'économie et le cadre de conformité de VEL Token",
      viewCompliance: "Voir les informations de conformité",
      exploreTechnology: "Explorer la technologie",
    },
    // Footer
    footer: {
      tagline: "Laissez l'intelligence générer de la richesse",
      description: "Actif numérique intelligent alimenté par l'IA, basé sur la conformité et la transparence.",
      learn: "Apprendre",
      company: "Entreprise",
      legal: "Légal",
      aboutUs: "À propos",
      careers: "Carrières",
      contact: "Contact",
      privacyPolicy: "Politique de confidentialité",
      termsOfService: "Conditions d'utilisation",
      cookiePolicy: "Politique de cookies",
      regulatoryInfo: "Informations réglementaires",
      connectWithUs: "Connectez-vous avec nous",
      companyName: "Velar Capital Group LLC",
      registeredIn: "Enregistré à New York, USA",
      copyright: "© 2025 Velar Capital Group. Tous droits réservés.",
      compliance: "Conforme SEC Reg D · FinCEN MSB enregistré",
    },
  },
} as const;
