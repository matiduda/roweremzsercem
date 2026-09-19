export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: "Rowerem z Sercem",
  tagline: "Charytatywny rajd rowerowy połączony z transmisją na żywo",
  title: 'Rowerem z Sercem',
  description:
    '"Rowerem z Sercem" - Charytatywny rajd rowerowy połączony z transmisją na żywo',
  siteUrl: "https://roweremzsercem.pl",
  authorName: "Rowerem z Sercem",
  email: "roweremzsercem@gmail.com",
  language: "pl",
  dateLocale: "pl-PL",
  locale: "pl_PL",
  socialImage: "/site_preview.png",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/roweremzsercem/" },
    { label: "TikTok", href: "https://www.tiktok.com/@roweremzsercem" },
    { label: "YouTube", href: "https://www.youtube.com/@roweremzsercem" },
  ],
};

/** TODO: Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "Archive", href: "/posts/" },
  { label: "Categories", href: "/categories/" },
  { label: "About", href: "/about/" },
];

/** TODO: Secondary navigation rendered in the footer. */
export const footerNavigation = [
  { label: "Contact", href: "/contact/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "RSS", href: "/rss.xml" },
];
