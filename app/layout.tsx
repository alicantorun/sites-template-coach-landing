import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { site } from "@/lib/content";
import { buildMetadata, buildJsonLd } from "@/lib/seo";

// Metadata is BUILT, not hand-written: buildMetadata carries the canonical URL and the complete
// openGraph block, which Next replaces wholesale rather than deep-merging. A page that writes its
// own object drops whatever the layout set and nothing reports it.
//
// The values still come from the content contract, so a content edit updates the tab title and the
// share description too.
export const metadata: Metadata = buildMetadata({
    title: `${site.business.name} — ${site.business.tagline}`,
    description: site.hero.subtitle,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-white text-neutral-900 antialiased">
                <Providers>{children}</Providers>
                {/* Structured data for search and answer engines. Rendered from the same content
                    contract the page uses, so it cannot describe a business the page does not. */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd("ProfessionalService")) }}
                />
            </body>
        </html>
    );
}
