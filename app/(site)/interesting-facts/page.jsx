import Section from "@/components/Section";
export const metadata = { title: "Interesting Facts | Euro Auto House" };
export default function Facts(){
  const facts = [
    "Most modern BMWs require battery registration after replacement.",
    "Mercedes 722.9 transmissions need fluid meeting MB 236.14 spec.",
    "Audi/VW TFSI engines benefit from intake valve carbon cleaning.",
    "Using OEM-level diagnostics prevents parts cannon repairs.",
  ];
  return (
    <Section title="Interesting Facts" subtitle="Tips we share with every customer.">
      <ul className="grid md:grid-cols-2 gap-4">
        {facts.map((f)=> (<li className="card" key={f}>{f}</li>))}
      </ul>
    </Section>
  );
}
