import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CookieBanner = () => {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-card border-t shadow-lg p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {t("cookies.message")}
        </p>
        <button
          onClick={accept}
          className="px-6 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-opacity shrink-0"
        >
          {t("cookies.accept")}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
