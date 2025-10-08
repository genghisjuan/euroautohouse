// components/Steps.jsx
export default function Steps({ items = [] }) {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {items.map((t, i) => (
        <li key={i} className="card py-4">
          <div className="text-sm opacity-70">Step {i + 1}</div>
          <div className="font-semibold mt-1">{t}</div>
        </li>
      ))}
    </ol>
  );
}
