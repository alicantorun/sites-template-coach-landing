import { site } from "@/lib/content";
import { Container } from "@/lib/ui/container";
import { Button } from "@/lib/ui/button";
import { Aura, PhotoSlot } from "@/components/visual";

// WARM EDITORIAL. Asymmetric on purpose: the words take a reading column on the left and a
// portrait sits beside them, rather than a centred block with everything stacked under it. A
// coach is selling a person, so a person belongs in the first screen.
//
// Note the reveal delays: the eyebrow, headline and subtitle arrive in reading order about a tenth
// of a second apart. Long enough to read as deliberate, short enough that a returning visitor is
// not made to wait for their own site.
export function Hero() {
    return (
        <section className="relative isolate overflow-hidden border-b border-line">
            <Aura seed={3} />
            <Container className="relative py-24 md:py-36">
                <div className="grid gap-14 md:grid-cols-[1.15fr_1fr] md:items-center">
                    <div>
                    <div className="enter"><p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-subtle">
                            {site.hero.eyebrow}
                        </p>
                    </div>
                    <div className="enter enter-1">
                        <h1 className="mt-6 font-display text-[clamp(2.3rem,5vw,3.9rem)] leading-[1.06] font-normal tracking-[-0.012em] text-balance text-fg">
                            {site.hero.title}
                        </h1>
                    </div>
                    <div className="enter enter-2">
                        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-fg-muted">
                            {site.hero.subtitle}
                        </p>
                    </div>
                    <div className="enter enter-3">
                        <div className="mt-10 flex flex-wrap items-center gap-3">
                            <Button href={site.hero.primaryCta.href} size="lg">
                                {site.hero.primaryCta.label}
                            </Button>
                            {site.hero.secondaryCta ? (
                                <Button href={site.hero.secondaryCta.href} variant="secondary" size="lg">
                                    {site.hero.secondaryCta.label}
                                </Button>
                            ) : null}
                        </div>
                    </div>
                    </div>
                    <div className="enter enter-4">
                        <PhotoSlot label="A portrait of the coach" ratio="4 / 5" />
                    </div>
                </div>
                {site.hero.stats?.length ? (
                    <div className="enter enter-4">
                        <dl className="mt-16 flex flex-wrap gap-x-14 gap-y-6 border-t border-line pt-8">
                            {site.hero.stats.map((s) => (
                                <div key={s.label}>
                                    <dt className="font-display text-2xl font-semibold tabular-nums tracking-[-0.02em] text-fg">
                                        {s.value}
                                    </dt>
                                    <dd className="mt-0.5 text-xs uppercase tracking-[0.14em] text-fg-subtle">
                                        {s.label}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                ) : null}
            </Container>
        </section>
    );
}
