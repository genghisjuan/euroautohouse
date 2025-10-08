// app/page.jsx
import Image from "next/image";
import CTA from "@/components/CTA";
import ServicesGrid from "@/components/ServicesGrid";
import Section from "@/components/Section";
import ReviewStrip from "@/components/ReviewStrip";
import { SITE } from "@/config/site.config";

export default function HomePage(){
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-900 text-white">
        <Image src="/hero.jpg" alt="European auto repair hero" fill priority className="object-cover opacity-30" />
        <div className="container-tight relative z-10 flex min-h-[72vh] md:min-h-[72vh] items-center">
          <div className="max-w-2xl space-y-5">
            <h1 className="h1">{SITE.heroHeadline}</h1>
            <p className="lead">Premium care for {SITE.audience}. More than diagnostics—we explain your car in plain English and stand behind every repair.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="/contact" className="btn btn-primary">{SITE.heroCTA}</a>
              <a href={`tel:${SITE.phone.replace(/[^\d]/g, '')}`} className="btn btn-accent">Call {SITE.phone}</a>
            </div>
            <ul className="flex gap-4 pt-2 text-sm opacity-80 flex-wrap">
              <li>ASE Certified</li>
              <li>OEM Diagnostics</li>
              <li>Mobil 1® Oils</li>
              <li>Warranty-Friendly</li>
            </ul>
          </div>
        </div>
      </section>

      <ReviewStrip />

      <Section id="services" title="What We Offer" subtitle="Dealer-level capability with hometown service.">
        <ServicesGrid />
        <div className="text-center mt-10">
          <a href="/services" className="btn btn-primary">See Full Services</a>
        </div>
      </Section>

      <Section id="about" title="Your Go‑To Mercedes‑Benz, BMW, Audi & VW Specialists" subtitle={`Located at ${SITE.address}. Transparent estimates, photo/video updates on request, and clear approval process.`}>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {k:'Upfront Pricing',d:'Clear line-item estimates. No surprises.'},
            {k:'Better Than Dealer',d:'Same tools, faster turnaround, friendlier prices.'},
            {k:'Education First',d:'We show you what failed and why. You approve the plan.'},
          ].map((i)=> (
            <div className="card" key={i.k}>
              <h3 className="text-xl font-bold mb-2">{i.k}</h3>
              <p className="opacity-80">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />

      <div className="sticky-call">
        <a href={`tel:${SITE.phone.replace(/[^\d]/g, '')}`}>Call {SITE.phone}</a>
      </div>
    </>
  );
}
