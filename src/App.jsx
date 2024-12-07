import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import './App.css'
import Contact from "./pages/Contact";

function App() {
 
  return (

    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>

  )
}

export default App
