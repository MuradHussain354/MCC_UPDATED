"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import ChannelCard from "@/components/ChannelCard";
import type { Channel } from "@/data/channels";

export default function ChannelGrid({ channels }: { channels: Channel[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-1 md:grid-cols-3 gap-7"
    >
      {channels.map((channel) => (
        <ChannelCard key={channel.slug} channel={channel} />
      ))}
    </motion.div>
  );
}
