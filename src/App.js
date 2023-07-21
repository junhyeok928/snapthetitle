import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Router/Header";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Product from "./Components/Product";
import Notice from "./Components/Notice";
import Contact from "./Components/Contact";
import Footer from "./Router/Footer";

const Router = () => {
  return (
      <HashRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/product" element={<Product/>} />
              <Route path="/notice" element={<Notice/>} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer />
      </HashRouter>
  );
};

export default Router;
