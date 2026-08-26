import { site } from "@/lib/content";

export function Hero() {
    const h = site.hero;
    return (
        <section className="relative overflow-hidden">
            {/* Token-derived, not a palette class. A fixed teal gradient stop here was the
                reason globals.css's "edit the tokens to re-skin the site" claim was false: the
                wash stayed teal whatever --color-brand became. */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-tint to-white" />
            <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                    {h.eyebrow}
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
                    {h.title}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
                    {h.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href={h.primaryCta.href}
                        className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
                    >
                        {h.primaryCta.label}
                    </a>
                    {/* Optional in the contract, so absent renders as ABSENT — never as a button
                        with no label pointing at "undefined". */}
                    {h.secondaryCta && (
                        <a
                            href={h.secondaryCta.href}
                            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-neutral-900"
                        >
                            {h.secondaryCta.label}
                        </a>
                    )}
                </div>
                {h.stats && h.stats.length > 0 && (
                    <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6">
                        {h.stats.map((s) => (
                            <div key={s.label}>
                                <dt className="text-3xl font-bold text-neutral-900">{s.value}</dt>
                                <dd className="text-sm text-neutral-500">{s.label}</dd>
                            </div>
                        ))}
                    </dl>
                )}
            </div>
        </section>
    );
}
