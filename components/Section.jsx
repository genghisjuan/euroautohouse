export default function Section({id, title, subtitle, children}){
  return (
    <section id={id} className="section">
      <div className="container-tight">
        {title && <h2 className="h2 mb-2">{title}</h2>}
        {subtitle && <p className="lead mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
