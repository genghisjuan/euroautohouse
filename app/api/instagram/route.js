// app/api/instagram/route.js
const IG_ENDPOINT =
  "https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url,timestamp";

export async function GET() {
  const token = process.env.IG_LONG_LIVED_TOKEN; // server-only env var
  if (!token) {
    return new Response(JSON.stringify({ ok: false, items: [], error: "Missing IG_LONG_LIVED_TOKEN" }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
    });
  }

  try {
    const url = `${IG_ENDPOINT}&access_token=${encodeURIComponent(token)}&limit=18`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return new Response(JSON.stringify({ ok: false, items: [], error: `HTTP ${res.status}` }), {
        status: 200,
        headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
      });
    }

    const data = await res.json();
    const items =
      (data?.data || [])
        .filter((m) => ["IMAGE", "CAROUSEL_ALBUM", "VIDEO"].includes(m.media_type))
        .map((m) => ({
          id: m.id,
          href: m.permalink,
          src: m.media_type === "VIDEO" ? m.thumbnail_url ?? m.media_url : m.media_url,
          alt: m.caption?.slice(0, 140) || "Instagram post",
          type: m.media_type,
          ts: m.timestamp,
        }));

    // Cache at the edge for an hour; browser 5 min
    return new Response(JSON.stringify({ ok: true, items }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600, max-age=300",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, items: [], error: String(err?.message || err) }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
    });
  }
}
