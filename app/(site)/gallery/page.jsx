import Section from "@/components/Section";
import InstagramEmbed from "@/components/InstagramEmbed";
import { SITE } from "@/config/site.config";

export const metadata = { title: "Gallery (Instagram) | Euro Auto House" };

const IG_EMBED = process.env.NEXT_PUBLIC_IG_EMBED_URL || "";

export default function Gallery() {
  return (
    <Section
      title="Gallery"
      subtitle="Live from Instagram — recent projects, shop moments, and customer favorites."
    >
      {IG_EMBED ? (
        <InstagramEmbed src={IG_EMBED} />
      ) : (
        <div className="card space-y-4">
          <h3 className="text-xl font-bold">Instagram feed not connected (no token needed)</h3>
          <p className="opacity-80">
            Add a free embed URL to show the live feed here. Until then, you can view our work on Instagram.
          </p>
          <div className="flex gap-3">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Open Instagram
            </a>
            <a
              href="https://snapwidget.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent"
            >
              Get a free embed URL
            </a>
          </div>
        </div>
      )}
    </Section>
  );
}
