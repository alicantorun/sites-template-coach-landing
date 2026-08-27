"use client";

import type { FormEvent } from "react";
import { useContact } from "@/lib/hooks/use-contact";

// The site's only write surface.
//
// THREE STATES, never conflated: a failed submit shows what went wrong and leaves the typed
// message intact, a pending submit disables the button so a double-click cannot send twice, and a
// successful one replaces the form rather than leaving it looking unsent. Collapsing any two of
// those is how a form ends up silently dropping enquiries.
//
// The fields are UNCONTROLLED and read from FormData on submit. There is nothing to derive from
// each keystroke here, so per-field state would only be a second copy of what the DOM already
// holds — and the server owns validation either way.
//
// No maxLength copies: the bounds live in lib/validation.ts and are enforced server-side. A number
// duplicated here is a number that will one day disagree with the schema that actually decides.
export function ContactForm() {
    const contact = useContact();

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const text = (key: string) => String(form.get(key) ?? "").trim();
        contact.mutate({
            name: text("name"),
            email: text("email"),
            // Empty is ABSENT, not an empty string — the schema marks phone optional, and "" would
            // be stored as a phone number nobody can call.
            phone: text("phone") || undefined,
            message: text("message"),
            // Deliberately NOT trimmed: any character a bot puts here should trip the honeypot,
            // including whitespace.
            company: String(form.get("company") ?? "") || undefined,
        });
    }

    if (contact.isSuccess) {
        return (
            <div role="status" className="rounded-2xl bg-surface-2 p-10">
                <p className="text-lg font-semibold">Thanks — that&apos;s with me.</p>
                <p className="mt-2 text-fg-subtle">
                    I&apos;ll come back to you within a day to set up your free 20-minute call. If
                    it&apos;s urgent, call instead and you&apos;ll get me the same day.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="relative rounded-2xl bg-surface-2 p-10">
            <p className="text-lg font-semibold">Get in touch</p>
            <p className="mt-2 text-sm text-fg-subtle">
                Tell me where you&apos;re starting from and what you want to change.
            </p>

            <div className="mt-6 space-y-4">
                <Field label="Your name" name="name" autoComplete="name" required />
                <Field label="Email" name="email" type="email" autoComplete="email" required />
                <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-fg-subtle">
                        What are you working towards?
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="mt-1 w-full rounded-lg border border-line bg-surface-2 px-3 py-2 text-sm text-fg placeholder:text-fg-muted focus:border-brand focus:outline-none"
                        placeholder="I'd like to get back into training twice a week…"
                    />
                </div>
            </div>

            {/* The honeypot. Positioned off-screen rather than given `sr-only`: sr-only keeps a
                field in the accessibility tree, so a screen-reader user would be asked to fill the
                trap. aria-hidden + tabIndex -1 keep every real visitor, assistive tech included,
                from ever reaching it — only a bot reading the raw HTML does. */}
            <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {contact.isError && (
                <p
                    role="alert"
                    className="mt-6 rounded-lg border border-line bg-surface-2 px-3 py-2 text-sm text-fg"
                >
                    {contact.error.message}
                </p>
            )}

            <button
                type="submit"
                disabled={contact.isPending}
                className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
                {contact.isPending ? "Sending…" : "Send"}
            </button>
        </form>
    );
}

// One input, one label, wired by id. Written once because four copies of the same markup is four
// places for a label to lose its `htmlFor` and stop being a label at all.
function Field({
    label,
    name,
    type = "text",
    autoComplete,
    required = false,
}: {
    label: string;
    name: string;
    type?: string;
    autoComplete?: string;
    required?: boolean;
}) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-fg-subtle">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                autoComplete={autoComplete}
                required={required}
                className="mt-1 w-full rounded-lg border border-line bg-surface-2 px-3 py-2 text-sm text-fg placeholder:text-fg-muted focus:border-brand focus:outline-none"
            />
        </div>
    );
}
