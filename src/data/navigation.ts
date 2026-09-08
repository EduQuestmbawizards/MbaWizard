export interface NavSubItem {
  title: string;
  href: string;
}

export interface NavGroupItem {
  title: string;
  href?: string;
  subItems?: NavSubItem[];
}

export interface NavItem {
  title: string;
  href?: string;
  groups?: NavGroupItem[];
  subItems?: NavSubItem[];
}

export const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Test Prep",
    groups: [
      {
        title: "GMAT",
        href: "/gmat-coaching",
        subItems: [
          { title: "GMAT Coaching in Gurgaon", href: "/gmat-coaching-in-gurgaon" },
          { title: "GMAT Coaching in Noida", href: "/gmat-coaching-in-noida" },
          { title: "GMAT Coaching in Delhi", href: "/gmat-coaching-in-delhi" },
          { title: "GMAT Coaching in Chandigarh", href: "/gmat-coaching-in-chandigarh" },
          { title: "GMAT Coaching in Mumbai", href: "/gmat-coaching-in-mumbai" },
          { title: "GMAT Coaching in Hyderabad", href: "/gmat-coaching-in-hyderabad" },
          { title: "GMAT Coaching in Bangalore", href: "/gmat-coaching-in-bangalore" },
          { title: "GMAT Coaching in Pune", href: "/gmat-coaching-in-pune" },
        ],
      },
      {
        title: "GRE",
        href: "/gre-coaching-classes",
        subItems: [
          { title: "GRE Coaching in Gurgaon", href: "/gre-coaching-in-gurgaon" },
          { title: "GRE Coaching in Noida", href: "/gre-coaching-in-noida" },
          { title: "GRE Coaching in Delhi", href: "/gre-coaching-in-delhi" },
          { title: "GRE Coaching in Chandigarh", href: "/gre-coaching-in-chandigarh" },
          { title: "GRE Coaching in Mumbai", href: "/gre-coaching-in-mumbai" },
          { title: "GRE Coaching in Hyderabad", href: "/gre-coaching-in-hyderabad" },
          { title: "GRE Coaching in Bangalore", href: "/gre-coaching-in-bangalore" },
          { title: "GRE Coaching in Pune", href: "/gre-coaching-in-pune" },
        ],
      },
      {
        title: "GMAT+GRE",
        href: "/gmat-gre-coaching",
        subItems: [
          { title: "GMAT+GRE Coaching in Gurgaon", href: "/gmat-gre-coaching-in-gurgaon" },
          { title: "GMAT+GRE Coaching in Noida", href: "/gmatgre-coaching-in-noida" },
          { title: "GMAT+GRE Coaching in Delhi", href: "/gmatgre-coaching-in-delhi" },
          { title: "GMAT+GRE Coaching in Chandigarh", href: "/gmatgre-coaching-in-chandigarh" },
          { title: "GMAT+GRE Coaching in Mumbai", href: "/gmatgre-coaching-in-mumbai" },
          { title: "GMAT+GRE Coaching in Hyderabad", href: "/gmatgre-coaching-in-hyderabad" },
          { title: "GMAT+GRE Coaching in Bangalore", href: "/gmatgre-coaching-in-bangalore" },
          { title: "GMAT+GRE Coaching in Pune", href: "/gmatgre-coaching-in-pune" },
        ],
      },
      {
        title: "GMAT+CAT",
        href: "/gmat-cat-coaching",
        subItems: [
          { title: "GMAT+CAT Coaching in Gurgaon", href: "/gmat-cat-coaching-in-gurgaon" },
          { title: "GMAT+CAT Coaching in Delhi", href: "/gmat-cat-coaching-in-delhi" },
          { title: "GMAT+CAT Coaching in Noida", href: "/gmat-cat-coaching-in-noida" },
          { title: "GMAT+CAT Coaching in Pune", href: "/gmat-cat-coaching-in-pune" },
          { title: "GMAT+CAT Coaching in Chandigarh", href: "/gmat-cat-coaching-in-chandigarh" },
          { title: "GMAT+CAT Coaching in Mumbai", href: "/gmat-cat-coaching-in-mumbai" },
          { title: "GMAT CAT Coaching in Bangalore", href: "/gmat-cat-coaching-in-bangalore" },
          { title: "GMAT+CAT Coaching in Hyderabad", href: "/gmat-cat-coaching-in-hyderabad" },
          { title: "GMAT+CAT Coaching in Chennai", href: "/gmat-cat-coaching-in-chennai" },
        ],
      },
      {
        title: "CAT",
        href: "/cat",
        subItems: [
          { title: "CAT Coaching in Gurgaon", href: "/cat-coaching-in-gurgaon" },
          { title: "CAT Coaching in Noida", href: "/cat-coaching-in-noida" },
          { title: "CAT Coaching in Delhi", href: "/cat-coaching-in-delhi" },
          { title: "CAT Coaching in Chandigarh", href: "/cat-coaching-in-chandigarh" },
          { title: "CAT Coaching in Pune", href: "/cat-coaching-in-pune" },
          { title: "CAT Coaching in Mumbai", href: "/cat-coaching-in-mumbai" },
          { title: "CAT Coaching in Hyderabad", href: "/cat-coaching-in-hyderabad" },
        ],
      },
    ],
  },
  {
    title: "College Consulting",
    href: "/premium-university-consulting-packages",
  },
  {
    title: "Toppers",
    subItems: [
      { title: "GMAT Toppers", href: "/gmat-toppers" },
      { title: "MBA Wizards Methodology", href: "/mba-wizards-methodology" },
      { title: "GMAT Preparation", href: "/gmat-preparation" },
      { title: "Corporate Training", href: "/corporate-training" },
    ],
  },
  {
    title: "Education Loan",
    href: "/education-loan",
  },
  {
    title: "Research Paper",
    href: "/research-paper-drafting-publishing-services",
  },
  {
    title: "Blog",
    href: "/blogs",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

export const footerPopularCourses = [
  { title: "GMAT Coaching", href: "/gmat-coaching" },
  { title: "CAT Coaching", href: "/cat" },
  { title: "GMAT+CAT Coaching", href: "/gmat-cat-coaching" },
  { title: "GRE Coaching", href: "/gre-coaching-classes" },
];

export const footerUsefulLinks = [
  { title: "About Us", href: "/about-us" },
  { title: "Contact Us", href: "/contact-us" },
  { title: "Blog", href: "/blogs" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Refund Policy", href: "/refund-policy" },
];

