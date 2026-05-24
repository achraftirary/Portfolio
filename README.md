# Achraf Tirary — Portfolio

Personal portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Syne (headings) + Inter (body) via `next/font/google`
- **Contact form**: Web3Forms (serverless)
- **Icons**: Lucide React

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/Portfolio](http://localhost:3000/Portfolio).

Note: the app uses a `basePath` of `/Portfolio`, so the root URL `/` will return a 404 in development.

## Build

```bash
npm run build
npm start
```

For a local preview of the exported production site:

```bash
npm run build
npx serve@latest out --listen 3000
```

Then open [http://localhost:3000/Portfolio](http://localhost:3000/Portfolio).

## Development notes

- `npm run dev` starts the Next.js dev server.
- The project prints the correct `/Portfolio` URL at startup.
- If you open the site from another device on the LAN, use the same `/Portfolio` path.

## Contact form

The contact form uses [Web3Forms](https://web3forms.com). The access key is stored in `src/components/ContactSection.tsx`.
