// components/PricingCard.jsx
export default function PricingCard({ title, price, note }) {
  return (
    <div className="card">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="text-2xl font-extrabold mt-1" style={{ color: "var(--color-primary)" }}>
        {price}
      </div>
      {note ? <p className="opacity-80 text-sm mt-2">{note}</p> : null}
    </div>
  );
}
