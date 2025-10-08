import { SITE } from "@/config/site.config";
export default function CTA(){
  return (
    <section className="section bg-[var(--color-primary)] text-white">
      <div className="container-tight grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="h2">Need service on your European vehicle?</h2>
          <p className="lead">We’re trusted by {SITE.audience}. Get a fast, friendly estimate today.</p>
        </div>
        <div className="flex gap-3 justify-start md:justify-end">
          <a href="/contact" className="btn bg-white text-black">{SITE.heroCTA}</a>
          <a href={`tel:${SITE.phone.replace(/[^\d]/g, '')}`} className="btn btn-accent">Call {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}
