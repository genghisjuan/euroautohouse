import Section from "@/components/Section";
import InstagramGrid from "@/components/InstagramGrid";
import { SITE } from "@/config/site.config";

export const metadata = { title: "Gallery (Instagram) | Euro Auto House" };

async function fetchInstagram() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/instagram`, {
    // Revalidate on the server every hour; good default
    next: { revalidate: 3600 },
  });
  if (!res.ok) return { ok: false, items: [], error: `HTTP ${res.status}` };
  return res.json();
}

export default async function Gallery() {
  const { ok, items, error } = await fetchInstagram();

  return (
    <Section
      title="Gallery"
      subtitle="Recent projects, shop moments, and customer favorites—straight from Instagram."
    >
      {!ok && (
        <div className="card mb-6">
          <p className="font-semibold">Instagram feed isn’t connected yet.</p>
          <p className="opacity-80 text-sm mt-1">
            Ask the business owner to add a long-lived token in Vercel (<code>IG_LONG_LIVED_TOKEN</code>).
          </p>
          {!!error && <p className="opacity-60 text-xs mt-2">Error: {error}</p>}
          <p className="mt-3">
            You can also view our feed directly on{" "}
            <a className="underline" href={SITE.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>.
          </p>
        </div>
      )}

      <InstagramGrid items={items} />
    </Section>
  );
}
