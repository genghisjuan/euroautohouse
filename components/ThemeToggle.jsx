"use client";
import { useEffect, useState } from "react";
export default function ThemeToggle(){
  const [dark, setDark] = useState(false);
  useEffect(()=>{
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('theme-dark') === '1';
    document.documentElement.classList.toggle('dark', saved);
    setDark(saved);
  },[]);
  const toggle = ()=>{
    const next = !dark;
    setDark(next);
    if (typeof window !== 'undefined'){
      localStorage.setItem('theme-dark', next ? '1':'0');
      document.documentElement.classList.toggle('dark', next);
    }
  };
  return (
    <button aria-label="Toggle dark mode" onClick={toggle} className="rounded-xl px-3 py-2 border">
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
