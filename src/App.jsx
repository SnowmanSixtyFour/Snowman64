import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import home from './pages/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <NavBar/>
        <p className="separator"/>
        <Routes>
          <Route path="/" element={<home />} />
        </Routes>
        <br/>
        <p>&copy; 2026 Snowman64</p>
      </div>
    </Router>
  )
}

export default App
