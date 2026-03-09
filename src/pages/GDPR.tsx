import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const GDPR = () => {
  const { t } = useLanguage();

  return (
    <PageLayout breadcrumbs={[{ label: t("topbar.gdpr") }]}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">{t("topbar.gdpr")}</h1>
          <div className="prose max-w-3xl text-muted-foreground space-y-6 mt-8">
            <h2 className="font-serif font-bold text-xl text-foreground">{t("gdpr.admin.title")}</h2>
            <p>{t("gdpr.admin.desc")}</p>

            <h2 className="font-serif font-bold text-xl text-foreground">{t("gdpr.purpose.title")}</h2>
            <p>{t("gdpr.purpose.desc")}</p>

            <h2 className="font-serif font-bold text-xl text-foreground">{t("gdpr.rights.title")}</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("gdpr.rights.access")}</li>
              <li>{t("gdpr.rights.rectification")}</li>
              <li>{t("gdpr.rights.erasure")}</li>
              <li>{t("gdpr.rights.restriction")}</li>
              <li>{t("gdpr.rights.portability")}</li>
              <li>{t("gdpr.rights.objection")}</li>
            </ul>

            <h2 className="font-serif font-bold text-xl text-foreground">{t("gdpr.contact.title")}</h2>
            <p>{t("gdpr.contact.desc")}</p>
            <p>E-mail: iod@spzoz.krasnik.pl</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GDPR;
