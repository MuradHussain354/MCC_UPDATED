import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Content syndication, film distribution, production and line production, and cinema advertising from MCC Group (Pvt) Ltd.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Our Services"
        description="Four divisions, one goal: bringing quality entertainment to Sri Lankan audiences."
        uppercaseDescription
      />

      {/* Services hero video — fades gently from the black header into the
          video, and gently back to black at the bottom before the cards. */}
      <section className="relative bg-mcc-black">
        <div className="relative w-full aspect-video sm:aspect-[21/9]">
          <video
            className="h-full w-full object-cover"
            poster="/images/services-hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/services-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 top-0 h-10 sm:h-14 bg-gradient-to-b from-mcc-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-gradient-to-t from-mcc-black/70 to-transparent" />
        </div>
      </section>

      {/* Text-only service cards — no photos, per the latest layout. */}
      <section className="bg-mcc-black py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={service.slug} id={service.slug} className="scroll-mt-24">
                <AnimatedSection className="ticket-card p-8 h-full">
                  <p className="eyebrow mb-4">
                    {String(i + 1).padStart(2, "0")} / {services.length.toString().padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-2xl tracking-wide text-mcc-paper mb-4">
                    {service.title}
                  </h2>
                  <p className="text-sm text-mcc-paper/65 leading-relaxed">
                    {service.description}
                  </p>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-mcc-red overflow-hidden">
        <AnimatedSection className="mx-auto max-w-3xl px-5 sm:px-8 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide text-mcc-paper mb-6">
            Looking to Partner With Us?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-mcc-black px-8 py-3.5 text-sm font-semibold tracking-wide text-mcc-paper hover:bg-mcc-steel transition-colors"
          >
            Contact Us
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}