// app/layout.jsx
import "./globals.css";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

// If your Navbar uses any client-only hooks (auth, window, etc),
// load it on the client only (no SSR) to avoid build-time crashes.
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Euro Auto House",
  description: "European auto repair specialists in Sanford, FL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Client-only navbar */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
