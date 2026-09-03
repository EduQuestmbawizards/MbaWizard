import type { FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";

export interface GreCityData {
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

export const greCitiesData: Record<string, GreCityData> = {
  gurgaon: {
    city: "Gurgaon",
    slug: "gre-coaching-in-gurgaon",
    metaTitle: "Best GRE Coaching in Gurgaon | Top GRE Classes — MBA Wizards",
    metaDescription:
      "Elite GRE coaching in Gurgaon at DLF Galleria & South City 2. IIT Roorkee alumni faculty, 325+ target score plans, and 1-on-1 vocabulary clinics.",
    heroPreTitle: "Target 325+ with Millennium City Mentors",
    heroTitle: "Best GRE Coaching in",
    heroTitleHighlight: "Gurgaon",
    heroSubtitle:
      "Top-tier classroom & hybrid GRE General Test prep in DLF Galleria Phase 4 & Sector 50. Master Quantitative Reasoning and Verbal strategies with IIT alumni.",
    centerType: "Offline Classroom & Live Online",
    address: "Office 1212 & 1212A, Galleria Boulevard, DLF Phase 4 / F-45 South City 2, Gurgaon",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "📍", title: "Prime Centers", desc: "Galleria Phase 4 (Sector 28) and South City 2 (Sector 50) classrooms." },
      { icon: "📖", title: "Vocab Architecture", desc: "Root-word and contextual mnemonics to master 3,000+ high-frequency GRE words." },
      { icon: "🧮", title: "170/170 Quant Aim", desc: "Rigorous drills designed to achieve perfect 165–170 scores in Quantitative Reasoning." },
      { icon: "🏆", title: "Top MS & MBA Admits", desc: "Verified track record of admits to Stanford, CMU, Columbia, and Oxford." },
    ],
    faqs: [
      {
        question: "Where are MBA Wizards GRE coaching classes located in Gurgaon?",
        answer:
          "We have two centers in Gurgaon: DLF Galleria Phase 4 (Office 1212/1212A) and F-45 South City 2, Sector 50.",
      },
      {
        question: "Do you provide vocabulary workshops for GRE Verbal?",
        answer:
          "Yes! We conduct interactive weekly vocabulary root-word workshops, flashcard drill sessions, and Sentence Equivalence strategy clinics.",
      },
      {
        question: "Are mock tests aligned with the shorter GRE format?",
        answer:
          "All our 10 full-length practice tests mirror the modern 1-hour 58-minute GRE format and official scoring algorithm.",
      },
      {
        question: "Can working professionals in Gurgaon join weekend GRE batches?",
        answer:
          "Yes, we run dedicated Saturday and Sunday batches with flexible makeup slots.",
      },
    ],
  },
  noida: {
    city: "Noida",
    slug: "gre-coaching-in-noida",
    metaTitle: "Best GRE Coaching in Noida | Top GRE Classes — MBA Wizards",
    metaDescription:
      "Join top GRE coaching in Noida for MS and MBA aspirants. IIT alumni faculty, shorter GRE mock tests, and personalized study roadmaps.",
    heroPreTitle: "Target 325+ for Top US & European MS Programs",
    heroTitle: "Best GRE Coaching in",
    heroTitleHighlight: "Noida",
    heroSubtitle:
      "Comprehensive GRE General Test coaching for students and engineers across Noida. Live interactive classes with 1-on-1 mentor guidance.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "💻", title: "Live Interactive Prep", desc: "Small batch online sessions with live audio-visual faculty discussion." },
      { icon: "🎓", title: "MS & PhD Focus", desc: "Specialized guidance for computer science, data science, and engineering MS abroad." },
      { icon: "📚", title: "Comprehensive Portal", desc: "24/7 access to recorded lectures, sectional mocks, and analytical writing clinics." },
      { icon: "⏱️", title: "Flexible Schedules", desc: "Evening and weekend classes for college students and IT professionals." },
    ],
    faqs: [
      {
        question: "How do Noida students attend MBA Wizards GRE classes?",
        answer:
          "Students in Noida can join our live interactive online batches or visit our nearby NCR classroom centers.",
      },
      {
        question: "Do you assist with GRE Analytical Writing (AWA)?",
        answer:
          "Yes, we review and grade your essays with personalized feedback on argument logic, structure, and academic vocabulary.",
      },
      {
        question: "What score improvement can I expect?",
        answer:
          "Our students average a 15–20 point increase on the GRE scale, with many reaching 325+ from 305 baselines.",
      },
      {
        question: "Can I take a free trial class in Noida?",
        answer:
          "Yes, sign up on our website or message us on WhatsApp to attend a live demo session.",
      },
    ],
  },
  delhi: {
    city: "Delhi",
    slug: "gre-coaching-in-delhi",
    metaTitle: "Best GRE Coaching in Delhi | Top GRE Classes — MBA Wizards",
    metaDescription:
      "Premier GRE coaching in Delhi by IIT Roorkee alumni. High-percentile Verbal & Quant techniques for top global university admissions.",
    heroPreTitle: "Capital's Leading GRE Test Prep",
    heroTitle: "Best GRE Coaching in",
    heroTitleHighlight: "Delhi",
    heroSubtitle:
      "Personalized GRE preparation for students across DU, IIT Delhi, DTU, and NSUT targeting elite MS and MBA admissions abroad.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🏛️", title: "DU & DTU Preferred", desc: "Convenient batch timings for Delhi University, DTU, and engineering colleges." },
      { icon: "🎯", title: "Verbal Precision", desc: "Deconstruct Reading Comprehension arguments and tricky Text Completion traps." },
      { icon: "📈", title: "Quant 170 Strategy", desc: "Master high-difficulty Data Interpretation and advanced Geometry shortcuts." },
      { icon: "🌐", title: "Ivy League Admits", desc: "Mentorship by alumni who have helped 5,000+ students secure global admits." },
    ],
    faqs: [
      {
        question: "Why should Delhi students choose MBA Wizards for GRE?",
        answer:
          "We offer small capped batches, founder-led instruction by IIT Roorkee alumni, and customized study roadmaps instead of generic lectures.",
      },
      {
        question: "Are classes suitable for non-engineers preparing for GRE?",
        answer:
          "Yes! We have foundational math bridge modules designed specifically for non-engineering and humanities students.",
      },
      {
        question: "How are doubt sessions handled for Delhi students?",
        answer:
          "Doubt resolution is unlimited. You can book 1-on-1 mentor appointments or participate in weekly doubt clinics.",
      },
      {
        question: "Does MBA Wizards assist with MS and MBA applications in Delhi?",
        answer:
          "Yes, our admissions team provides comprehensive SOP editing, LOR review, and university selection counseling.",
      },
    ],
  },
  chandigarh: {
    city: "Chandigarh",
    slug: "gre-coaching-in-chandigarh",
    metaTitle: "Best GRE Coaching in Chandigarh | Top Classes — MBA Wizards",
    metaDescription:
      "Best GRE coaching in Chandigarh, Mohali & Panchkula. High-scoring Verbal & Quant strategies, study abroad guidance, and adaptive mocks.",
    heroPreTitle: "Tricity's Premier GRE Institute",
    heroTitle: "Best GRE Coaching in",
    heroTitleHighlight: "Chandigarh",
    heroSubtitle:
      "Ace the GRE General Test with expert faculty from IIT Roorkee. Tailored for Tricity students aspiring for top US, Canadian, and European universities.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🌲", title: "Tricity Reach", desc: "Dedicated interactive batches for Chandigarh, Mohali, and Panchkula aspirants." },
      { icon: "🍁", title: "Canada & US Specialization", desc: "Expert counseling for Canadian university MS programs and US scholarships." },
      { icon: "🧠", title: "Root Word Mastery", desc: "Contextual vocabulary coaching making high-level GRE words intuitive." },
      { icon: "🔄", title: "Course Validity", desc: "Attend revision classes until you achieve your target score." },
    ],
    faqs: [
      {
        question: "How does MBA Wizards assist Chandigarh students with GRE?",
        answer:
          "We provide live interactive online batches, physical study material delivered to your doorstep, and 1-on-1 strategy sessions.",
      },
      {
        question: "Can I target US scholarships with a high GRE score?",
        answer:
          "Yes! A 320+ GRE score substantially increases your chances of securing graduate assistantships and merit tuition waivers in the US.",
      },
      {
        question: "What is the class duration for GRE in Chandigarh?",
        answer:
          "Our standard course runs for 2.5 to 3 months with 60+ live instruction hours, followed by mock tests and reviews.",
      },
      {
        question: "How do I start with a demo session?",
        answer:
          "Register on our website to schedule your free diagnostic assessment and demo class.",
      },
    ],
  },
  mumbai: {
    city: "Mumbai",
    slug: "gre-coaching-in-mumbai",
    metaTitle: "Best GRE Coaching in Mumbai | Top GRE Classes — MBA Wizards",
    metaDescription:
      "Top GRE coaching in Mumbai for engineers and finance professionals. IIT alumni faculty, 325+ score roadmaps, and flexible batch timings.",
    heroPreTitle: "Maximum City's Top GRE Coaching",
    heroTitle: "Best GRE Coaching in",
    heroTitleHighlight: "Mumbai",
    heroSubtitle:
      "Engineered for Mumbai's engineering graduates and young professionals targeting elite global MS, PhD, and dual-degree programs.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🏙️", title: "Mumbai Executives & Grads", desc: "Flexible timings for IIT Bombay, VJTI, SPIT, and working professionals." },
      { icon: "🎯", title: "170 Quant Speed Drills", desc: "Fast-track mathematical estimation frameworks that eliminate silly errors." },
      { icon: "📖", title: "Critical Reading Precision", desc: "Master passage mapping and inference questions in high-density text." },
      { icon: "🤝", title: "Admissions Mentorship", desc: "Guidance for US STEM-designated programs and European universities." },
    ],
    faqs: [
      {
        question: "Can working professionals in Mumbai balance work and GRE prep?",
        answer:
          "Yes! We offer weekend and late-evening weekday classes with recorded archives so you can learn at your own pace.",
      },
      {
        question: "Are mock tests included in the Mumbai GRE course?",
        answer:
          "Yes, you receive 10 adaptive full-length mock exams with in-depth question-by-question analytical feedback.",
      },
      {
        question: "How are doubts resolved?",
        answer:
          "Students have 24/7 access to discussion channels and direct 1-on-1 doubt clearing slots with our senior faculty.",
      },
      {
        question: "Do you help with university selection in the US and Germany?",
        answer:
          "Yes, we provide specialized shortlist counseling based on your GRE score, GPA, and research background.",
      },
    ],
  },
  hyderabad: {
    city: "Hyderabad",
    slug: "gre-coaching-in-hyderabad",
    metaTitle: "Best GRE Coaching in Hyderabad | GRE Classes — MBA Wizards",
    metaDescription:
      "Top GRE coaching in Hyderabad for engineering students and IT professionals. 325+ target training by IIT Roorkee alumni. Book a free demo!",
    heroPreTitle: "Cyberabad's Premier GRE Accelerator",
    heroTitle: "Best GRE Coaching in",
    heroTitleHighlight: "Hyderabad",
    heroSubtitle:
      "Accelerate your GRE scores with proven pedagogical techniques. Preferred by software engineers and graduates across Hyderabad targeting US MS programs.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "💡", title: "HITEC City Preferred", desc: "Evening and weekend classes ideal for techies in Madhapur and Gachibowli." },
      { icon: "📐", title: "Quant 170 Training", desc: "High-level probability, permutations, and coordinate geometry shortcuts." },
      { icon: "📚", title: "Extensive Material", desc: "Thousands of practice questions categorized into beginner, medium, and hard." },
      { icon: "🏆", title: "Top US Admits", desc: "Proven track record of admits to Georgia Tech, UT Austin, UIUC, and Purdue." },
    ],
    faqs: [
      {
        question: "Why is MBA Wizards highly rated for GRE in Hyderabad?",
        answer:
          "Our IIT Roorkee mentors bring scientific problem-solving techniques and intensive verbal workshops that help engineers master GRE English.",
      },
      {
        question: "How long does GRE coaching take in Hyderabad?",
        answer:
          "Our regular batch takes 10–12 weeks. We also offer 6-week intensive bootcamps for students with upcoming test dates.",
      },
      {
        question: "Do you offer demo classes for Hyderabad students?",
        answer:
          "Yes, free live interactive demo classes are scheduled every week.",
      },
      {
        question: "Is there support for visa interviews and financial aid?",
        answer:
          "Yes, we provide end-to-end guidance from GRE test day to I-20 documentation and US visa mock interviews.",
      },
    ],
  },
  bangalore: {
    city: "Bangalore",
    slug: "gre-coaching-in-bangalore",
    metaTitle: "Best GRE Coaching in Bangalore | Top Classes — MBA Wizards",
    metaDescription:
      "Premier GRE coaching in Bangalore for software engineers and tech graduates. IIT alumni mentors, 325+ target pedagogy, and adaptive mocks.",
    heroPreTitle: "India's Tech Capital's Top GRE Choice",
    heroTitle: "Best GRE Coaching in",
    heroTitleHighlight: "Bangalore",
    heroSubtitle:
      "Tailored for Bangalore's engineers, data scientists, and students in Koramangala, Whitefield, and HSR Layout aiming for top global universities.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🚀", title: "Tech Professional Focus", desc: "Engineered around the busy schedules of Bangalore's tech workforce." },
      { icon: "🧠", title: "Algorithmic Approach", desc: "Logical frameworks to decode complex Verbal sentence completions." },
      { icon: "🏆", title: "Top Global Admits", desc: "Alumni studying at MIT, Stanford, Berkeley, Carnegie Mellon, and ETH Zurich." },
      { icon: "🔄", title: "Unlimited Validity", desc: "Re-attend classes and take refresher sessions right up until your exam date." },
    ],
    faqs: [
      {
        question: "How does MBA Wizards help Bangalore engineers score high in GRE Verbal?",
        answer:
          "We break down Verbal reasoning into algorithmic logic models, eliminating guesswork and dramatically increasing accuracy.",
      },
      {
        question: "Can I prepare while working full-time at an IT firm in Bangalore?",
        answer:
          "Yes, over 70% of our Bangalore students are working professionals who attend our weekend and late-night batches.",
      },
      {
        question: "What mock test platform do you provide?",
        answer:
          "Our proprietary test simulator replicates the official ETS computer-adaptive testing environment with accurate scoring.",
      },
      {
        question: "How do I join a demo session in Bangalore?",
        answer:
          "Click 'Book Free Demo' or message our team on WhatsApp to receive immediate access details.",
      },
    ],
  },
  pune: {
    city: "Pune",
    slug: "gre-coaching-in-pune",
    metaTitle: "Best GRE Coaching in Pune | Top GRE Classes — MBA Wizards",
    metaDescription:
      "Best GRE coaching in Pune for engineering students and young professionals. IIT faculty, adaptive test series, and guaranteed 320+ scores.",
    heroPreTitle: "Oxford of the East Top GRE Institute",
    heroTitle: "Best GRE Coaching in",
    heroTitleHighlight: "Pune",
    heroSubtitle:
      "Premier GRE coaching for students and professionals across COEP, Viman Nagar, Hinjewadi, and Kothrud targeting top overseas Master's degrees.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🎓", title: "Student & IT Focus", desc: "Catering to COEP, MIT, and Hinjewadi professionals with flexible schedules." },
      { icon: "🧮", title: "Quant 168+ Target", desc: "Comprehensive drills on Algebra, Arithmetic, and Data Interpretation." },
      { icon: "📖", title: "Verbal Conditioning", desc: "Eliminate vocabulary dread through structured root-word workshops." },
      { icon: "🤝", title: "Direct IIT Mentorship", desc: "Personalized doubt clearing and strategy sessions with founder faculty." },
    ],
    faqs: [
      {
        question: "How does MBA Wizards assist Pune students in preparing for GRE?",
        answer:
          "We combine live online instruction, personalized mentoring, official test simulators, and comprehensive study material.",
      },
      {
        question: "Are classes suitable for college pre-final and final year students?",
        answer:
          "Yes, we have early morning and weekend options tailored around university semester exams and project submissions.",
      },
      {
        question: "Do you help with university applications for Germany and the US?",
        answer:
          "Yes, our admissions counselors guide you through English-taught MS programs in Germany, US, UK, and Canada.",
      },
      {
        question: "How can I book a free demo in Pune?",
        answer:
          "Click 'Book Free Demo' on our website or connect with our Pune counseling desk via WhatsApp.",
      },
    ],
  },
};
