import PageLayout from "@/components/PageLayout";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <PageLayout breadcrumbs={[{ label: t("contact.title") }]}>
      <ContactSection />
    </PageLayout>
  );
};

export default Contact;
