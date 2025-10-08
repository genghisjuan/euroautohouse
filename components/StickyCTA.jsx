// components/StickyCTA.jsx
export default function StickyCTA({ phone }) {
  const tel = phone.replace(/[^\d]/g, "");
  return (
    <div className="sticky-call">
      <a href={`tel:${tel}`} aria-label={`Call ${phone}`}>Call {phone}</a>
    </div>
  );
}
