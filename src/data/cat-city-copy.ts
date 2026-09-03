import type { FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";

export interface CatCityData {
  city: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroPreTitle: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  centerType: "Offline Classroom & Live Online" | "Interactive Live Online & Hybrid";
  address?: string;
  phone: string;
  email: string;
  features: Array<{ icon: string; title: string; desc: string }>;
  faqs: FaqItem[];
}

const commonFeatures = [
  { icon: "🧠", title: "Ability-Based Adaptive Model", desc: "Proprietary Manthan pedagogy identifies your unique learning profile and customizes your QA, VARC, and DILR preparation accordingly." },
  { icon: "🎯", title: "99+ Percentile Faculty", desc: "CAT toppers and IIM alumni teach every session — providing insider strategies proven to push scores beyond the 95th percentile." },
  { icon: "📊", title: "AI-Powered Performance Analytics", desc: "Question-level tracking, percentile prediction, time-management analysis, and personalized improvement recommendations after every mock." },
  { icon: "🏆", title: "WAT-PI Preparation Ecosystem", desc: "Complete Written Ability Test and Personal Interview coaching for IIM A, B, C, L, K, I and other top business schools." },
  { icon: "💻", title: "Unlimited Full-Length CAT Mocks", desc: "Computer-based test coaching with actual CAT interface. Sectional and full-length tests with real-time diagnostic feedback." },
  { icon: "🔄", title: "Validity Till Admission", desc: "Course validity extends until you secure your desired MBA admission — unlimited doubt-clearing and booster sessions included." },
];

const commonFaqs: FaqItem[] = [
  { question: "Why choose MBA Wizards for CAT coaching?", answer: "Our Ability-Based Model achieves 95% success rate in target percentile goals. Comprehensive curriculum, IIM alumni faculty, AI analytics, unlimited mocks, and WAT-PI coaching in one package." },
  { question: "How long does CAT preparation take for working professionals?", answer: "Most students benefit from 6–8 months of structured preparation using weekend intensives and evening batches. Flexible hybrid scheduling accommodates corporate work commitments." },
  { question: "What is included in the CAT coaching fee?", answer: "Comprehensive curriculum for QA, VARC, and DILR, unlimited mock test series, AI analytics dashboard, expert faculty guidance, WAT-PI preparation, and flexible batch timings — all in one package starting at ₹22,000." },
  { question: "What CAT percentile can I realistically achieve?", answer: "Our students achieve an average improvement of 15+ percentile points. Hundreds of IIM selections annually — including 99+ percentile achievers admitted to IIM A, B, and C." },
  { question: "How does the Ability-Based Model help CAT preparation?", answer: "Personalized diagnostic assessment identifies your strengths and weak spots across QA, VARC, and DILR. Customized study plans, targeted practice, and strategic time allocation ensure optimal improvement for your individual profile." },
  { question: "Is WAT-PI preparation included?", answer: "Yes — complete Written Ability Test and Personal Interview coaching is included at no extra cost for students preparing for IIM calls. Group discussion and mock PI sessions are conducted by IIM alumni." },
];

export const catCitiesData: Record<string, CatCityData> = {
  gurgaon: {
    city: "Gurgaon", slug: "cat-coaching-in-gurgaon",
    metaTitle: "Best CAT Coaching in Gurgaon — IIM Admits | MBA Wizards",
    metaDescription: "Expert CAT coaching in Gurgaon at DLF Phase 4 Galleria & Sector 50. Ability-Based Manthan methodology. 95% success rate. IIM admits every year. Book a free demo.",
    heroPreTitle: "Target 99+ Percentile & IIM Admits",
    heroTitle: "Best CAT Coaching in", heroTitleHighlight: "Gurgaon",
    heroSubtitle: "IIT Roorkee alumni-led coaching at DLF Galleria Phase 4 & Sector 50. The Manthan ability-based model has delivered 99+ percentile scorers and IIM A, B, C admits consistently.",
    centerType: "Offline Classroom & Live Online",
    address: "Office 1212 & 1212A, Galleria Boulevard, DLF Phase 4 / F-45 South City 2, Gurgaon",
    phone: "+91-9958041888", email: "info@mbawizards.co.in",
    features: commonFeatures, faqs: commonFaqs,
  },
  noida: {
    city: "Noida", slug: "cat-coaching-in-noida",
    metaTitle: "Best CAT Coaching in Noida — IIM Admits | MBA Wizards",
    metaDescription: "Top CAT coaching in Noida with Ability-Based pedagogy, IIM alumni faculty, unlimited mocks, and WAT-PI prep. 95% success rate. Book free demo today.",
    heroPreTitle: "Target 99+ Percentile & IIM Admits",
    heroTitle: "Best CAT Coaching in", heroTitleHighlight: "Noida",
    heroSubtitle: "Expert CAT preparation in Noida with the Manthan ability-based model. Live online and hybrid batch options for working professionals aiming at IIM A, B, C and top business schools.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888", email: "info@mbawizards.co.in",
    features: commonFeatures, faqs: commonFaqs,
  },
  delhi: {
    city: "Delhi", slug: "cat-coaching-in-delhi",
    metaTitle: "Best CAT Coaching in Delhi — IIM Admits | MBA Wizards",
    metaDescription: "Premier CAT coaching in Delhi. Manthan ability-based model, 95% success rate, unlimited mocks, WAT-PI prep. IIM alumni faculty. Book your free diagnostic session.",
    heroPreTitle: "Target 99+ Percentile & IIM Admits",
    heroTitle: "Best CAT Coaching in", heroTitleHighlight: "Delhi",
    heroSubtitle: "MBA Wizards brings Delhi aspirants a structured, personalized CAT coaching program anchored by the Manthan pedagogy — proven to push scores beyond the 95th percentile year after year.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888", email: "info@mbawizards.co.in",
    features: commonFeatures, faqs: commonFaqs,
  },
  chandigarh: {
    city: "Chandigarh", slug: "cat-coaching-in-chandigarh",
    metaTitle: "Best CAT Coaching in Chandigarh — IIM Admits | MBA Wizards",
    metaDescription: "Top CAT coaching in Chandigarh by IIT alumni. Ability-Based Manthan model, AI analytics, unlimited mocks. IIM admits every year. Book a free demo.",
    heroPreTitle: "Target 99+ Percentile & IIM Admits",
    heroTitle: "Best CAT Coaching in", heroTitleHighlight: "Chandigarh",
    heroSubtitle: "Expert CAT preparation in Chandigarh with the proven Manthan ability-based model. Live online + offline hybrid sessions. Consistent IIM A, B, C calls every admission cycle.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888", email: "info@mbawizards.co.in",
    features: commonFeatures, faqs: commonFaqs,
  },
  pune: {
    city: "Pune", slug: "cat-coaching-in-pune",
    metaTitle: "Best CAT Coaching in Pune — IIM Admits | MBA Wizards",
    metaDescription: "Expert CAT coaching in Pune. Ability-Based Manthan methodology, AI analytics, unlimited mocks, WAT-PI prep. IIM alumni faculty. 95% success rate.",
    heroPreTitle: "Target 99+ Percentile & IIM Admits",
    heroTitle: "Best CAT Coaching in", heroTitleHighlight: "Pune",
    heroSubtitle: "MBA Wizards delivers Pune aspirants a data-driven, personalized CAT coaching experience built on the Manthan pedagogy — turning corporate professionals into IIM admits.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888", email: "info@mbawizards.co.in",
    features: commonFeatures, faqs: commonFaqs,
  },
  mumbai: {
    city: "Mumbai", slug: "cat-coaching-in-mumbai",
    metaTitle: "Best CAT Coaching in Mumbai — IIM Admits | MBA Wizards",
    metaDescription: "Top CAT coaching in Mumbai with Ability-Based model. IIM alumni faculty, unlimited full-length mocks, AI performance analytics, WAT-PI prep. Book free demo.",
    heroPreTitle: "Target 99+ Percentile & IIM Admits",
    heroTitle: "Best CAT Coaching in", heroTitleHighlight: "Mumbai",
    heroSubtitle: "From Bandra to BKC, Mumbai aspirants trust MBA Wizards' Manthan ability-based CAT coaching for consistent 99+ percentile outcomes and IIM admission success.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888", email: "info@mbawizards.co.in",
    features: commonFeatures, faqs: commonFaqs,
  },
  hyderabad: {
    city: "Hyderabad", slug: "cat-coaching-in-hyderabad",
    metaTitle: "Best CAT Coaching in Hyderabad — IIM Admits | MBA Wizards",
    metaDescription: "Expert CAT coaching in Hyderabad with Ability-Based Manthan model. IIM alumni faculty, AI analytics, unlimited mocks, WAT-PI preparation. 95% success rate.",
    heroPreTitle: "Target 99+ Percentile & IIM Admits",
    heroTitle: "Best CAT Coaching in", heroTitleHighlight: "Hyderabad",
    heroSubtitle: "Hyderabad's aspiring MBA candidates choose MBA Wizards for the Manthan ability-based CAT coaching model — delivering 99+ percentile results and IIM calls every year.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888", email: "info@mbawizards.co.in",
    features: commonFeatures, faqs: commonFaqs,
  },
};
