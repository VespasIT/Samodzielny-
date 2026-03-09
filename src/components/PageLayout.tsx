import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}

const PageLayout = ({ children, breadcrumbs }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </div>
  );
};

export default PageLayout;
