"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col justify-center bg-mcc-black">
      {/* Full-bleed video background with poster fallback and a dark
          overlay so text stays readable over it. Video is muted/looped —
          background videos can only autoplay muted in the browser. */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          poster="/images/hero-bg-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-mcc-black/80 via-mcc-black/70 to-mcc-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-mcc-red/10 via-transparent to-transparent" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 flex-1 flex flex-col justify-center text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow mb-6">
          Est. as Manons Cine Combine &mdash; MCC Group since 2018
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-mcc-paper text-glow"
        >
          Sri Lanka&apos;s Leading Entertainment
          <br />
          &amp; Film Distribution Company
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-mcc-paper/70"
        >
          Over 25 years of experience in film exhibition and distribution,
          pioneering cinema technology across Sri Lanka since our founder
          first opened the reels.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/theaters"
            className="inline-flex items-center justify-center rounded-sm bg-mcc-red px-8 py-3.5 text-sm font-semibold tracking-wide text-mcc-paper hover:bg-mcc-red-deep transition-colors"
          >
            Explore Our Theaters
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm border border-mcc-paper/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-mcc-paper hover:border-mcc-paper hover:bg-mcc-paper/5 transition-colors"
          >
            Advertise With Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
