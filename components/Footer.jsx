// components/Footer.jsx
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/config/site.config";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-16 bg-black text-white">
      {/* Main row */}
      <div className="container-tight py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Left: logo with socials to the right */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt={SITE.businessName}
            width={160}
            height={50}
            className="h-10 w-auto object-contain"
            priority={false}
          />
          <div className="flex items-center gap-3">
            {SITE?.social?.facebook && (
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10 transition"
              >
                <Facebook className="h-5 w-5 text-[#1877F2]" />
              </a>
            )}
            {SITE?.social?.instagram && (
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10 transition"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Right: phone, email, address (right-aligned on desktop, centered on mobile) */}
        <div className="text-center md:text-right text-sm">
          <p className="mb-2">
            <a
              href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`}
              className="text-[var(--color-accent)] underline underline-offset-4 decoration-2 hover:opacity-90"
            >
              {SITE.phone}
            </a>
          </p>
          <p className="mb-2">
            <a
              href={`mailto:${SITE.email}`}
              className="text-[var(--color-accent)] underline underline-offset-4 decoration-2 hover:opacity-90 break-all"
            >
              {SITE.email}
            </a>
          </p>
          <p className="text-white/85">
            {SITE.address}{" "}
            <Link
              href={SITE.mapUrl}
              target="_blank"
              className="text-[var(--color-accent)] underline underline-offset-4 decoration-2 hover:opacity-90"
            >
              Open in Maps
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom bar: centered copyright only */}
      <div className="border-t border-white/10">
        <div className="container-tight py-4 text-center text-xs text-white/70">
          © {new Date().getFullYear()} {SITE.businessName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
