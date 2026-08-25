import { site } from "@/lib/content";

// Contact details, not a form.
//
// The platform's enquiry endpoint was removed on 2026-08-25: a site's data now lives in the site's
// OWN database, so a form belongs here only once this site has one. Until then the phone number and
// the email address are the paths that actually work, and a submit button that goes nowhere is
// worse than no form at all.
//
// To add a real form: give this site a database in the portal, create a table with an insert policy
// for anonymous visitors, and post to it with the Supabase client in lib/supabase/.
export function Contact() {
    return (
        <section id="contact" className="bg-neutral-950 text-white">
            <div className="mx-auto max-w-6xl px-6 py-24">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            {site.contact.title}
                        </h2>
                        <p className="mt-4 max-w-md text-neutral-300">
                            {site.contact.subtitle}
                        </p>
                        <div className="mt-8 space-y-2 text-sm text-neutral-400">
                            <p>{site.business.email}</p>
                            <p>{site.business.phone}</p>
                            <p>{site.business.location}</p>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-2xl bg-white/5 p-10">
                            <p className="text-lg font-semibold">Get in touch</p>
                            <p className="mt-2 text-neutral-300">
                                Call or email and I&apos;ll come back to you the same day.
                            </p>
                            <div className="mt-6 space-y-2">
                                <a
                                    href={`tel:${site.business.phone}`}
                                    className="block text-lg font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                                >
                                    {site.business.phone}
                                </a>
                                <a
                                    href={`mailto:${site.business.email}`}
                                    className="block text-lg font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                                >
                                    {site.business.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
