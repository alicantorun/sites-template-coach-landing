"use client";

import { useState } from "react";
import { site } from "@/lib/content";

// Lead form, wired to the platform's enquiry endpoint via this site's own /api/lead route.
//
// It used to set `sent` on submit and post nowhere — a form that LOOKS like it worked and
// delivers nothing, which is worse than no form at all. The success state is now shown only when
// the request actually succeeded.
export function Contact() {
    const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [error, setError] = useState("");
    const sent = state === "sent";
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
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    if (state === "sending") return;
                                    const form = new FormData(e.currentTarget);
                                    setState("sending");
                                    const res = await fetch("/api/lead", {
                                        method: "POST",
                                        headers: { "content-type": "application/json" },
                                        body: JSON.stringify({
                                            name: form.get("name"),
                                            email: form.get("email"),
                                            message: form.get("message"),
                                            website: form.get("website"),
                                            source: "contact",
                                        }),
                                    }).catch(() => null);
                                    if (res?.ok) return setState("sent");
                                    const body = await res?.json().catch(() => ({}));
                                    setError(
                                        body?.message ??
                                            "Something went wrong. Please try again.",
                                    );
                                    setState("error");
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
                                {/* Honeypot: off-screen rather than type="hidden", because bots
                                    read the DOM. Hidden from assistive tech and out of tab order,
                                    so a person never meets it. */}
                                <input
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                    className="absolute left-[-9999px]"
                                />
                                <button
                                    type="submit"
                                    disabled={state === "sending"}
                                    className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
                                >
                                    {state === "sending"
                                        ? "Sending…"
                                        : "Request my free call"}
                                </button>
                                {state === "error" && (
                                    <p role="alert" className="text-sm text-red-400">
                                        {error}
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
