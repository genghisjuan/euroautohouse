// app/not-found.jsx
export const dynamic = "force-dynamic";
export const revalidate = 0;

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-tight py-24 text-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-3">
        Page not found
      </h1>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
    </section>
  );
}
