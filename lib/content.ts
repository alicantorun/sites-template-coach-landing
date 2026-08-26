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
};

// Re-exported so a component can type against the contract without knowing which file defines it.
// One import path for the data and its shape; the definition still lives in exactly one place.
export type { Site };
