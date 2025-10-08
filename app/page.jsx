// app/page.jsx
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/config/site.config";
import { Wrench, Gauge, Droplet, ShieldCheck } from "lucide-react";

export const metadata = { title: "Euro Auto House | European Auto Repair Specialists" };

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center h-[90vh] bg-black text-white">
        <Image
          src="/hero.jpg"
          alt="Euro Auto House Mercedes"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Full-Service Diagnostics for Your Luxury Vehicle
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90">
            Dealer-level care for Mercedes-Benz, BMW, VW, and Audi owners. Expert technicians who
            explain your car in plain English—and stand behind every repair.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`}
              className="btn bg-[var(--color-accent)] text-black hover:opacity-90"
            >
              Call {SITE.phone}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <span>ASE Certified</span>
            <span>OEM Diagnostics</span>
            <span>Mobil 1® Oils</span>
            <span>Warranty-Friendly</span>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-neutral-50 py-10 border-b">
        <div className="container-tight grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-[var(--color-primary)]">650+</p>
            <p className="text-sm text-gray-700">5-Star Reviews</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[var(--color-primary)]">35+</p>
            <p className="text-sm text-gray-700">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[var(--color-primary)]">ASE</p>
            <p className="text-sm text-gray-700">Certified Techs</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[var(--color-primary)]">OEM</p>
            <p className="text-sm text-gray-700">Diagnostics</p>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-16">
        <div className="container-tight text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dealer-level capability with hometown service. We diagnose, repair, and maintain
            European cars with precision and honesty.
          </p>
        </div>

        <div className="container-tight grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Gauge className="h-6 w-6 text-[var(--color-primary)]" />,
              title: "Full Diagnostics",
              text:
                "Modern vehicles monitor dozens of systems. We read every module, explain codes clearly, and recommend only what’s needed.",
            },
            {
              icon: <Droplet className="h-6 w-6 text-[var(--color-primary)]" />,
              title: "Oil & Fluid Service",
              text:
                "Mobil 1® full synthetic oil and OEM filters at proper intervals to protect turbos, VANOS, and emission systems.",
            },
            {
              icon: <Wrench className="h-6 w-6 text-[var(--color-primary)]" />,
              title: "Factory Maintenance",
              text:
                "Brakes, A/C, suspension, transmission and electrical—all performed using OEM-level tools and data.",
            },
            {
              icon: <ShieldCheck className="h-6 w-6 text-[var(--color-primary)]" />,
              title: "Certified & Warranty-Friendly",
              text:
                "We use OEM-approved fluids and diagnostic systems that protect your manufacturer warranty.",
            },
          ].map((s) => (
            <div key={s.title} className="card text-left">
              <div className="mb-3">{s.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="text-white text-center py-14"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #7f0f10 0%, #b51716 35%, #d57f0e 70%, #eab308 100%)",
        }}
      >
        <div className="container-tight">
          <h2 className="text-2xl font-semibold mb-3">
            Your European Car Deserves Expert Care
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Let our certified specialists keep your vehicle running like new—with transparent
            service, OEM diagnostics, and factory-grade precision.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/services"
              className="rounded-full bg-white text-black font-semibold px-6 py-2 hover:opacity-90"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-black text-white font-semibold px-6 py-2 hover:opacity-90"
            >
              Schedule Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
