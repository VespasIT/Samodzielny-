import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const jobsData = {
  pl: [
    { id: 1, title: "Pielęgniarka / Pielęgniarz – Oddział Wewnętrzny", deadline: "2026-04-01", location: "Oddział Chorób Wewnętrznych", type: "Pełny etat" },
    { id: 2, title: "Lekarz specjalista – Chirurgia Ogólna", deadline: "2026-03-31", location: "Oddział Chirurgii Ogólnej", type: "Pełny etat" },
    { id: 3, title: "Technik RTG", deadline: "2026-04-15", location: "Pracownia RTG", type: "Pełny etat" },
    { id: 4, title: "Rejestratorka medyczna", deadline: "2026-04-10", location: "Rejestracja główna", type: "Pełny etat" },
  ],
  en: [
    { id: 1, title: "Nurse – Internal Medicine Department", deadline: "2026-04-01", location: "Internal Medicine Ward", type: "Full-time" },
    { id: 2, title: "Specialist – General Surgery", deadline: "2026-03-31", location: "General Surgery Ward", type: "Full-time" },
    { id: 3, title: "X-ray Technician", deadline: "2026-04-15", location: "X-ray Laboratory", type: "Full-time" },
    { id: 4, title: "Medical Receptionist", deadline: "2026-04-10", location: "Main Registration", type: "Full-time" },
  ],
};

const Careers = () => {
  const { lang, t } = useLanguage();
  const jobs = jobsData[lang];

  return (
    <PageLayout breadcrumbs={[{ label: t("nav.careers") }]}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">{t("nav.careers")}</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">{t("careers.intro")}</p>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-card rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-secondary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.type}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{t("careers.deadline")}: {job.deadline}</span>
                    </div>
                  </div>
                  <button className="px-5 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-opacity shrink-0">
                    {t("careers.apply")}
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

export default Careers;
