import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building, Users, Target, History } from "lucide-react";
import hospitalEntrance from "@/assets/hospital-entrance.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <PageLayout breadcrumbs={[{ label: t("nav.about") }]}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">{t("nav.about")}</h1>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <img src={hospitalEntrance} alt="SPZOZ Kraśnik" className="rounded-lg shadow-md w-full h-[300px] object-cover" />
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t("about.intro")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("about.description")}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Target, titleKey: "about.mission.title", descKey: "about.mission.desc" },
              { icon: History, titleKey: "about.history.title", descKey: "about.history.desc" },
              { icon: Users, titleKey: "about.management.title", descKey: "about.management.desc" },
              { icon: Building, titleKey: "about.structure.title", descKey: "about.structure.desc" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.titleKey} className="bg-card rounded-lg border p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">{t(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
