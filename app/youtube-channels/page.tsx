import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ChannelGrid from "@/components/ChannelGrid";
import { YoutubeIcon } from "@/components/SocialIcons";
import { channels } from "@/data/channels";

export const metadata: Metadata = {
  title: "YouTube Channels",
  description:
    "Discover cinema, entertainment and original content across MCC Group's official YouTube channels: Lanka Cinema, MCC Prime, and MCC Tamil.",
};

export default function YoutubeChannelsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Digital Network"
        title="YouTube Channels"
        description="Discover cinema, entertainment and original content across our official YouTube channels."
        icon={<YoutubeIcon size={44} className="text-mcc-red" />}
        bgImage="/images/youtube-header-bg.jpg"
        fadeBottom
      />
      {/* No second background image here on purpose — the hero photo
          above fades straight into this plain dark section instead of
          repeating the same collage image again. */}
      <section className="bg-mcc-black py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ChannelGrid channels={channels} />
        </div>
      </section>
    </>
  );
}
