import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon } from "@/components/SocialIcons";
import Logo from "@/components/Logo";
import { mainContact } from "@/data/team";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-mcc-black overflow-hidden">
      {/* MCC office building photo, dimmed with a dark overlay so white
          footer text stays readable against it. */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/footer-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mcc-black via-mcc-black/90 to-mcc-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-mcc-red-deep/20 via-transparent to-transparent" />
      </div>

      <div className="relative border-t-2 border-mcc-red" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Logo size={36} />
            <span className="font-display tracking-wide text-lg text-mcc-paper font-bold">
              MCC GROUP (PVT) LTD
            </span>
          </div>
          <p className="text-sm font-medium text-mcc-paper/70 leading-relaxed max-w-xs">
            Sri Lanka&apos;s leading film distribution and entertainment company,
            operating exclusive theaters and delivering premium cinematic
            experiences.
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-4 font-bold">Contact</h3>
          <ul className="space-y-3 text-sm font-semibold text-mcc-paper/80">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-mcc-red shrink-0" />
              <a href={`tel:${mainContact.phone.replace(/\s+/g, "")}`} className="hover:text-mcc-paper">
                {mainContact.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-mcc-red shrink-0" />
              <a href={`mailto:${mainContact.email}`} className="hover:text-mcc-paper">
                {mainContact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-mcc-red shrink-0" />
              <span>{mainContact.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4 font-bold">Connect</h3>
          <a
            href={mainContact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-mcc-line px-4 py-2 text-sm font-semibold text-mcc-paper/90 hover:border-mcc-red hover:text-mcc-red transition-colors"
          >
            <FacebookIcon size={16} />
            Facebook
          </a>
        </div>
      </div>

      <div className="relative border-t border-mcc-line">
        <p className="mx-auto max-w-7xl px-5 sm:px-8 py-6 text-xs font-semibold text-mcc-paper/60 text-center">
          &copy; {year} MCC Group (Pvt) Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
