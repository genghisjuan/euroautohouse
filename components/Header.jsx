"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SITE } from "@/config/site.config";
import SocialIcons from "@/components/SocialIcons";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur border-b border-neutral-800">
      <div className="container-tight flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3">
          {/* LOGO ONLY (no text) */}
          <Image
            src="/logo.png"          // ensure the file exists at public/logo.png
            alt={SITE.businessName}
            width={150}              // make the logo larger
            height={48}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {SITE.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-white/90 hover:text-[var(--color-accent)] transition"
            >
              {n.label}
            </Link>
          ))}

          <a
            href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`}
            className="btn bg-[var(--color-primary)] text-white hover:brightness-110"
          >
            {SITE.phone}
          </a>

          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          aria-label="Open menu"
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-black text-white">
          <div className="container-tight py-3 flex flex-col gap-3">
            {SITE.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-white/90 hover:text-[var(--color-accent)]"
              >
                {n.label}
              </Link>
            ))}
            <SocialIcons />
            <a
              href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`}
              className="btn bg-[var(--color-primary)] text-white hover:brightness-110"
            >
              Call {SITE.phone}
            </a>
            <div className="pt-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
