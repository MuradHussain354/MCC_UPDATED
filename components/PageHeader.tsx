"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function PageHeader({
  eyebrow,
  title,
  description,
  uppercaseDescription = false,
  icon,
  bgImage,
  fadeBottom = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  uppercaseDescription?: boolean;
  icon?: React.ReactNode;
  /** Optional full-bleed background photo for the header band. */
  bgImage?: string;
  /** Adds a gradient fade to black at the bottom edge, for a section
   *  directly below that has no background image of its own. */
  fadeBottom?: boolean;
}) {
  return (
    <section
  className={`relative bg-mcc-black overflow-hidden ${
    bgImage
      ? "min-h-[70vh] sm:min-h-[75vh] flex items-center"
      : "py-24 sm:py-32"
  }`}
>
      {bgImage ? (
        <>
          {/* object-contain (not object-cover) so the full photo always
              shows, uncropped — any leftover space is just plain black,
              which already matches the section background. */}
          <Image
            src={bgImage}
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-mcc-black/20" />
          {fadeBottom && (
            <div className="absolute inset-x-0 bottom-0 h-10 sm:h-16 bg-gradient-to-t from-mcc-black to-transparent" />
          )}
        </>
      ) : (
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-gradient-to-b from-mcc-red/[0.08] to-transparent" />
        </div>
      )}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center"
      >
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="font-display text-5xl sm:text-6xl tracking-wide text-mcc-paper inline-flex items-center gap-4 relative pb-4">
          {icon}
          {title}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-20 bg-mcc-red" />
        </h1>
        {description && (
          <p
            className={`mt-6 text-mcc-paper/65 max-w-2xl mx-auto ${
              uppercaseDescription ? "uppercase tracking-wide" : ""
            }`}
          >
            {description}
          </p>
        )}
      </motion.div>
    </section>
  );
}