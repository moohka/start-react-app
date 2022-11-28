import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import Footer from "../layouts/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />

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
