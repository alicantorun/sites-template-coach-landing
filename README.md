# Coach Landing

A one-page coaching / fitness site: hero, services, about, and a contact form. One of the
templates the alicantorun.com website builder can start a client site from. Fixed stack —
**Next.js 16 · React 19 · Tailwind v4 · TypeScript**, strict, no `any`.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm verify     # lint + typecheck + build, the same three the builder runs
```

## The content contract

Every business fact — name, tagline, contact details, services, copy — lives in
**`lib/content.ts`**. Nothing is hardcoded in a component, so "change my phone number" is a
one-line edit there and the page, the footer and the SEO metadata all follow.

The SHAPE of that file is **`lib/site-schema.ts`**, and it is identical in every template. That
is the point: an instruction like "set `business.phone`" is correct whichever template a site was
started from. `lib/content.ts` annotates itself `: Site`, so `pnpm typecheck` fails if a field is
misspelled, missing, or invented.

Two fields that look redundant and are not:

- `business.phone` is the DISPLAY number (`+49 30 1234 5678`).
- `business.phoneHref` is the DIALABLE one (`+493012345678`). A `tel:` href built from the display
  form carries its spaces and will not dial.

Optional sections (`services`, `about`, `hero.stats`, `hero.secondaryCta`, `business.socials`) may
simply be deleted; the components render absence as absence rather than as an empty heading.

## The contact form

`components/contact-form.tsx` posts to `POST /api/contact` (`app/api/contact/route.ts`), which
runs the same order as the platform that builds this site: **rate-limit → validate → service →
envelope**. It is IP rate-limited (`lib/rate-limit.ts`), Zod-validated against `contactSchema`
(`lib/validation.ts`), and carries a honeypot field named `company` that a real visitor never sees.

**By default a submission is LOGGED, not delivered.** `lib/services/contact.ts` writes a
`contact_received` line to stdout and nothing else, because a form that appears to send and does
not is worse than no form at all. Two ways to make it real, in order of preference, both described
in that file:

1. **This site's own database.** Add a migration creating a table with row-level security on and
   an INSERT-only policy for `anon`, then insert in `deliverContact`. The site owns its data.
2. **A mailer.** Read the API key with `requireEnv()` (`lib/env.ts`) so a missing key fails closed
   at startup rather than silently dropping enquiries.

## Re-skinning

Three tokens in `app/globals.css` — `--color-brand`, `--color-brand-dark`, `--color-brand-tint` —
and every brand colour on the page follows them, through the `brand` utilities Tailwind generates
from them. Reaching for one of Tailwind's fixed palette classes for a brand colour is a bug: it
survives a re-skin unchanged, which is what left the hero and the about block teal on every site
started from this template.

## Structure

- `app/layout.tsx` — metadata via `buildMetadata` (`lib/seo.ts`), wraps the tree in `Providers`
- `app/page.tsx` — composes the sections
- `app/error.tsx` / `app/global-error.tsx` — render the error digest, never the message
- `components/` — `nav`, `hero`, `services`, `about`, `contact` + `contact-form`, `footer`
- `lib/content.ts` + `lib/site-schema.ts` — the content contract and its shape
- `lib/api/`, `lib/hooks/` — the response envelope and the React Query hooks that unwrap it
