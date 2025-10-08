import { SITE } from "@/config/site.config";
export default function SocialIcons({className=""}){
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a aria-label="Facebook" className="hover:opacity-80" href={SITE.social.facebook} target="_blank" rel="noreferrer">📘</a>
      <a aria-label="Instagram" className="hover:opacity-80" href={SITE.social.instagram} target="_blank" rel="noreferrer">📸</a>
    </div>
  );
}
