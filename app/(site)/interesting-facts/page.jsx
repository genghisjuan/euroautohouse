
export const dynamic = "force-dynamic";
export const revalidate = 0;

import Section from "@/components/Section";
import Link from "next/link";
import { SITE } from "@/config/site.config";
import {
  Scan,
  Brain,
  Car,
  Droplet,
  Gauge,
  Wind,
  Battery,
  Wrench,
  Snowflake,
  ShieldCheck,
  Sparkles,
  AudioLines,
} from "lucide-react";

export const metadata = { title: "Interesting Facts | Euro Auto House" };

/* ---------- Content ---------- */
const smarter = [
  {
    icon: <Scan className="h-5 w-5" />,
    title: "Your car self-audits",
    text: "Dozens of modules watch everything—from tire pressure to humidity. We use dealer-level tools to read the full picture.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "It learns you",
    text: "Adaptive transmissions adjust to your habits. A proper reset after service can make the car feel “new” again.",
  },
  {
    icon: <Car className="h-5 w-5" />,
    title: "Predictive service",
    text: "Oil quality, temps, and drive style inform service prompts—often before a warning light appears.",
  },
];

const wear = [
  {
    icon: <Droplet className="h-5 w-5" />,
    title: "Oil shears faster",
    text: "Euro engines run hotter/higher RPM. Change at 5k miles or 6 months to protect turbos and VANOS.",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Alignment = insurance",
    text: "Small pulls eat inner edges of pricey tires. A yearly check protects feel and tread life.",
  },
  {
    icon: <Wind className="h-5 w-5" />,
    title: "Brake fluid “spoils”",
    text: "It absorbs moisture and lowers boiling point. Flush about every 2 years—even if the pedal feels fine.",
  },
];

const design = [
  {
    icon: <Battery className="h-5 w-5" />,
    title: "BMW battery registration",
    text: "The car must learn the new battery’s type/capacity. Skipping it shortens battery life.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Mercedes 722.9 specifics",
    text: "Use MB-spec fluid (236.14/236.15 by model/year). It’s critical for shift quality and longevity.",
  },
  {
    icon: <Snowflake className="h-5 w-5" />,
    title: "Coolant isn’t universal",
    text: "VW/Audi G13 and approved BMW/Mercedes coolants protect alloy components—don’t mix types.",
  },
];

const keepNew = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Warm up right",
    text: "Skip long idles. Start, wait ~30s, drive gently. It warms faster and reduces carbon buildup.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Use the right specs",
    text: "Fluids carry exact approvals (LL-01, 504.00, 229.5). Wrong specs quietly shorten life.",
  },
  {
    icon: <AudioLines className="h-5 w-5" />,
    title: "Feel matters",
    text: "Tires are your first suspension. Correct pressures and fresh alignment keep that “European” feel.",
  },
];

/* ---------- UI Partials ---------- */
const Accent = () => <div className="accent-bar" />;

const CardGrid = ({ items }) => (
  <div className="grid gap-5 md:grid-cols-2">
    {items.map((i, idx) => (
      <div key={idx} className="card">
        <div className="flex items-start gap-4">
          <span className="text-[var(--color-primary)] mt-0.5">{i.icon}</span>
          <div>
            <h3 className="h3 mb-1">{i.title}</h3>
            <p className="text-gray-600 text-[0.95rem] leading-relaxed">{i.text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

/* ---------- Page ---------- */
export default function InterestingFacts() {
  return (
    <>
      <Section
        title="Your Car’s Secrets"
        subtitle="Short, useful insights — no fluff, just smarter care for European vehicles."
        className="pt-6"
      >
        <div className="space-y-14">
          {/* Section 1 */}
          <section>
            <div className="mb-5">
              <h2 className="h2">Your Car Is Smarter Than You Think</h2>
              <Accent />
            </div>
            <CardGrid items={smarter} />
          </section>

          {/* Section 2 */}
          <section>
            <div className="mb-5">
              <h2 className="h2">What Really Wears Out — And When</h2>
              <Accent />
            </div>
            <CardGrid items={wear} />
          </section>

          {/* Section 3 */}
          <section>
            <div className="mb-5">
              <h2 className="h2">Hidden Design Details</h2>
              <Accent />
            </div>
            <CardGrid items={design} />
          </section>

          {/* Section 4 */}
          <section>
            <div className="mb-5">
              <h2 className="h2">Keep It Feeling New</h2>
              <Accent />
            </div>
            <CardGrid items={keepNew} />
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact" className="btn btn-primary">
              {SITE.heroCTA}
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`}
              className="btn btn-accent ml-3"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
