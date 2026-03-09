import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Stethoscope, Microscope, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const departments = [
  { nameKey: "units.internal", phoneKey: "81 825 13 22 wew. 301", location: "Budynek A, piętro II" },
  { nameKey: "units.surgery", phoneKey: "81 825 13 22 wew. 302", location: "Budynek A, piętro I" },
  { nameKey: "units.pediatrics", phoneKey: "81 825 13 22 wew. 303", location: "Budynek B, parter" },
  { nameKey: "units.gynecology", phoneKey: "81 825 13 22 wew. 304", location: "Budynek B, piętro I" },
  { nameKey: "units.orthopedics", phoneKey: "81 825 13 22 wew. 305", location: "Budynek A, piętro III" },
  { nameKey: "units.neurology", phoneKey: "81 825 13 22 wew. 306", location: "Budynek C, parter" },
];

const Units = () => {
  const { t } = useLanguage();

  return (
    <PageLayout breadcrumbs={[{ label: t("nav.units") }]}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">{t("nav.units")}</h1>

          <div className="flex gap-4 mb-8 flex-wrap">
            {[
              { icon: Building2, label: t("nav.units.departments"), href: "/units" },
              { icon: Stethoscope, label: t("nav.units.clinics"), href: "/units/clinics" },
              { icon: Microscope, label: t("nav.units.diagnostics"), href: "/units/diagnostics" },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.label}
                  to={tab.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-card border text-sm font-semibold hover:border-secondary hover:text-secondary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </Link>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <div key={dept.nameKey} className="bg-card rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif font-bold text-lg mb-3 text-foreground">{t(dept.nameKey)}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    {dept.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    {dept.phoneKey}
                  </p>
                </div>
                <Link to="#" className="text-sm font-semibold text-secondary hover:underline mt-4 inline-block">
                  {t("units.details")} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Units;
