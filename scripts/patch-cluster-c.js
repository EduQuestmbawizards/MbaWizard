const fs = require('fs');

let code = fs.readFileSync('scripts/generate-cluster-c-full.js', 'utf8');

// 1. In blogC2: add Section 10 before FAQs
const c2Target = '    {\n      type: "heading",\n      text: "10. Frequently Asked Questions: IIM A vs B vs C",';
const c2Replacement = `    {
      type: "heading",
      text: "10. The Global Alumni Ecosystem: Corporate Titans, Unicorn Founders and Public Policymakers",
      level: 2
    },
    {
      type: "paragraph",
      text: "Beyond immediate on-campus placement packages, the true lifetime dividend of graduating from a Holy Trinity institution is membership in one of the most powerful corporate and entrepreneurial networks in the world. The alumni density of Ahmedabad, Bangalore, and Calcutta across global boardrooms and technology unicorns is staggering:"
    },
    {
      type: "table",
      headers: [
        "Institutional Dimension",
        "IIM Ahmedabad Alumni Network",
        "IIM Bangalore Alumni Network",
        "IIM Calcutta Alumni Network"
      ],
      rows: [
        ["Prominent Corporate Leaders", "Ajay Banga (President, World Bank), Shikha Sharma (Former CEO, Axis Bank), K.V. Kamath (Former Chairman, ICICI Bank), Suresh Vaswani (Former President, Dell Services)", "K. Radhakrishnan (Former Chairman, ISRO), Malavika R. Harita (Former CEO, Saatchi and Saatchi Focus), Ravi Subramanian (Author and Banking Executive)", "Indra Nooyi (Former Chairman and CEO, PepsiCo), Gopal Vittal (CEO, Bharti Airtel), Sunil Duggal (Former CEO, Dabur), Ajit Balakrishnan (Founder, Rediff.com)"],
        ["Unicorn and Startup Founders", "Sanjeev Bikhchandani (Founder, InfoEdge/Naukri), Deepinder Goyal and Pankaj Chaddah (Founders, Zomato), Deep Kalra (Founder, MakeMyTrip)", "Sahil Barua (Co-founder, Delhivery), Karan Bajaj (Founder, WhiteHat Jr), PC Musthafa (Founder, iD Fresh Food), Vipul Parekh (Co-founder, BigBasket)", "Rohit Chadda (Founder, Foodpanda India), Ashish Saha, prominent quant hedge fund founders and fintech leaders"],
        ["Venture Capital and PE Density", "Heavy representation across Sequoia/Peak XV, General Catalyst, Matrix Partners, Warburg Pincus", "Vast presence across early-stage seed funds, Blume Ventures, Accel, Lightspeed India", "Dominant footprint across global private equity, credit funds, and sovereign wealth entities"],
        ["Global Chapter Footprint", "Active chapters across New York, Silicon Valley, London, Singapore, Dubai, Toronto, Sydney", "High density across San Francisco Bay Area, London, Singapore, and Middle East tech hubs", "Massive presence across the City of London, Wall Street, Hong Kong, and Singapore financial centers"]
      ]
    },
    {
      type: "paragraph",
      text: "When an IIM graduate initiates outreach to a fellow alumnus anywhere in the world—whether seeking seed funding for a venture, exploring lateral leadership opportunities, or establishing strategic enterprise partnerships—the institutional trust and shared crucible of the campus experience opens doors that remain firmly shut to conventional applicants."
    },
    {
      type: "heading",
      text: "11. Frequently Asked Questions: IIM A vs B vs C",`;

if (code.includes(c2Target)) {
  code = code.replace(c2Target, c2Replacement);
  console.log("Replaced C2 target successfully.");
} else {
  console.log("C2 target not found.");
}

// 2. In blogC4: add Section 4 and Section 8
const c4Target1 = '    {\n      type: "heading",\n      text: "4. Executive MBA for Working Professionals (Part-Time & Blended Pathways)",';
const c4Replacement1 = `    {
      type: "heading",
      text: "4. The GMAT Focus Edition Advantage: Strategic Preparation for Busy Executives",
      level: 2
    },
    {
      type: "paragraph",
      text: "For working executives managing 50- to 60-hour corporate workweeks, attempting to study for the CAT is often an exercise in acute frustration. The CAT examination occurs exactly once per calendar year on the last Sunday of November; if you suffer from an illness, an urgent client release, or test-day panic, an entire 12-month cycle is lost. Furthermore, CAT tests speed-arithmetic tricks, geometry formulas, and negative-penalty traps that bear little relevance to real-world corporate leadership."
    },
    {
      type: "paragraph",
      text: "In contrast, the **GMAT Focus Edition** provides an intellectually superior, executive-friendly testing model tailored for experienced working professionals:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Year-Round Testing Flexibility:** You can schedule the GMAT Focus Edition on virtually any date of the year at testing centers worldwide or take it online from your home. If your score falls short of your target, you can retake the test in just 16 days without sacrificing a calendar year.",
        "**Strategic Section Review and Edit Feature:** Unlike CAT where you are locked into a section with zero ability to review once submitted, the GMAT Focus Edition allows you to bookmark questions and change up to three answers per section after completing all questions within the 45-minute window.",
        "**Executive-Relevant Curriculum:** The GMAT Focus Edition eliminated pure sentence correction grammar rules and high-school geometry, replacing them with the revolutionary **Data Insights (DI)** section. DI directly tests multi-source data reasoning, graphical interpretation, table analysis, and two-part decision modeling—the exact analytical skillsets modern managers use daily in enterprise boardrooms.",
        "**Flexible Section Order:** Candidates can choose the exact order in which they attempt the three 45-minute sections (Quant -> Verbal -> DI, or DI -> Verbal -> Quant), allowing you to tackle your most cognitively taxing section when your mental energy is at its absolute peak."
      ]
    },
    {
      type: "table",
      headers: [
        "Preparation Phase",
        "Weekly Time Commitment",
        "Operational Study Focus",
        "Benchmark Milestone"
      ],
      rows: [
        ["Weeks 1 – 4: Diagnostic and Foundations", "12 to 14 Hours (2h weekdays + 4h Sat/Sun)", "Official GMAC diagnostic exam; core arithmetic and algebra refresh; basic Data Insights tables.", "Identify pacing leaks; establish baseline score >= 555 on GMAT Focus."],
        ["Weeks 5 – 8: Advanced Reasoning and DI", "14 to 16 Hours per week", "Critical Reasoning argumentation frameworks; Multi-Source Reasoning; Two-Part Analysis drills.", "Complete Official Guide question bank with >85% medium and >70% hard accuracy."],
        ["Weeks 9 – 12: Adaptive Mock Simulation", "15 Hours per week", "Weekly full-length official GMAC Practice Exams under strictly simulated exam conditions.", "Consistent official mock scores of 645 to 685+ with balanced sectional percentiles."]
      ]
    },
    {
      type: "heading",
      text: "5. Executive MBA for Working Professionals (Part-Time & Blended Pathways)",`;

if (code.includes(c4Target1)) {
  code = code.replace(c4Target1, c4Replacement1);
  console.log("Replaced C4 target 1 successfully.");
} else {
  console.log("C4 target 1 not found.");
}

code = code.replace('text: "5. Doctoral & Fellowship Pathways:', 'text: "6. Doctoral & Fellowship Pathways:');
code = code.replace('text: "6. Integrated Programme in Management (IPM)', 'text: "7. Integrated Programme in Management (IPM)');
code = code.replace('text: "7. Application Strategy for Non-CAT IIM Admissions:', 'text: "8. Application Strategy for Non-CAT IIM Admissions:');

const c4Target2 = '    {\n      type: "heading",\n      text: "8. Step-by-Step Strategic Roadmap for Mid-Career Applicants",';
const c4Replacement2 = `    {
      type: "heading",
      text: "9. Forensic Case Study: From 6-Year IT Systems Engineer to IIM Bangalore EPGP Senior Consultant",
      level: 2
    },
    {
      type: "paragraph",
      text: "To understand how the non-CAT pathway transforms stagnant mid-career trajectories, consider the real-world case study of Rajesh, a candidate who trained under our mentorship at MBA Wizards:"
    },
    {
      type: "paragraph",
      text: "At age 28, Rajesh had spent six years working at a leading IT services multinational in Gurgaon. Starting as a junior software engineer, he had risen to Lead Systems Architect, earning an annual CTC of ₹14.5 Lakhs. While technically skilled, he had hit an aggressive corporate glass ceiling: further promotions required shifting into senior client management and strategic enterprise consulting, roles that were exclusively reserved for MBA graduates from premier tier-1 institutions. Attempting the CAT was impractical; his demanding 10-hour workdays left zero bandwidth to compete with fresh college math graduates."
    },
    {
      type: "paragraph",
      text: "We instituted a targeted 4-month transition campaign focusing on the GMAT Focus Edition and executive profile positioning:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**The Testing Campaign:** Rajesh dedicated 90 minutes every morning before work and five hours on weekends to GMAT Focus prep. Leveraging his analytical engineering background, he mastered Data Insights and Quant, while our Verbal mentors trained him on pre-thinking assumptions in Critical Reasoning. He secured an official score of **675 on the GMAT Focus Edition (96th percentile)**.",
        "**Reframing the Application Narrative:** Rather than submitting a generic resume listing coding tickets and bug fixes, we reframed his corporate experience around enterprise client value: leading cross-border cloud migrations for Fortune 500 financial clients, managing $2.5M infrastructure budgets, and reducing system latency by 42%.",
        "**The SOP and Interview Crucible:** In his Statement of Purpose for IIM Bangalore's EPGP, he clearly articulated his vision: bridging the gap between legacy IT infrastructure and high-level enterprise digital transformation. During faculty interviews, he defended cloud cost-benefit economics and organizational change management with consummate poise."
      ]
    },
    {
      type: "paragraph",
      text: "Rajesh secured direct admission into **IIM Bangalore's 1-Year EPGP**. During campus lateral placements, he converted an offer as a **Senior Consultant (Digital Strategy) at a premier global management consultancy** with a starting compensation package of **₹34.5 Lakhs per annum**—a staggering 138% jump over his pre-MBA salary, achieved in just twelve months of academic sabbatical."
    },
    {
      type: "heading",
      text: "10. Step-by-Step Strategic Roadmap for Mid-Career Applicants",`;

if (code.includes(c4Target2)) {
  code = code.replace(c4Target2, c4Replacement2);
  console.log("Replaced C4 target 2 successfully.");
} else {
  console.log("C4 target 2 not found.");
}

code = code.replace('text: "9. Frequently Asked Questions: IIM Admission Without CAT",', 'text: "11. Frequently Asked Questions: IIM Admission Without CAT",');

fs.writeFileSync('scripts/generate-cluster-c-full.js', code, 'utf8');
console.log('Successfully updated scripts/generate-cluster-c-full.js');
