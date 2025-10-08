export default function ReviewStrip(){
  const items = [
    {k:'653+',v:'5‑Star Reviews'},
    {k:'35+',v:'Years Experience'},
    {k:'ASE',v:'Certified Techs'},
    {k:'OEM',v:'Diagnostics'},
  ];
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900">
      <div className="container-tight py-4 flex flex-wrap items-center justify-between gap-4 text-sm">
        {items.map((i)=> (
          <div key={i.k} className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold" style={{color:'var(--color-primary)'}}>{i.k}</span>
            <span className="opacity-80">{i.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
