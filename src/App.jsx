import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";

// Pages
import Home from "./components/Pages/home";
import Socials from "./components/Pages/Socials";
import Discord from "./components/Pages/Discord";

function AppContent() {
  const navigate = useNavigate();

  return (
    <div>
      {/*
      <NavBar />
      */}
      <br/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/discord" element={<Discord />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <br/>
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