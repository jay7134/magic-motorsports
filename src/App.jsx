import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import './App.css'
import Contact from "./pages/Contact";
import FindVehicle from "./pages/FindVehicle";
import JapaneseAuctions from "./pages/JapaneseAuctions";

function App() {
  return (

    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/find-a-vehicle" element={<FindVehicle/>} />
        <Route path="/japanese-auctions" element={<JapaneseAuctions/> } />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>

  )
}

export default App
