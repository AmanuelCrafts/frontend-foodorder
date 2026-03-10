import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
