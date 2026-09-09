"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Ticket, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { fadeUp } from "@/lib/animations";
import type { Theater } from "@/data/theaters";

export default function TheaterCard({ theater }: { theater: Theater }) {
  return (
    <motion.div
      variants={fadeUp}
      className="ticket-card overflow-hidden hover:shadow-[0_0_0_1px_rgba(200,16,46,0.5)] hover:scale-[1.015] transition-all duration-300"
    >
      {theater.image && (
        <div className="relative aspect-[8/5] w-full">
          <Image
            src={theater.image}
            alt={theater.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="p-7 sm:p-8">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-mcc-paper">
            {theater.name}
          </h3>
          <p className="flex items-center gap-1.5 text-xs text-mcc-paper/50 mt-1">
            <MapPin size={12} className="text-mcc-red" />
            {theater.location}
          </p>
        </div>
      </div>

      <p className="text-sm text-mcc-paper/65 leading-relaxed mb-6 ticket-tear pt-5">
        {theater.description}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        {theater.booking && (
          <a
            href={theater.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-mcc-red px-5 py-2.5 text-xs font-semibold tracking-wide text-mcc-paper hover:bg-mcc-red-deep transition-colors"
          >
            <Ticket size={14} />
            Book Tickets
          </a>
        )}
        <a
          href={theater.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${theater.name} on Facebook`}
          className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-mcc-line text-mcc-paper/70 hover:border-mcc-red hover:text-mcc-red transition-colors"
        >
          <FacebookIcon size={16} />
        </a>
        {theater.instagram && (
          <a
            href={theater.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${theater.name} on Instagram`}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-mcc-line text-mcc-paper/70 hover:border-mcc-red hover:text-mcc-red transition-colors"
          >
            <InstagramIcon size={16} />
          </a>
        )}
      </div>
      </div>
    </motion.div>
  );
}
