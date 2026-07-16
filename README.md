# Coach Landing — website builder template

A polished one-page coaching / fitness landing site. The first real template for the
alicantorun.com website builder (`coach-landing`). Fixed stack: **Next.js 16 · React 19 ·
Tailwind v4 · TypeScript**.

## The content contract

All business facts (name, tagline, contact, services, copy) live in **`lib/content.ts`** —
one typed module the whole site + SEO metadata read from. A "change my phone number" edit is
one line here. The coding agent edits this file for content and the `components/*` for
structure and design.

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Structure

- `app/layout.tsx` — SEO metadata driven from the content contract
- `app/page.tsx` — composes the sections
- `components/` — `nav`, `hero`, `services`, `about`, `contact` (lead form), `footer`
- `lib/content.ts` — the content contract

## Lead form (builder integration)

`components/contact.tsx` captures client-side today. At publish the builder rewires its
`onSubmit` to `POST /api/v1/public/sites/[siteId]/leads` with the per-site `SITE_LEADS_TOKEN`,
so submissions land in the site's Leads inbox.
