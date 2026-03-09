import { Phone, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const TopBar = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="topbar-bg topbar-fg text-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <a href="https://bip.spzoz.krasnik.pl" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">{t("topbar.bip")}</a>
          <span className="opacity-40">|</span>
          <Link to="/gdpr" className="hover:underline">{t("topbar.gdpr")}</Link>
          <span className="opacity-40">|</span>
          <Link to="/accessibility" className="hover:underline">{t("topbar.accessibility")}</Link>
          <span className="opacity-40">|</span>
          <Link to="/contact" className="hover:underline">{t("topbar.contact")}</Link>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            <span>81 825 13 22</span>
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-3.5 h-3.5" />
            <span>sekretariat@spzoz.krasnik.pl</span>
          </span>
          <button
            onClick={() => setLang(lang === "pl" ? "en" : "pl")}
            className="flex items-center gap-1 px-2 py-0.5 rounded border border-current/20 hover:bg-primary-foreground/10 transition-colors"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="font-semibold">{lang === "pl" ? "EN" : "PL"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
