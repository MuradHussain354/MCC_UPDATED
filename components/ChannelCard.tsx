"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, YoutubeIcon, TikTokIcon } from "@/components/SocialIcons";
import { fadeUp } from "@/lib/animations";
import type { Channel } from "@/data/channels";

export default function ChannelCard({ channel }: { channel: Channel }) {
  return (
    <motion.div
      variants={fadeUp}
      className="ticket-card p-7 sm:p-8 hover:shadow-[0_0_0_1px_rgba(200,16,46,0.5)] hover:scale-[1.015] transition-all duration-300"
    >
      {channel.logo ? (
        <div className="relative h-14 w-14 rounded-full overflow-hidden mb-6 border border-mcc-line">
          <Image src={channel.logo} alt={`${channel.name} logo`} fill sizes="56px" className="object-cover" />
        </div>
      ) : (
        <div className="h-14 w-14 rounded-full bg-mcc-red flex items-center justify-center mb-6">
          <YoutubeIcon size={22} className="text-mcc-paper" />
        </div>
      )}

      <h3 className="font-display text-2xl tracking-wide text-mcc-paper mb-1">
        {channel.name}
      </h3>
      <p className="eyebrow mb-4">{channel.tagline}</p>
      <p className="text-sm text-mcc-paper/65 leading-relaxed mb-7 ticket-tear pt-5">
        {channel.description}
      </p>

      <a
        href={channel.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 whitespace-nowrap bg-mcc-black border border-mcc-line rounded-sm px-5 py-3 text-xs font-bold tracking-widest2 text-mcc-red hover:border-mcc-red transition-colors uppercase mb-5"
      >
        <YoutubeIcon size={16} />
        Visit Channel
      </a>

      <div className="flex items-center gap-3">
        <a
          href={channel.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${channel.name} on Facebook`}
          className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-mcc-line text-mcc-paper/70 hover:border-mcc-red hover:text-mcc-red transition-colors"
        >
          <FacebookIcon size={14} />
        </a>
        <a
          href={channel.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${channel.name} on Instagram`}
          className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-mcc-line text-mcc-paper/70 hover:border-mcc-red hover:text-mcc-red transition-colors"
        >
          <InstagramIcon size={14} />
        </a>
        {channel.tiktok && (
          <a
            href={channel.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${channel.name} on TikTok`}
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-mcc-line text-mcc-paper/70 hover:border-mcc-red hover:text-mcc-red transition-colors"
          >
            <TikTokIcon size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
