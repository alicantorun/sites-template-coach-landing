import { site } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";

// The form and the direct details, side by side on purpose. A form that posts somewhere real is
// the low-friction path; the phone number and the email address are the ones that still work when
// the form does not, so neither replaces the other.
//
// Where a submission GOES is lib/services/contact.ts — it logs by default, and says so.
export function Contact() {
    return (
        <section id="contact" className="bg-neutral-950 text-white">
            <div className="mx-auto max-w-6xl px-6 py-24">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            {site.contact.title}
                        </h2>
                        <p className="mt-4 max-w-md text-neutral-300">{site.contact.subtitle}</p>
                        <div className="mt-8 space-y-2">
                            <a
                                href={`mailto:${site.business.email}`}
                                className="block text-lg font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                            >
                                {site.business.email}
                            </a>
                            {site.business.phone && (
                                <a
                                    // `phoneHref`, never `phone`: the display number carries spaces
                                    // and a tel: URL built from it is not dialable.
                                    href={`tel:${site.business.phoneHref}`}
                                    className="block text-lg font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                                >
                                    {site.business.phone}
                                </a>
                            )}
                        </div>
                        {site.business.location && (
                            <p className="mt-4 text-sm text-neutral-400">
                                {site.business.location}
                            </p>
                        )}
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
