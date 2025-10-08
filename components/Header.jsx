"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE } from "@/config/site.config";
import SocialIcons from "@/components/SocialIcons";
import ThemeToggle from "@/components/ThemeToggle";
export default function Header(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-neutral-950/80 backdrop-blur border-b">
      <div className="container-tight flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Euro Auto House" className="h-8"/>
          <span className="font-extrabold" style={{fontFamily:'Poppins'}}>Euro Auto House</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {SITE.nav.map(n=> <Link key={n.href} href={n.href} className="hover:text-[var(--color-primary)]">{n.label}</Link>)}
          <a href={`tel:${SITE.phone.replace(/[^\d]/g, '')}`} className="btn btn-primary">{SITE.phone}</a>
          <ThemeToggle />
        </nav>
        <button aria-label="Open menu" className="md:hidden" onClick={()=>setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white dark:bg-neutral-950">
          <div className="container-tight py-3 flex flex-col gap-3">
            {SITE.nav.map(n=> <Link key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</Link>)}
            <SocialIcons />
            <a href={`tel:${SITE.phone.replace(/[^\d]/g, '')}`} className="btn btn-primary">Call {SITE.phone}</a>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
