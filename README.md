# Adsons corporate website

A responsive six-page website for Adsons, an electronics trading and retail business with more than 20 years of experience and three retail shops.

This project is intentionally local-only. Do not deploy it to `chatgpt.site`.

## Pages

- Home
- Trading & Distribution
- Product Categories
- Retail Network
- About Adsons
- Contact

## Content updates

Shared business content and contact configuration are kept in `lib/site-data.ts`. Add the official international WhatsApp number to `siteConfig.whatsappNumber` before launch.

The website deliberately presents only broad product categories and general subcategories. It does not expose individual products, brands, suppliers, pricing, stock or catalogues.

See `docs/WEBSITE-PLAN.md` and `docs/OWNER-CONTENT-CHECKLIST.md` for the agreed strategy and owner review requirements.

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm test
```
