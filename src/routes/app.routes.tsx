import { RootLayout } from "@/layouts";
import {
  HomePage,
  LoginPage,
  RegisterPage,
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

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <About />,
        path: '/about',
      },
      { path: "/product/lead-centre", element: <LeadCentrePage /> },
      { path: "/product/website-chatbot", element: <WebsiteChatbotPage /> },
      { path: "/product/ai-chatbot", element: <AiChatbotPage /> },
      { path: "/product/whatsapp-chatbot", element: <LeadCentrePage /> },
      { path: "/product/ai-whatsapp-bot", element: <LeadCentrePage /> },
      { path: "/product/whatsapp-marketing", element: <LeadCentrePage /> },
      { path: "/product/email-marketing", element: <LeadCentrePage /> },
      { path: "/product/whatsapp-forms", element: <LeadCentrePage /> },
      { path: "/product/whatsapp-link-qr", element: <LeadCentrePage /> },
      {
        element: <PricingPage />,
        path: "/pricing",
      },
      {
        element: <TermsPage />,
        path: "/terms",
      },
      {
        element: <PrivacyPolicyPage />,
        path: "/privacy-policy",
      },

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
]);
