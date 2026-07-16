"use client";

import { useState } from "react";
import { site } from "@/lib/content";

// Lead form. The website builder wires this to the platform lead endpoint
// (POST /api/v1/public/sites/[siteId]/leads with a per-site token) at publish; for now
// it captures client-side so the template runs standalone. TODO(builder): swap the
// onSubmit for a fetch to the provisioned endpoint.
export function Contact() {
    const [sent, setSent] = useState(false);
    const inputCls =
        "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 transition-colors focus:border-brand focus:outline-none";
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
                        {sent ? (
                            <div className="rounded-2xl bg-white/5 p-10 text-center">
                                <p className="text-lg font-semibold">
                                    Thanks! 🎉
                                </p>
                                <p className="mt-2 text-neutral-300">
                                    I&apos;ll be in touch within a day to set up
                                    your free call.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setSent(true);
                                }}
                                className="space-y-4"
                            >
                                <input
                                    required
                                    name="name"
                                    placeholder="Your name"
                                    className={inputCls}
                                />
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className={inputCls}
                                />
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="What are your goals?"
                                    className={inputCls}
                                />
                                <button
                                    type="submit"
                                    className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
                                >
                                    Request my free call
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
