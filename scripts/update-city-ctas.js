const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'src', 'app');
const entries = fs.readdirSync(appDir, { withFileTypes: true });

const cityDirs = entries.filter(d => d.isDirectory() && d.name.includes('-in-')).map(d => d.name);

console.log(`Found ${cityDirs.length} city directories.`);

let updatedCount = 0;

cityDirs.forEach(dirName => {
  const filePath = path.join(appDir, dirName, `${dirName}.tsx`);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match existing <CtaSection ... />
  const ctaRegex = /<CtaSection[\s\S]*?\/>/;
  if (!ctaRegex.test(content)) {
    console.log(`No CtaSection found in: ${dirName}`);
    return;
  }

  const isGurgaon = dirName.includes('gurgaon');
  let newCta = '';

  if (dirName.startsWith('cat-coaching-in-')) {
    if (isGurgaon) {
      newCta = `<CtaSection
        pretitle="Gurgaon's Premier CAT Prep Classrooms & Online Hub"
        title="Target 99.5+ Percentile in CAT 2026 at"
        titleHighlight="Gurgaon (DLF & Sec 50)"
        description="Experience 1-on-1 Litmus diagnostics, small batches of 10–15 students, and mentorship by IIT Roorkee alumni at our Gurgaon centers or live online."
        primaryButtonText="Book In-Person / Online CAT Demo in Gurgaon"
        secondaryButtonText="WhatsApp Gurgaon Center"
      />`;
    } else {
      newCta = `<CtaSection
        pretitle={\`Top-Rated CAT Coaching for \${data.city} Aspirants\`}
        title="Target 99.5+ Percentile in CAT 2026 from"
        titleHighlight={data.city}
        description={\`Master QA, DILR matrix sets, and VARC with IIT Roorkee alumni mentors in interactive live classes and small batches of 10–15 students tailored for \${data.city} candidates.\`}
        primaryButtonText={\`Book Free CAT Demo in \${data.city}\`}
        secondaryButtonText={\`Chat with \${data.city} CAT Mentor\`}
      />`;
    }
  } else if (dirName.startsWith('gmat-coaching-in-')) {
    if (isGurgaon) {
      newCta = `<CtaSection
        pretitle="Gurgaon's Leading GMAT Focus Classroom & Online Center"
        title="Target 705+ on GMAT Focus with IIT Mentors in"
        titleHighlight="Gurgaon (DLF & Sec 50)"
        description="Attend an in-person diagnostic at our DLF Galleria or Sector 50 classrooms or join live online sessions. Small cohorts of 10–15 students with 1-on-1 faculty clinic support."
        primaryButtonText="Book In-Person / Live GMAT Demo in Gurgaon"
        secondaryButtonText="WhatsApp Gurgaon GMAT Head"
      />`;
    } else {
      newCta = `<CtaSection
        pretitle={\`Join \${data.city}'s 99th Percentile GMAT Scorers\`}
        title="Target 705+ on GMAT Focus Edition from"
        titleHighlight={data.city}
        description={\`Experience 1-on-1 diagnostic evaluations, high-difficulty Data Insights heuristics, and small batch mentoring (10–15 students) led by IIT Roorkee alumni for \${data.city} professionals and students.\`}
        primaryButtonText={\`Book Free GMAT Demo in \${data.city}\`}
        secondaryButtonText={\`Speak with \${data.city} GMAT Advisor\`}
      />`;
    }
  } else if (dirName.startsWith('gre-coaching-in-')) {
    if (isGurgaon) {
      newCta = `<CtaSection
        pretitle="Gurgaon's Premier GRE Prep Classrooms & Online Hub"
        title="Master the Shorter GRE with IIT Mentors in"
        titleHighlight="Gurgaon (DLF & Sec 50)"
        description="Walk into our DLF Galleria or Sector 50 classrooms for a personalized diagnostic or attend live interactive sessions with our senior faculty."
        primaryButtonText="Book In-Person / Live GRE Demo in Gurgaon"
        secondaryButtonText="WhatsApp Gurgaon GRE Head"
      />`;
    } else {
      newCta = `<CtaSection
        pretitle={\`Top-Ranked GRE Coaching for \${data.city} Aspirants\`}
        title="Aiming for 330+ on the Shorter GRE from"
        titleHighlight={data.city}
        description={\`Master high-frequency vocabulary retention, quantitative precision, and 1-on-1 Litmus diagnostics with IIT Roorkee mentors in cohorts capped at 10–15 students across \${data.city}.\`}
        primaryButtonText={\`Book Free GRE Demo in \${data.city}\`}
        secondaryButtonText={\`Speak with \${data.city} GRE Mentor\`}
      />`;
    }
  } else if (dirName.startsWith('gmat-cat-coaching-in-')) {
    if (isGurgaon) {
      newCta = `<CtaSection
        pretitle="Gurgaon's Premier Dual Exam Classroom & Online Hub"
        title="Prepare for Both GMAT & CAT Together in"
        titleHighlight="Gurgaon (DLF & Sec 50)"
        description="Capitalize on 80% syllabus synergy to target both top IIMs and ISB/global B-schools. Meet IIT Roorkee mentors in person or online in small batches of 10–15 students."
        primaryButtonText="Book In-Person / Online Dual Demo in Gurgaon"
        secondaryButtonText="WhatsApp Gurgaon Center"
      />`;
    } else {
      newCta = `<CtaSection
        pretitle={\`Dual Exam Excellence for \${data.city} Aspirants\`}
        title="Master Both GMAT & CAT Simultaneously from"
        titleHighlight={data.city}
        description={\`Leverage 80% syllabus synergy to target both top IIMs and global business schools/ISB. Personalized study calendar and small batches of 10–15 students for \${data.city} candidates.\`}
        primaryButtonText={\`Book Free Dual Prep Demo in \${data.city}\`}
        secondaryButtonText={\`Chat with \${data.city} Dual Prep Advisor\`}
      />`;
    }
  } else if (dirName.startsWith('gmatgre-coaching-in-') || dirName.startsWith('gmat-gre-coaching-in-')) {
    if (isGurgaon) {
      newCta = `<CtaSection
        pretitle="Gurgaon's Leading Global Prep Classroom & Online Center"
        title="Master GMAT & GRE Simultaneously in"
        titleHighlight="Gurgaon (DLF & Sec 50)"
        description="Unlock worldwide MBA & MS program admits with synchronized preparation. Visit our DLF Galleria or Sector 50 classrooms or join interactive live classes."
        primaryButtonText="Book In-Person / Live Dual Demo in Gurgaon"
        secondaryButtonText="WhatsApp Gurgaon Dual Head"
      />`;
    } else {
      newCta = `<CtaSection
        pretitle={\`Global B-School & MS Admissions from \${data.city}\`}
        title="Conquer Both GMAT & GRE from"
        titleHighlight={data.city}
        description={\`Cover 70% shared quantitative and reading foundations with IIT Roorkee alumni mentors in small batches of 10–15 students, then take specialized clinics for Data Insights and advanced vocabulary.\`}
        primaryButtonText={\`Book Free GMAT+GRE Demo in \${data.city}\`}
        secondaryButtonText={\`Speak with \${data.city} Dual Prep Mentor\`}
      />`;
    }
  }

  if (newCta) {
    const updatedContent = content.replace(ctaRegex, newCta);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    updatedCount++;
    console.log(`Updated CTA in: ${dirName}`);
  }
});

console.log(`Successfully updated ${updatedCount} city pages!`);
