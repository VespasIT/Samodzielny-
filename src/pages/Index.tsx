import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickTiles from "@/components/QuickTiles";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <QuickTiles />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </div>
  );
};

export default Index;
