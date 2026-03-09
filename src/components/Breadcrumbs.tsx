import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="bg-muted/50 border-b">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center gap-1 text-sm flex-wrap">
          <li>
            <Link to="/" className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              {t("nav.home")}
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
              {item.href ? (
                <Link to={item.href} className="text-muted-foreground hover:text-secondary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-semibold">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
