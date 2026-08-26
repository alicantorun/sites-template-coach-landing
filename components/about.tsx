import { site } from "@/lib/content";

export function About() {
    const a = site.about;
    if (!a) return null;
    return (
        <section id="about" className="bg-neutral-50">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
                {/* The portrait placeholder, tinted from the brand tokens rather than from a
                    fixed palette ramp — this block is the largest colour on the page, so
                    hardcoding it was what made re-skinning look broken. */}
                <div className="aspect-[4/5] w-full max-w-md rounded-3xl bg-gradient-to-br from-brand-tint to-brand" />
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                        {a.title}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-neutral-600">{a.body}</p>
                    {a.points && a.points.length > 0 && (
                        <ul className="mt-8 space-y-3">
                            {a.points.map((p) => (
                                <li key={p} className="flex items-start gap-3 text-neutral-700">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                                    {p}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}
