import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, FileText, Shield, Clock, ClipboardList, Download } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  { icon: Phone, titleKey: "nav.patients.registration", descKey: "patients.registration.desc", href: "/patients/registration" },
  { icon: ClipboardList, titleKey: "nav.patients.admission", descKey: "patients.admission.desc", href: "/patients/admission" },
  { icon: Shield, titleKey: "nav.patients.rights", descKey: "patients.rights.desc", href: "/patients/rights" },
  { icon: Clock, titleKey: "nav.patients.visits", descKey: "patients.visits.desc", href: "/patients/visits" },
  { icon: Download, titleKey: "nav.patients.documents", descKey: "patients.documents.desc", href: "/patients/documents" },
];

const Patients = () => {
  const { t } = useLanguage();

  return (
    <PageLayout breadcrumbs={[{ label: t("nav.patients") }]}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">{t("nav.patients")}</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">{t("patients.intro")}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.titleKey}
                  to={item.href}
                  className="bg-card rounded-lg border p-6 shadow-sm hover:shadow-md hover:border-secondary transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/15 transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground group-hover:text-secondary transition-colors">{t(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Patients;
