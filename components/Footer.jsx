// components/Footer.jsx
import Image from "next/image";
import { SITE } from "@/config/site.config";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-16 bg-black text-white">
      {/* Top */}
      <div className="container-tight py-10 grid gap-10 md:grid-cols-12 items-start">
        {/* Brand + Social */}
        <div className="md:col-span-4">
          <Image
            src="/logo.png" // make sure /public/logo.png exists
            alt={SITE.businessName}
            width={220}
            height={70}
            className="h-14 w-auto object-contain"
            priority={false}
          />
          {/* Socials */}
          <div className="mt-4 flex items-center gap-3">
            {SITE?.social?.facebook && (
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10 transition"
                title="Facebook"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10 transition"
                title="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Visit */}
        <div className="md:col-span-4">
          <h3 className="text-base font-semibold tracking-tight mb-2">Visit</h3>
          <address className="not-italic text-sm text-white/85 leading-relaxed">
            {SITE.address}
          </address>
          <p className="mt-2">
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-accent)] underline underline-offset-4 decoration-2 hover:opacity-90 text-sm"
            >
              Open in Maps
            </a>
          </p>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h3 className="text-base font-semibold tracking-tight mb-2">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`}
                className="text-[var(--color-accent)] underline underline-offset-4 decoration-2 hover:opacity-90"
              >
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="text-[var(--color-accent)] underline underline-offset-4 decoration-2 hover:opacity-90 break-all"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-tight py-4 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {SITE.businessName}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
