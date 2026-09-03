import type { FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";

export interface GmatGreCityData {
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

export const gmatGreCitiesData: Record<string, GmatGreCityData> = {
  gurgaon: {
    city: "Gurgaon",
    slug: "gmat-gre-coaching-in-gurgaon",
    metaTitle: "Best GMAT+GRE Dual Coaching in Gurgaon — MBA Wizards",
    metaDescription:
      "Integrated GMAT and GRE dual coaching in Gurgaon at Galleria DLF Phase 4 & Sector 50. Maximize your global MBA and MS options with IIT alumni mentors.",
    heroPreTitle: "Dual Advantage for Global Business Schools & MS",
    heroTitle: "Best GMAT+GRE Coaching in",
    heroTitleHighlight: "Gurgaon",
    heroSubtitle:
      "Integrated dual test preparation covering shared Quantitative, Verbal, and Data Insights/Analytical concepts with IIT Roorkee alumni in DLF Galleria & Sector 50.",
    centerType: "Offline Classroom & Live Online",
    address: "Office 1212 & 1212A, Galleria Boulevard, DLF Phase 4 / F-45 South City 2, Gurgaon",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "📍", title: "Dual Classroom Access", desc: "Prime centers in DLF Galleria Phase 4 and Sector 50 South City 2." },
      { icon: "⚡", title: "Unified Syllabus", desc: "Master 80% overlapping syllabus with specialized exam-specific bridge modules." },
      { icon: "🎓", title: "Dual Admissions Scope", desc: "Apply to both top global MBA programs and specialized Master's degrees." },
      { icon: "👥", title: "Capped Batches", desc: "Personalized attention with small batches and unlimited 1-on-1 doubt clearing." },
    ],
    faqs: [
      {
        question: "Why should I prepare for both GMAT and GRE together in Gurgaon?",
        answer:
          "Dual preparation gives you maximum flexibility: apply to top global business schools that accept both, or keep MS and MBA dual-degree options open without preparing twice.",
      },
      {
        question: "Where are your dual prep classroom batches held in Gurgaon?",
        answer:
          "We offer physical classroom batches at DLF Galleria Phase 4 (Sector 28) and South City 2 (Sector 50), along with live online streaming.",
      },
      {
        question: "How do you manage the difference between GMAT and GRE Verbal?",
        answer:
          "We conduct core Critical Reasoning and Reading Comprehension classes together, followed by specialized vocabulary and sentence equivalence clinics for GRE.",
      },
      {
        question: "Are mock tests provided for both exams?",
        answer:
          "Yes! You receive 10 adaptive GMAT Focus mocks and 10 full-length GRE test simulations with detailed faculty review.",
      },
    ],
  },
  noida: {
    city: "Noida",
    slug: "gmatgre-coaching-in-noida",
    metaTitle: "Best GMAT+GRE Dual Coaching in Noida — MBA Wizards",
    metaDescription:
      "Integrated GMAT GRE coaching in Noida. Live online & hybrid classes by IIT faculty. One comprehensive course for global MBA and MS admissions.",
    heroPreTitle: "Maximize Global Admissions from Delhi-NCR",
    heroTitle: "Best GMAT+GRE Coaching in",
    heroTitleHighlight: "Noida",
    heroSubtitle:
      "Integrated test prep designed for Noida students and professionals. Comprehensive quantitative foundations and advanced verbal reasoning for both tests.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "💻", title: "Live Interactive Dual Prep", desc: "Seamless online live classes with recorded archives and instant doubt clearing." },
      { icon: "🎯", title: "IIT Roorkee Mentors", desc: "Learn directly from test prep veterans with 15+ years of 750+ / 330+ track record." },
      { icon: "📚", title: "Complete Study Material", desc: "Extensive question bank covering both GMAT Focus and GRE General requirements." },
      { icon: "⏱️", title: "Weekend Options", desc: "Convenient batch schedules for Sector 62 and Noida expressway professionals." },
    ],
    faqs: [
      {
        question: "How does the dual GMAT+GRE course work for Noida students?",
        answer:
          "Students cover shared core modules first, followed by exam-specific tracks for GMAT Data Insights and GRE Vocabulary/AWA.",
      },
      {
        question: "Can working professionals in Noida join weekend batches?",
        answer:
          "Yes, we offer weekend morning and evening batches designed to fit corporate work schedules.",
      },
      {
        question: "How do I take a free demo class in Noida?",
        answer:
          "Click 'Book Free Demo' on our website to join an upcoming live online demo session.",
      },
      {
        question: "What is the fee advantage of taking the dual GMAT+GRE course?",
        answer:
          "Enrolling in the combined dual program saves up to 40% compared to taking GMAT and GRE coaching separately.",
      },
    ],
  },
  delhi: {
    city: "Delhi",
    slug: "gmatgre-coaching-in-delhi",
    metaTitle: "Best GMAT+GRE Dual Coaching in Delhi — MBA Wizards",
    metaDescription:
      "Leading GMAT+GRE coaching in Delhi. Expert IIT Roorkee mentors, combined syllabus efficiency, and top global university admissions support.",
    heroPreTitle: "Capital's Most Trusted Dual Test Prep",
    heroTitle: "Best GMAT+GRE Coaching in",
    heroTitleHighlight: "Delhi",
    heroSubtitle:
      "Save time and money with our integrated GMAT and GRE program. Ideal for Delhi University, DTU, and corporate professionals aiming for top global programs.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🏛️", title: "Delhi-Wide Reach", desc: "Interactive hybrid sessions accessible across South Delhi, CP, Dwarka, and North Campus." },
      { icon: "📈", title: "Proven Score Leap", desc: "Structured accuracy conditioning and Hard Math clinics for 700+ GMAT and 320+ GRE." },
      { icon: "🌐", title: "Global Admissions Wing", desc: "End-to-end guidance for US, UK, European, and Canadian business schools." },
      { icon: "🔄", title: "Validity Till Admission", desc: "Attend classes and review sessions right up until your test day." },
    ],
    faqs: [
      {
        question: "Why choose combined GMAT+GRE coaching in Delhi?",
        answer:
          "Over 80% of math and reading concepts are shared. Our structured pedagogy teaches core principles once, saving you months of study time.",
      },
      {
        question: "Is this course suitable for DU college students in Delhi?",
        answer:
          "Yes, hundreds of students from SRCC, St. Stephen's, Hindu, and DTU prepare with our flexible evening and weekend batches.",
      },
      {
        question: "Do you help with application essays and resumes?",
        answer:
          "Yes, our admissions consulting wing assists with SOPs, resumes, and interview preparation for both MBA and MS programs.",
      },
      {
        question: "Can I attend a free demo class in Delhi?",
        answer:
          "Yes, register online or contact us via WhatsApp to reserve a free demo seat.",
      },
    ],
  },
  chandigarh: {
    city: "Chandigarh",
    slug: "gmatgre-coaching-in-chandigarh",
    metaTitle: "Best GMAT+GRE Dual Coaching in Chandigarh — MBA Wizards",
    metaDescription:
      "Premier GMAT+GRE combined coaching for Chandigarh, Mohali & Panchkula. IIT alumni faculty, dual test mocks, and study abroad counseling.",
    heroPreTitle: "Tricity's Premier Dual Test Destination",
    heroTitle: "Best GMAT+GRE Coaching in",
    heroTitleHighlight: "Chandigarh",
    heroSubtitle:
      "Empowering students across Chandigarh, Mohali, and Panchkula to crack both GMAT and GRE with scientific ability-based pedagogy from IIT Roorkee.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🌲", title: "Tricity Dedicated", desc: "Serving students across Chandigarh, Mohali, and Panchkula with top dual prep." },
      { icon: "🍁", title: "Canada & US Specialization", desc: "Comprehensive counseling for Canadian PR-friendly Master's and top US MBA admits." },
      { icon: "🧠", title: "Integrated Math & Verbal", desc: "Seamless transition between GMAT Data Insights and GRE Analytical Writing." },
      { icon: "🤝", title: "Personal Mentor", desc: "1-on-1 strategy sessions with founder mentors to monitor your test readiness." },
    ],
    faqs: [
      {
        question: "How does MBA Wizards deliver GMAT+GRE coaching in Chandigarh?",
        answer:
          "We offer live interactive online classes, printed and digital study materials delivered to your home, and personalized 1-on-1 doubt clearing.",
      },
      {
        question: "Can I use GRE scores for MBA programs in Canada and the US?",
        answer:
          "Yes! Over 90% of business schools worldwide, including Harvard, Stanford, Rotman, and INSEAD, accept both GRE and GMAT scores equally.",
      },
      {
        question: "What mock tests do Chandigarh students receive?",
        answer:
          "Enrolled students receive 10 full-length GMAT Focus mocks and 10 adaptive GRE practice exams with detailed performance analytics.",
      },
      {
        question: "How do I schedule a counseling session?",
        answer:
          "Fill out our demo form or connect via WhatsApp to speak directly with an IIT mentor.",
      },
    ],
  },
  mumbai: {
    city: "Mumbai",
    slug: "gmatgre-coaching-in-mumbai",
    metaTitle: "Best GMAT+GRE Dual Coaching in Mumbai — MBA Wizards",
    metaDescription:
      "Top GMAT+GRE dual coaching in Mumbai for finance and tech professionals. IIT alumni mentors, weekend batches, and global MBA/MS admissions support.",
    heroPreTitle: "Financial Capital's Elite Dual Prep Program",
    heroTitle: "Best GMAT+GRE Coaching in",
    heroTitleHighlight: "Mumbai",
    heroSubtitle:
      "Designed for Mumbai's professionals and graduates in BKC, Lower Parel, and Powai seeking admission to top global MBA and finance/tech Master's programs.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🏙️", title: "Corporate Schedule Friendly", desc: "Late evening slots and weekend intensive bootcamps built for Mumbai executives." },
      { icon: "📊", title: "Dual Test Strategy", desc: "Diagnostic evaluation to determine whether GMAT or GRE is your highest scoring exam." },
      { icon: "🎯", title: "M7 & Top European B-Schools", desc: "Proven alumni at LBS, INSEAD, Columbia, and Oxford Saïd." },
      { icon: "🤝", title: "Private Strategy Clinics", desc: "Personalized milestone reviews with IIT Roorkee alumni founders." },
    ],
    faqs: [
      {
        question: "Should Mumbai finance professionals take GMAT or GRE?",
        answer:
          "Both tests are widely accepted. Our dual program allows you to prepare for both, take diagnostic mocks, and submit your strongest percentile score.",
      },
      {
        question: "How do working professionals in Mumbai balance the dual workload?",
        answer:
          "By focusing on the 80% conceptual overlap first, we keep the weekly commitment to 8–10 hours with flexible weekend schedules.",
      },
      {
        question: "Are class recordings provided?",
        answer:
          "Yes, all live sessions are recorded in HD and accessible in your portal with lifetime validity.",
      },
      {
        question: "How can I book a free demo session in Mumbai?",
        answer:
          "Click 'Book Free Demo' on our website or connect on WhatsApp to attend an upcoming live demo class.",
      },
    ],
  },
  hyderabad: {
    city: "Hyderabad",
    slug: "gmatgre-coaching-in-hyderabad",
    metaTitle: "Best GMAT+GRE Dual Coaching in Hyderabad — MBA Wizards",
    metaDescription:
      "Premier GMAT+GRE coaching in Hyderabad for HITEC City techies and college graduates. IIT mentors, dual test strategy, and guaranteed results.",
    heroPreTitle: "HITEC City's Trusted Dual Prep Accelerator",
    heroTitle: "Best GMAT+GRE Coaching in",
    heroTitleHighlight: "Hyderabad",
    heroSubtitle:
      "Accelerate your test preparation with IIT Roorkee mentors. Tailored for software engineers and graduates across Hyderabad targeting top MS and MBA programs.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "💡", title: "HITEC City Preferred", desc: "Convenient evening and weekend classes for techies in Gachibowli and Madhapur." },
      { icon: "⚡", title: "Advanced Quant Mastery", desc: "Speed math shortcuts to solve difficult algebra and data questions in under 90s." },
      { icon: "🎯", title: "ISB & US MS Strategy", desc: "Dual pathway preparing you for ISB PGP as well as top US Computer Science MS programs." },
      { icon: "📚", title: "50k+ Question Portal", desc: "Extensive problem repository with video solutions and sectional diagnostics." },
    ],
    faqs: [
      {
        question: "Can I target both ISB Hyderabad and US universities with this course?",
        answer:
          "Yes! This dual track prepares you for the GMAT (for ISB and global MBA) and GRE (for US MS and dual-degree programs).",
      },
      {
        question: "What is the schedule for software engineers in Hyderabad?",
        answer:
          "We offer weekend morning tracks and 9 PM weekday night sessions tailored around tech industry work hours.",
      },
      {
        question: "Do you offer demo classes for Hyderabad students?",
        answer:
          "Yes, free interactive demo sessions are scheduled weekly. Register on our website to attend.",
      },
      {
        question: "What happens if I miss a scheduled class?",
        answer:
          "You can watch the HD recording in your student portal and attend an upcoming repeat live session or makeup doubt clinic.",
      },
    ],
  },
  bangalore: {
    city: "Bangalore",
    slug: "gmatgre-coaching-in-bangalore",
    metaTitle: "Best GMAT+GRE Dual Coaching in Bangalore — MBA Wizards",
    metaDescription:
      "Top GMAT+GRE coaching in Bangalore for engineers and tech professionals. Master both exams with IIT alumni mentors and comprehensive adaptive mocks.",
    heroPreTitle: "Silicon Valley of India's Elite Dual Test Prep",
    heroTitle: "Best GMAT+GRE Coaching in",
    heroTitleHighlight: "Bangalore",
    heroSubtitle:
      "Engineered for Bangalore's tech workforce in Whitefield, Koramangala, and HSR Layout aiming for top global MBA, MS, and dual-degree programs.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🚀", title: "Tech Professional Focus", desc: "Customized around demanding startup and tech sprint schedules." },
      { icon: "🧠", title: "Adaptive Learning", desc: "Dynamic practice drills that automatically calibrate to your personal learning curve." },
      { icon: "🏆", title: "Global Top Admits", desc: "Alumni at MIT, Stanford, Harvard, Wharton, and INSEAD." },
      { icon: "🔄", title: "Course Validity", desc: "Attend revision classes and test reviews until you secure your target admission." },
    ],
    faqs: [
      {
        question: "Why do Bangalore engineers choose the dual GMAT+GRE course?",
        answer:
          "Engineers appreciate the structured, algorithmic approach to both tests. You prepare once and keep both global MBA and technical MS options open.",
      },
      {
        question: "How are dual mock exams scheduled?",
        answer:
          "You receive access to 10 GMAT Focus mocks and 10 GRE mocks on our adaptive testing portal with detailed performance analytics.",
      },
      {
        question: "Can I get 1-on-1 help for difficult verbal topics?",
        answer:
          "Yes! We provide unlimited 1-on-1 doubt clearing appointments with our senior faculty for Reading Comprehension and Critical Reasoning.",
      },
      {
        question: "How do I enroll in Bangalore?",
        answer:
          "Sign up online or message us on WhatsApp to attend a free demo session and start your personalized study plan.",
      },
    ],
  },
  pune: {
    city: "Pune",
    slug: "gmatgre-coaching-in-pune",
    metaTitle: "Best GMAT+GRE Dual Coaching in Pune — MBA Wizards",
    metaDescription:
      "Best GMAT+GRE coaching in Pune for engineering students and young professionals. IIT Roorkee alumni mentors, dual test strategy, and guaranteed results.",
    heroPreTitle: "Oxford of the East Premier Dual Program",
    heroTitle: "Best GMAT+GRE Coaching in",
    heroTitleHighlight: "Pune",
    heroSubtitle:
      "Premier dual GMAT and GRE preparation for students and professionals across Hinjewadi, Viman Nagar, Kothrud, and Shivaji Nagar.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🎓", title: "Student & IT Capital", desc: "Serving engineering colleges and Hinjewadi IT executives with flexible schedules." },
      { icon: "🧮", title: "Dual Quant Mastery", desc: "Master advanced Quantitative Reasoning techniques applicable to both exams." },
      { icon: "📖", title: "Verbal Conditioning", desc: "Comprehensive reading analysis, critical reasoning logic, and vocabulary workshops." },
      { icon: "🤝", title: "Direct IIT Mentorship", desc: "Doubt resolution and application strategy sessions with founder mentors." },
    ],
    faqs: [
      {
        question: "How does MBA Wizards support Pune students in GMAT+GRE prep?",
        answer:
          "We offer live interactive online classes, comprehensive digital and physical study materials, adaptive mocks, and 1-on-1 mentorship.",
      },
      {
        question: "Are weekend batches available for Hinjewadi professionals?",
        answer:
          "Yes, we run weekend batches specially designed for working professionals in Hinjewadi and Magarpatta.",
      },
      {
        question: "Can I get guidance on deciding whether to submit GMAT or GRE?",
        answer:
          "Yes! After you take both sets of diagnostic mocks, our mentors analyze your percentile breakdown and advise on the most competitive score.",
      },
      {
        question: "How can I join a free demo in Pune?",
        answer:
          "Click 'Book Free Demo' on our website or connect directly with our counseling team via WhatsApp.",
      },
    ],
  },
};
