import type { FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";

export interface GmatCityData {
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

export const gmatCitiesData: Record<string, GmatCityData> = {
  gurgaon: {
    city: "Gurgaon",
    slug: "gmat-coaching-in-gurgaon",
    metaTitle: "Best GMAT Coaching in Gurgaon | Top GMAT Classes — MBA Wizards",
    metaDescription:
      "Join the best GMAT coaching in Gurgaon at Galleria DLF Phase 4 & Sector 50. Mentored by IIT Roorkee alumni. 700+ guaranteed score improvement.",
    heroPreTitle: "Top Rated GMAT Institute in Millennium City",
    heroTitle: "Best GMAT Coaching in",
    heroTitleHighlight: "Gurgaon",
    heroSubtitle:
      "Premier classroom and hybrid GMAT Focus Edition preparation at DLF Galleria Phase 4 & South City 2. Learn with 99th percentile IIT Roorkee mentors.",
    centerType: "Offline Classroom & Live Online",
    address: "Office 1212 & 1212A, Galleria Boulevard, DLF Phase 4 / F-45 South City 2, Gurgaon",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "📍", title: "Physical Classrooms", desc: "Prime accessible centers in DLF Galleria Phase 4 & Sector 50 South City 2." },
      { icon: "🎯", title: "70+ Live Hours", desc: "Complete coverage of Quantitative, Verbal, and Data Insights sections." },
      { icon: "🏆", title: "780 Highest Score", desc: "Consistently producing Gurgaon's highest GMAT scorers for ISB, INSEAD & US M7." },
      { icon: "👥", title: "Small Batches", desc: "Personalized attention with small batches and unlimited 1-on-1 doubt clinics." },
    ],
    faqs: [
      {
        question: "Where are MBA Wizards GMAT classroom centers located in Gurgaon?",
        answer:
          "We have two prime centers in Gurgaon: Office 1212 & 1212A, Galleria Boulevard, DLF Phase 4 (Sector 28) and F-45, South City 2, Sector 50.",
      },
      {
        question: "Do you offer offline weekend batches for working professionals in Cyber City?",
        answer:
          "Yes! We run specialized Saturday-Sunday weekend classroom batches tailored specifically for corporate professionals from Cyber City, Golf Course Road, and Udyog Vihar.",
      },
      {
        question: "Can I attend demo classes before enrolling in Gurgaon?",
        answer:
          "Yes, we offer free demo sessions at our Galleria and South City 2 centers as well as online live trial access.",
      },
      {
        question: "What is the course validity for GMAT classes in Gurgaon?",
        answer:
          "Your enrollment remains valid until you achieve your target score and secure your dream business school admission.",
      },
    ],
  },
  noida: {
    city: "Noida",
    slug: "gmat-coaching-in-noida",
    metaTitle: "Best GMAT Coaching in Noida | GMAT Classes — MBA Wizards",
    metaDescription:
      "Top GMAT coaching in Noida & Greater Noida. Highly personalized GMAT Focus training by IIT mentors. 700+ score guarantee with flexible batches.",
    heroPreTitle: "Premier GMAT Prep for Delhi-NCR Aspirants",
    heroTitle: "Best GMAT Coaching in",
    heroTitleHighlight: "Noida",
    heroSubtitle:
      "Master GMAT Focus Edition with adaptive pedagogy, live doubt clearance, and comprehensive study material tailored for Noida students and professionals.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "💻", title: "Live Interactive Prep", desc: "HD two-way live classroom sessions with instant doubt resolution." },
      { icon: "🎯", title: "IIT Roorkee Faculty", desc: "Learn directly from founders with 15+ years of verified test prep success." },
      { icon: "📚", title: "50,000+ Question Bank", desc: "Full online access to adaptive sectional drills and 10 full-length mocks." },
      { icon: "⏱️", title: "Weekend Schedules", desc: "Designed for Sector 62, 125, and expressway corporate executives." },
    ],
    faqs: [
      {
        question: "How can students from Noida join MBA Wizards GMAT coaching?",
        answer:
          "Students from Noida can attend our high-engagement live online batches or hybrid classroom sessions with direct 1-on-1 mentor guidance.",
      },
      {
        question: "Are live online classes interactive for Noida students?",
        answer:
          "Absolutely. Our live batches are capped to ensure two-way audio-visual interaction, real-time problem solving, and on-spot doubt clearance.",
      },
      {
        question: "Do you provide study materials and mocks for students in Noida?",
        answer:
          "Yes, all students receive comprehensive digital and physical study material, sectional diagnostics, and 10 adaptive full-length test simulations.",
      },
      {
        question: "Can working professionals in Noida opt for weekend timings?",
        answer:
          "Yes, we offer early morning, evening, and weekend batches designed specifically around corporate work schedules.",
      },
    ],
  },
  delhi: {
    city: "Delhi",
    slug: "gmat-coaching-in-delhi",
    metaTitle: "Best GMAT Coaching in Delhi | Top GMAT Classes — MBA Wizards",
    metaDescription:
      "Join the leading GMAT coaching in Delhi. Personalized training by IIT Roorkee alumni. 100+ points score improvement guarantee. Book a free demo!",
    heroPreTitle: "Capital's Most Trusted GMAT Institute",
    heroTitle: "Best GMAT Coaching in",
    heroTitleHighlight: "Delhi",
    heroSubtitle:
      "Elite GMAT Focus Edition prep for South Delhi, North Campus, and Central Delhi aspirants. Proven ability-based model delivering 700+ scores.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🏛️", title: "Pan-Delhi Access", desc: "Seamless hybrid learning for South Delhi, CP, Dwarka, and North Campus students." },
      { icon: "🎯", title: "Proven 740+ Track Record", desc: "Mentored 5,000+ Delhi aspirants into ISB, Wharton, Harvard, and INSEAD." },
      { icon: "🧠", title: "Manthan Pedagogy", desc: "Diagnostic self-assessment with individualized student codes and adaptive drills." },
      { icon: "📑", title: "Admissions Consulting", desc: "Comprehensive profile building, essay editing, and interview coaching." },
    ],
    faqs: [
      {
        question: "Why do Delhi students choose MBA Wizards over traditional institutes?",
        answer:
          "Unlike mass factory classrooms in Delhi with 50+ students, we cap batch sizes, offer direct founder mentorship by IIT Roorkee alumni, and maintain unlimited class validity.",
      },
      {
        question: "Are sessions available for college students in North and South Campus?",
        answer:
          "Yes, we offer flexible evening and weekend batches allowing DU, IIT Delhi, and IP university students to prepare without academic clashes.",
      },
      {
        question: "Does MBA Wizards assist with B-school applications in Delhi?",
        answer:
          "Yes, our consulting wing assists with ISB, IIM executive programs, and top global MBA applications including essays, resume, and interviews.",
      },
      {
        question: "Can I attend a free demo session in Delhi?",
        answer:
          "Yes, click 'Book a Free Demo' on our website to experience our teaching methodology firsthand.",
      },
    ],
  },
  chandigarh: {
    city: "Chandigarh",
    slug: "gmat-coaching-in-chandigarh",
    metaTitle: "Best GMAT Coaching in Chandigarh | Top Classes — MBA Wizards",
    metaDescription:
      "Premier GMAT coaching for students in Chandigarh, Mohali & Panchkula. IIT alumni mentors, adaptive mocks, and guaranteed score improvement.",
    heroPreTitle: "Tricity's Premier GMAT Destination",
    heroTitle: "Best GMAT Coaching in",
    heroTitleHighlight: "Chandigarh",
    heroSubtitle:
      "Empowering students across Chandigarh, Mohali, and Panchkula to conquer the GMAT Focus Edition with IIT Roorkee faculty and personalized mentorship.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🌲", title: "Tricity Focus", desc: "Serving students across Chandigarh, Mohali, and Panchkula with top test prep." },
      { icon: "🚀", title: "70-100+ Score Jump", desc: "Structured accuracy conditioning and Hard Math clinics for massive score leaps." },
      { icon: "🌐", title: "Study Abroad Support", desc: "End-to-end guidance for Canadian, US, and European business schools." },
      { icon: "🔄", title: "Unlimited Access", desc: "Attend revision classes and doubt marathons until you take your official test." },
    ],
    faqs: [
      {
        question: "How does MBA Wizards support GMAT aspirants in Chandigarh?",
        answer:
          "We offer live interactive online batches with dedicated 1-on-1 mentorship, official study material, and full access to our 50,000+ question bank.",
      },
      {
        question: "Can Tricity students get guidance for Canadian and US MBA admissions?",
        answer:
          "Yes, we specialize in admissions consulting for Rotman, Schulich, Sauder, and top US/European business schools.",
      },
      {
        question: "What is the typical batch size for Chandigarh students?",
        answer:
          "Batches are strictly limited to small groups to ensure individualized faculty interaction and customized doubt clinics.",
      },
      {
        question: "Do you offer GMAT mock tests aligned with the Focus Edition?",
        answer:
          "Yes, our 10 full-length adaptive mocks mirror the exact algorithm, 205-805 scoring, and timing of the official GMAC test.",
      },
    ],
  },
  mumbai: {
    city: "Mumbai",
    slug: "gmat-coaching-in-mumbai",
    metaTitle: "Best GMAT Coaching in Mumbai | Top GMAT Classes — MBA Wizards",
    metaDescription:
      "Top GMAT coaching in Mumbai for finance and tech professionals. Live interactive batches by IIT alumni. Proven 700+ GMAT Focus scores.",
    heroPreTitle: "Finance & Tech Capital's Top Choice",
    heroTitle: "Best GMAT Coaching in",
    heroTitleHighlight: "Mumbai",
    heroSubtitle:
      "Tailored for Mumbai's ambitious finance, consulting, and tech professionals from BKC, Nariman Point, Lower Parel, and Powai.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🏙️", title: "BKC & Powai Executives", desc: "Convenient late evening and weekend slots built for intense corporate schedules." },
      { icon: "📊", title: "Data Insights Focus", desc: "Specialized training for the new GMAT Focus Data Insights section." },
      { icon: "🎯", title: "M7 & Top European B-Schools", desc: "Proven alumni track record at London Business School, INSEAD, and Columbia." },
      { icon: "🤝", title: "1-on-1 Strategy Clinics", desc: "Private milestone reviews and score diagnosis with founder mentors." },
    ],
    faqs: [
      {
        question: "How is the program tailored for working professionals in Mumbai?",
        answer:
          "We offer 9 PM evening slots and weekend intensive bootcamps so working executives in BKC, Lower Parel, and Powai can balance careers with prep.",
      },
      {
        question: "Does MBA Wizards provide profile evaluation for Mumbai candidates?",
        answer:
          "Yes! We evaluate undergraduate transcripts, work experience, and career trajectory to recommend target percentiles and business schools.",
      },
      {
        question: "What results have Mumbai students achieved with MBA Wizards?",
        answer:
          "Our Mumbai students regularly secure 710–770 scores with admits to LBS, INSEAD, Wharton, NYU Stern, and ISB.",
      },
      {
        question: "Are repeat classes allowed if I travel for client work?",
        answer:
          "Yes. All sessions are recorded in HD, and you can attend repeat live classes or makeup doubt clinics whenever your work schedule permits.",
      },
    ],
  },
  hyderabad: {
    city: "Hyderabad",
    slug: "gmat-coaching-in-hyderabad",
    metaTitle: "Best GMAT Coaching in Hyderabad | GMAT Classes — MBA Wizards",
    metaDescription:
      "Premier GMAT coaching in Hyderabad for HITEC City techies and students. IIT Roorkee alumni mentorship, Focus Edition mocks, and guaranteed results.",
    heroPreTitle: "HITEC City's Trusted GMAT Accelerator",
    heroTitle: "Best GMAT Coaching in",
    heroTitleHighlight: "Hyderabad",
    heroSubtitle:
      "Accelerate your GMAT prep with expert faculty from IIT Roorkee. Designed for software engineers, consultants, and graduates across Hyderabad.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "💡", title: "HITEC City Preferred", desc: "Ideal for tech professionals in Gachibowli, Madhapur, and Kondapur." },
      { icon: "⚡", title: "Quant Mastery", desc: "Advanced speed frameworks to solve complex algebra and arithmetic in under 90s." },
      { icon: "🎯", title: "ISB PGP Specialization", desc: "Direct guidance and mock interview preparation for ISB Hyderabad aspirants." },
      { icon: "📚", title: "Comprehensive Portal", desc: "24/7 access to 50k+ questions, recorded classes, and video solutions." },
    ],
    faqs: [
      {
        question: "Do you offer specific coaching for ISB Hyderabad aspirants?",
        answer:
          "Yes. A significant portion of our Hyderabad students target ISB. We provide targeted GMAT training plus full application and interview support.",
      },
      {
        question: "How flexible are batch timings for techies working in Gachibowli?",
        answer:
          "We provide weekend morning batches and weekday night sessions that suit software professionals working in HITEC City and Gachibowli.",
      },
      {
        question: "What is the fee structure for GMAT coaching in Hyderabad?",
        answer:
          "We offer transparent, competitive pricing that includes all live classes, study materials, 10 mocks, and validity until admission.",
      },
      {
        question: "How do I take a demo class in Hyderabad?",
        answer:
          "Simply register on our website or connect via WhatsApp to join an upcoming live demo session.",
      },
    ],
  },
  bangalore: {
    city: "Bangalore",
    slug: "gmat-coaching-in-bangalore",
    metaTitle: "Best GMAT Coaching in Bangalore | Top Classes — MBA Wizards",
    metaDescription:
      "Top GMAT coaching in Bangalore for IT, product, and startup professionals. Elite IIT mentors, 700+ Focus Edition strategy, and small batches.",
    heroPreTitle: "Silicon Valley of India's Elite Test Prep",
    heroTitle: "Best GMAT Coaching in",
    heroTitleHighlight: "Bangalore",
    heroSubtitle:
      "Designed for Bangalore's engineers, product managers, and founders in Whitefield, Koramangala, and Indiranagar targeting world-class MBA programs.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🚀", title: "Tech & Product Focused", desc: "Tailored for Whitefield, Koramangala, and HSR Layout software professionals." },
      { icon: "📐", title: "Non-Engineer Bridge Modules", desc: "Special foundational clinics for humanities and commerce graduates." },
      { icon: "🏆", title: "Top Global Admits", desc: "Alumni studying at Stanford, Harvard, MIT Sloan, INSEAD, and IIM Bangalore." },
      { icon: "📈", title: "Continuous Progress Tracker", desc: "Individual student codes tracking concept accuracy and timing benchmarks." },
    ],
    faqs: [
      {
        question: "Why is MBA Wizards the best choice for Bangalore techies?",
        answer:
          "Our IIT Roorkee founders understand the engineering analytical mindset, providing structured shortcuts for Quant and intuitive logic models for Verbal.",
      },
      {
        question: "Can I prepare for GMAT while managing a demanding startup schedule in Bangalore?",
        answer:
          "Yes! Our flexible batch schedules, modular self-paced video portal, and HD recordings ensure you never fall behind during sprint cycles.",
      },
      {
        question: "Do you provide admissions consulting for IIM Bangalore EPGP and PGPEM?",
        answer:
          "Yes, we have deep expertise in executive and one-year MBA programs at IIM Bangalore, ISB, and leading global business schools.",
      },
      {
        question: "How many full-length mock tests are included?",
        answer:
          "Enrolled students receive 10 adaptive full-length test simulations calibrated to the latest GMAT Focus Edition scoring scale.",
      },
    ],
  },
  pune: {
    city: "Pune",
    slug: "gmat-coaching-in-pune",
    metaTitle: "Best GMAT Coaching in Pune | Top GMAT Classes — MBA Wizards",
    metaDescription:
      "Join the best GMAT coaching in Pune. Expert preparation by IIT Roorkee alumni for engineers and students. Guaranteed 700+ GMAT Focus score.",
    heroPreTitle: "Oxford of the East Premier GMAT Program",
    heroTitle: "Best GMAT Coaching in",
    heroTitleHighlight: "Pune",
    heroSubtitle:
      "Premier GMAT coaching for students and young professionals across Hinjewadi, Kothrud, Viman Nagar, and Shivaji Nagar.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🎓", title: "Student & IT Capital", desc: "Serving engineering grads and Hinjewadi IT executives with flexible timings." },
      { icon: "🎯", title: "70+ Live Hours", desc: "Comprehensive syllabus coverage with Hard Math workshops and Verbal clinics." },
      { icon: "🧠", title: "Scientific Pedagogy", desc: "Ability-based adaptive learning to turn weak areas into competitive advantages." },
      { icon: "🤝", title: "Direct Mentor Access", desc: "Doubt resolution with senior IIT alumni mentors till actual test day." },
    ],
    faqs: [
      {
        question: "How does MBA Wizards cater to Pune engineering students?",
        answer:
          "We offer foundational Verbal logic frameworks to master Critical Reasoning and Reading Comprehension, complementing your existing math strengths.",
      },
      {
        question: "Are weekend batches available for Hinjewadi professionals?",
        answer:
          "Yes, our weekend batches are specially scheduled to accommodate Hinjewadi and Magarpatta IT professionals.",
      },
      {
        question: "Can I switch between online and classroom modes?",
        answer:
          "Yes, our hybrid infrastructure allows you to switch seamlessly between live interactive online classes and recorded sessions.",
      },
      {
        question: "How do I enroll in GMAT coaching in Pune?",
        answer:
          "You can sign up online, attend a free demo session, and receive your customized study plan within 24 hours.",
      },
    ],
  },
};
