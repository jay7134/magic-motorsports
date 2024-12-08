import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import './App.css'
import Contact from "./pages/Contact";
import FindVehicle from "./pages/FindVehicle";
import JapaneseAuctions from "./pages/JapaneseAuctions";

function App() {
  const scrollbarRef = useRef(null);
  
  useEffect(() => {
    // Initialize smooth-scrollbar
    const options = {
      damping: 0.05, // Smoothness factor
    };
    const scrollbar = Scrollbar.init(scrollbarRef.current, options);

    // Cleanup on unmount
    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollbarRef} style={{ height: "100vh", overflow: "hidden" }}>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/find-a-vehicle" element={<FindVehicle/>} />
        <Route path="/japanese-auctions" element={<JapaneseAuctions/> } />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
