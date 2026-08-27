import { site } from "@/lib/content";
import { Container, Section } from "@/lib/ui/container";
import { Stagger, StaggerItem } from "@/lib/ui/reveal";
import { SectionHeading } from "@/components/section-heading";

// The services list. One file, like every other section — see the note in any sibling.
//
// ONE SECTION PER FILE. All five of these lived in a single `section-blocks.tsx`, which meant
// "change the pricing tiers" made the agent read the services, about, testimonials and FAQ markup
// too — the exact cost the one-file rule exists to prevent, and a rule that was agreed before this
// was written. Splitting them was the first fix out of that audit.

export function Services() {
    const s = site.services;
    if (!s) return null;
    return (
        <Section id="services">
            <Container>
                <SectionHeading title={s.title} subtitle={s.subtitle} />
                <Stagger className="mt-14 divide-y divide-line border-y border-line">
                    {s.items.map((item) => (
                        <StaggerItem key={item.name} className="grid gap-2 py-8 md:grid-cols-[1fr_1.6fr] md:gap-10">
                            <div>
                                <h3 className="font-display text-xl font-normal tracking-[-0.008em] text-fg">
                                    {item.name}
                                </h3>
                                {item.price ? (
                                    <p className="mt-1 text-sm tabular-nums text-brand">{item.price}</p>
                                ) : null}
                            </div>
                            <p className="leading-relaxed text-fg-muted">{item.desc}</p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Container>
        </Section>
    );
}
