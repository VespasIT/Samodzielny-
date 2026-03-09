import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import hospitalRoom from "@/assets/hospital-room.jpg";
import hospitalEntrance from "@/assets/hospital-entrance.jpg";
import plakat from "@/assets/Plakat_-_do_wydruku.jpg";
import visitorsRestrictions from "@/assets/2026-02-11_1233421.jpg";
import maternityLeave from "@/assets/2026-01-16_085732.jpg";
import subsidy from "@/assets/Scan_20251013_153835.jpg";

const newsData = {
  pl: [
    {
      id: 1,
      title: "Modernizacja Bloku Operacyjnego",
      date: "2026-02-23",
      excerpt: "Z radością informujemy o zakończeniu prac modernizacyjnych bloku operacyjnego. Nowy sprzęt medyczny i wyremontowane sale operacyjne zapewniają pacjentom najwyższy standard opieki chirurgicznej.",
      image: hospitalRoom
    },
    {
      id: 2,
      title: "UWAGA!! Ograniczenie odwiedzin",
      date: "2026-02-11",
      excerpt: "W związku ze wzrostem zachorowań na infekcje sezonowe wprowadzamy ograniczenie odwiedzin na wszystkich oddziałach. Obowiązuje od 11 lutego 2026 r. do odwołania.",
      image: visitorsRestrictions
    },
    {
      id: 3,
      title: "Dodatkowy urlop macierzyński dla rodziców",
      date: "2026-01-16",
      excerpt: "Rodzice dzieci urodzonych przedwcześnie oraz długotrwale hospitalizowanych mogą ubiegać się o dodatkowy urlop macierzyński. Szczegóły i warunki dostępne w poradni.",
      image: maternityLeave
    },
    {
      id: 4,
      title: "Wojewoda przyznał milionową dotację",
      date: "2025-12-18",
      excerpt: "Szpital w Kraśniku otrzymał grant od Wojewody Lubelskiego na zakup nowoczesnego sprzętu medycznego. Inwestycja wzmocni możliwości diagnostyczne placówki.",
      image: subsidy
    },
    {
      id: 5,
      title: "Ograniczenia odwiedzin pacjentów",
      date: "2025-11-10",
      excerpt: "W okresie jesienno-zimowym wprowadzamy nowe regulacje dotyczące odwiedzin. Miara mająca na celu ochronę zdrowia pacjentów i personelu.",
      image: hospitalEntrance
    },
  ],
  en: [
    {
      id: 1,
      title: "Operating Block Modernization Complete",
      date: "2026-02-23",
      excerpt: "We are pleased to announce the completion of modernization works in the operating block. New medical equipment and renovated surgical rooms ensure patients the highest standard of surgical care.",
      image: hospitalRoom
    },
    {
      id: 2,
      title: "ATTENTION!! Visitor Restrictions",
      date: "2026-02-11",
      excerpt: "Due to increased seasonal infections, we are implementing visitor restrictions across all departments effective February 11, 2026 until further notice.",
      image: visitorsRestrictions
    },
    {
      id: 3,
      title: "Additional Maternity Leave for Parents",
      date: "2026-01-16",
      excerpt: "Parents of prematurely born children and those hospitalized for extended periods may apply for additional maternity leave. Details and conditions available at our clinic.",
      image: maternityLeave
    },
    {
      id: 4,
      title: "Voivode Grants Million-Dollar Subsidy",
      date: "2025-12-18",
      excerpt: "The hospital in Kraśnik received a grant from the Lublin Voivode for the purchase of modern medical equipment. Investment will enhance the facility's diagnostic capabilities.",
      image: subsidy
    },
    {
      id: 5,
      title: "Patient Visiting Restrictions",
      date: "2025-11-10",
      excerpt: "During the fall-winter period, new regulations concerning patient visits are in effect. Measures designed to protect the health of patients and staff.",
      image: hospitalEntrance
    },
  ],
};

const NewsSection = () => {
  const { lang, t } = useLanguage();
  const news = newsData[lang].slice(0, 3);

  return (
    <section id="news" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12 text-center">{t("news.title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article key={item.id} className="bg-card rounded-lg shadow-md border-l-4 border-primary overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
              <div className="flex items-center gap-2 text-sm text-muted-foreground px-5 pt-4 pb-2">
                <Calendar className="w-4 h-4" />
                <time>{item.date}</time>
              </div>
              {item.image && (
                <div className="h-56 overflow-hidden flex-1">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              )}
              {!item.image && (
                <div className="h-56 bg-gradient-to-br from-muted to-muted-foreground flex-1 flex items-center justify-center">
                  <span className="text-muted-foreground text-center px-4 font-serif font-bold text-xl">{item.title}</span>
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-lg mb-3 text-foreground group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {item.excerpt}
                </p>
                <div className="mt-auto">
                  <Link to={`/news/${item.id}`} className="text-sm font-semibold text-secondary hover:underline inline-flex items-center gap-1">
                    {t("news.readMore")} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
