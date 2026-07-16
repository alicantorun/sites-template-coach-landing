import { site } from "@/lib/content";

export function Footer() {
    return (
        <footer className="border-t border-neutral-100 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-neutral-500 sm:flex-row">
                <p>
                    © {site.business.name}. {site.business.location}.
                </p>
                <div className="flex gap-6">
                    <a
                        href={site.business.instagram}
                        className="transition-colors hover:text-neutral-900"
                    >
                        Instagram
                    </a>
                    <a
                        href="#contact"
                        className="transition-colors hover:text-neutral-900"
                    >
                        Book a call
                    </a>
                </div>
            </div>
        </footer>
    );
}
