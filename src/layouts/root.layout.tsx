import FooterSection from "@/components/footer-section";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/website/Header";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <ScrollToTop />
      <Outlet />
      <FooterSection />
    </div>
  );
};
