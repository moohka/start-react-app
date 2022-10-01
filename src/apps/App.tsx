import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import Navbar from "../interfaces/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
