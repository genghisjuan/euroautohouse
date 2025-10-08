import Section from "@/components/Section";
import Image from "next/image";

export const metadata = { title: "Gallery | Euro Auto House" };

const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "Euro Auto House Workshop" },
  { src: "/images/gallery2.jpg", alt: "Mercedes-Benz Maintenance" },
  { src: "/images/gallery3.jpg", alt: "BMW Engine Diagnostics" },
  { src: "/images/gallery4.jpg", alt: "Audi Performance Service" },
  { src: "/images/gallery5.jpg", alt: "VW Repair Bay" },
  { src: "/images/gallery6.jpg", alt: "Certified Technicians at Work" },
];

export default function Gallery() {
  return (
    <Section
      title="Our Gallery"
      subtitle="A glimpse inside our facility — where precision, quality, and European engineering meet expert care."
    >
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="object-cover w-full h-64 md:h-72"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white text-lg font-semibold text-center px-4">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
