// components/BenefitsList.jsx
export default function BenefitsList({ items = [] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1" aria-hidden>✅</span>
          <span className="opacity-90">{t}</span>
        </li>
      ))}
    </ul>
  );
}
