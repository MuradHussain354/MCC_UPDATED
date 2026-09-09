import type { Metadata } from "next";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://mccgroup.lk"),
  title: {
    default:
      "MCC Group (Pvt) Ltd — Sri Lanka's Leading Entertainment & Film Distribution Company",
    template: "%s | MCC Group (Pvt) Ltd",
  },
  description:
    "MCC Group (Pvt) Ltd is Sri Lanka's leading film distribution and entertainment company, operating 55 exclusive theaters and pioneering SDC (Sony Digital Cinema) since 2021.",
  openGraph: {
    title: "MCC Group (Pvt) Ltd",
    description:
      "Sri Lanka's leading film distribution and entertainment company, operating 55 exclusive theaters.",
    siteName: "MCC Group (Pvt) Ltd",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-mcc-black text-mcc-paper antialiased">
        <Preloader />
        <Navbar />
        <main className="pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
