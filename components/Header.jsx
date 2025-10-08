// components/Header.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/config/site.config";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--border)]">
      <div className="container-tight flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png" // ensure this file exists under /public/logo.png
            alt={SITE.businessName}
            width={200}
            height={64}
            className="h-14 md:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav (no dark mode toggle) */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/gallery", label: "Gallery" },
            { href: "/interesting-facts", label: "Interesting Facts" },
            { href: "/contact", label: "Contact" },
          ].map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm md:text-[0.95rem] text-gray-700 hover:text-[var(--color-primary)] transition"
            >
              {n.label}
            </Link>
          ))}

          <a
            href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`}
            className="btn btn-primary text-sm md:text-[0.95rem]"
          >
            {SITE.phone}
          </a>
        </nav>

        {/* Simple mobile menu (no theme toggle) */}
        <details className="md:hidden">
          <summary className="list-none cursor-pointer text-2xl leading-none">☰</summary>
          <div className="absolute right-4 mt-3 w-60 rounded-2xl border bg-white shadow-xl p-3 space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/interesting-facts", label: "Interesting Facts" },
              { href: "/contact", label: "Contact" },
            ].map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-slate-50"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`}
              className="btn btn-primary w-full"
            >
              Call {SITE.phone}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
