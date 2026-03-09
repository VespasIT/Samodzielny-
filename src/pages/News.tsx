import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import hospitalRoom from "@/assets/hospital-room.jpg";
import hospitalEntrance from "@/assets/hospital-entrance.jpg";

const newsData = {
  pl: [
    { id: 1, title: "Modernizacja Bloku Operacyjnego zakończona", date: "2026-03-05", excerpt: "Z przyjemnością informujemy o zakończeniu prac modernizacyjnych bloku operacyjnego.", image: hospitalRoom },
    { id: 2, title: "Ograniczenie odwiedzin – sezon infekcyjny", date: "2026-02-11", excerpt: "W związku ze wzrostem zachorowań na infekcje sezonowe wprowadza się ograniczenie odwiedzin.", image: null },
    { id: 3, title: "Nowa poradnia kardiologiczna", date: "2026-01-20", excerpt: "Od lutego 2026 roku w naszym szpitalu działa nowa poradnia kardiologiczna.", image: hospitalEntrance },
    { id: 4, title: "Dzień Otwarty Szpitala", date: "2025-12-10", excerpt: "Zapraszamy na Dzień Otwarty SPZOZ w Kraśniku. Bezpłatne konsultacje i badania profilaktyczne.", image: hospitalRoom },
    { id: 5, title: "Nowy sprzęt diagnostyczny", date: "2025-11-15", excerpt: "Szpital zakupił nowoczesny tomograf komputerowy dzięki dofinansowaniu z funduszy europejskich.", image: hospitalEntrance },
    { id: 6, title: "Rekrutacja na stanowisko pielęgniarki", date: "2025-10-20", excerpt: "Poszukujemy wykwalifikowanych pielęgniarek do pracy na oddziale wewnętrznym.", image: null },
  ],
  en: [
    { id: 1, title: "Operating Block Modernization Complete", date: "2026-03-05", excerpt: "We are pleased to announce the completion of operating block modernization.", image: hospitalRoom },
    { id: 2, title: "Visiting Restrictions – Infection Season", date: "2026-02-11", excerpt: "Due to increased seasonal infections, visiting restrictions are in effect.", image: null },
    { id: 3, title: "New Cardiology Outpatient Clinic", date: "2026-01-20", excerpt: "Starting February 2026, our hospital operates a new cardiology outpatient clinic.", image: hospitalEntrance },
    { id: 4, title: "Hospital Open Day", date: "2025-12-10", excerpt: "Join us for SPZOZ Kraśnik Open Day. Free consultations and preventive screenings.", image: hospitalRoom },
    { id: 5, title: "New Diagnostic Equipment", date: "2025-11-15", excerpt: "The hospital purchased a modern CT scanner thanks to EU funding.", image: hospitalEntrance },
    { id: 6, title: "Nurse Recruitment", date: "2025-10-20", excerpt: "We are looking for qualified nurses for the internal medicine department.", image: null },
  ],
};

const News = () => {
  const { lang, t } = useLanguage();
  const news = newsData[lang];

  return (
    <PageLayout breadcrumbs={[{ label: t("news.title") }]}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-heading">{t("news.title")}</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {news.map((item) => (
              <article key={item.id} className="bg-card rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow group">
                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <time>{item.date}</time>
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground group-hover:text-secondary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="text-sm font-semibold text-secondary hover:underline inline-flex items-center gap-1">
                    {t("news.readMore")} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default News;
