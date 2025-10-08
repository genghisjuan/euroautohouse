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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white backdrop-blur border-b border-neutral-800">
      <div className="container-tight flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3">
          {/* LOGO ONLY (no text) */}
          <Image
            src="/logo.png" // make sure the file exists in public/logo.png
            alt={SITE.businessName}
            width={200}     // larger size
            height={64}
            className="h-14 md:h-16 w-auto" // proportionally scaled for retina clarity
            priority
          />
        </Link>
    
        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-5">
          {SITE.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm md:text-[0.9rem] text-white/90 hover:text-[var(--color-accent)] transition tracking-wide"
            >
              {n.label}
            </Link>
          ))}
    
          <a
            href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`}
            className="btn bg-[var(--color-primary)] text-white text-sm md:text-[0.9rem] px-4 py-2 rounded-full font-semibold hover:brightness-110"
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
</header>


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
