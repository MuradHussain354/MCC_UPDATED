import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon } from "@/components/SocialIcons";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { team, mainContact } from "@/data/team";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MCC Group (Pvt) Ltd — No. 11, Clifford Place, Bambalapitiya, Colombo 04.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have a project, partnership, or booking inquiry? We'd love to hear from you."
      />

      <section className="bg-mcc-black py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection variant="left">
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection variant="right" className="space-y-6">
            <div className="ticket-card p-7 sm:p-8 space-y-5">
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-mcc-red mt-0.5 shrink-0" />
                <div>
                  <p className="eyebrow mb-1">Phone</p>
                  <a
                    href={`tel:${mainContact.phone.replace(/\s+/g, "")}`}
                    className="text-mcc-paper hover:text-mcc-red transition-colors"
                  >
                    {mainContact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-mcc-red mt-0.5 shrink-0" />
                <div>
                  <p className="eyebrow mb-1">Email</p>
                  <a
                    href={`mailto:${mainContact.email}`}
                    className="text-mcc-paper hover:text-mcc-red transition-colors"
                  >
                    {mainContact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-mcc-red mt-0.5 shrink-0" />
                <div>
                  <p className="eyebrow mb-1">Address</p>
                  <p className="text-mcc-paper">{mainContact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FacebookIcon size={18} className="text-mcc-red mt-0.5 shrink-0" />
                <div>
                  <p className="eyebrow mb-1">Facebook</p>
                  <a
                    href={mainContact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mcc-paper hover:text-mcc-red transition-colors"
                  >
                    MCC Group on Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="ticket-card overflow-hidden aspect-[16/10]">
              <iframe
                title="MCC Group location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  mainContact.address
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-mcc-steel py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Direct Lines</p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wide text-mcc-paper">
              Meet the Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <AnimatedSection
                key={member.email}
                className="ticket-card px-7 py-6 text-center"
              >
                {member.image ? (
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mx-auto mb-4 border border-mcc-red/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-16 w-16 rounded-full bg-mcc-red/10 border border-mcc-red/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl text-mcc-red">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="font-display text-xl tracking-wide text-mcc-paper mb-0.5">
                  {member.name}
                </h3>
                <p className="eyebrow mb-3">{member.role}</p>
                <div className="space-y-1 text-sm">
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                    className="block text-mcc-paper/70 hover:text-mcc-red transition-colors"
                  >
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="block text-mcc-paper/70 hover:text-mcc-red transition-colors break-all"
                  >
                    {member.email}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
