// lib/instagram.js
const IG_ENDPOINT =
  "https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url,timestamp";

export async function getInstagramMedia(limit = 18) {
  const token = process.env.NEXT_PUBLIC_IG_TOKEN;
  if (!token) return { items: [], ok: false, error: "Missing NEXT_PUBLIC_IG_TOKEN" };

  const url = `${IG_ENDPOINT}&access_token=${token}&limit=${limit}`;

  const res = await fetch(url, { next: { revalidate: 60 * 60 } }); // revalidate every hour
  if (!res.ok) return { items: [], ok: false, error: `HTTP ${res.status}` };

  const data = await res.json();
  const items =
    (data?.data || [])
      .filter((m) => ["IMAGE", "CAROUSEL_ALBUM", "VIDEO"].includes(m.media_type))
      .map((m) => ({
        id: m.id,
        href: m.permalink,
        src: m.media_type === "VIDEO" ? m.thumbnail_url ?? m.media_url : m.media_url,
        alt: m.caption?.slice(0, 120) || "Instagram photo",
        type: m.media_type,
        ts: m.timestamp,
      }));

  return { items, ok: true, error: null };
}
