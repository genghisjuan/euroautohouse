// components/Footer.jsx
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/config/site.config";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--surface-muted)]">
      <div className="container-tight py-10 grid gap-8 md:grid-cols-3">
        {/* Left: Logo + tagline + socials */}
        <div>
          <Image
            src="/logo.png" // ensure this file exists under /public/logo.png
            alt={SITE.businessName}
            width={220}
            height={70}
            className="h-14 w-auto object-contain"
            priority={false}
          />
          <p className="text-gray-600 text-sm mt-2">{SITE.tagline}</p>

          <div className="mt-3 flex items-center gap-3">
            {SITE?.social?.facebook && (
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-white transition"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-white transition"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Middle: Address */}
        <div>
          <h4 className="h3 mb-2">Visit</h4>
          <p className="text-sm text-gray-700">{SITE.address}</p>
          <p className="mt-1">
            <a href={SITE.mapUrl} target="_blank" rel="noreferrer" className="link text-sm">
              Open in Maps
            </a>
          </p>
        </div>

        {/* Right: Contact */}
        <div>
          <h4 className="h3 mb-2">Contact</h4>
          <p className="text-sm">
            <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="link">
              {SITE.phone}
            </a>
          </p>
          <p className="text-sm mt-1">
            <a href={`mailto:${SITE.email}`} className="link">
              {SITE.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--border)] text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} {SITE.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
