import { site } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";
import { contactDeliveryConfigured } from "@/lib/services/contact";

// The form and the direct details, side by side on purpose. A form that posts somewhere real is
// the low-friction path; the phone number and the email address are the ones that still work when
// the form does not, so neither replaces the other.
//
// The form renders ONLY when a submission has somewhere real to go. This site's own database is
// that somewhere, and the platform injects its credentials when the site has one. Until
// 2026-08-26 the form rendered unconditionally over a delivery function that logged and returned,
// so a visitor was thanked for an enquiry nobody would ever read.
//
// A site with no database is not broken — it simply leads with the phone number and the email
// address, which work. To turn the form on: add a database in the portal, then ask the agent for
// an enquiries table. Where a submission goes is lib/services/contact.ts.
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
                    {contactDeliveryConfigured() && <ContactForm />}
                </div>
            </div>
        </section>
    );
}
