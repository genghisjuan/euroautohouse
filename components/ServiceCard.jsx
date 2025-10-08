export default function ServiceCard({service, detailed}){
  return (
    <div className="card">
      <div className="text-3xl">{service.icon}</div>
      <h3 className="text-xl font-bold mt-2">{service.title}</h3>
      <p className="opacity-80 mt-1">{service.desc}</p>
      {detailed && (
        <ul className="mt-3 text-sm list-disc pl-5 space-y-1 opacity-80">
          <li>OEM/Dealer-level tooling</li>
          <li>Factory fluids & torque specs</li>
          <li>Digital inspection report</li>
        </ul>
      )}
    </div>
  );
}
