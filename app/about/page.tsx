import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import AnimatedSection from "@/components/AnimatedSection";
import { team } from "@/data/team";

// Names + roles only — full contact details live on the Contact page.
const LEADERSHIP = team.map(({ name, role }) => ({ name, role }));

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MCC Group (Pvt) Ltd is a leading entertainment company in Sri Lanka, owned by P. Arooran, operating 55 exclusive theaters since forming in 2018.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About Us"
        description="From a single reel to a nationwide network of exclusive theaters."
      />

      <section className="bg-mcc-black pt-2 sm:pt-4 pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <AnimatedSection>
            <p className="eyebrow mb-4">Who We Are</p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wide text-mcc-paper mb-6">
              25+ Years Behind the Reel
            </h2>
            <div className="space-y-5 text-mcc-paper/70 leading-relaxed text-left sm:text-center">
              <p>
                MCC Group (Pvt) Ltd is a leading entertainment company in Sri
                Lanka, owned by P. Arooran, a pioneer with over 25 years of
                experience in film exhibition and distribution. What started
                as Manons Cine Combine grew into Sri Lanka&apos;s top film
                distribution company.
              </p>
              <p>
                We import and distribute films, bringing both local and
                international titles to audiences across the country. In
                2018, MCC Group was formed to meet the growing entertainment
                needs of Sri Lanka.
              </p>
              <p>
                Today, we operate 55 exclusive theaters, supply movies to
                major broadcasters and digital platforms, and were the first
                in Sri Lanka to introduce SDC (Sony Digital Cinema) in 2021.
                We create tailored solutions that fit your needs, budget, and
                goals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-mcc-steel py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Milestones</p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wide text-mcc-paper">
              Our Journey
            </h2>
          </AnimatedSection>
          <Timeline />
        </div>
      </section>

      <section className="relative bg-mcc-black py-20 sm:py-24 overflow-hidden">
        <Image
          src="/images/leadership-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        {/* Dark red faded gradient, matching the footer's treatment */}
        <div className="absolute inset-0 bg-gradient-to-b from-mcc-black via-mcc-black/60 to-mcc-red-deep/40" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <AnimatedSection>
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wide text-mcc-paper mb-6">
              P. Arooran, Founder
            </h2>
            <p className="text-mcc-paper/65 leading-relaxed max-w-2xl mx-auto">
              A pioneer with over 25 years of experience in film exhibition
              and distribution, P. Arooran&apos;s work took MCC Group from its
              origins as Manons Cine Combine to becoming Sri Lanka&apos;s top
              film distribution company.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {LEADERSHIP.map((leader) => (
              <div key={leader.name} className="ticket-card px-5 py-6">
                <p className="font-display text-lg tracking-wide text-mcc-paper">
                  {leader.name}
                </p>
                <p className="eyebrow mt-1">{leader.role}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-mcc-steel py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <AnimatedSection>
            <p className="eyebrow mb-4">Beyond the Screen</p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wide text-mcc-paper mb-6">
              A Growing Digital Presence
            </h2>
            <p className="text-mcc-paper/65 leading-relaxed max-w-2xl mx-auto mb-8">
              MCC Group also has a strong digital presence with multiple
              YouTube channels targeting both Sinhala and Tamil audiences
              across age groups.
            </p>
            <Link
              href="/youtube-channels"
              className="inline-flex items-center justify-center rounded-sm bg-mcc-red px-8 py-3.5 text-sm font-semibold tracking-wide text-mcc-paper hover:bg-mcc-red-deep transition-colors"
            >
              Explore Our YouTube Channels
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
