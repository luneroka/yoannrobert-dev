import type { Project } from "../types";
import agueraIndex from "@/assets/projects/site-vitrine-aguera/aguera-index.png";
import agueraServices from "@/assets/projects/site-vitrine-aguera/aguera-services.png";
import agueraRealisations from "@/assets/projects/site-vitrine-aguera/aguera-realisations.png";
import agueraGoogle from "@/assets/projects/site-vitrine-aguera/aguera-google.png";
import agueraContact from "@/assets/projects/site-vitrine-aguera/aguera-contact.png";

export const siteVitrineAguera = {
  id: "site-vitrine-aguera-renov",

  title: {
    en: "Aguera Rénov’ Showcase Website",
    fr: "Site Vitrine Aguera Rénov’",
  },

  company: "Solo",
  role: {
    en: "Freelance Web Project",
    fr: "Projet Web Freelance",
  },

  track: ["dev"],
  industry: "construction",
  productType: "web-app",

  technologies: ["typescript", "react", "nextjs", "tailwindcss", "git"],
  skills: ["process-optimization", "communication", "ux-ui-design", "product-discovery"],

  metrics: {
    hoursInvested: 50,
    context: {
      label: {
        en: "Lighthouse Performance",
        fr: "Performance Lighthouse",
      },
      value: 100,
      unit: {
        en: "",
        fr: "",
      },
    },
  },

  systemsBuilt: [
    {
      en: "Responsive showcase website for an independent renovation contractor",
      fr: "Site vitrine responsive pour un artisan indépendant du bâtiment",
    },
    {
      en: "Sanity CMS setup allowing the client to update services, projects, testimonials and contact information",
      fr: "Configuration d'un CMS Sanity permettant au client de modifier services, réalisations, témoignages et informations de contact",
    },
    {
      en: "Contact and quote request form powered by Resend with no database storage",
      fr: "Formulaire de contact et de demande de devis via Resend, sans stockage en base de données",
    },
    {
      en: "SEO foundation with metadata, sitemap, image alt text and local business positioning",
      fr: "Base SEO avec métadonnées, sitemap, textes alternatifs d'images et positionnement business local",
    },
    {
      en: "Production deployment on Vercel with OVH domain configuration, HTTPS and email DNS setup",
      fr: "Déploiement en production sur Vercel avec configuration domaine OVH, HTTPS et DNS email",
    },
    {
      en: "Legal pages and GDPR-conscious contact flow for a professional client website",
      fr: "Pages légales et parcours de contact conforme RGPD pour un site client professionnel",
    },
  ],

  summary: {
    en: "Professional showcase website delivered for an independent renovation contractor, combining a polished public landing page, editable CMS content, contact automation and production deployment.",
    fr: "Site vitrine professionnel livré pour un artisan rénovateur indépendant, combinant landing page soignée, contenu administrable via CMS, automatisation du contact et déploiement en production.",
  },

  problem: {
    en: "The contractor needed a credible online presence to present renovation services, show completed work and receive quote requests without depending on manual content updates by a developer.",
    fr: "L'artisan avait besoin d'une présence en ligne crédible pour présenter ses services, afficher ses réalisations et recevoir des demandes de devis sans dépendre d'un développeur pour chaque mise à jour de contenu.",
  },

  solution: {
    en: "Built and delivered a responsive Next.js website connected to Sanity CMS, with contact emails handled through Resend, SEO configuration, legal pages, domain setup and client training.",
    fr: "Conception et livraison d'un site responsive Next.js connecté à Sanity CMS, avec envoi des emails via Resend, configuration SEO, pages légales, paramétrage domaine et formation client.",
  },

  impact: [
    {
      en: "Delivered a production-ready website with editable hero, services, projects, contact details, settings and testimonials through Sanity Studio.",
      fr: "Livraison d'un site prêt pour la production avec gestion éditable du hero, des services, réalisations, informations de contact, paramètres et témoignages via Sanity Studio.",
    },
    {
      en: "Achieved a Lighthouse audit of 100 / 96 / 100 / 100 across the key performance, accessibility, best practices and SEO categories.",
      fr: "Obtention d'un audit Lighthouse de 100 / 96 / 100 / 100 sur les catégories clés de performance, accessibilité, bonnes pratiques et SEO.",
    },
    {
      en: "Configured a complete production setup with main domain, redirect domain, Vercel hosting, OVH DNS, HTTPS and Resend email delivery.",
      fr: "Configuration complète de production avec domaine principal, domaine de redirection, hébergement Vercel, DNS OVH, HTTPS et envoi d'emails via Resend.",
    },
    {
      en: "Trained the client to manage Google Maps visibility, domain basics and CMS content updates after delivery.",
      fr: "Formation du client à la gestion de la visibilité Google Maps, aux bases des noms de domaine et aux mises à jour de contenu via CMS après livraison.",
    },
  ],

  screenshots: [
    {
      src: agueraIndex,
      alt: {
        en: "Home page of the website",
        fr: "Page d'accueil du site vitrine",
      },
    },
    {
      src: agueraServices,
      alt: {
        en: "Catalog of services offered by the client",
        fr: "Catalogue des services proposés par l'artisan",
      },
    },
    {
      src: agueraRealisations,
      alt: {
        en: "Showcase of completed works",
        fr: "Démonstration des projets déjà réalisés",
      },
    },
    {
      src: agueraGoogle,
      alt: {
        en: "Extract of best Google reviews",
        fr: "Extrait des meilleurs avis Google",
      },
    },
    {
      src: agueraContact,
      alt: {
        en: "Contact page with email redistribution",
        fr: "Page Contact avec redistribution des emails",
      },
    },
  ],

  links: {
    github: "https://github.com/luneroka/aguera-renov",
    demo: "https://aguera-renov.com",
  },

  period: {
    en: "November 2025",
    fr: "Novembre 2025",
  },

  featured: true,
} satisfies Project;
