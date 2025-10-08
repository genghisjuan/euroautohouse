// components/InstagramGrid.jsx
export default function InstagramGrid({ items = [] }) {
  if (!items?.length) {
    return <div className="text-center opacity-80">No posts to show right now.</div>;
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      {items.map((it) => (
        <a
          key={it.id}
          href={it.href}
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-2xl"
          aria-label="Open Instagram post"
        >
          {/* using <img> avoids remote image domain config */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={it.src}
            alt={it.alt}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
          {it.type === "VIDEO" && (
            <div className="absolute right-2 top-2 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
              VIDEO
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
