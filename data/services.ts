import type { LucideIcon } from "lucide-react";
import { Radio, Film, Clapperboard, MonitorPlay } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

// Real MCC Group services only — do not add invented divisions.
export const services: Service[] = [
  {
    slug: "content-syndication",
    title: "Content Syndication",
    description:
      "We distribute films and entertainment content to terrestrial broadcasters and digital platforms, helping content reach the widest audience in Sri Lanka.",
    icon: Radio,
    image: "/images/services/content-syndication.jpg",
  },
  {
    slug: "film-distribution",
    title: "Film Distribution",
    description:
      "We import and distribute films for theatrical and non-theatrical release through our network of 55 exclusive theaters, ensuring strong market reach and performance.",
    icon: Film,
    image: "/images/services/film-distribution.jpg",
  },
  {
    slug: "production-line-production",
    title: "Production / Line Production",
    description:
      "End-to-end production support for films, commercials, and media projects. From locations and crew to equipment, logistics, and on-ground coordination, we ensure every production runs smoothly, efficiently, and on schedule. We support film and content production, including line production services, and create tele-dramas with strong market insight and industry expertise.",
    icon: Clapperboard,
    image: "/images/services/production-line.jpg",
  },
  {
    slug: "cinema-advertising",
    title: "Cinema Advertising",
    description:
      "We offer impactful on-screen and in-theater advertising solutions. As the first to introduce SDC technology in Sri Lanka, we deliver premium brand visibility.",
    icon: MonitorPlay,
    image: "/images/services/cinema-advertising.jpg",
  },
];
