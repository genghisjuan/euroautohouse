"use client";
import { useState } from "react";
export default function ContactForm(){
  const [form, setForm] = useState({name:"", email:"", phone:"", message:""});
  return (
    <form className="card space-y-3" onSubmit={(e)=>e.preventDefault()} aria-label="contact form">
      <h3 className="text-xl font-bold">Send us a message</h3>
      <input className="w-full border rounded-xl p-3" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
      <div className="grid md:grid-cols-2 gap-3">
        <input className="w-full border rounded-xl p-3" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input className="w-full border rounded-xl p-3" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
      </div>
      <textarea className="w-full border rounded-xl p-3" rows={4} placeholder="How can we help?" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
      <button className="btn btn-primary" type="submit" aria-disabled>
        Submit (disabled)
      </button>
    </form>
  );
}
