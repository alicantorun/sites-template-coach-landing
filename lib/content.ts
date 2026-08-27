import type { Site } from "@/lib/site-schema";

// The content contract: every business fact in ONE typed module. "Change my phone number" is a
// one-line edit here, and the whole site plus its SEO metadata read from it. The agent edits this
// file for content changes and the components for structure and design.
//
// The SHAPE is not defined here — it is `Site` in lib/site-schema.ts, shared by every template, so
// one instruction ("edit lib/content.ts, field business.phone") is correct for all of them. Only
// the VALUES below are this site's. Sections a template does not use are simply absent; adding a
// field means adding it to the schema first, which is the point.
//
// Annotated `: Site` rather than `as const satisfies Site`: `as const` makes every array readonly,
// and a readonly array is not assignable to the schema's mutable arrays, so that pairing does not
// compile. The annotation is what makes tsc check this file against the contract.
export const site: Site = {
    business: {
        name: "Nimbus Coaching",
        tagline: "Train with intention.",
        email: "hello@nimbuscoaching.example",
        phone: "+49 30 1234 5678",
        // The DIALABLE form, and the reason the field exists. A tel: href built from the display
        // number carries its spaces into the URL, which a phone cannot dial — so the two forms are
        // stored separately rather than derived from each other at a call site.
        phoneHref: "+493012345678",
        location: "Berlin, Germany",
        socials: [{ label: "Instagram", href: "https://instagram.com/" }],
    },
    nav: [
        { label: "Coaching", href: "/services" },
        { label: "Results", href: "/work" },
        { label: "Pricing", href: "/pricing" },
        { label: "About", href: "/about" },
        { label: "Book", href: "/contact" },
    ],
    hero: {
        eyebrow: "1:1 Personal Coaching · Berlin",
        title: "Get stronger with a plan built around your body.",
        subtitle:
            "Personalized strength and habit coaching that fits your life — in the studio or online. No fads, just steady progress you can feel.",
        primaryCta: { label: "Book a free intro call", href: "/contact" },
        secondaryCta: { label: "See how it works", href: "/services" },
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
    work: {
        title: "What changed for people",
        subtitle:
            "Three clients who let me write about their training. Names used with permission.",
        projects: [
            {
                slug: "marta-first-competition",
                name: "Marta, 34",
                kind: "1:1 coaching",
                year: "2026",
                blurb:
                    "Came in after two years away from the gym and a back that flared up every time she tried to return. Competed in her first powerlifting meet eleven months later.",
                detail: {
                    summary:
                        "Two years away, a back that flared on every attempt to return, and a first competition eleven months later.",
                    role: "1:1 coaching, in person",
                    services: ["1:1 coaching", "Programming"],
                    body: [
                        "Marta arrived convinced her back was the problem. It was not — the problem was that every return to training started at the intensity she had left off at two years earlier, her back complained, and she stopped. Three cycles of that had taught her that lifting hurt her.",
                        "The first eight weeks were deliberately unimpressive. Light, frequent, boring, and specifically designed so nothing flared. What that bought was the first stretch of uninterrupted training she had had in years, and after that the strength came back quickly because it had never really gone.",
                        "The competition was her idea, not mine. She wanted a date that could not move.",
                    ],
                    outcome: [
                        { value: "11 months", label: "from first session to platform" },
                        { value: "0", label: "training weeks lost to back pain" },
                    ],
                },
            },
            {
                slug: "sam-online-shift-work",
                name: "Sam, 41",
                kind: "Online coaching",
                year: "2025",
                blurb:
                    "A paramedic on rotating shifts who had never managed more than three consistent weeks. Now two years in, training around the roster rather than against it.",
                detail: {
                    summary:
                        "Rotating shifts, a decade of three-week streaks, and a plan built around the roster instead of against it.",
                    role: "Online coaching",
                    services: ["Online coaching", "Habit work"],
                    body: [
                        "Sam did not need a better program. He needed one that survived a night shift. Every plan he had tried assumed four fixed days a week, and the first roster change ended it.",
                        "We built around a floor rather than a target: two sessions a week counts as a full week, three is good, four is a bonus. The sessions themselves are ordinary. What changed is that a bad fortnight stopped meaning starting over.",
                    ],
                    outcome: [
                        { value: "2 yrs", label: "unbroken training" },
                        { value: "+38kg", label: "on the squat" },
                    ],
                },
            },
            {
                slug: "priya-kickstart",
                name: "Priya, 28",
                kind: "Kickstart programme",
                year: "2025",
                blurb:
                    "Had never lifted and did not want to be shouted at. Finished the six weeks and kept training on her own for a year before coming back for a block.",
            },
        ],
    },
    pricing: {
        title: "What coaching costs",
        subtitle: "Published, because being cagey about money wastes both our time.",
        tiers: [
            {
                name: "Kickstart",
                price: "€290",
                cadence: "6 weeks",
                blurb: "A focused block to build the habit and the base. For starting or restarting.",
                features: ["Six weeks", "Two sessions a week", "A plan you keep afterwards"],
            },
            {
                name: "1:1 coaching",
                price: "€70",
                cadence: "per session",
                blurb: "In-person sessions in Berlin-Mitte. Hands-on coaching and a plan that adapts weekly.",
                features: [
                    "Sessions in the studio",
                    "Programming between sessions",
                    "Form review and adjustment",
                    "Message me any time",
                ],
                featured: true,
                cta: { label: "Book an intro call", href: "/contact" },
            },
            {
                name: "Online",
                price: "€180",
                cadence: "per month",
                blurb: "Your programming and check-ins in an app. Train anywhere, stay accountable.",
                features: ["Weekly check-ins", "Video form reviews", "Cancel any month"],
            },
        ],
        note: "The first call is free and is not a sales call. If I am not the right coach for you I will say so.",
    },
    testimonials: {
        title: "In their words",
        items: [
            {
                quote:
                    "The first two months were so easy I thought it was not working. It was the first time in years nothing hurt.",
                name: "Marta K.",
                role: "1:1 coaching",
            },
            {
                quote:
                    "He built the plan around my roster instead of telling me to fix my roster. Nobody had done that before.",
                name: "Sam D.",
                role: "Online coaching",
            },
            {
                quote: "No shouting, no weigh-ins, no nonsense. I just got stronger.",
                name: "Priya R.",
                role: "Kickstart",
            },
        ],
    },
    faq: {
        title: "Before you book",
        items: [
            {
                q: "I have not trained in years. Is that a problem?",
                a: "It is the most common starting point. The first block is built to be easy on purpose — the goal is consistency, and intensity is the thing that breaks it.",
            },
            {
                q: "Do I need a gym membership?",
                a: "For 1:1, no — sessions are in my studio. For online coaching, any gym works, and I will build around whatever equipment you actually have.",
            },
            {
                q: "What if I have an injury?",
                a: "Tell me on the intro call. I work around most things and refer on when something needs a physio first. I would rather send you elsewhere than train around something I should not.",
            },
            {
                q: "Can I pause?",
                a: "Yes. Online is monthly and cancels any month. Blocks pause for illness or travel with no charge.",
            },
        ],
    },
    contact: {
        title: "Book a free intro call",
        subtitle:
            "Tell me a little about your goals and I'll get back to you within a day to set up a free 20-minute call.",
    },
};

// Re-exported so a component can type against the contract without knowing which file defines it.
// One import path for the data and its shape; the definition still lives in exactly one place.
export type { Site };
