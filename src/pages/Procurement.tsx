import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Calendar, ExternalLink } from "lucide-react";

const procurementData = {
  pl: [
    { id: 1, title: "Dostawa leków i materiałów medycznych", number: "ZP/01/2026", deadline: "2026-03-30", status: "active" },
    { id: 2, title: "Modernizacja instalacji elektrycznej", number: "ZP/02/2026", deadline: "2026-04-15", status: "active" },
    { id: 3, title: "Zakup sprzętu diagnostycznego", number: "ZP/15/2025", deadline: "2025-12-01", status: "archive" },
    { id: 4, title: "Usługi cateringowe dla pacjentów", number: "ZP/12/2025", deadline: "2025-10-15", status: "archive" },
  ],
  en: [
    { id: 1, title: "Supply of medicines and medical materials", number: "ZP/01/2026", deadline: "2026-03-30", status: "active" },
    { id: 2, title: "Electrical installation modernization", number: "ZP/02/2026", deadline: "2026-04-15", status: "active" },
    { id: 3, title: "Diagnostic equipment purchase", number: "ZP/15/2025", deadline: "2025-12-01", status: "archive" },
    { id: 4, title: "Patient catering services", number: "ZP/12/2025", deadline: "2025-10-15", status: "archive" },
  ],
};

const Procurement = () => {
  const { lang, t } = useLanguage();
  const items = procurementData[lang];

  return (
    <PageLayout breadcrumbs={[{ label: t("nav.procurement") }]}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">{t("nav.procurement")}</h1>

          <div className="flex gap-3 mb-8">
            <button className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-md">
              {t("procurement.active")}
            </button>
            <button className="px-4 py-2 bg-card border text-sm font-semibold rounded-md hover:border-secondary transition-colors">
              {t("procurement.archive")}
            </button>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-card rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        item.status === "active" ? "bg-secondary/15 text-secondary" : "bg-muted text-muted-foreground"
                      }`}>
                        {item.status === "active" ? t("procurement.statusActive") : t("procurement.statusArchive")}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.number}</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-foreground">{item.title}</h3>
                    <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {t("procurement.deadline")}: {item.deadline}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm font-semibold hover:border-secondary hover:text-secondary transition-colors">
                    <FileText className="w-4 h-4" />
                    {t("procurement.documents")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Procurement;
