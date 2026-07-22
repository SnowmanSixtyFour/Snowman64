import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";

// Pages
import Home from "./components/Pages/home";

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // put key presses here later
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div>
      <NavBar />
      <br/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <br/>
      <p>&copy; 2026 Chris Ryczke</p>
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