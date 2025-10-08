export default function Section({ title, subtitle, children, className = "" }) {
  return (
    <section className={`section ${className}`}>
      <div className="container-tight">
        {(title || subtitle) && (
          <header className="section-header">
            {title && <h1 className="section-title">{title}</h1>}
            {subtitle && <p className="section-subtitle mt-2">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
