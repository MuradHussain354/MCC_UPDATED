export interface Channel {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Real YouTube channel URL. */
  youtube: string;
  facebook: string;
  instagram: string;
  /** Optional square channel logo — recommended 512x512px. Path under /public/images/channels/ */
  logo?: string;
  /** Optional TikTok URL — only provided for some channels. */
  tiktok?: string;
}

// Real MCC Group YouTube channels only — no invented subscriber/view counts.
// Display order: MCC Tamil, MCC Prime, Lanka Cinema (per client request).
export const channels: Channel[] = [
  {
    slug: "mcc-tamil",
    name: "MCC Tamil",
    tagline: "Tamil Cinema • Movies • Entertainment",
    description:
      "Discover Tamil movies, classic cinema, entertainment and a growing collection of Tamil-language content.",
    youtube: "https://youtube.com/@mccthamil?si=qTet8xq6sxhsRDic",
    facebook: "https://www.facebook.com/MCCTAMILOFFICIAL/",
    instagram: "https://www.instagram.com/mcc_tamil_official/",
    logo: "/images/channels/mcc-tamil.png",
  },
  {
    slug: "mcc-prime",
    name: "MCC Prime",
    tagline: "Entertainment • Cinema • Original Content",
    description:
      "Your destination for premium entertainment, cinematic content and selected productions from MCC.",
    youtube: "https://youtube.com/@mccprime?si=JYj4iJu41btB8gdl",
    facebook: "https://www.facebook.com/mccprime.lk/",
    instagram: "https://www.instagram.com/mcc_prime/",
    logo: "/images/channels/mcc-prime.png",
    tiktok: "https://www.tiktok.com/@mcc.prime",
  },
  {
    slug: "lanka-cinema",
    name: "Lanka Cinema",
    tagline: "Sinhala Cinema • Movies • Entertainment",
    description:
      "Explore Sri Lankan cinema, classic films, movie content and entertainment from Lanka Cinema.",
    youtube: "https://youtube.com/@lanka_cinema?si=LfEbwFpMF6jQm1rr",
    facebook: "https://www.facebook.com/profile.php?id=61563329681548",
    instagram: "https://www.instagram.com/lanka.cinema_/",
    logo: "/images/channels/lanka-cinema.png",
    tiktok: "https://www.tiktok.com/@lankacinema",
  },
];
