import { SITE } from "@/config/site.config";
import ServiceCard from "./ServiceCard";
export default function ServicesGrid({detailed=false}){
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SITE.services.map(s => <ServiceCard key={s.title} service={s} detailed={detailed} />)}
    </div>
  );
}
