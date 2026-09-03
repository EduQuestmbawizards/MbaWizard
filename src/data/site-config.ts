export interface SiteConfig {
  name: string;
  url: string;
  phone: string;
  phoneRaw: string;
  email: string;
  whatsappNumber: string;
  whatsappMessage: string;
  whatsappUrl: string;
  addresses: {
    label: string;
    address: string;
  }[];
  socialLinks: {
    platform: string;
    url: string;
    label: string;
  }[];
  copyrightYear: number;
}

export const siteConfig: SiteConfig = {
  name: "MBA Wizards",
  url: "https://www.mbawizards.co.in",
  phone: "+91-9958041888",
  phoneRaw: "9958041888",
  email: "info@mbawizards.co.in",
  whatsappNumber: "919958041888",
  whatsappMessage: "Hi Team MBA Wizards",
  whatsappUrl: "https://api.whatsapp.com/send?phone=919958041888&text=Hi%20Team%20MBA%20Wizards",
  addresses: [
    {
      label: "Center 1",
      address: "F-45, South City 2, Sector-50, Gurgaon, Haryana 122018",
    },
    {
      label: "Center 2",
      address: "Office No. 1212 and 1212A, Galleria Boulevard, DLF Phase 4, Sector 28, Gurugram, Haryana 122001",
    },
  ],
  socialLinks: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/mbawizardsgurgaon/",
      label: "Facebook",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/@gmatcoachingcatcoachingmba8637",
      label: "YouTube",
    },
    {
      platform: "linkedin",
      url: "https://in.linkedin.com/company/mba-wizards",
      label: "LinkedIn",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/mbawizards/?hl=en",
      label: "Instagram",
    },
    {
      platform: "whatsapp",
      url: "https://api.whatsapp.com/send?phone=919958041888&text=Hi%20Team%20MBA%20Wizards",
      label: "WhatsApp",
    },
  ],
  copyrightYear: 2025,
};
