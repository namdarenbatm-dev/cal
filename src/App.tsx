
import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { FinancialModelProvider, useFinancialModel } from "./hooks/FinancialModelContext";
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

const ICON_PATH = "/icon/9B6D5AD1-3C84-462E-A99A-D47720E99165.png";

function Welcome() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      navigate("/dashboard", { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        direction: "ltr",
      }}
    >
      <div
        style={{
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.92)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <img
          src={ICON_PATH}
          alt="EDGE"
          style={{
            width: 130,
            height: 130,
            objectFit: "contain",
            display: "block",
            margin: "0 auto 24px",
          }}
        />

        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            letterSpacing: "8px",
            color: "#111827",
            marginBottom: 14,
          }}
        >
          EDGE
        </div>

        <div
          style={{
            fontSize: 14,
            color: "#6b7280",
            letterSpacing: "1px",
          }}
        >
          Designed by Mehdi Namdar
        </div>
      </div>
    </div>
  );
}

function Shell() {
  const { darkMode, setDarkMode } = useFinancialModel();

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route
        element={
          <AppLayout
            darkMode={darkMode}
            onToggleDark={() => setDarkMode((v) => !v)}
          />
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recommended-price" element={<RecommendedPrice />} />
        <Route path="/costs" element={<Costs />} />
        <Route path="/device" element={<Device />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales-volume" element={<SalesVolume />} />
        <Route path="/target-profit" element={<TargetProfit />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/print-report" element={<PrintReport />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <FinancialModelProvider>
      <HashRouter>
        <Shell />
      </HashRouter>
    </FinancialModelProvider>
  );
}
```
