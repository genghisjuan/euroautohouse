import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { SITE } from "@/config/site.config";
import { ShieldCheck, Wrench, Car, Award, Gauge, Droplet, Clock } from "lucide-react";

export const metadata = { title: `${SITE.businessName} | ${SITE.tagline}` };

const stats = [
  { label: "5-Star Reviews", value: "650+", icon: <Award className="h-5 w-5 text-[var(--color-primary)]" /> },
  { label: "Years Experience", value: "35+", icon: <Clock className="h-5 w-5 text-[var(--color-primary)]" /> },
  { label: "ASE Certified Techs", value: "ASE", icon: <ShieldCheck className="h-5 w-5 text-[var(--color-primary)]" /> },
  { label: "OEM Diagnostics", value: "OEM", icon: <Wrench className="h-5 w-5 text-[var(--color-primary)]" /> },
];

const services = [
  {
    icon: <Gauge className="h-6 w-6 text-[var(--color-primary)]" />,
    title: "Full Diagnostics",
    text: "We use OEM-level diagnostic tools for precise and accurate analysis across Mercedes-Benz, BMW, VW, and Audi.",
  },
  {
    icon: <Droplet className="h-6 w-6 text-[var(--color-primary)]" />,
    title: "Oil & Fluid Service",
    text: "Premium Mobil 1 oil changes, differential service, and brake flushes—designed to protect performance engines.",
  },
  {
    icon: <Car className="h-6 w-6 text-[var(--color-primary)]" />,
    title: "Factory Maintenance",
    text: "From Service A/B intervals to advanced repairs, all work follows manufacturer specifications and warranty guidelines.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-[var(--color-primary)]" />,
    title: "Certified & Warranty-Friendly",
    text: "Our ASE-certified techs use approved parts and maintain warranty compliance with full transparency.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex items-center justify-center bg-black/70">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.jpg"
            alt="Luxury European car diagnostics"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>

        <div className="container-tight py-28 text-center text-white max-w-3xl">
          <h1 className="h1 text-white mb-3">
            Full-Service Diagnostics for Your Luxury Vehicle
          </h1>
          <p className="lead mb-8 text-gray-200">
            Dealer-level care for Mercedes-Benz, BMW, VW, and Audi owners.  
            Expert technicians who explain your car in plain English—and stand behind every repair.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="btn btn-accent">
              Call {SITE.phone}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>ASE Certified</span>
            <span>OEM Diagnostics</span>
            <span>Mobil 1® Oils</span>
            <span>Warranty-Friendly</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-[var(--surface-muted)] border-t border-b border-[var(--border)] py-6">
        <div className="container-tight grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="flex flex-col items-center gap-2">
                {s.icon}
                <p className="text-xl font-semibold text-[var(--color-primary)]">{s.value}</p>
                <p className="text-sm text-gray-600">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT WE OFFER */}
      <Section
        title="What We Offer"
        subtitle="Dealer-level capability with hometown service. We diagnose, repair, and maintain European cars with precision and honesty."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          {services.map((service, idx) => (
            <div key={idx} className="card">
              <div className="mb-3">{service.icon}</div>
              <h3 className="h3 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white text-center py-12">
        <div className="container-tight">
          <h2 className="text-2xl font-semibold mb-4">
            Your European Car Deserves Expert Care
          </h2>
          <p className="text-gray-100 mb-6">
            Let our certified specialists keep your vehicle running like new—with transparent service, OEM diagnostics, and factory-grade precision.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/services" className="btn btn-accent text-black">
              View Services
            </Link>
            <Link href="/contact" className="btn btn-primary bg-black text-white hover:opacity-90">
              Schedule Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
