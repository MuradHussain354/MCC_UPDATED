"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import TheaterCard from "@/components/TheaterCard";
import type { Theater } from "@/data/theaters";

export default function TheaterGrid({ theaters }: { theaters: Theater[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-1 md:grid-cols-2 gap-7"
    >
      {theaters.map((theater) => (
        <TheaterCard key={theater.slug} theater={theater} />
      ))}
    </motion.div>
  );
}
