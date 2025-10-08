// components/InstagramEmbed.jsx
export default function InstagramEmbed({ src, title = "Instagram feed" }) {
  if (!src) return null;

  return (
    <div className="relative w-full" style={{ paddingTop: "130%" }}>
      <iframe
        title={title}
        src={src}
        className="absolute inset-0 h-full w-full rounded-2xl border"
        scrolling="no"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
