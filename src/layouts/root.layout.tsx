import FooterSection from "@/components/footer-section";
import Header from "@/components/website/Header";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <FooterSection />
    </div>
  );
};
