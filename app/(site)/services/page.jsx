// app/(site)/services/page.jsx
import Section from "@/components/Section";
import ServicesGrid from "@/components/ServicesGrid";
import PricingCard from "@/components/PricingCard";
import Accordion from "@/components/Accordion";
import StatBar from "@/components/StatBar";
import BenefitsList from "@/components/BenefitsList";
import Steps from "@/components/Steps";
import Guarantee from "@/components/Guarantee";
import StickyCTA from "@/components/StickyCTA";
import { SITE } from "@/config/site.config";

export const metadata = { title: "Services & Pricing | Euro Auto House" };

const pricing = [
  { title: "FLEX A SERVICE", price: "$185" },
  { title: "FLEX B SERVICE", price: "$375", note: "Full inspection & fluids" },
  { title: "Mobil 1 Oil Service", price: "$125", note: "Mercedes-approved full synthetic" },
  { title: "4 & 6 Cylinders (Oil)", price: "$110" },
  { title: "8 Cyl. & V12 (Oil)", price: "$125" },
  { title: "AMSOIL Oil", price: "from $250" },
  { title: "Sprinter Oil Service", price: "$225" },
  { title: "Buyer’s Inspection", price: "$150" },
  { title: "Brake Flush", price: "$125" },
  { title: "Air Filters", price: "$110" },
  { title: "Mercedes Transmission Service", price: "$450" },
  { title: "Motor Mounts", price: "from $850" },
  { title: "Ceramic Brakes (per axle)", price: "$225" },
  { title: "Differential Service", price: "$175" },
  { title: "Brake + Rotor", price: "from $525" },
];

const faqs = [
  {
    q: "How often should I change my oil?",
    a: (
      <>
        We recommend the earlier of <strong>5,000 miles</strong> or <strong>6 months</strong>. Waiting
        10–15k (or for the indicator) can cause sludge that blocks cam solenoids and VANOS valves,
        leading to expensive repairs.
      </>
    ),
  },
  {
    q: "Do you use dealer-level diagnostics?",
    a: (
      <>
        Yes. We use <strong>STAR</strong> for Mercedes-Benz and <strong>GT1</strong> for BMW plus OEM-grade
        tooling. You get the same capability you’d expect at a dealer—without the dealer pricing.
      </>
    ),
  },
  {
    q: "Will I be pressured into repairs?",
    a: (
      <>
        Never. We review the findings with you, prioritize safety, and only proceed with your approval.
        Diagnostics are itemized and credited when you approve repairs.
      </>
    ),
  },
  {
    q: "Are your techs certified?",
    a: (
      <>
        Our technicians are <strong>factory-trained</strong> and <strong>ASE-certified</strong> with decades
        of European experience.
      </>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <StatBar
        items={[
          { k: "Dealer-Level Diagnostics", v: "STAR / GT1" },
          { k: "Mobil 1® Fluids", v: "Factory-approved" },
          { k: "ASE Certified", v: "35+ yrs experience" },
          { k: "Transparent Pricing", v: "Pay for actual time" },
        ]}
      />

      {/* HERO SUMMARY */}
      <Section
        title="Services & Prices"
        subtitle="Fast, friendly, and factory-correct care for Mercedes-Benz, BMW, Audi & VW."
      >
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card space-y-4">
            <h3 className="text-xl font-bold">Oil Service That Protects Your Engine</h3>
            <p>
              Choose <strong>Mobil 1®</strong> full synthetic—engineered for European specs. We service luxury
              engines with the right oil, filter, and torque to preserve performance and warranty.
            </p>
            <BenefitsList
              items={[
                "Correct spec oils & OEM filters",
                "Digital inspection with photos on request",
                "Torque to factory specs",
                "Service light reset",
              ]}
            />
            <div className="bg-neutral-50 dark:bg-neutral-900 border rounded-2xl p-4">
              <p className="font-semibold">
                Recommended interval: <u>5,000 miles</u> or <u>6 months</u>—whichever comes first.
              </p>
              <p className="opacity-80 mt-1">
                Extends engine life and prevents sludge that can damage VANOS/cam solenoids.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="/contact" className="btn btn-primary">{SITE.heroCTA}</a>
              <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="btn btn-accent">
                Call {SITE.phone}
              </a>
            </div>
          </div>

          <div className="card space-y-4">
            <h3 className="text-xl font-bold">Full-Service Diagnostics</h3>
            <p>
              Modern vehicles warn you long before a light appears. We scan, document, and explain
              findings in plain English. If advanced troubleshooting is needed, it’s itemized—and
              credited when you approve repairs.
            </p>
            <BenefitsList
              items={[
                "STAR for Mercedes-Benz • GT1 for BMW",
                "OEM tooling & guided factory procedures",
                "Prioritized estimates (safety • performance • maintenance)",
                "You approve everything first",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* CORE SERVICES SNAPSHOT */}
      <Section
        title="What We Offer"
        subtitle="Dealer capability. Independent integrity."
      >
        <ServicesGrid detailed />
      </Section>

      {/* PRICING */}
      <Section
        title="Popular Services & Pricing"
        subtitle="Straightforward rates. You pay for the time we actually work—never a book-time matrix."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricing.map((p) => (
            <PricingCard key={p.title} {...p} />
          ))}
        </div>
        <Guarantee className="mt-8" />
      </Section>

      {/* MERCEDES FSS + MSI */}
      <Section title="Mercedes-Benz Maintenance, Simplified" subtitle="Understanding Flexible Service System (FSS) & MSI notifications.">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card space-y-3">
            <p>
              1998+ Mercedes models use <strong>FSS</strong> service intervals (A, B, and beyond depending on model/age).
              Typically:
            </p>
            <BenefitsList
              items={[
                "Service A: ~10k miles and every 20k thereafter",
                "Service B: ~20k miles and every 20k thereafter",
                "Intervals can vary by model and driving conditions",
              ]}
            />
            <p className="opacity-80">We’ll time services with your car’s data and driving habits.</p>
          </div>
          <div className="card">
            <h4 className="font-bold text-lg mb-2">Your MSI (Maintenance Service Indicator)</h4>
            <p className="mb-3">
              Expect countdown messages like “Service A in XX Days/Miles.” When due, you’ll see “Service A Due Now.”
              If overdue, it displays “Service A Exceeded…” along with a tone. We’ll review the MSI with you and plan
              the right visit.
            </p>
            <Steps
              items={[
                "Scan & review MSI/faults together",
                "Clarify must-do vs. can-wait",
                "Approve estimate digitally",
                "Service performed to factory spec",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* BMW SERVICE NOTE */}
      <Section title="BMW Service" subtitle="We use your vehicle’s display to determine exactly what’s due.">
        <div className="card">
          Some items won’t coincide with an oil service. Your display will flag what’s needed and when.
          We’ll show you today’s priorities and help you plan the rest.
        </div>
      </Section>

      {/* SERVICE A DETAILS */}
      <Section title="Mercedes-Benz Service A — What’s Included">
        <Accordion
          items={[
            {
              title: "Service A Checklist",
              content: (
                <ul className="list-disc pl-5 space-y-2">
                  <li>Change engine oil and filter</li>
                  <li>Check warning/indicator lamps and horn</li>
                  <li>Check windshield & headlamp washer/wiper function & fluids</li>
                  <li>Ensure seat belts function correctly</li>
                  <li>Inspect tires and pressure (incl. spare)</li>
                  <li>Inspect brake pad thickness and disc condition</li>
                  <li>Check & correct all fluid levels</li>
                  <li>Reset FSS counter</li>
                </ul>
              ),
            },
          ]}
        />
      </Section>

      {/* FAQ */}
      <Section title="Frequently Asked Questions">
        <Accordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
      </Section>

      {/* BOTTOM CTA */}
      <Section>
        <div className="text-center">
          <a href="/contact" className="btn btn-primary">{SITE.heroCTA}</a>
          <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="btn btn-accent ml-3">Call {SITE.phone}</a>
        </div>
      </Section>

      {/* Mobile sticky CTA */}
      <StickyCTA phone={SITE.phone} />
    </>
  );
}
