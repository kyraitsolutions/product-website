import { SnackbarProvider } from "notistack";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import WhatsappButton from "./components/WhatsappButton.tsx";
// import KyraProductCard from "./components/popup/KyraProductHuntCard.tsx";

createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    {/* <KyraProductCard /> */}

    <App />
    <SnackbarProvider />
    {/* WhatsApp */}
    <WhatsappButton type="whatsapp" left="left-4 bottom-18" />
    {/* Call */}
    <WhatsappButton type="call" left="left-4 bottom-4" />
  </React.Fragment>,
);
