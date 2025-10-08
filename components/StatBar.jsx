// components/StatBar.jsx
export default function StatBar({ items = [] }) {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900">
      <div className="container-tight py-3 flex flex-wrap gap-4 justify-between text-sm">
        {items.map(({ k, v }) => (
          <div key={k} className="flex items-baseline gap-2">
            <span className="font-extrabold" style={{ color: "var(--color-primary)" }}>{k}</span>
            <span className="opacity-80">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
