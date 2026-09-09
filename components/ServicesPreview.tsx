"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function ServicesPreview() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <Image
        src="/images/services-preview-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-mcc-black/85" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl mb-14"
        >
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-mcc-paper">
            Our Services
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={fadeUp}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group block h-full ticket-card !bg-mcc-steel/75 backdrop-blur-sm p-7 hover:shadow-[0_0_0_1px_rgba(200,16,46,0.5)] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-mcc-red/10 flex items-center justify-center mb-6 group-hover:bg-mcc-red/20 transition-colors">
                    <Icon size={22} className="text-mcc-red" />
                  </div>
                  <h3 className="font-display text-xl tracking-wide text-mcc-paper mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-mcc-paper/60 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-mcc-red hover:text-mcc-paper transition-colors"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
