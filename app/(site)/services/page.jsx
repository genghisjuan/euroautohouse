import Section from "@/components/Section";
import ServicesGrid from "@/components/ServicesGrid";
export const metadata = { title: "Services | Euro Auto House" };
export default function ServicesPage(){
  return (
    <Section title="Services" subtitle="Comprehensive maintenance and repair for European vehicles.">
      <ServicesGrid detailed />
    </Section>
  );
}
