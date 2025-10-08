import { SITE } from "@/config/site.config";
import SocialIcons from "./SocialIcons";
export default function Footer(){
  return (
    <footer className="border-t mt-20">
      <div className="container-tight py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-lg">{SITE.businessName}</h4>
          <p className="opacity-80">{SITE.tagline}</p>
          <SocialIcons className="mt-3"/>
        </div>
        <div>
          <h4 className="font-bold text-lg">Visit</h4>
          <p>{SITE.address}</p>
          <a className="underline" href={SITE.mapLink} target="_blank" rel="noreferrer">Open in Maps</a>
        </div>
        <div>
          <h4 className="font-bold text-lg">Contact</h4>
          <p><a href={`tel:${SITE.phone.replace(/[^\d]/g, '')}`} className="underline">{SITE.phone}</a></p>
          <p><a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a></p>
        </div>
      </div>
      <div className="text-center text-sm py-4 bg-neutral-100 dark:bg-neutral-900">
        © {new Date().getFullYear()} {SITE.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
