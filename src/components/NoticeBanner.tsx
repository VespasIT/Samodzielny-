import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NoticeBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-destructive/10 border-b-2 border-destructive/30">
      <div className="container mx-auto px-4 py-3 flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
        <p className="text-sm font-semibold text-destructive">
          {t("notice.visiting")}
        </p>
      </div>
    </div>
  );
};

export default NoticeBanner;
