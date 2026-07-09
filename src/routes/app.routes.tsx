import { RootLayout } from "@/layouts";
import {
  HomePage,
} from "@/pages";
import PricingPage from "@/pages/pricing.page";
import PrivacyPolicyPage from "@/pages/privacy.page";
import TermsPage from "@/pages/terms.page";
import { createBrowserRouter } from "react-router-dom";
// import { builderRoutes } from "./builder.routes";
// import ProductPage from "@/pages/product.page";
// import About from "@/pages/about.page";

import About from "@/pages/about.page";
import LeadCentrePage from "@/pages/Product/leadCentre.page";
import WebsiteChatbotPage from "@/pages/Product/websiteChatbot.page";
import AiChatbotPage from "@/pages/Product/aiChatbot.page";
import TrustCenterPage from "@/pages/TrustCenter/trustcenter.page";
import CookiePolicy from "@/pages/Legal/data/Cookies";
import NotFoundPage from "@/pages/notfound.page";
import Careers from "@/pages/Career/career.page";
import Contact from "@/pages/Contact/contact.page";
import Team from "@/pages/Team/team.page";
import JobDetails from "@/pages/Career/job-details";
import SalesAgent from "@/pages/SalesAgent/salesagent.page";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { element: <HomePage />, index: true },
      { path: '/about', element: <About /> },
      { path: "/product/lead-centre", element: <LeadCentrePage /> },
      { path: "/product/website-chatbot", element: <WebsiteChatbotPage /> },
      { path: "/product/ai-chatbot", element: <AiChatbotPage /> },
      { path: "/product/whatsapp-chatbot", element: <LeadCentrePage /> },
      { path: "/product/ai-whatsapp-bot", element: <LeadCentrePage /> },
      { path: "/product/whatsapp-marketing", element: <LeadCentrePage /> },
      { path: "/product/email-marketing", element: <LeadCentrePage /> },
      { path: "/product/whatsapp-forms", element: <LeadCentrePage /> },
      { path: "/product/whatsapp-link-qr", element: <LeadCentrePage /> },
      { path: "/product/whatsapp-link-qr", element: <LeadCentrePage /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/terms", element: <TermsPage /> },
      { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "/trust-and-security", element: <TrustCenterPage /> },
      { path: "/cookies", element: <CookiePolicy /> },
      { path: "/careers", element: <Careers /> },
      { path: "/careers/:jobId", element: <JobDetails /> },
      { path: "/contact", element: <Contact /> },
      { path: "/team", element: <Team /> },
      { path: "/ai-sales-agent", element: <SalesAgent /> },



      // Auth PUBLIC ONLY (not logged in)
      // {
      //   element: <PublicOnly />,
      //   children: [
      //     { path: "/login", element: <LoginPage /> },
      //     { path: "/register", element: <RegisterPage /> },
      //   ],
      // },

    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
