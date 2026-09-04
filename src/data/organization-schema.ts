import { siteConfig } from "./site-config";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: "https://www.mbawizards.co.in/wp-content/uploads/2025/08/cropped-cropped-Logo.jpg",
      description:
        "Achieve your dream MBA with MBA Wizards. Expert coaching for GMAT, GRE, CAT, and admissions counseling. Personalized study plans, AI-based analytics, and proven success for Indian aspirants.",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: siteConfig.addresses.map((addr) => ({
        "@type": "PostalAddress",
        streetAddress: addr.address,
        addressLocality: "Gurgaon",
        addressRegion: "Haryana",
        addressCountry: "IN",
      })),
      sameAs: siteConfig.socialLinks.map((link) => link.url),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
};
