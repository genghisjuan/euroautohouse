export async function GET(){
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const pages = ["/", "/services", "/gallery", "/interesting-facts", "/contact"];
  const body = pages.map(p=>`<url><loc>${base}${p}</loc></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`,{
    headers: {"Content-Type":"application/xml"}
  });
}
