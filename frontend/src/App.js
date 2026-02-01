import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import { ThemeProvider } from "./context/ThemeContext";
import { ChartProvider } from "./context/ChartContext";

import Home from "./pages/Home";
import Health from "./pages/Health";
import AppInfo from "./pages/AppInfo";
import Version from "./pages/Version";
import Metrics from "./pages/Metrics";
import Uptime from "./pages/Uptime";

export default function App() {
  return (
    <ThemeProvider>
      <ChartProvider>
        <BrowserRouter>
          {/* App Shell */}
          <div
            style={{
              minHeight: "100vh",
              background: "var(--bg-page)",
              color: "var(--text-primary)"
            }}
          >
            {/* Top Navigation */}
            <Navigation />

            {/* Main Content */}
            <main
              style={{
                padding: "24px",
                maxWidth: "1100px",
                margin: "0 auto"
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/health" element={<Health />} />
                <Route path="/app" element={<AppInfo />} />
                <Route path="/version" element={<Version />} />
                <Route path="/metrics" element={<Metrics />} />
                <Route path="/uptime" element={<Uptime />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ChartProvider>
    </ThemeProvider>
  );
}
