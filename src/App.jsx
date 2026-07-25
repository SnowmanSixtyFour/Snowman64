import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";

// Pages
import Home from "./components/Pages/home";
import Socials from "./components/Pages/Socials";
import Discord from "./components/pages/Discord";

function AppContent() {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/discord" element={<Discord />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <p className="separator"/>
      <p>&copy; Snowman64 2024-2026</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;