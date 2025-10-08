// components/Accordion.jsx
"use client";
import { useState } from "react";

export default function Accordion({ items = [] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((it, idx) => (
        <div key={idx} className="border rounded-2xl overflow-hidden">
          <button
            className="w-full text-left p-4 font-semibold flex items-center justify-between"
            onClick={() => setOpen(open === idx ? -1 : idx)}
            aria-expanded={open === idx}
          >
            {it.title}
            <span>{open === idx ? "−" : "+"}</span>
          </button>
          {open === idx && <div className="p-4 pt-0">{it.content}</div>}
        </div>
      ))}
    </div>
  );
}
