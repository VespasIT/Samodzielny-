import { Phone, Building2, Stethoscope, FileText, Briefcase, Download, Clock, Mail, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const tiles = [
  { key: "tiles.registration", icon: Phone, href: "/patients/registration" },
  { key: "tiles.departments", icon: Building2, href: "/units" },
  { key: "tiles.clinics", icon: Stethoscope, href: "/units/clinics" },
  { key: "tiles.procurement", icon: FileText, href: "/procurement" },
  { key: "tiles.careers", icon: Briefcase, href: "/careers" },
  { key: "tiles.documents", icon: Download, href: "/patients/documents" },
  { key: "tiles.visits", icon: Clock, href: "/patients/visits" },
  { key: "tiles.contact", icon: Mail, href: "/contact" },
  { key: "tiles.rights", icon: Shield, href: "/patients/rights" },
];

const QuickTiles = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {tiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <Link
                key={tile.key}
                to={tile.href}
                className="group flex flex-col items-center gap-3 p-6 bg-card rounded-lg shadow-sm border hover:shadow-md hover:border-secondary transition-all text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-secondary/15 transition-colors">
                  <Icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-secondary transition-colors">
                  {t(tile.key)}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickTiles;
