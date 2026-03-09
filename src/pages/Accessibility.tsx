import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const Accessibility = () => {
  const { t } = useLanguage();

  return (
    <PageLayout breadcrumbs={[{ label: t("topbar.accessibility") }]}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">{t("topbar.accessibility")}</h1>
          <div className="prose max-w-3xl text-muted-foreground space-y-6 mt-8">
            <p>{t("accessibility.intro")}</p>

            <h2 className="font-serif font-bold text-xl text-foreground">{t("accessibility.compliance.title")}</h2>
            <p>{t("accessibility.compliance.desc")}</p>

            <h2 className="font-serif font-bold text-xl text-foreground">{t("accessibility.content.title")}</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("accessibility.content.keyboard")}</li>
              <li>{t("accessibility.content.contrast")}</li>
              <li>{t("accessibility.content.alt")}</li>
              <li>{t("accessibility.content.headings")}</li>
            </ul>

            <h2 className="font-serif font-bold text-xl text-foreground">{t("accessibility.feedback.title")}</h2>
            <p>{t("accessibility.feedback.desc")}</p>
            <p>E-mail: sekretariat@spzoz.krasnik.pl</p>
            <p>Tel: 81 825 13 22</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Accessibility;
