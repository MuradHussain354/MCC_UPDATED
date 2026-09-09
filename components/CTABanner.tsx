"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function CTABanner() {
  return (
    <section className="relative bg-mcc-red overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-4xl px-5 sm:px-8 py-20 sm:py-24 text-center"
      >
        <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-mcc-paper mb-6">
          Let&apos;s Bring Your Story to the Big Screen
        </h2>
        <p className="text-mcc-paper/85 max-w-xl mx-auto mb-10">
          Whether you&apos;re a filmmaker, broadcaster, or brand, our team is
          ready to talk distribution, exhibition, and cinema advertising.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-sm bg-mcc-black px-8 py-3.5 text-sm font-semibold tracking-wide text-mcc-paper hover:bg-mcc-steel transition-colors"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
}
