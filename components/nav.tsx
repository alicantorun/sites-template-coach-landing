import { site } from "@/lib/content";

export function Nav() {
    return (
        <header className="sticky top-0 z-40 border-b border-neutral-100 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#" className="text-lg font-semibold tracking-tight">
                    {site.business.name}
                </a>
                <nav className="hidden items-center gap-8 text-sm text-neutral-600 sm:flex">
                    {site.nav.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            className="transition-colors hover:text-neutral-900"
                        >
                            {n.label}
                        </a>
                    ))}
                </nav>
                <a
                    href="#contact"
                    className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
                >
                    Book now
                </a>
            </div>
        </header>
    );
}
