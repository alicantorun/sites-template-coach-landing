// The content contract: every business fact in ONE typed module (website-builder
// template contract, docs/WEBSITE-BUILDER-ARCHITECTURE.md §12). "Change my phone number"
// is a one-line edit here, and the whole site + SEO metadata read from it. The agent
// edits this for content changes and the components for structure/design.
export const site = {
    business: {
        name: "Nimbus Coaching",
        tagline: "Train with intention.",
        email: "hello@nimbuscoaching.example",
        phone: "+49 30 1234 5678",
        location: "Berlin, Germany",
        instagram: "https://instagram.com/",
    },
    nav: [
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Book", href: "#contact" },
    ],
    hero: {
        eyebrow: "1:1 Personal Coaching · Berlin",
        title: "Get stronger with a plan built around your body.",
        subtitle:
            "Personalized strength and habit coaching that fits your life — in the studio or online. No fads, just steady progress you can feel.",
        primaryCta: { label: "Book a free intro call", href: "#contact" },
        secondaryCta: { label: "See how it works", href: "#services" },
        stats: [
            { value: "8+ yrs", label: "coaching" },
            { value: "200+", label: "clients trained" },
            { value: "4.9★", label: "average rating" },
        ],
    },
    services: {
        title: "Coaching that meets you where you are",
        subtitle:
            "Three ways to train. Every plan is built for your goals, schedule, and starting point.",
        items: [
            {
                name: "1:1 Personal Training",
                price: "from €70 / session",
                desc: "In-person sessions in Berlin-Mitte. Hands-on coaching, form work, and a plan that adapts every week.",
            },
            {
                name: "Online Coaching",
                price: "€180 / month",
                desc: "Your programming, check-ins, and form reviews in an app. Train anywhere, stay accountable.",
            },
            {
                name: "Kickstart Program",
                price: "€290 · 6 weeks",
                desc: "A focused six-week block to build the habit and the base. Perfect if you're starting or restarting.",
            },
        ],
    },
    about: {
        title: "Hi, I'm Alex.",
        body: "I've spent the last eight years helping busy people get strong without burning out. My approach is simple: meet you where you are, build habits that stick, and progress at a pace your body can keep. No crash plans, no judgement — just consistent, science-backed coaching.",
        points: [
            "Certified strength & conditioning coach",
            "Specialist in habit and nutrition coaching",
            "Trained 200+ clients, from first squat to first competition",
        ],
    },
    contact: {
        title: "Book a free intro call",
        subtitle:
            "Tell me a little about your goals and I'll get back to you within a day to set up a free 20-minute call.",
    },
} as const;

export type Site = typeof site;
