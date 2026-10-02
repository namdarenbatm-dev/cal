import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import {
  FinancialModelProvider,
  useFinancialModel,
} from "./hooks/FinancialModelContext";

import Dashboard from "./pages/Dashboard";
import RecommendedPrice from "./pages/RecommendedPrice";
import Costs from "./pages/Costs";
import Device from "./pages/Device";
import Sales from "./pages/Sales";
import SalesVolume from "./pages/SalesVolume";
import TargetProfit from "./pages/TargetProfit";
import Scenarios from "./pages/Scenarios";
import Reports from "./pages/Reports";
import PrintReport from "./pages/PrintReport";

const ICON_PATH =
  "/icon/9B6D5AD1-3C84-462E-A99A-D47720E99165.png";

function Welcome({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 50);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        background: "#FCFBF9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        direction: "ltr",
        zIndex: 99999,
      }}
    >
      <div
        style={{
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.92)",
          transition:
            "opacity 1s ease-out, transform 1s ease-out",
        }}
      >
        <img
          src={ICON_PATH}
          alt="EDGE POS"
          style={{
            width: 1080,
            maxWidth: "80vw",
            height: "auto",
            maxHeight: "60vh",
            objectFit: "contain",
            display: "block",
            margin: "0 auto 36px",
          }}
        />

        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "5px",
            color: "#111827",
            marginBottom: 14,
          }}
        >
          EDGE POS
        </div>

        <div
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: "#6B7280",
            letterSpacing: "1px",
          }}
        >
          Designed by Mehdi Namdar
        </div>
      </div>
    </div>
  );
}

function MainApp() {
  const [showWelcome, setShowWelcome] = useState(true);

  const finishWelcome = React.useCallback(() => {
    setShowWelcome(false);
  }, []);

  if (showWelcome) {
    return <Welcome onFinish={finishWelcome} />;
  }

  return <DashboardApp />;
}

function DashboardApp() {
  const { darkMode, setDarkMode } = useFinancialModel();

  return (
    <Routes>
      <Route
        element={
          <AppLayout
            darkMode={darkMode}
            onToggleDark={() =>
              setDarkMode((v) => !v)
            }
          />
        }
      >
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/recommended-price"
          element={<RecommendedPrice />}
        />

        <Route
          path="/costs"
          element={<Costs />}
        />

        <Route
          path="/device"
          element={<Device />}
        />

        <Route
          path="/sales"
          element={<Sales />}
        />

        <Route
          path="/sales-volume"
          element={<SalesVolume />}
        />

        <Route
          path="/target-profit"
          element={<TargetProfit />}
        />

        <Route
          path="/scenarios"
          element={<Scenarios />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/print-report"
          element={<PrintReport />}
        />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <FinancialModelProvider>
      <HashRouter>
        <MainApp />
      </HashRouter>
    </FinancialModelProvider>
  );
}
