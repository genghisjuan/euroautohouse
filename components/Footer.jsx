// components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/config/site.config";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-16 bg-black text-white">
      {/* Top section */}
      <div className="container-tight py-10">
        {/* Logo and social icons inline */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt={SITE.businessName}
            width={160}
            height={50}
            className="h-10 w-auto object-contain"
            priority={false}
          />
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

        {/* Contact info */}
        <div className="mt-5 space-y-2 text-sm">
          <p>
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

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container-tight py-4 text-center text-xs text-white/70">
          © {new Date().getFullYear()} {SITE.businessName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
