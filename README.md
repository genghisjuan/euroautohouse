# Euro Auto House Website

Modern, responsive site for **Euro Auto House**. Built with **Next.js 14 + Tailwind**.

## Quickstart
```bash
npm i
npm run dev # http://localhost:3000
```

## Edit brand details
Update **`config/site.config.js`**. Colors, copy, services, nav, phone/email, and SEO keywords live there.

## Production build
```bash
npm run build && npm start
```

## Vercel
1. Push this repo to GitHub.
2. Import into Vercel → framework: **Next.js**.
3. (Optional) env: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`.
4. Redeploy on push.

## SEO
- Automatic `<head>` metadata, Open Graph, and JSON-LD Schema.
- Live sitemap at `/sitemap`.

## Accessibility
- High‑contrast palette, large tap targets, semantic headings, alt text and labels.

## Future integrations
- Hook the contact form to EmailJS, Formspree, or a Vercel Server Action.
- Add analytics (Vercel Analytics or GA). 
