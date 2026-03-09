import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">SPZOZ w Kraśniku</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Samodzielny Publiczny Zakład Opieki Zdrowotnej w Kraśniku
            </p>
            <p className="text-sm text-primary-foreground/70 mt-2">
              ul. Chopina 13, 23-200 Kraśnik
            </p>
            <p className="text-sm text-primary-foreground/70">
              NIP: 715-17-57-497
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/25 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/25 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/25 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://bip.spzoz.krasnik.pl" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("topbar.bip")}</a></li>
              <li><Link to="/gdpr" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("topbar.gdpr")}</Link></li>
              <li><Link to="/accessibility" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("topbar.accessibility")}</Link></li>
              <li><Link to="/procurement" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("nav.procurement")}</Link></li>
              <li><Link to="/careers" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("nav.careers")}</Link></li>
            </ul>
          </div>

          {/* For Patients */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">{t("footer.forPatients")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/patients/registration" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("nav.patients.registration")}</Link></li>
              <li><Link to="/patients/rights" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("nav.patients.rights")}</Link></li>
              <li><Link to="/patients/visits" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("nav.patients.visits")}</Link></li>
              <li><Link to="/patients/documents" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("nav.patients.documents")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">{t("contact.title")}</h3>
            <div className="text-sm text-primary-foreground/70 space-y-1">
              <p>Tel: 81 825 13 22</p>
              <p>E-mail: sekretariat@spzoz.krasnik.pl</p>
              <p className="mt-3"><Link to="/gdpr" className="hover:text-primary-foreground transition-colors">{t("footer.privacy")}</Link></p>
              <p><Link to="/gdpr" className="hover:text-primary-foreground transition-colors">{t("footer.cookies")}</Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} SPZOZ w Kraśniku. {t("footer.rights")}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
