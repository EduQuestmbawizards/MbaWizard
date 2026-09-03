import type { FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";

export interface GmatCatCityData {
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

export const gmatCatCitiesData: Record<string, GmatCatCityData> = {
  gurgaon: {
    city: "Gurgaon",
    slug: "gmat-cat-coaching-in-gurgaon",
    metaTitle: "Best GMAT+CAT Dual Coaching in Gurgaon — MBA Wizards",
    metaDescription:
      "Integrated GMAT and CAT dual coaching in Gurgaon at Galleria DLF Phase 4 & Sector 50. Prepare for IIMs, ISB & top global B-schools simultaneously.",
    heroPreTitle: "Target Top IIMs, ISB & Global B-Schools",
    heroTitle: "Best GMAT+CAT Coaching in",
    heroTitleHighlight: "Gurgaon",
    heroSubtitle:
      "Master the synergy between GMAT Focus Edition and CAT with IIT Roorkee alumni. Classroom coaching at DLF Galleria & Sector 50 South City 2.",
    centerType: "Offline Classroom & Live Online",
    address: "Office 1212 & 1212A, Galleria Boulevard, DLF Phase 4 / F-45 South City 2, Gurgaon",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "📍", title: "Prime Centers", desc: "DLF Galleria Phase 4 and South City 2 Sector 50 classrooms." },
      { icon: "🔄", title: "Unified Curriculum", desc: "Covers 75% overlapping syllabus in Quant, DILR, and Verbal reasoning." },
      { icon: "🏆", title: "Dual Admits", desc: "Proven track record of calls from IIM Ahmedabad, Bangalore, Calcutta & ISB." },
      { icon: "👥", title: "Personalized Clinics", desc: "Capped batch sizes with unlimited doubt clearance and exam strategy." },
    ],
    faqs: [
      {
        question: "Why should Gurgaon students prepare for both GMAT and CAT?",
        answer:
          "Dual preparation provides a secure dual pathway: maximize your options for IIMs through CAT while targeting ISB, SPJIMR, and top global business schools via GMAT.",
      },
      {
        question: "Where are the physical classes held in Gurgaon?",
        answer:
          "Classes take place at our DLF Galleria Phase 4 center (Sector 28) and South City 2 center (Sector 50), with live online streaming options.",
      },
      {
        question: "How do you handle the timing difference between CAT (Nov) and GMAT (flexible)?",
        answer:
          "We structure preparation so you peak for CAT in November while maintaining ongoing GMAT readiness to take the exam anytime from August to January.",
      },
      {
        question: "Are mock test series included for both exams?",
        answer:
          "Yes, students receive 15 full-length CAT mocks and 10 adaptive GMAT Focus test simulations with detailed faculty analysis.",
      },
    ],
  },
  delhi: {
    city: "Delhi",
    slug: "gmat-cat-coaching-in-delhi",
    metaTitle: "Best GMAT+CAT Dual Coaching in Delhi — MBA Wizards",
    metaDescription:
      "Premier GMAT+CAT combined coaching in Delhi by IIT Roorkee alumni. Prepare for IIMs and global business schools with one unified strategy.",
    heroPreTitle: "Capital's Most Trusted Dual Management Prep",
    heroTitle: "Best GMAT+CAT Coaching in",
    heroTitleHighlight: "Delhi",
    heroSubtitle:
      "Integrated test prep designed for Delhi University, DTU, and corporate professionals aiming for both top IIMs and elite global MBA programs.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🏛️", title: "DU & Engineering Hub", desc: "Convenient batch schedules for North Campus, South Campus, and DTU students." },
      { icon: "⚡", title: "Advanced DILR & Insights", desc: "Specialized workshops for complex CAT LRDI sets and GMAT Data Insights." },
      { icon: "📈", title: "99%ile Aim", desc: "Systematic level-wise training from baseline fundamentals to advanced 99th percentile problem sets." },
      { icon: "🌐", title: "Admissions Consulting", desc: "End-to-end guidance for IIM WAT-PI, ISB applications, and US/European B-schools." },
    ],
    faqs: [
      {
        question: "How does MBA Wizards structure the GMAT+CAT dual syllabus in Delhi?",
        answer:
          "Core math and reading comprehension are taught simultaneously, followed by CAT-specific advanced LRDI sets and GMAT-specific Data Sufficiency modules.",
      },
      {
        question: "Can college students in Delhi manage this course alongside semesters?",
        answer:
          "Yes! We offer flexible evening and weekend options so university students can balance exams and MBA preparation without conflict.",
      },
      {
        question: "Do you offer interview preparation for IIM calls in Delhi?",
        answer:
          "Yes, all students who receive interview calls receive complimentary WAT-PI mentorship, resume polishing, and mock interview panels.",
      },
      {
        question: "How do I attend a demo class in Delhi?",
        answer:
          "Click 'Book Free Demo' or message our Delhi counseling desk on WhatsApp to attend an upcoming live session.",
      },
    ],
  },
  noida: {
    city: "Noida",
    slug: "gmat-cat-coaching-in-noida",
    metaTitle: "Best GMAT+CAT Dual Coaching in Noida — MBA Wizards",
    metaDescription:
      "Top GMAT+CAT dual coaching in Noida & Greater Noida. Highly personalized classes by IIT mentors. Target IIMs and international B-schools.",
    heroPreTitle: "Maximize MBA Admissions from Delhi-NCR",
    heroTitle: "Best GMAT+CAT Coaching in",
    heroTitleHighlight: "Noida",
    heroSubtitle:
      "Comprehensive test preparation tailored for Noida students and IT executives. Master CAT QA/DILR/VARC alongside GMAT Focus Edition.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "💻", title: "Live Interactive Dual Prep", desc: "Two-way audio-video classes with instant doubt resolution and recorded archives." },
      { icon: "🎯", title: "IIT Roorkee Faculty", desc: "Learn directly from mentors with 15+ years of CAT 99%ile and GMAT 750+ success." },
      { icon: "📚", title: "50,000+ Question Bank", desc: "Comprehensive portal with topic-wise drills, sectional tests, and full mocks." },
      { icon: "⏱️", title: "Corporate Schedules", desc: "Weekend and night slots for Sector 62, 125, and expressway professionals." },
    ],
    faqs: [
      {
        question: "How does the dual GMAT+CAT program benefit students in Noida?",
        answer:
          "You avoid paying twice for coaching and cover both Indian MBA entrance exams (CAT, XAT, NMAT) and global exams (GMAT) under one fee.",
      },
      {
        question: "Can working professionals in Noida join weekend batches?",
        answer:
          "Yes, we run specialized Saturday and Sunday batches with flexible makeup slots.",
      },
      {
        question: "Are live classes interactive for Noida students?",
        answer:
          "Yes, batch sizes are capped so you can ask questions freely in real-time, just like an in-person classroom.",
      },
      {
        question: "How do I start with a demo session?",
        answer:
          "Submit your details on our website to schedule your free diagnostic assessment and demo class.",
      },
    ],
  },
  pune: {
    city: "Pune",
    slug: "gmat-cat-coaching-in-pune",
    metaTitle: "Best GMAT+CAT Dual Coaching in Pune — MBA Wizards",
    metaDescription:
      "Best GMAT+CAT dual coaching in Pune for engineers and students. IIT alumni faculty, dual test strategy, and guaranteed score improvement.",
    heroPreTitle: "Oxford of the East Top Dual MBA Program",
    heroTitle: "Best GMAT+CAT Coaching in",
    heroTitleHighlight: "Pune",
    heroSubtitle:
      "Target IIMs, SPJIMR, ISB, and top global business schools. Designed for engineering grads and Hinjewadi professionals in Pune.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🎓", title: "Student & IT Focus", desc: "Serving engineering colleges and Hinjewadi IT executives with flexible schedules." },
      { icon: "🧮", title: "Math & Logic Shortcuts", desc: "Master advanced algebra, geometry, and modern math shortcuts for both exams." },
      { icon: "📖", title: "VARC & Verbal Clinics", desc: "Overcome verbal anxiety through structured critical reasoning and passage mapping." },
      { icon: "🤝", title: "Direct IIT Mentorship", desc: "1-on-1 strategy sessions with founder mentors to track your milestone progress." },
    ],
    faqs: [
      {
        question: "How does MBA Wizards assist Pune engineering students in CAT & GMAT?",
        answer:
          "We leverage your quantitative strengths while providing structured, logical frameworks for Verbal Ability and Reading Comprehension.",
      },
      {
        question: "Are weekend batches available for Hinjewadi professionals?",
        answer:
          "Yes, our weekend batches are specially scheduled to accommodate Hinjewadi and Magarpatta IT professionals.",
      },
      {
        question: "Can I get guidance on deciding between IIMs and global MBA programs?",
        answer:
          "Yes! Our mentors evaluate your profile, work experience, and career aspirations to recommend the ideal blend of target colleges.",
      },
      {
        question: "How can I book a free demo in Pune?",
        answer:
          "Click 'Book Free Demo' on our website or connect with our counseling desk via WhatsApp.",
      },
    ],
  },
  chandigarh: {
    city: "Chandigarh",
    slug: "gmat-cat-coaching-in-chandigarh",
    metaTitle: "Best GMAT+CAT Dual Coaching in Chandigarh — MBA Wizards",
    metaDescription:
      "Leading GMAT+CAT coaching in Chandigarh, Mohali & Panchkula. IIT alumni mentors, adaptive mocks, and study abroad & IIM counseling.",
    heroPreTitle: "Tricity's Premier Dual MBA Destination",
    heroTitle: "Best GMAT+CAT Coaching in",
    heroTitleHighlight: "Chandigarh",
    heroSubtitle:
      "Empowering students across Chandigarh, Mohali, and Panchkula to crack both CAT and GMAT with scientific ability-based pedagogy from IIT Roorkee.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🌲", title: "Tricity Dedicated", desc: "Serving students across Chandigarh, Mohali, and Panchkula with top dual prep." },
      { icon: "🏆", title: "IIM & ISB Track Record", desc: "Proven alumni at IIM Lucknow, Kozhikode, Indore, and ISB Hyderabad." },
      { icon: "🧠", title: "Manthan Pedagogy", desc: "Diagnostic self-assessment with individualized student codes and adaptive drills." },
      { icon: "🔄", title: "Validity Till Admission", desc: "Attend revision classes and test reviews until you secure your target admission." },
    ],
    faqs: [
      {
        question: "How does MBA Wizards deliver GMAT+CAT coaching in Chandigarh?",
        answer:
          "We offer live interactive online classes, comprehensive digital and physical study materials, adaptive mocks, and 1-on-1 mentorship.",
      },
      {
        question: "Can Chandigarh students target both Indian IIMs and global business schools?",
        answer:
          "Yes! The dual curriculum ensures you are fully prepared for CAT in November and GMAT for global/ISB rounds throughout the year.",
      },
      {
        question: "What mock tests do Chandigarh students receive?",
        answer:
          "You receive 15 full-length CAT mocks and 10 adaptive GMAT Focus test simulations with comprehensive analytics.",
      },
      {
        question: "How do I schedule a counseling session in Chandigarh?",
        answer:
          "Fill out our demo form or connect via WhatsApp to speak directly with an IIT mentor.",
      },
    ],
  },
  mumbai: {
    city: "Mumbai",
    slug: "gmat-cat-coaching-in-mumbai",
    metaTitle: "Best GMAT+CAT Dual Coaching in Mumbai — MBA Wizards",
    metaDescription:
      "Top GMAT+CAT dual coaching in Mumbai for finance and tech professionals. IIT alumni mentors, weekend batches, and top B-school admissions.",
    heroPreTitle: "Financial Capital's Elite Dual MBA Program",
    heroTitle: "Best GMAT+CAT Coaching in",
    heroTitleHighlight: "Mumbai",
    heroSubtitle:
      "Designed for Mumbai's professionals and graduates in BKC, Nariman Point, and Powai seeking admission to top IIMs, ISB, and global business schools.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🏙️", title: "Corporate Schedule Friendly", desc: "Late evening slots and weekend intensive bootcamps built for Mumbai executives." },
      { icon: "📊", title: "Dual Test Strategy", desc: "Seamless alignment between CAT Data Interpretation and GMAT Data Insights." },
      { icon: "🎯", title: "Top B-School Admits", desc: "Proven track record at IIM Ahmedabad, IIM Calcutta, ISB, and INSEAD." },
      { icon: "🤝", title: "Private Strategy Clinics", desc: "Personalized milestone reviews with IIT Roorkee alumni founders." },
    ],
    faqs: [
      {
        question: "How is the program tailored for working professionals in Mumbai?",
        answer:
          "We offer 9 PM evening slots and weekend intensive bootcamps so working executives in BKC, Lower Parel, and Powai can balance careers with prep.",
      },
      {
        question: "Can I prepare for CAT and GMAT simultaneously without burning out?",
        answer:
          "Yes! By focusing on the 75% overlapping concepts first, we streamline your study hours to 8–10 productive hours per week.",
      },
      {
        question: "Are class recordings provided for busy Mumbai students?",
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
  bangalore: {
    city: "Bangalore",
    slug: "gmat-cat-coaching-in-bangalore",
    metaTitle: "Best GMAT+CAT Dual Coaching in Bangalore — MBA Wizards",
    metaDescription:
      "Top GMAT+CAT coaching in Bangalore for engineers and tech professionals. Master both exams with IIT alumni mentors and comprehensive adaptive mocks.",
    heroPreTitle: "Silicon Valley of India's Elite Dual MBA Prep",
    heroTitle: "Best GMAT+CAT Coaching in",
    heroTitleHighlight: "Bangalore",
    heroSubtitle:
      "Engineered for Bangalore's tech workforce in Whitefield, Koramangala, and HSR Layout aiming for IIM Bangalore, ISB, and top global business schools.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🚀", title: "Tech Professional Focus", desc: "Customized around demanding startup and tech sprint schedules." },
      { icon: "🧠", title: "Adaptive Pedagogy", desc: "Dynamic practice drills that automatically calibrate to your personal learning curve." },
      { icon: "🏆", title: "IIMB & Global Admits", desc: "Alumni studying at IIM Bangalore, ISB, Harvard, and INSEAD." },
      { icon: "🔄", title: "Course Validity", desc: "Attend revision classes and test reviews until you secure your target admission." },
    ],
    faqs: [
      {
        question: "Why do Bangalore engineers choose the dual GMAT+CAT course?",
        answer:
          "Engineers appreciate the structured, algorithmic approach to both tests. You prepare once and keep both Indian IIMs and global business schools open.",
      },
      {
        question: "Do you offer admissions consulting for IIM Bangalore and ISB?",
        answer:
          "Yes, we provide specialized application review, SOP drafting, and mock interview panels for IIMB and ISB.",
      },
      {
        question: "Can I get 1-on-1 help for difficult VARC topics?",
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
  hyderabad: {
    city: "Hyderabad",
    slug: "gmat-cat-coaching-in-hyderabad",
    metaTitle: "Best GMAT+CAT Dual Coaching in Hyderabad — MBA Wizards",
    metaDescription:
      "Premier GMAT+CAT coaching in Hyderabad for HITEC City techies and college graduates. IIT mentors, dual test strategy, and guaranteed results.",
    heroPreTitle: "HITEC City's Trusted Dual MBA Accelerator",
    heroTitle: "Best GMAT+CAT Coaching in",
    heroTitleHighlight: "Hyderabad",
    heroSubtitle:
      "Accelerate your test preparation with IIT Roorkee mentors. Tailored for software engineers and graduates across Hyderabad targeting top IIMs and ISB.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "💡", title: "HITEC City Preferred", desc: "Convenient evening and weekend classes for techies in Gachibowli and Madhapur." },
      { icon: "⚡", title: "Advanced Quant Mastery", desc: "Speed math shortcuts to solve difficult algebra and data questions in under 90s." },
      { icon: "🎯", title: "ISB & IIM Specialization", desc: "Dual pathway preparing you for ISB Hyderabad as well as top IIMs." },
      { icon: "📚", title: "50k+ Question Portal", desc: "Extensive problem repository with video solutions and sectional diagnostics." },
    ],
    faqs: [
      {
        question: "Can I target both ISB Hyderabad and IIMs with this course?",
        answer:
          "Yes! This dual track prepares you for the GMAT (for ISB) and CAT (for IIMs) simultaneously with zero syllabus overlap wastage.",
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
  chennai: {
    city: "Chennai",
    slug: "gmat-cat-coaching-in-chennai",
    metaTitle: "Best GMAT+CAT Dual Coaching in Chennai — MBA Wizards",
    metaDescription:
      "Leading GMAT+CAT coaching in Chennai for college students and IT professionals. IIT faculty mentors, dual test strategy, and proven 99%ile results.",
    heroPreTitle: "Gateway of South India's Top Dual MBA Prep",
    heroTitle: "Best GMAT+CAT Coaching in",
    heroTitleHighlight: "Chennai",
    heroSubtitle:
      "Premier GMAT and CAT dual preparation for students from Anna University, IIT Madras, and OMR tech corridor professionals targeting IIMs and global B-schools.",
    centerType: "Interactive Live Online & Hybrid",
    phone: "+91-9958041888",
    email: "info@mbawizards.co.in",
    features: [
      { icon: "🌊", title: "OMR & Guindy Students", desc: "Convenient batch timings for tech corridor professionals and engineering colleges." },
      { icon: "📐", title: "Rigorous Quantitative Track", desc: "Deep conceptual foundations and time-saving shortcuts for CAT QA and GMAT Quant." },
      { icon: "📖", title: "Verbal & Critical Logic", desc: "Structured approach to Reading Comprehension and Critical Reasoning." },
      { icon: "🤝", title: "1-on-1 Mentor Support", desc: "Direct guidance and interview preparation with senior IIT Roorkee alumni." },
    ],
    faqs: [
      {
        question: "How does MBA Wizards support students in Chennai?",
        answer:
          "We offer live interactive online batches with two-way audio-video communication, digital study materials, adaptive mocks, and 1-on-1 doubt clearing.",
      },
      {
        question: "Can engineering students in Chennai balance both CAT and GMAT?",
        answer:
          "Yes! Over 80% of math concepts are shared. Our structured pedagogy teaches core principles once, saving you months of redundant effort.",
      },
      {
        question: "Do you help with IIM Kozhikode, Trichy, and IIM Bangalore interviews?",
        answer:
          "Yes, all students who receive interview calls receive dedicated WAT-PI coaching, resume reviews, and simulated mock interviews.",
      },
      {
        question: "How do I join a demo session in Chennai?",
        answer:
          "Register on our website or connect with our Chennai counseling desk on WhatsApp to attend a live demo class.",
      },
    ],
  },
};
