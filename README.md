# Adsons corporate website

A responsive six-page website for Adsons, an international cellphone accessories trading company established in 2001.

This project is intentionally local-only. Do not deploy it to `chatgpt.site`.

## Pages

- Home
- International Trading
- Our Brands
- Our Values
- About Adsons
- Contact

## Content source

Verified company content comes from `raw-data/info.pdf`. The official supplied logo is in `raw-data/adsons-logo.jpeg`; optimized website versions live under `public/images/`.

Product and collection information has intentionally not been invented. The Brands page introduces only the confirmed proprietary brands, ADSONS and DIGIT, until approved portfolio content is supplied.

Shared business content and contact configuration are kept in `lib/site-data.ts`. Add the official WhatsApp number, email and phone before launch.

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm test
```
