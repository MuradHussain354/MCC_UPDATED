"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const VARIANTS = {
  up: fadeUp,
  left: slideInLeft,
  right: slideInRight,
};

export default function AnimatedSection({
  children,
  variant = "up",
  className,
}: {
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  return (
    <motion.div
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
