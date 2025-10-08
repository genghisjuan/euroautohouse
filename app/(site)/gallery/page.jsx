import Section from "@/components/Section";
export const metadata = { title: "Gallery | Euro Auto House" };
const items = Array.from({length:9}).map((_,i)=>`https://picsum.photos/seed/euro${i}/600/400`);
export default function Gallery(){
  return (
    <Section title="Gallery" subtitle="A look inside our shop and recent projects.">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((src)=> (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt="Shop work" className="rounded-2xl w-full h-56 object-cover"/>
        ))}
      </div>
    </Section>
  );
}
