import { SITE } from "@/config/site.config";
export default function MapEmbed(){
  return (
    <div className="mt-3">
      <iframe
        title="Map"
        className="w-full h-64 rounded-2xl"
        src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapAddress)}&output=embed`}
        loading="lazy"
      />
    </div>
  );
}
