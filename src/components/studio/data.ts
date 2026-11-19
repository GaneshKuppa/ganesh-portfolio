export type Project = {
  title: string;
  kicker: string;
  body: string;
  points?: string[];
  impact?: { metric: string; label: string }[];
  tech: string[];
  live?: string;
  code?: string;
  shot?: string;
  phone?: string;
  inside?: { shot?: string; phone?: string };
};
export type Room = {
  id: string;
  plaque: [string, string];
  title: string;
  tagline: string;
  intro: string;
  checklist: string[];
  door: string;
  glow: string;
  projects: Project[];
};
export type Chapter = {
  year: string;
  range: string;
  title: string;
  where: string;
  points: string[];
  tint: string;
};

// Hero flip-calendar words: "I build ___"
export const flipWords = ["data pipelines", "secure systems", "AI models", "clear reports", "reliable software"];

export const profile = {
  first: "Kuppa Ganesh",
  name: "Kuppa Ganesh",
  role: "Software & Data Engineer",
  org: "MSc Advanced Computing (AI) — open to data, security & software roles",
  place: "Leeds, UK — open to relocation / hybrid",
  timeZone: "Europe/London",
  email: "ganeshkuppa04@gmail.com",
  resume: "/resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/GaneshKuppa" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kuppa-ganesh" },
  ],
};

// Board split-flap metrics (all real; value ≤5 chars for the flap grid)
export const numbers = [
  { value: "99.9", label: "System reliability kept" },
  { value: "7700+", label: "Records analysed (SKYWAVE)" },
  { value: "60", label: "% manual effort removed" },
  { value: "45", label: "% test coverage gained" },
  { value: "15", label: "Colleagues trained" },
  { value: "0.94", label: "ROC-AUC, SKYWAVE model" },
];

// Toolbox rows — keys recoloured to real tool badges in Gate 4b
export const toolbox: { row: string; keys: string[] }[] = [
  { row: "Query & data", keys: ["SQL", "Pandas", "NumPy", "Advanced Excel"] },
  { row: "Visualise & report", keys: ["Power BI", "Tableau", "Matplotlib"] },
  { row: "Build & automate", keys: ["Python", "Git", "Selenium", "AWS S3/EC2"] },
  { row: "Track & assure", keys: ["JIRA"] },
];

// Story odometer chapters — CORRECTED TIMELINE
// Startups are now shown as concurrent with B.Tech (2016-2020), not separate years.
export const story: Chapter[] = [
  { year: "2016", range: "2016 — 2020", title: "Engineering & Startup Leadership",
    where: "Gayatri Vidya Parishad + Mars Innov / Alles Novus / Khadga", tint: "#5B6B76",
    points: ["B.Tech in Instrumentation & Control.",
             "Simultaneously served as CSO at Mars Innov India and MD at Alles Novus.",
             "Led game development internships at Khadga Entertainment.",
             "Proven ability to balance heavy academic load with operational delivery."] },
  
  { year: "2021", range: "FEB 2021 — JUN 2025", title: "Corporate Data Engineering",
    where: "Infosys, Hyderabad/AP", tint: "#2F5D8C",
    points: ["System Engineer → Quality Engineering Analyst.",
             "Interrogated relational datasets with SQL; traced anomalies to root cause.",
             "Automated checks cut manual effort 60%, lifted coverage 45%.",
             "Trained 15 colleagues on quality and reporting."] },
             
  { year: "2025", range: "SEP 2025 — PRESENT", title: "MSc Advanced Computing (AI)",
    where: "University of Leeds, UK", tint: "#1F7A6B",
    points: ["SKYWAVE pipeline: 7,700+ records, calibrated models, ROC-AUC 0.94.",
             "UK part-time work alongside study — adaptability under pressure."] },
             
  { year: "2026", range: "NOV 2025 — FEB 2026", title: "Retail Operations Contract",
    where: "Sainsbury's, UK", tint: "#B98A4E", // Sand tone for ops
    points: ["Maintained 95%+ product availability via inventory management.",
             "Reduced waste 15% through FEFO rotation practices.",
             "Cross-trained in bakery, checkout, and stock management."] },
];

// Four rooms = four hireable pillars. Titles MUST match ProjectPreview keys.
export const rooms: Room[] = [
  { id: "data", plaque: ["DATA", "ANALYTICS"], title: "Data & Analytics",
    tagline: "SQL, data quality & reporting", door: "#2F5D8C", glow: "#cfe3ff",
    intro: "Proving data can be trusted: querying warehouses, tracing anomalies to root cause, and turning raw tables into reports stakeholders act on.",
    checklist: ["Interrogate relational datasets", "Trace anomalies to root cause",
                "Data-quality audits & corrections", "Routine & ad-hoc reporting", "Stakeholder-ready outputs"],
    projects: [
      { title: "Anomaly Investigation", kicker: "Infosys · 5 years · SQL & JIRA",
        body: "Discrepancy triage across a global platform: SQL joins to locate drift, root-cause analysis, corrections logged and re-tested.",
        points: ["37-row anomaly sweep on a quality flag", "Root-cause via relational joins", "Corrections + JIRA audit trail"],
        impact: [{ metric: "99.9%", label: "reliability kept" }],
        tech: ["SQL", "JIRA", "AWS S3/EC2", "Advanced Excel"] },

      { title: "Agri-Tech Sensor Logging", kicker: "Alles Novus · Managing Director · IoT Data",
        body: "Designed data-logging frameworks for aeroponic/hydroponic systems, optimizing crop yield predictions using real-time sensor arrays.",
        points: ["Real-time telemetry ingestion from soil/moisture sensors.","Statistical analysis to correlate environmental variables with growth rates.",
           "Delivered actionable insights to farmers via simplified dashboards."],
        impact: [{ metric: "+12%", label: "yield optimization" }],
        tech: ["Python", "IoT Sensors", "SQL", "Data Viz"] },
      { title: "Go-to-Market Strategy", kicker: "Mars Innov India · Chief Strategy Officer · Product Ops",
        body: "Defined GTM strategy for hardware-software hybrids; aligned engineering roadmaps with market demands and sales pipelines.",
       points: ["Managed cross-functional teams (Eng, Sales, Logistics).", "Forecasted demand based on historical beta-test data.",
           "Ensured regulatory compliance for consumer electronics launch."],
       impact: [{ metric: "3+", label: "teams coordinated" }],
        tech: ["Strategy", "Forecasting", "Compliance", "JIRA"] },

      { title: "Reporting Automation", kicker: "Reporting · Excel & SQL · 60% less manual",
        body: "Standardised templates and scheduled SQL extracts replaced manual collation, delivering accurate, timely, consistent information.",
        points: ["Pivot + XLOOKUP templates", "Scheduled warehouse extracts", "Ad-hoc request handling"],
        impact: [{ metric: "60%", label: "manual effort down" }, { metric: "45%", label: "coverage up" }],
        tech: ["Advanced Excel", "Power BI", "SQL", "Tableau"] },
    ] },
  { id: "software", plaque: ["SOFTWARE", "& AUTOMATION"], title: "Software & Automation",
    tagline: "Python tooling, QA & test automation", door: "#1F7A6B", glow: "#c9efe6",
    intro: "Building and automating the systems around the data: production tooling in Python, test suites, CI, and accessibility-minded interfaces.",
    checklist: ["Production tooling in Python", "Automated test suites & CI", "Accessibility-minded UX", "Reliability under constraints"],
    projects: [
      { title: "Eye-Controlled Keyboard", kicker: "Project · Python & UX · gaze dwell",
        body: "A gaze-dwell typing aid for users with mobility needs, built around privacy, reliability and user research.",
        tech: ["Python", "Git", "Selenium"] },
      { title: "QA & Test Automation", kicker: "Infosys · Selenium & JIRA",
        body: "Automated regression and data-validation suites that cut manual effort and widened coverage on a large release pipeline.",
        points: ["Regression suites on every release", "Data-validation checks", "Defect lifecycle in JIRA"],
        impact: [{ metric: "60%", label: "manual effort down" }, { metric: "45%", label: "coverage up" }],
        tech: ["Selenium", "JIRA", "Python", "SQL"] },
      { title: "Player Retention Optimization", kicker: "Khadga Entertainment · Game Dev Intern · Unity/C#",
        body: "Analyzed player drop-off points in indie titles; iterated on core mechanics to boost session length and retention metrics.",
        points: ["A/B tested tutorial flows and difficulty curves.", "Implemented analytics hooks to track user behavior events.",
           "Contributed to award-winning gameplay mechanics."],
        impact: [{ metric: "+18%", label: "retention boost" }],
        tech: ["Unity", "C#", "Analytics", "UX Research"] },
    ] },
  { id: "ml", plaque: ["MACHINE", "LEARNING"], title: "Machine Learning & AI",
    tagline: "Pipelines, models & calibration", door: "#6B4E71", glow: "#e7d3ec",
    intro: "End-to-end ML with statistical validation and clear, explainable reporting — from HF radio prediction to a credibility classifier.",
    checklist: ["End-to-end data pipelines", "Statistical validation & calibration", "Feature engineering", "Explainable visual reporting"],
    projects: [
      { title: "SKYWAVE", kicker: "MSc dissertation · Python & ML · ROC-AUC 0.94",
        body: "Predicting HF radio transmission success from 7,700+ operational logs with physics-informed features and probability calibration.",
        points: ["7,700+ logs ingested & cleaned", "Physics-informed feature engineering", "Calibrated model, ROC-AUC 0.94"],
        impact: [{ metric: "0.94", label: "ROC-AUC" }, { metric: "7,700+", label: "records" }],
        tech: ["Python", "Pandas", "NumPy", "Matplotlib"] },
      { title: "Fake-News Detector", kicker: "Coursework · scikit-learn · 44,898 articles",
        body: "A logistic-regression credibility classifier over the ISOT dataset using linguistic features, with an interactive prediction interface.",
        points: ["44,898-article ISOT corpus", "Sentiment / subjectivity / punctuation features", "Interactive credibility predictor"],
        impact: [{ metric: "44,898", label: "articles classified" }],
        tech: ["Python", "Pandas", "scikit-learn", "TextBlob"] },
    ] },
  { id: "security", plaque: ["SECURITY", "& CLOUD"], title: "Security & Cloud",
    tagline: "Protection, access control & hardened delivery", door: "#2E7DA6", glow: "#cfeaf6",
    intro: "Security-aware engineering: confidentiality handling, anomaly-as-integrity monitoring, network fundamentals and hardened cloud delivery — grounded in the Cisco Networking certification, Infosys data handling and AWS.",
    checklist: ["Data protection & confidentiality handling", "Access control & audit logging",
                "Network fundamentals (Cisco)", "AWS hardening, monitoring & rollback"],
    projects: [
      { title: "Data Protection in Practice", kicker: "Infosys · confidentiality & integrity",
        body: "Handling sensitive data under strict governance: least-privilege access, audit logging of corrections, and treating anomalies as integrity signals.",
        points: ["Confidentiality handled to policy", "Audit-logged corrections in JIRA", "Anomaly detection as integrity monitoring"],
        impact: [{ metric: "audit-ready", label: "logging & access control" }],
        tech: ["SQL", "JIRA", "AWS S3/EC2"] },
      { title: "Cloud & Network Fundamentals", kicker: "Cisco cert · AWS · hardening",
        body: "Networking fundamentals plus cloud delivery on AWS with monitoring and automatic rollback, keeping services reliable and hardened.",
        points: ["Cisco Networking fundamentals", "AWS S3/EC2 deployment", "Monitoring + rollback for uptime"],
        impact: [{ metric: "hardened", label: "AWS + monitoring + rollback" }],
        tech: ["AWS S3/EC2", "Git", "Python"] },
    ] },
];

// NEW EXPORT: Hidden details revealed by the secondary cord
export const startupRoles = [
  { 
    company: "MARS Innovation Pvt Ltd", 
    role: "Chief Strategy Officer (CSO)", 
    period: "Sep 2019 – Feb 2020", 
    impact: "Defined go-to-market strategy for hardware-software hybrid products; managed cross-functional teams across engineering, sales, and logistics.",
    tech: ["Strategy", "Team Lead", "Product Ops"]
  },
  { 
    company: "Alles Novus", 
    role: "Managing Director", 
    period: "Jan 2018 – Feb 2020", 
    impact: "Led R&D for aeroponic/hydroponic systems; implemented data logging frameworks to optimize crop yield predictions using sensor arrays.",
    tech: ["IoT Sensors", "Data Logging", "Agri-Tech"]
  },
  { 
    company: "Khadga Entertainment", 
    role: "Game Development Intern", 
    period: "Jun 2017 – Feb 2020", 
    impact: "Optimized player retention flows through UX testing; developed core gameplay mechanics contributing to award-winning indie titles.",
    tech: ["Unity/C#", "UX Testing", "Game Logic"]
  }
];