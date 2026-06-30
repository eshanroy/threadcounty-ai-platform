import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./styles/global.css";
import App from "./App.jsx";

import { UploadProvider } from "./context/UploadContext";
import { AnalysisProvider } from "./context/AnalysisContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UploadProvider>
      <AnalysisProvider>
        <App />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "12px",
              background: "#ffffff",
              color: "#0f172a",
              fontWeight: "500",
            },
            success: {
              iconTheme: {
                primary: "#2563eb",
                secondary: "#ffffff",
              },
            },
            error: {
              iconTheme: {
                primary: "#dc2626",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </AnalysisProvider>
    </UploadProvider>
  </StrictMode>
);