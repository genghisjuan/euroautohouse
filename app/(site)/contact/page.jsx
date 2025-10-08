import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { SITE } from "@/config/site.config";
export const metadata = { title: "Contact | Euro Auto House" };
export default function Contact(){
  return (
    <Section title="Contact Us" subtitle="We’re here to help.">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="card space-y-4">
          <h3 className="text-xl font-bold">Shop Details</h3>
          <p><strong>Address:</strong> {SITE.address}</p>
          <p><strong>Phone:</strong> <a className="underline" href={`tel:${SITE.phone.replace(/[^\d]/g, '')}`}>{SITE.phone}</a></p>
          <p><strong>Email:</strong> <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p><strong>Hours:</strong> Mon–Fri 8am–6pm</p>
          <MapEmbed />
        </div>
        <div>
          <ContactForm />
          <p className="text-sm opacity-70 mt-3">*Form displays on site only (not connected to email yet).</p>
        </div>
      </div>
    </Section>
  );
}
