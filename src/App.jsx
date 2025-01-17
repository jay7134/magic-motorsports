import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import './App.css'
import Contact from "./pages/Contact";
import FindVehicle from "./pages/FindVehicle";
import JapaneseAuctions from "./pages/JapaneseAuctions";
import Profile from "./pages/Profile";
import Management from "./pages/Management";

function App() {
  return (

    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/find-a-vehicle" element={<FindVehicle/>} />
        <Route path="/japanese-auctions" element={<JapaneseAuctions/> } />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/management" element={<Management/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>

  )
}

export default App
