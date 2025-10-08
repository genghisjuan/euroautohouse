import Section from "@/components/Section";
import Link from "next/link";
import { SITE } from "@/config/site.config";
import {
  Scan, Brain, Car, Droplet, Gauge, Wind, Battery, Wrench, Snowflake, ShieldCheck, Sparkles, AudioLines
} from "lucide-react";

export const metadata = { title: "Interesting Facts | Euro Auto House" };

// 1) Your Car Is Smarter Than You Think
const smarter = [
  {
    icon: <Scan className="h-6 w-6" />,
    title: "Your car self-audits",
    text: "Dozens of modules watch everything—from tire pressure to humidity. We use dealer-level tools to read the full picture."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "It learns you",
    text: "Adaptive transmissions adjust to your habits. A proper reset after service can make the car feel “new” again."
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Predictive service",
    text: "Oil quality, temps, and drive style inform service prompts—often before a warning light appears."
  },
];

// 2) What Really Wears Out—And When
const wear = [
  {
    icon: <Droplet className="h-6 w-6" />,
    title: "Oil shears faster",
    text: "Euro engines run hotter/higher RPM. Change at 5k miles or 6 months to protect turbos and VANOS."
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Alignment = insurance",
    text: "Small pulls eat inner edges of pricey tires. A yearly check protects feel and tread life."
  },
  {
    icon: <Wind className="h-6 w-6" />,
    title: "Brake fluid “spoils”",
    text: "It absorbs moisture and lowers boiling point. Flush about every 2 years—even if pedal feels fine."
  },
];

// 3) Hidden Design Details
const design = [
  {
    icon: <Battery className="h-6 w-6" />,
    title: "BMW battery registration",
    text: "The car must learn the new battery’s type/capacity. Skipping it shortens battery life."
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Mercedes 722.9 specifics",
    text: "Use MB-spec fluid (236.14/236.15 by model/year). It’s critical for shift quality and longevity."
  },
  {
    icon: <Snowflake className="h-6 w-6" />,
    title: "Coolant isn’t universal",
    text: "VW/Audi G13 and approved BMW/Mercedes coolants protect alloy components—don’t mix types."
  },
];

// 4) Keep It Feeling New
const keepNew = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Warm up right",
    text: "Skip long idles. Start, wait ~30s, drive gently. It warms faster and reduces carbon buildup."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Use the right specs",
    text: "Oil and fluids carry exact approvals (LL-01, 504.00, 229.5). Wrong specs quietly shorten life."
  },
  {
    icon: <AudioLines className="h-6 w-6" />,
    title: "Feel matters",
    text: "Tires are your first suspension. Correct pressures and fresh alignment keep that “European” feel."
  },
];

const CardGrid = ({ items }) => (
  <div className="grid gap-4 md:grid-cols-2">
    {items.map((i, idx) => (
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
);

const Accent = () => (
  <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
);

export default function InterestingFacts() {
  return (
    <>
      <Section title="Your Car’s Secrets" subtitle="Short, useful insights—no fluff, just smart care for European vehicles.">
        {/* 1 */}
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="h2">Your Car Is Smarter Than You Think</h3>
            <Accent />
          </div>
          <CardGrid items={smarter} />
        </div>

        {/* 2 */}
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="h2">What Really Wears Out—And When</h3>
            <Accent />
          </div>
          <CardGrid items={wear} />
        </div>

        {/* 3 */}
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="h2">Hidden Design Details</h3>
            <Accent />
          </div>
          <CardGrid items={design} />
        </div>

        {/* 4 */}
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="h2">Keep It Feeling New</h3>
            <Accent />
          </div>
          <CardGrid items={keepNew} />
        </div>

        {/* Focused CTA */}
        <div className="mt-2 text-center">
          <Link href="/contact" className="btn btn-primary">{SITE.heroCTA}</Link>
          <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="btn btn-accent ml-3">Call {SITE.phone}</a>
        </div>
      </Section>
    </>
  );
}
