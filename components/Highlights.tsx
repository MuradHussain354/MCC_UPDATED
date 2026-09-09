"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 55, suffix: "", label: "Exclusive Theaters" },
  { value: 2021, suffix: "", label: "Pioneer of SDC (Sony Digital Cinema)" },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [spring]);

  return <span ref={ref}>{display}</span>;
}

export default function Highlights() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <Image
        src="/images/highlights-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-mcc-black/80" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="bg-mcc-steel/80 backdrop-blur-sm border-l-4 border-mcc-red rounded-r-sm px-8 py-10 text-center sm:text-left"
          >
            <p className="font-display text-5xl sm:text-6xl text-mcc-paper">
              <Counter value={stat.value} />
              {stat.suffix}
            </p>
            <p className="mt-3 text-sm text-mcc-paper/60 tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
