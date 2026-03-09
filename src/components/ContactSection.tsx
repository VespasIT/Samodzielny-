import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">{t("contact.title")}</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t("contact.address")}</p>
                <p className="text-muted-foreground text-sm">ul. Chopina 13<br />23-200 Kraśnik</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t("contact.mainPhone")}</p>
                <p className="text-muted-foreground text-sm">81 825 13 22</p>
                <p className="font-semibold text-foreground mt-2">{t("contact.registration")}</p>
                <p className="text-muted-foreground text-sm">81 825 13 22 wew. 214</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t("contact.email")}</p>
                <p className="text-muted-foreground text-sm">sekretariat@spzoz.krasnik.pl</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t("contact.hours")}</p>
                <p className="text-muted-foreground text-sm">
                  {t("nav.patients.registration")}: 7:00 – 18:00
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border h-[320px]">
            <iframe
              title="SPZOZ Kraśnik - mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.123!2d22.2256!3d50.9245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722e6e9e2a3f3b7%3A0x1234567890!2sSPZOZ+Kra%C5%9Bnik!5e0!3m2!1spl!2spl!4v1234567890"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
