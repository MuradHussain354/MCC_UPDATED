import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TheaterGrid from "@/components/TheaterGrid";
import { theaters } from "@/data/theaters";

export const metadata: Metadata = {
  title: "Our Theaters",
  description:
    "MCC Group operates exclusive theaters across Sri Lanka including Eros Cinema, Cine-City, Cinemax, and Vijaya.",
};

export default function TheatersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Where We Screen"
        title="Our Theaters"
        description="Exclusive theaters bringing quality cinema to audiences across Sri Lanka."
        bgImage="/images/theaters-header-bg.jpg"
      />
      <section className="bg-mcc-black py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <TheaterGrid theaters={theaters} />
        </div>
      </section>
    </>
  );
}
