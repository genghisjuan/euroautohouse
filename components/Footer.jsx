// components/Footer.jsx
import Image from "next/image";
import { SITE } from "@/config/site.config";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-16 bg-black text-white">
      {/* Top Section */}
      <div className="container-tight py-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Left: Logo + Social */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo.png"
            alt={SITE.businessName}
            width={220}
            height={70}
            className="h-14 w-auto object-contain"
            priority={false}
          />
          <div className="mt-4 flex items-center gap-3 justify-center md:justify-start">
            {SITE?.social?.facebook && (
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10 transition"
                title="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            )}
            {SITE?.social?.instagram && (
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10 transition"
                title="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-center md:items-end text-sm space-y-2 leading-relaxed">
          <h3 className="text-base font-semibold text-white tracking-tight mb-1">
            Contact
          </h3>
          <a
            href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`}
            className="underline underline-offset-4 decoration-2 hover:opacity-80 text-white"
          >
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="underline underline-offset-4 decoration-2 hover:opacity-80 text-white break-all"
          >
            {SITE.email}
          </a>
          <address className="not-italic text-white/85">{SITE.address}</address>
          <a
            href={SITE.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-2 hover:opacity-80 text-white"
          >
            Open in Maps
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-tight py-4 text-xs text-white/60 flex flex-col items-center justify-center gap-2 text-center">
          <span>
            © {new Date().getFullYear()} {SITE.businessName}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
