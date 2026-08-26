import { site } from "@/lib/content";

export function Services() {
    const s = site.services;
    // The section is optional in the contract. A site without services renders nothing here rather
    // than an empty heading — the anchor in `nav` is the site author's to remove with it.
    if (!s) return null;
    return (
        <section id="services" className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                {s.title}
            </h2>
            {s.subtitle && <p className="mt-4 max-w-xl text-lg text-neutral-600">{s.subtitle}</p>}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {s.items.map((item) => (
                    <div
                        key={item.name}
                        className="flex flex-col rounded-2xl border border-neutral-200 p-8 transition-shadow hover:shadow-lg"
                    >
                        <h3 className="text-lg font-semibold text-neutral-900">{item.name}</h3>
                        {item.price && (
                            <p className="mt-1 text-sm font-medium text-brand">{item.price}</p>
                        )}
                        <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600">
                            {item.desc}
                        </p>
                        <a
                            href="#contact"
                            className="mt-6 text-sm font-semibold text-neutral-900 hover:text-brand"
                        >
                            Get started →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
