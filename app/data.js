// All résumé content lives here so components stay presentational.

export const profile = {
    name: "Viktor Taseski",
    role: "Computer Science — Full-Stack & Distributed Systems",
    location: "Koper, Slovenia",
    timezone: "Europe/Ljubljana",
    now: "at ACTUAL PRO",
    lead: "Building practical software — from distributed Java systems to production web apps that ship.",
    bio: "Computer Science student specializing in full-stack development (React, Node.js, PostgreSQL) and distributed Java systems. I've built and deployed booking, ordering, and ticketing platforms with a focus on reliability, performance, and real-world usability — and I design the brand and visuals around them too.",
    contact: [
        { text: "vtaseski24@gmail.com", href: "mailto:vtaseski24@gmail.com" },
        { text: "+386 69 937 005", href: "tel:+38669937005" },
        { text: "+389 77 534 304", href: "tel:+38977534304" },
        { text: "GitHub ↗", href: "https://github.com/viktortaseski" },
        {
            text: "LinkedIn ↗",
            href: "https://linkedin.com/in/viktor-taseski-247a9b324",
        },
    ],
};

// Reverse-chronological (most recent first).
export const experience = [
    {
        role: "Working Student",
        org: "ACTUAL PRO",
        date: "May 2026 — Present",
        points: [
            "Full-stack web development alongside my Computer Science studies.",
            "Building Angular front ends backed by .NET (C#) APIs using the FastEndpoints framework.",
        ],
    },
    {
        role: "Freelance Web Developer",
        org: "NGO Anisija",
        date: "Nov 2025 — Present",
        points: [
            "Built and maintain the NGO's website, including DNS, HTTPS, and hosting setup.",
        ],
        links: [{ text: "anisija.org ↗", href: "https://anisija.org/" }],
    },
    {
        role: "Freelance Graphic Designer",
        org: "",
        date: "Jan 2021 — Present",
        points: [
            "Posters, logos, and visual identities for events, organizations, and product ideas.",
        ],
    },
    { role: "Waiter", org: "", date: "Oct 2023 — Aug 2025", points: [] },
    {
        role: "Direct Sales Representative",
        org: "Kirby Company",
        date: "Jan 2023 — Aug 2023",
        points: [],
    },
    {
        role: "Event Organizer",
        org: "City Cinema",
        date: "May 2023",
        points: [],
    },
];

// Ordered most important → least.
export const projects = [
    {
        name: "Dentra",
        when: "Active",
        stack: [
            "Next.js",
            "Node.js",
            "Electron",
            "Vite",
            "Brevo",
            "Cloudinary",
        ],
        desc: "Online appointment booking platform for dental clinics, plus a companion desktop app for the chair side.",
        points: [
            "Built the booking platform handling scheduling, admin panels, and DNS/hosting setup.",
            "Integrated transactional email reminders via Brevo and media management via Cloudinary.",
            "Developed a desktop app (Electron + Vite) with a 32-tooth chart, patient records, and treatment history.",
        ],
        links: [{ text: "dentra.mk ↗", href: "https://www.dentra.mk/" }],
    },
    {
        name: "SelfServ",
        when: "Oct 2025",
        stack: ["React", "Node.js", "PostgreSQL"],
        desc: "Full-stack self-ordering system for cafés and bars.",
        points: [
            "Customers browse menus and place orders via NFC or QR code without staff interaction.",
            "Real-time order routing to kitchen and bar printers, with an analytics dashboard for order tracking.",
            "Standalone print agent for custom POS receipt printing using raw printer commands.",
        ],
        links: [
            {
                text: "Repository ↗",
                href: "https://github.com/viktortaseski/SelfServ",
            },
            {
                text: "Live demo ↗",
                href: "https://selfserv-web.onrender.com/?token=TzqCtkeq4Hy5r5C6",
            },
        ],
    },
    {
        name: "Railroads",
        when: "Jan 2025",
        stack: ["Java", "MPJ Express", "Genetic Algorithm", "DFS"],
        desc: "Distributed Java project using a Genetic Algorithm and DFS to find the cheapest railroad map for a set of trains and stations.",
        points: [
            "Implemented a Genetic Algorithm + DFS to find the most affordable map for a given set of trains and stations.",
            "Built sequential, parallel, and distributed versions; achieved 4.9× speedup (parallel) and ~60% faster runtime (distributed via MPJ Express) vs. sequential.",
        ],
        links: [
            {
                text: "Repository ↗",
                href: "https://github.com/viktortaseski/Railroads",
            },
            {
                text: "Video ↗",
                href: "https://www.youtube.com/watch?v=1HUcuTYmTCM",
            },
            {
                text: "Results ↗",
                href: "https://github.com/viktortaseski/Railroads/blob/main/results.txt",
            },
            {
                text: "Report (p.3) ↗",
                href: "assets/docs/projects/Report_Railroads.pdf#page=3",
            },
        ],
    },
    {
        name: "Ticket Office",
        when: "Apr 2025",
        stack: ["React", "Node.js", "MySQL"],
        desc: "Full-stack ticketing platform with reservation, QR validation, and attendee check-in.",
        points: [],
        links: [
            {
                text: "Repository ↗",
                href: "https://github.com/viktortaseski/TicketOffice",
            },
            {
                text: "Video ↗",
                href: "https://www.youtube.com/watch?v=tvQAwN2jHxw",
            },
            {
                text: "Report ↗",
                href: "assets/docs/projects/TicketOffice_Report.pdf",
            },
        ],
    },
    {
        name: "ML Diabetes Prediction",
        when: "Jan 2026",
        stack: ["Python", "ANN", "Gaussian Naïve Bayes"],
        desc: "ANN and Gaussian Naïve Bayes models for diabetes prediction.",
        points: [
            "Full preprocessing pipeline and structured experimentation, documenting every modeling decision.",
            "Achieved ~80% overall accuracy; the ANN reached 87% / 63% recall (diabetic / non-diabetic), with class imbalance reflected in stronger detection of positive cases.",
        ],
        links: [
            {
                text: "Open on Kaggle ↗",
                href: "https://www.kaggle.com/code/viktortaseski/diabetes-osupr",
            },
        ],
    },
];

// Headline numbers for the hero metrics strip.
export const metrics = [
    { value: "4.9", suffix: "×", label: "parallel speedup" },
    { value: "5", suffix: "+", label: "platforms shipped" },
    { value: "87", suffix: "%", label: "ANN recall" },
    { value: "2", suffix: "", label: "countries based" },
];

export const education = [
    {
        role: "BSc Computer Science",
        org: "FAMNIT, University of Primorska",
        date: "2023 — Present",
        points: ["Koper, Slovenia."],
    },
    {
        role: "High School — Electrical Engineering",
        org: "OSTU Gostivar",
        date: "2019 — 2023",
        points: ["Gostivar, North Macedonia."],
    },
];

export const skillGroups = [
    { label: "Languages", items: "Java · C# · JavaScript / TypeScript · C / C++ · Python · SQL" },
    { label: "Web", items: "React · Next.js · Angular · Node.js · HTML5 · CSS3 · Bootstrap" },
    { label: "Backend", items: ".NET · FastEndpoints · Node.js · Express" },
    { label: "Databases", items: "PostgreSQL · MySQL" },
    { label: "Tools & Platforms", items: "Git · GitHub Actions (Cron) · Render · Cloudinary · Brevo · Zoho Mail" },
    { label: "Design", items: "Figma · Blender · Inkscape · GIMP · Canva" },
    { label: "Spoken", items: "Macedonian (native) · English (advanced) · Serbo-Croatian (conversational) · Slovenian" },
];

export const stack = [
    "Java", "C#", "JavaScript", "TypeScript", "C", "C++", "Python", "SQL",
    "React", "Next.js", "Angular", "Node.js", ".NET", "FastEndpoints",
    "HTML5", "CSS3", "PostgreSQL", "MySQL",
    "LaTeX", "Git", "GitHub", "GitLab", "Render", "Figma", "Blender",
    "Inkscape", "GIMP", "Canva",
];

export const documents = [
    { group: "Project Reports", title: "Railroads — Project Report", url: "assets/docs/projects/Report_Railroads.pdf", filename: "Report_Railroads.pdf" },
    { group: "Project Reports", title: "Ticket Office — Project Report", url: "assets/docs/projects/TicketOffice_Report.pdf", filename: "TicketOffice_Report.pdf" },
    { group: "Project Reports", title: "Court Case Management System — SRS", url: "assets/docs/projects/SRS_Court_Case_Management_System.pdf", filename: "SRS_Court_Case_Management_System.pdf" },
    { group: "Project Reports", title: "Infection Number of Cayley Graphs — Research", url: "assets/docs/projects/RP_Cayley41_Solution_Report.pdf", filename: "RP_Cayley41_Solution_Report.pdf" },
    { group: "Erasmus", title: "Erasmus — Greece", url: "assets/docs/erasmus/Erasmus-Greece.pdf", filename: "Erasmus-Greece.pdf" },
    { group: "Erasmus", title: "Erasmus — Serbia", url: "assets/docs/erasmus/Erasmus-Serbia.pdf", filename: "Erasmus-Serbia.pdf" },
    { group: "Curriculum Vitae", title: "Viktor Taseski — CV", url: "assets/docs/Viktor_Taseski_Resume.pdf", filename: "Viktor_Taseski_Resume.pdf" },
];
