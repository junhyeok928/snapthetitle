import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Router/Header";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Product from "./Components/Product";
import Notice from "./Components/Notice";
import Reservation from "./Components/Reservation";
import Faq from "./Components/Notice/Faq";
import Guide from "./Components/Notice/Guide";
import Partner from "./Components/Notice/Partner";
import Footer from "./Router/Footer";

const Router = () => {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <div className="flex-1 bg-white py-5">
                    <div className="w-full sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-2/4 2xl:w-1/3 mx-auto">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/product" element={<Product />} />
                            <Route path="/notice" element={<Notice />} />
                            <Route path="/Reservation" element={<Reservation />} />
                            <Route path="/notice/faq" element={<Faq />} />
                            <Route path="/notice/guide" element={<Guide />} />
                            <Route path="/notice/partner" element={<Partner />} />
                        </Routes>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default Router;
