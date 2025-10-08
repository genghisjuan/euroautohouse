import Section from "@/components/Section";
import Image from "next/image";

export const metadata = { title: "Gallery | Euro Auto House" };

// 6 square images (1080x1080)
const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "Gallery Image 1" },
  { src: "/images/gallery2.jpg", alt: "Gallery Image 2" },
  { src: "/images/gallery3.jpg", alt: "Gallery Image 3" },
  { src: "/images/gallery4.jpg", alt: "Gallery Image 4" },
  { src: "/images/gallery5.jpg", alt: "Gallery Image 5" },
  { src: "/images/gallery6.jpg", alt: "Gallery Image 6" },
];

export default function Gallery() {
  return (
    <Section
      title="Gallery"
      subtitle="A showcase of our craftsmanship, facility, and luxury European vehicles we service."
    >
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                priority={index < 3}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
