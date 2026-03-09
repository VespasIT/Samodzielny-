import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "pl" | "en";

interface Translations {
  [key: string]: { pl: string; en: string };
}

const translations: Translations = {
  // Topbar
  "topbar.bip": { pl: "BIP", en: "BIP" },
  "topbar.gdpr": { pl: "RODO", en: "GDPR" },
  "topbar.accessibility": { pl: "Deklaracja dostępności", en: "Accessibility" },
  "topbar.contact": { pl: "Kontakt", en: "Contact" },
  "topbar.phone": { pl: "Telefon", en: "Phone" },

  // Nav
  "nav.home": { pl: "Strona główna", en: "Home" },
  "nav.about": { pl: "O Szpitalu", en: "About Us" },
  "nav.patients": { pl: "Dla Pacjentów", en: "For Patients" },
  "nav.units": { pl: "Jednostki Medyczne", en: "Medical Units" },
  "nav.news": { pl: "Aktualności", en: "News" },
  "nav.procurement": { pl: "Zamówienia Publiczne", en: "Procurement" },
  "nav.careers": { pl: "Kariera", en: "Careers" },
  "nav.contact": { pl: "Kontakt", en: "Contact" },

  // About submenu
  "nav.about.mission": { pl: "Misja i historia", en: "Mission & History" },
  "nav.about.management": { pl: "Kierownictwo", en: "Management" },
  "nav.about.structure": { pl: "Struktura organizacyjna", en: "Structure" },

  // Patients submenu
  "nav.patients.registration": { pl: "Rejestracja", en: "Registration" },
  "nav.patients.admission": { pl: "Przyjęcie do szpitala", en: "Hospital Admission" },
  "nav.patients.rights": { pl: "Prawa pacjenta", en: "Patient Rights" },
  "nav.patients.visits": { pl: "Odwiedziny", en: "Visiting Hours" },
  "nav.patients.documents": { pl: "Dokumenty do pobrania", en: "Documents" },

  // Units submenu
  "nav.units.departments": { pl: "Oddziały", en: "Departments" },
  "nav.units.clinics": { pl: "Poradnie", en: "Clinics" },
  "nav.units.diagnostics": { pl: "Diagnostyka", en: "Diagnostics" },

  // Hero
  "hero.title1": { pl: "Samodzielny Publiczny Zakład Opieki Zdrowotnej", en: "Independent Public Healthcare Institution" },
  "hero.subtitle1": { pl: "w Kraśniku", en: "in Kraśnik" },
  "hero.slide2.title": { pl: "Nowoczesna opieka medyczna", en: "Modern Medical Care" },
  "hero.slide2.subtitle": { pl: "Dbamy o zdrowie i komfort naszych pacjentów", en: "We care for the health and comfort of our patients" },
  "hero.slide3.title": { pl: "Najwyższe standardy leczenia", en: "Highest Treatment Standards" },
  "hero.slide3.subtitle": { pl: "Wykwalifikowana kadra i nowoczesny sprzęt", en: "Qualified staff and modern equipment" },
  "hero.cta": { pl: "Umów wizytę", en: "Book a Visit" },
  "hero.more": { pl: "Dowiedz się więcej", en: "Learn More" },

  // Tiles
  "tiles.registration": { pl: "Rejestracja", en: "Registration" },
  "tiles.departments": { pl: "Oddziały", en: "Departments" },
  "tiles.clinics": { pl: "Poradnie", en: "Clinics" },
  "tiles.procurement": { pl: "Zamówienia", en: "Procurement" },
  "tiles.careers": { pl: "Kariera", en: "Careers" },
  "tiles.documents": { pl: "Dokumenty", en: "Documents" },
  "tiles.visits": { pl: "Odwiedziny", en: "Visiting Hours" },
  "tiles.contact": { pl: "Kontakt", en: "Contact" },
  "tiles.rights": { pl: "Prawa Pacjenta", en: "Patient Rights" },

  // News
  "news.title": { pl: "Aktualności", en: "News" },
  "news.viewAll": { pl: "Zobacz wszystkie", en: "View All" },
  "news.readMore": { pl: "Czytaj więcej", en: "Read More" },

  // Notices
  "notices.title": { pl: "Ogłoszenia", en: "Notices" },

  // Contact
  "contact.title": { pl: "Kontakt", en: "Contact" },
  "contact.address": { pl: "Adres", en: "Address" },
  "contact.mainPhone": { pl: "Centrala", en: "Main Phone" },
  "contact.registration": { pl: "Rejestracja", en: "Registration" },
  "contact.email": { pl: "E-mail", en: "Email" },
  "contact.hours": { pl: "Godziny rejestracji", en: "Registration Hours" },
  "contact.findUs": { pl: "Jak do nas trafić", en: "Find Us" },

  // Footer
  "footer.rights": { pl: "Wszelkie prawa zastrzeżone", en: "All rights reserved" },
  "footer.links": { pl: "Przydatne linki", en: "Useful Links" },
  "footer.forPatients": { pl: "Dla Pacjentów", en: "For Patients" },
  "footer.privacy": { pl: "Polityka prywatności", en: "Privacy Policy" },
  "footer.cookies": { pl: "Polityka cookies", en: "Cookie Policy" },

  // Notice
  "notice.visiting": { pl: "UWAGA! Ograniczenie odwiedzin – obowiązuje do odwołania.", en: "NOTICE! Visiting restrictions in effect – until further notice." },

  // Cookies banner
  "cookies.message": { pl: "Ta strona używa plików cookies w celu zapewnienia najlepszej jakości usług. Korzystając ze strony wyrażasz zgodę na ich używanie.", en: "This website uses cookies to ensure the best quality of service. By using this site, you consent to their use." },
  "cookies.accept": { pl: "Akceptuję", en: "Accept" },

  // About page
  "about.intro": { pl: "Samodzielny Publiczny Zakład Opieki Zdrowotnej w Kraśniku to nowoczesna placówka medyczna świadcząca kompleksowe usługi zdrowotne dla mieszkańców powiatu kraśnickiego i okolic.", en: "The Independent Public Healthcare Institution in Kraśnik is a modern medical facility providing comprehensive health services for residents of the Kraśnik district and surrounding areas." },
  "about.description": { pl: "Szpital posiada wiele oddziałów specjalistycznych, poradnie ambulatoryjne oraz pracownie diagnostyczne wyposażone w nowoczesny sprzęt medyczny. Naszym priorytetem jest zdrowie i bezpieczeństwo pacjentów.", en: "The hospital has many specialized departments, outpatient clinics, and diagnostic laboratories equipped with modern medical equipment. Our priority is the health and safety of patients." },
  "about.mission.title": { pl: "Misja", en: "Mission" },
  "about.mission.desc": { pl: "Świadczenie kompleksowych usług medycznych na najwyższym poziomie, z poszanowaniem godności i praw pacjenta.", en: "Providing comprehensive medical services at the highest level, respecting the dignity and rights of patients." },
  "about.history.title": { pl: "Historia", en: "History" },
  "about.history.desc": { pl: "Szpital w Kraśniku ma bogatą historię sięgającą wielu dekad, nieustannie się rozwijając i modernizując.", en: "The hospital in Kraśnik has a rich history spanning many decades, continuously developing and modernizing." },
  "about.management.title": { pl: "Kierownictwo", en: "Management" },
  "about.management.desc": { pl: "Doświadczony zespół zarządzający dba o sprawne funkcjonowanie szpitala i rozwój usług medycznych.", en: "An experienced management team ensures the efficient operation of the hospital and the development of medical services." },
  "about.structure.title": { pl: "Struktura", en: "Structure" },
  "about.structure.desc": { pl: "Szpital składa się z oddziałów szpitalnych, poradni specjalistycznych, pracowni diagnostycznych i jednostek pomocniczych.", en: "The hospital consists of hospital wards, specialist clinics, diagnostic laboratories, and auxiliary units." },

  // Patients page
  "patients.intro": { pl: "Informacje dla pacjentów – rejestracja, przyjęcie, prawa pacjenta, odwiedziny i dokumenty do pobrania.", en: "Information for patients – registration, admission, patient rights, visiting hours, and downloadable documents." },
  "patients.registration.desc": { pl: "Informacje o rejestracji telefonicznej i osobistej, godziny pracy rejestracji.", en: "Information about phone and in-person registration, registration hours." },
  "patients.admission.desc": { pl: "Wymagane dokumenty i procedura przyjęcia do szpitala.", en: "Required documents and hospital admission procedure." },
  "patients.rights.desc": { pl: "Prawa pacjenta, Rzecznik Praw Pacjenta, skargi i wnioski.", en: "Patient rights, Patient Ombudsman, complaints and requests." },
  "patients.visits.desc": { pl: "Godziny odwiedzin na poszczególnych oddziałach szpitalnych.", en: "Visiting hours for individual hospital departments." },
  "patients.documents.desc": { pl: "Formularze, wnioski i upoważnienia do pobrania.", en: "Forms, applications, and authorizations for download." },

  // Units page
  "units.internal": { pl: "Oddział Chorób Wewnętrznych", en: "Internal Medicine Department" },
  "units.surgery": { pl: "Oddział Chirurgii Ogólnej", en: "General Surgery Department" },
  "units.pediatrics": { pl: "Oddział Pediatryczny", en: "Pediatrics Department" },
  "units.gynecology": { pl: "Oddział Ginekologiczno-Położniczy", en: "Gynecology & Obstetrics Department" },
  "units.orthopedics": { pl: "Oddział Ortopedii i Traumatologii", en: "Orthopedics & Traumatology Department" },
  "units.neurology": { pl: "Oddział Neurologiczny", en: "Neurology Department" },
  "units.details": { pl: "Szczegóły", en: "Details" },

  // Procurement page
  "procurement.active": { pl: "Aktualne", en: "Active" },
  "procurement.archive": { pl: "Archiwum", en: "Archive" },
  "procurement.statusActive": { pl: "Aktualny", en: "Active" },
  "procurement.statusArchive": { pl: "Zakończony", en: "Archived" },
  "procurement.deadline": { pl: "Termin składania ofert", en: "Submission deadline" },
  "procurement.documents": { pl: "Dokumenty", en: "Documents" },

  // Careers page
  "careers.intro": { pl: "Zapraszamy do zapoznania się z aktualnymi ofertami pracy w SPZOZ w Kraśniku. Dołącz do naszego zespołu!", en: "Check out current job opportunities at SPZOZ Kraśnik. Join our team!" },
  "careers.deadline": { pl: "Termin", en: "Deadline" },
  "careers.apply": { pl: "Aplikuj", en: "Apply" },

  // GDPR page
  "gdpr.admin.title": { pl: "Administrator danych osobowych", en: "Personal Data Controller" },
  "gdpr.admin.desc": { pl: "Administratorem danych osobowych jest Samodzielny Publiczny Zakład Opieki Zdrowotnej w Kraśniku, ul. Chopina 13, 23-200 Kraśnik.", en: "The Personal Data Controller is the Independent Public Healthcare Institution in Kraśnik, ul. Chopina 13, 23-200 Kraśnik." },
  "gdpr.purpose.title": { pl: "Cel przetwarzania danych", en: "Purpose of Data Processing" },
  "gdpr.purpose.desc": { pl: "Dane osobowe przetwarzane są w celu realizacji świadczeń zdrowotnych, wypełniania obowiązków prawnych oraz w celach kontaktowych.", en: "Personal data is processed for the purpose of providing healthcare services, fulfilling legal obligations, and for contact purposes." },
  "gdpr.rights.title": { pl: "Prawa osoby, której dane dotyczą", en: "Data Subject Rights" },
  "gdpr.rights.access": { pl: "Prawo dostępu do danych", en: "Right of access" },
  "gdpr.rights.rectification": { pl: "Prawo do sprostowania danych", en: "Right to rectification" },
  "gdpr.rights.erasure": { pl: "Prawo do usunięcia danych", en: "Right to erasure" },
  "gdpr.rights.restriction": { pl: "Prawo do ograniczenia przetwarzania", en: "Right to restriction of processing" },
  "gdpr.rights.portability": { pl: "Prawo do przenoszenia danych", en: "Right to data portability" },
  "gdpr.rights.objection": { pl: "Prawo do sprzeciwu", en: "Right to object" },
  "gdpr.contact.title": { pl: "Inspektor Ochrony Danych", en: "Data Protection Officer" },
  "gdpr.contact.desc": { pl: "W sprawach związanych z ochroną danych osobowych prosimy o kontakt z Inspektorem Ochrony Danych.", en: "For matters related to the protection of personal data, please contact the Data Protection Officer." },

  // Accessibility page
  "accessibility.intro": { pl: "Samodzielny Publiczny Zakład Opieki Zdrowotnej w Kraśniku zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z ustawą o dostępności cyfrowej.", en: "The Independent Public Healthcare Institution in Kraśnik is committed to ensuring the accessibility of its website in accordance with the Digital Accessibility Act." },
  "accessibility.compliance.title": { pl: "Status zgodności", en: "Compliance Status" },
  "accessibility.compliance.desc": { pl: "Strona internetowa jest częściowo zgodna z ustawą o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.", en: "The website is partially compliant with the Act on Digital Accessibility of websites and mobile applications of public entities." },
  "accessibility.content.title": { pl: "Dostępne treści", en: "Accessible Content" },
  "accessibility.content.keyboard": { pl: "Nawigacja za pomocą klawiatury", en: "Keyboard navigation" },
  "accessibility.content.contrast": { pl: "Odpowiedni kontrast kolorów (WCAG 2.1 AA)", en: "Proper color contrast (WCAG 2.1 AA)" },
  "accessibility.content.alt": { pl: "Alternatywny tekst dla obrazów", en: "Alternative text for images" },
  "accessibility.content.headings": { pl: "Prawidłowa hierarchia nagłówków", en: "Proper heading hierarchy" },
  "accessibility.feedback.title": { pl: "Informacje zwrotne i kontakt", en: "Feedback and Contact" },
  "accessibility.feedback.desc": { pl: "W przypadku problemów z dostępnością strony prosimy o kontakt.", en: "If you encounter accessibility issues, please contact us." },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pl");

  const t = (key: string) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
