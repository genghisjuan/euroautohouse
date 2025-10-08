import Section from "@/components/Section";
import InstagramGrid from "@/components/InstagramGrid";
import { getInstagramMedia } from "@/lib/instagram";
import { SITE } from "@/config/site.config";

export const metadata = { title: "Gallery (Instagram) | Euro Auto House" };

export default async function Gallery() {
  const { items, ok, error } = await getInstagramMedia(18);

  return (
    <Section
      title="Gallery"
      subtitle="Live from our Instagram — recent projects, shop moments, and customer favorites."
    >
      {!ok && (
        <div className="card mb-6">
          <p className="font-semibold">Instagram feed isn’t connected yet.</p>
          <p className="opacity-80 text-sm mt-1">
            Add a valid token to <code>NEXT_PUBLIC_IG_TOKEN</code> in Vercel → Project → Settings → Environment Variables,
            then redeploy. You can always view our feed directly on{" "}
            <a className="underline" href={SITE.social.instagram} target="_blank" rel="noreferrer">Instagram</a>.
          </p>
          {!!error && <p className="opacity-60 text-xs mt-2">Error: {error}</p>}
        </div>
      )}

      <InstagramGrid items={items} />
    </Section>
  );
}
