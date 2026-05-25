import { SnackbarProvider } from "notistack";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import KyraProductCard from "./components/popup/KyraProductHuntCard.tsx";

createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    {/* <KyraProductCard /> */}

    <App />
    <SnackbarProvider />
  </React.Fragment>,
);
