// app/(site)/services/page.jsx
import Section from "@/components/Section";
import ServicesGrid from "@/components/ServicesGrid";
import PricingCard from "@/components/PricingCard";
import Accordion from "@/components/Accordion";
import { SITE } from "@/config/site.config";

export const metadata = { title: "Services & Prices | Euro Auto House" };

const pricing = [
  { title: "FLEX A SERVICE", price: "$185", note: "" },
  { title: "FLEX B SERVICE", price: "$375", note: "" },
  { title: "Mobil 1 Oil Service", price: "$125", note: "Ask which full synthetic they use—Mercedes recommends Mobil 1." },
  { title: "4 & 6 Cylinders", price: "$110", note: "Oil service pricing" },
  { title: "8 Cylinder & V12", price: "$125", note: "Oil service pricing" },
  { title: "AMSOIL Oil", price: "from $250", note: "" },
  { title: "Sprinter Oil Service", price: "$225", note: "" },
  { title: "Buyer’s Inspection", price: "$150", note: "" },
  { title: "Brake Flush", price: "$125", note: "" },
  { title: "Air Filters", price: "$110", note: "" },
  { title: "Mercedes Transmission Service", price: "$450", note: "" },
  { title: "Motor Mounts", price: "from $850", note: "" },
  { title: "Ceramic Brakes (per axle)", price: "$225", note: "" },
  { title: "Differential Service", price: "$175", note: "" },
  { title: "Brake + Rotor", price: "from $525", note: "" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <Section title="Services & Prices" subtitle="Comprehensive maintenance and repair for European vehicles.">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card space-y-4">
            <h3 className="text-xl font-bold">Mobil 1® Excellent Oil Change Service</h3>
            <p>
              Make <strong>{SITE.businessName}</strong> your service destination. We perform oil changes and
              full repairs: A/C, brakes, wheel restoration, transmission service, and more. Our facility is
              recognized for quality and experience. All work is performed by factory-trained, certified
              technicians—specialists in Mercedes-Benz, BMW, Audi, and VW. We service luxury vehicles with
              the correct oils, fluids, and specifications.
            </p>
            <div className="bg-neutral-50 dark:bg-neutral-900 border rounded-2xl p-4">
              <h4 className="font-bold mb-2">When Should I Get an Oil Change?</h4>
              <p className="mb-3">
                We don’t recommend waiting for the service indicator at 10,000–15,000 miles. Dirty oil can block
                cam solenoids and VANOS valves and lead to bigger issues. Oil protects critical engine parts,
                so change it at reasonable intervals based on your vehicle and operating conditions.
              </p>
              <p className="font-semibold">Our recommendation: the earlier of <u>5,000 miles</u> or <u>6 months</u>.</p>
            </div>
            <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="btn btn-primary">Schedule: {SITE.phone}</a>
          </div>

          <div className="card space-y-4">
            <h3 className="text-xl font-bold">Full-Service Diagnostics for Your Luxury Vehicles</h3>
            <p>
              Modern vehicles monitor every system and surface early warnings before a dash light appears.
              We scan, document, and review fault codes with you. If advanced troubleshooting is required,
              any diagnostic time is itemized in your estimate—and credited when you approve repairs.
            </p>
            <ul className="list-disc pl-5 space-y-1 opacity-90">
              <li>STAR Diagnostic System for Mercedes-Benz</li>
              <li>GT1/Dealer-level Diagnostics for BMW</li>
              <li>OEM tooling, factory procedures, correct fluids & torque specs</li>
              <li>Trained Mercedes-Benz technicians</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Quick services grid (from global config) */}
      <Section title="What We Offer" subtitle="Dealer-level capability with hometown service.">
        <ServicesGrid detailed />
      </Section>

      {/* Pricing */}
      <Section title="Popular Services & Pricing" subtitle="Transparent pricing. You only pay for the time we actually work—never a matrix estimate.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricing.map((p) => (
            <PricingCard key={p.title} {...p} />
          ))}
        </div>

        <div className="card mt-8">
          <h4 className="font-bold text-lg mb-2">Competitive Prices for Quality Services</h4>
          <p className="opacity-90">
            Dealers often use a matrix (book) time for pricing. If a book says a job takes 8 hours,
            you’re billed 8 hours—no matter what. At <strong>{SITE.businessName}</strong>, we charge only
            for the hours we actually work. If the job takes 6 hours, you pay for 6 hours.
          </p>
        </div>
      </Section>

      {/* Mercedes FSS + MSI */}
      <Section title="Services for Your Mercedes-Benz" subtitle="Understanding Flexible Service System (FSS) and MSI notifications.">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card space-y-3">
            <p>
              Most 1998+ models use the Flexible Service System (FSS), a sequence of service intervals from
              Service A and B through additional intervals depending on model/age. Typically, Service A occurs
              around 10,000–13,000 miles and alternates with Service B.
            </p>
            <ul className="list-disc pl-5 space-y-1 opacity-90">
              <li><strong>Service A</strong>: ~10,000 miles and every 20,000 miles thereafter</li>
              <li><strong>Service B</strong>: ~20,000 miles and every 20,000 miles thereafter</li>
            </ul>
            <p className="opacity-90">
              Follow your Maintenance Service Indicator (MSI) to time intervals accurately for your vehicle.
            </p>
          </div>

          <div className="card">
            <h4 className="font-bold text-lg mb-2">Your Maintenance Service Indicator (MSI)</h4>
            <p className="mb-3">
              The MSI warns you about a month in advance with countdown messages (e.g., “Service A in XX Days/Miles”).
              When due, it shows “Service A Due Now.” If you pass the date/mileage, you’ll see “Service A Exceeded by
              XX Days/Miles,” often with a tone.
            </p>
            <p className="opacity-90">We’ll review the MSI with you and plan the right service at the right time.</p>
          </div>
        </div>
      </Section>

      {/* BMW service blurb */}
      <Section title="BMW Service" subtitle="Service scheduling based on your iDrive/cluster display.">
        <div className="card space-y-2">
          <p>
            We use the vehicle’s display data to determine exactly which items are due. Some items won’t be needed
            during an oil service—your display will alert you. When you visit us, we’ll show you what’s needed now
            and what to plan for next.
          </p>
        </div>
      </Section>

      {/* Mercedes Service A details (accordion) */}
      <Section title="Mercedes-Benz Service A — What’s Included">
        <Accordion
          items={[
            {
              title: "Service A Overview",
              content: (
                <ul className="list-disc pl-5 space-y-2">
                  <li>Change engine oil and filter</li>
                  <li>Check warning/indicator lamps and horn</li>
                  <li>Check windshield & headlamp washer/wiper function & fluids</li>
                  <li>Ensure seat belts function correctly</li>
                  <li>Inspect tires and pressure (including spare)</li>
                  <li>Inspect brake pad thickness and disc condition</li>
                  <li>Check & correct all fluid levels</li>
                  <li>Reset your vehicle’s FSS counter</li>
                </ul>
              ),
            },
          ]}
        />
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <a href="/contact" className="btn btn-primary">{SITE.heroCTA}</a>
          <a href={`tel:${SITE.phone.replace(/[^\d]/g, "")}`} className="btn btn-accent ml-3">
            Call {SITE.phone}
          </a>
        </div>
      </Section>
    </>
  );
}
