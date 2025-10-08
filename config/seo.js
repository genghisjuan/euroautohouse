// config/seo.js
import { SITE } from "./site.config";
export const defaultSEO = {
  title: `${SITE.businessName} | ${SITE.tagline}`,
  description: `${SITE.businessName} provides ${SITE.tagline} for ${SITE.audience} in Sanford, FL. ${SITE.heroHeadline}. Call ${SITE.phone}.`,
  keywords: SITE.keywords.join(", "),
  url: "https://euroautohouse.com/",
  images: ["/og.jpg"],
};
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE.businessName,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: "Sanford",
    addressRegion: "FL",
    postalCode: "32771"
  },
  sameAs: Object.values(SITE.social),
};
