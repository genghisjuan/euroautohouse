import Section from "@/components/Section";
import Link from "next/link";
import { SITE } from "@/config/site.config";
import {
  Gauge,
  Droplet,
  Wrench,
  Scan,
  ShieldCheck,
  Car,
  Settings2,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

export const metadata = { title: "Services | Euro Auto House" };

/* ----------------------------- Content Models ----------------------------- */
// Hero bullets (trust builders)
const heroBullets = [
  { icon: <ShieldCheck className="h-5 w-5" />, text: "ASE Certified" },
  { icon: <Scan className="h-5 w-5" />, text: "OEM Diagnostics (STAR / ISTA / ODIS)" },
  { icon: <Droplet className="h-5 w-5" />, text: "Mobil 1® Oils" },
  { icon: <ClipboardCheck className="h-5 w-5" />, text: "Warranty-Friendly" },
];

// Headline services
const pillarServices = [
  {
    icon: <Gauge className="h-6 w-6 text-[var(--color-primary)]" />,
    title: "Full-Service Diagnostics",
    text:
      "Modern European vehicles monitor dozens of systems. We review codes with you and explain options clearly—only what your car needs.",
  },
  {
    icon: <Droplet className="h-6 w-6 text-[var(--color-primary)]" />,
    title: "Oil & Routine Maintenance",
    text:
      "Mobil 1® full synthetic, OEM filters, and factory intervals tailored to how you drive—protecting turbos, VANOS, and emissions systems.",
  },
  {
    icon: <Settings2 className="h-6 w-6 text-[var(--color-primary)]" />,
    title: "Repairs & Systems",
    text:
      "Brakes, transmission service, A/C, suspension, electrical, and more—performed to factory specifications with OEM-level tools.",
  },
  {
    icon: <Car className="h-6 w-6 text-[var(--color-primary)]" />,
    title: "Mercedes / BMW Specialists",
    text:
      "FSS Service A/B guidance for Mercedes-Benz and condition-based service for BMW, including battery registration and adaptations.",
  },
];

// Packages (clear pricing anchors)
const packages = [
  { name: "FLEX A Service", price: "$185", desc: "Entry interval for many Mercedes-Benz models; oil & key safety checks." },
  { name: "FLEX B Service", price: "$375", desc: "Expanded multi-point inspection and additional maintenance items." },
  { name: "Mobil 1® Oil Service", price: "$125", desc: "Premium full-synthetic oil & filter for eligible models." },
  {
    name: "Oil Service by Cylinder",
    price: "4/6 cyl $110 · V12 $125",
    desc: "Pricing guidance by engine type; exact quote varies by model & oil spec.",
  },
];

// À-la-carte items
const alaCarte = [
  { name: "AMSOIL® Oil (from)", price: "$250" },
  { name: "Sprinter Oil Service", price: "$225" },
  { name: "Buyer’s Inspection", price: "$150" },
  { name: "Brake Fluid Flush", price: "$125" },
  { name: "Air Filters", price: "$110" },
  { name: "Mercedes Transmission Service", price: "$450" },
  { name: "Motor Mounts (from)", price: "$850" },
  { name: "Ceramic Brake Pads (per axle)", price: "$225" },
  { name: "Differential Service", price: "$175" },
  { name: "Brake + Rotor (from)", price: "$525" },
];

// Mercedes FSS & BMW info (consumer-friendly)
const brandInfo = [
  {
    heading: "Mercedes-Benz Flexible Service System (FSS)",
    items: [
      "Most 1998+ models follow Service A and B at alternating intervals.",
      "Typical cadence: Service A around 10–13k miles, then B ~20k miles after—varies by model/age.",
      "Your vehicle’s Maintenance Service Indicator will alert you by days and miles remaining.",
    ],
  },
  {
    heading: "BMW Condition-Based Service",
    items: [
      "The display tells you exactly what is due and when—oil, brakes, filters, etc.",
      "Battery replacement requires registration so the charging strategy adapts correctly.",
      "We walk you through what’s needed now vs. what can wait—no surprises.",
    ],
  },
];

/* --------------------------------- Partials -------------------------------- */
const Accent = () => <div className="accent-bar" />;

const Bullet = ({ icon, text }) => (
  <li className="flex items-center gap-2 text-gray-700">
    <span className="text-[var(--color-primary)]">{icon}</span>
    <span className="text-sm">{text}</span>
  </li>
);

const Pillar = ({ icon, title, text }) => (
  <div className="card">
    <div className="mb-3">{icon}</div>
    <h3 className="h3 mb-1">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
  </div>
);

const PriceCard = ({ name, price, desc }) => (
  <div className="card">
    <div className="flex items-baseline justify-between">
      <h4 className="h3">{name}</h4>
      <span className="text-[var(--color-primary)] font-semibold">{price}</span>
    </div>
    {desc && <p className="text-gray-600 text-sm mt-2">{desc}</p>}
    <div className="mt-4">
      <Link href="/contact" className="btn btn-primary">Get Exact Quote</Link>
    </div>
  </div>
);

/* ----------------------------------- Page ---------------------------------- */
export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": SITE.businessName,
    "telephone": SITE.phone,
    "address": { "@type": "PostalAddress", "streetAddress": SITE.address },
    "areaServed": "Sanford, FL",
    "servesCuisine": undefined,
    "url": process.env.NEXT_PUBLIC_SITE_URL || "",
    "priceRange": "$$",
    "makesOffer": [
      { "@type": "Offer", "itemOffered": "Diagnostics" },
      { "@type": "Offer", "itemOffered": "Oil Service" },
      { "@type": "Offer", "itemOffered": "Brake Service" },
      { "@type": "Offer", "itemOffered": "Transmission Service" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* HERO */}
      <Section
        title="Full-Service Diagnostics for Your Luxury Vehicles"
        subtitle="Dealer-level capability, independent honesty. We explain your options clearly and stand behind every repair."
        className="pt-6"
      >
        <div className="grid gap-4 md:grid-cols-4">
          {heroBullets.map((b, i) => (
            <Bullet key={i} icon={b.icon} text={b.text} />
          ))}
        </div>

        <div className="mt-6">
          <Link href="/contact" className="btn btn-primary mr-3">Request a Free Quote</Link>
          <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="btn btn-accent">Call {SITE.phone}</a>
        </div>
      </Section>

      {/* WHAT WE DO */}
      <Section
        title="What We Offer"
        subtitle="We maintain and repair European vehicles with precision tools and factory-grade procedures."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-4">
          {pillarServices.map((s, i) => (
            <Pillar key={i} {...s} />
          ))}
        </div>
      </Section>

      {/* PACKAGES / ANCHOR PRICING */}
      <Section
        title="Popular Service Packages"
        subtitle="Clear starting points. We’ll confirm the exact spec for your VIN before work begins."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {packages.map((p, i) => (
            <PriceCard key={i} {...p} />
          ))}
        </div>
      </Section>

      {/* À-LA-CARTE MENU */}
      <Section title="À-La-Carte Services" subtitle="Focused items you can book individually or bundle.">
        <div className="overflow-hidden rounded-2xl border">
          <table className="w-full text-sm md:text-base">
            <thead className="bg-neutral-100">
              <tr>
                <th className="text-left p-3">Service</th>
                <th className="text-right p-3">From</th>
              </tr>
            </thead>
            <tbody>
              {alaCarte.map((row) => (
                <tr key={row.name} className="border-t">
                  <td className="p-3">{row.name}</td>
                  <td className="p-3 text-right text-[var(--color-primary)] font-semibold">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs mt-3">
          Pricing varies by model, oil specification, and parts selection. We always confirm before any work.
        </p>
      </Section>

      {/* BRAND-SPECIFIC GUIDANCE */}
      <Section title="Brand-Specific Guidance" subtitle="Service intervals and features that matter for long-term reliability.">
        <div className="grid gap-6 md:grid-cols-2">
          {brandInfo.map((b) => (
            <div key={b.heading} className="card">
              <h3 className="h3 mb-3">{b.heading}</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {b.items.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-[var(--color-primary)] mt-1">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* TRUST / CTA */}
      <Section className="text-center">
        <h2 className="h2 mb-2">Ready to keep your car feeling new?</h2>
        <p className="lead mb-6">
          Get a transparent estimate and a service plan that fits your vehicle and driving style.
        </p>
        <Link href="/contact" className="btn btn-primary mr-3">Request a Quote</Link>
        <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="btn btn-accent">Call {SITE.phone}</a>
      </Section>
    </>
  );
}
