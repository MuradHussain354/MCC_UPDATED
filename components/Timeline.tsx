"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface Milestone {
  tag: string;
  title: string;
  description: string;
}

// Only real, verified milestones — no invented dates or events.
const MILESTONES: Milestone[] = [
  {
    tag: "Origins",
    title: "Manons Cine Combine",
    description:
      "What would become MCC Group began as Manons Cine Combine, laying the foundation for a career in film exhibition and distribution.",
  },
  {
    tag: "Growth",
    title: "Sri Lanka's Top Distribution Company",
    description:
      "Steady growth over the years established the company as Sri Lanka's top film distribution company, importing and distributing local and international titles.",
  },
  {
    tag: "2018",
    title: "MCC Group Formed",
    description:
      "MCC Group (Pvt) Ltd was formed to meet the growing entertainment needs of Sri Lanka, bringing our theaters, distribution, and digital work under one group.",
  },
  {
    tag: "2021",
    title: "First to Introduce SDC in Sri Lanka",
    description:
      "MCC Group became the first in Sri Lanka to introduce SDC (Sony Digital Cinema), pioneering the technology for local audiences.",
  },
];

export default function Timeline() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative"
    >
      <div
        className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-mcc-line"
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
        {MILESTONES.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="relative">
            <div className="flex md:flex-col items-start md:items-start gap-4 md:gap-0">
              <span className="relative z-10 h-3 w-3 rounded-full bg-mcc-red mt-1.5 md:mt-0 md:mb-6 shrink-0" />
              <div>
                <p className="eyebrow mb-2">{m.tag}</p>
                <h3 className="font-display text-2xl tracking-wide text-mcc-paper mb-2">
                  {m.title}
                </h3>
                <p className="text-sm text-mcc-paper/60 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
