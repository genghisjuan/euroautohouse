import Section from "@/components/Section";
import Link from "next/link";
import { SITE } from "@/config/site.config";

// Lucide icons (kept to well-supported, recognizable set)
import {
  Droplet, Battery, Wrench, Scan, Snowflake, Gauge, Flame, Wind, Leaf, AlertTriangle
} from "lucide-react";

export const metadata = { title: "Interesting Facts | Euro Auto House" };

// Myth vs Fact (short, front-loaded copy for scanning)
const mythFacts = [
  {
    icon: <Droplet className="h-6 w-6" />,
    myth: "“I can wait 10–15k miles for an oil change.”",
    fact: "Dirty oil can clog cam solenoids/VANOS and shorten engine life. We recommend the earlier of 5,000 miles or 6 months for European engines."
  },
  {
    icon: <Droplet className="h-6 w-6" />,
    myth: "“Brake fluid lasts as long as my pads/rotors.”",
    fact: "Brake fluid is hygroscopic (absorbs moisture). Flush about every 2 years to maintain pedal feel and protect ABS components."
  },
  {
    icon: <Scan className="h-6 w-6" />,
    myth: "“Any scan tool can diagnose a Mercedes/BMW/Audi.”",
    fact: "Dealer-level tools (STAR for Mercedes, GT1/ISTA for BMW, ODIS for VAG) read proprietary modules and guided tests generic tools miss."
  },
];

// “Did You Know?” — micro-proofs that build trust
const didYouKnow = [
  {
    icon: <Battery className="h-6 w-6" />,
    title: "BMW batteries need registration",
    text: "The car adjusts charging strategy to the new battery’s type/capacity. Skipping registration can shorten battery life."
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Mercedes 722.9 needs the correct ATF",
    text: "Use the fluid meeting MB 236.14/236.15 (model-year specific) to protect shift quality and transmission longevity."
  },
  {
    icon: <Wind className="h-6 w-6" />,
    title: "Intake valve carbon on DI engines",
    text: "Audi/VW TFSI/FSI often benefit from walnut blasting at higher mileage to restore airflow and drivability."
  },
  {
    icon: <Snowflake className="h-6 w-6" />,
    title: "Coolant isn’t universal",
    text: "VW/Audi G13 (purple) and approved Mercedes/BMW coolants protect alloy components—mixing can reduce corrosion protection."
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Alignment protects expensive tires",
    text: "European cars often run aggressive specs. A yearly check helps prevent inner-edge wear and vibration."
  },
  {
    icon: <Flame className="h-6 w-6" />,
    title: "Premium fuel matters on turbos",
    text: "Higher octane prevents knock so timing/boost can run as designed—better performance and efficiency."
  },
];

// Quick, useful habits
const quickTips = [
  { icon: <Wind className="h-5 w-5" />, tip: "After spirited driving, cruise gently for a minute to cool turbos." },
  { icon: <Leaf className="h-5 w-5" />, tip: "Replace cabin filter yearly for stronger A/C and a fresher interior." },
  { icon: <Gauge className="h-5 w-5" />, tip: "Check pressures monthly—2–3 PSI low can ruin a performance tire." },
  { icon: <AlertTriangle className="h-5 w-5" />, tip: "Use OEM-equivalent brake pads/sensors—prevents ABS/ESC faults." },
];

// Simple interval table (decision shortcuts)
const cheatsheet = [
  { item: "Engine Oil (Mobil 1® full synthetic)", interval: "Every 5,000 miles or 6 months" },
  { item: "Brake Fluid Flush", interval: "Every 2 years" },
  { item: "Coolant / Antifreeze (OEM spec)", interval: "~ Every 4 years (model-dependent)" },
  { item: "Transmission Service (model-specific)", interval: "Every 60–80k miles (typical)" },
  { item: "Spark Plugs (turbo engines)", interval: "Every 30–40k miles (typical)" },
  { item: "Alignment & Tire Rotation", interval: "Yearly / every 6–8k miles" },
];

export default function Facts() {
  // SEO: FAQ schema for rich results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do BMWs need battery registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The charging strategy adapts to a battery’s capacity/type. Registering prevents premature failure."
        }
      },
      {
        "@type": "Question",
        "name": "How often should brake fluid be changed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "About every 2 years because brake fluid is hygroscopic and absorbs moisture over time."
        }
      },
      {
        "@type": "Question",
        "name": "Why dealer-level diagnostics for Mercedes/BMW/Audi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "STAR/GT1/ODIS access proprietary modules, guided tests, and adaptations generic tools don’t, speeding accurate repairs."
        }
      }
    ]
  };

  const Accent = () => (
    <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
  );

  return (
    <>
      {/* JSON-LD for FAQ rich results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Section title="Interesting Facts" subtitle="Quick, practical insights we share with every customer.">
        {/* Myth vs Fact */}
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="h2">Myth vs Fact</h3>
            <Accent />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {mythFacts.map((m, i) => (
              <div
                key={i}
                className="card transition-all hover:shadow-2xl hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[var(--color-primary)]">{m.icon}</span>
                  <p className="font-semibold text-red-700">Myth</p>
                </div>
                <p className="opacity-90 mb-4">{m.myth}</p>
                <p className="font-semibold text-green-700 mb-1">Fact</p>
                <p className="opacity-90">{m.fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Did You Know */}
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="h2">Did You Know?</h3>
            <Accent />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {didYouKnow.map((i, idx) => (
              <div
                key={idx}
                className="card transition-all hover:shadow-2xl hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)]">{i.icon}</span>
                  <div>
                    <h4 className="font-bold">{i.title}</h4>
                    <p className="opacity-80 mt-1">{i.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="h2">Quick Tips</h3>
            <Accent />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {quickTips.map((q, i) => (
              <li
                key={i}
                className="card flex items-start gap-3 transition-all hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span className="text-[var(--color-primary)]">{q.icon}</span>
                <span className="opacity-90">{q.tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Cheatsheet */}
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="h2">Service Cheatsheet</h3>
            <Accent />
          </div>
          <div className="overflow-hidden rounded-2xl border">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-neutral-100 dark:bg-neutral-900">
                <tr>
                  <th className="text-left p-3">Service</th>
                  <th className="text-left p-3">Recommended Interval</th>
                </tr>
              </thead>
              <tbody>
                {cheatsheet.map((row) => (
                  <tr key={row.item} className="border-t">
                    <td className="p-3">{row.item}</td>
                    <td className="p-3 opacity-80">{row.interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Soft CTA */}
        <div className="text-center">
          <Link href="/contact" className="btn btn-primary">{SITE.heroCTA}</Link>
          <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="btn btn-accent ml-3">
            Call {SITE.phone}
          </a>
        </div>
      </Section>
    </>
  );
}
