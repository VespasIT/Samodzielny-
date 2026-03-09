import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

interface NavItem {
  key: string;
  href: string;
  children?: { key: string; href: string }[];
}

const navItems: NavItem[] = [
  { key: "nav.home", href: "/" },
  {
    key: "nav.about", href: "/about",
    children: [
      { key: "nav.about.mission", href: "/about" },
      { key: "nav.about.management", href: "/about" },
      { key: "nav.about.structure", href: "/about" },
    ],
  },
  {
    key: "nav.patients", href: "/patients",
    children: [
      { key: "nav.patients.registration", href: "/patients/registration" },
      { key: "nav.patients.admission", href: "/patients/admission" },
      { key: "nav.patients.rights", href: "/patients/rights" },
      { key: "nav.patients.visits", href: "/patients/visits" },
      { key: "nav.patients.documents", href: "/patients/documents" },
    ],
  },
  {
    key: "nav.units", href: "/units",
    children: [
      { key: "nav.units.departments", href: "/units" },
      { key: "nav.units.clinics", href: "/units/clinics" },
      { key: "nav.units.diagnostics", href: "/units/diagnostics" },
    ],
  },
  { key: "nav.news", href: "/news" },
  { key: "nav.procurement", href: "/procurement" },
  { key: "nav.careers", href: "/careers" },
  { key: "nav.contact", href: "/contact" },
];

const Header = () => {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo-nowe.png" alt="SPZOZ Logo" className="w-12 h-12 rounded-full object-contain p-1" />
            <div className="hidden sm:block">
              <p className="font-serif font-bold text-primary text-sm leading-tight">SPZOZ w Kraśniku</p>
              <p className="text-xs text-muted-foreground leading-tight">Samodzielny Publiczny Zakład Opieki Zdrowotnej</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary transition-colors rounded-md"
                >
                  {t(item.key)}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.children && openDropdown === item.key && (
                  <div className="absolute top-full left-0 bg-card shadow-lg rounded-md border py-2 min-w-[220px] animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.key}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                      >
                        {t(child.key)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-md hover:bg-muted transition-colors" aria-label="Search">
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t pt-3 animate-fade-in">
            {navItems.map((item) => (
              <div key={item.key}>
                <Link
                  to={item.href}
                  className="block px-3 py-2.5 text-sm font-semibold text-foreground hover:text-secondary"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {t(item.key)}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.key}
                    to={child.href}
                    className="block pl-8 py-2 text-sm text-muted-foreground hover:text-secondary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(child.key)}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
