// components/Guarantee.jsx
export default function Guarantee({ className = "" }) {
  return (
    <div className={`card ${className}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl" aria-hidden>🛡️</span>
        <div>
          <h4 className="font-bold text-lg">Our Guarantee</h4>
          <p className="opacity-90">
            Factory-correct fluids & specs, clear approvals, and workmanship we stand behind.
            If something isn’t right, we’ll make it right.
          </p>
        </div>
      </div>
    </div>
  );
}
