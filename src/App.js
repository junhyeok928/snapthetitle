import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Router/Header";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Product from "./Components/Product";
import Notice from "./Components/Notice";
import Booking from "./Components/Booking";
import Footer from "./Router/Footer";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            {/* Safe-area 클래스를 추가하고 배경색을 흰색으로 설정 */}
            <div className="safe-area-top safe-area-bottom safe-area-x safe-area-y bg-white">
                <div className="w-full sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-2/4 2xl:w-1/3 py-5 mx-auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/notice" element={<Notice />} />
                        <Route path="/booking" element={<Booking />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
