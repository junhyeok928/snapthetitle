import {Link, useLocation} from "react-router-dom";
import { Fade } from 'react-reveal';
import logo from '../img/logo_01.png';
import classNames from "classnames";
import { useState } from "react";

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const location = useLocation(); // 현재 경로 가져오기

    // 현재 경로에 따라 메뉴 스타일 변경
    const isActive = (path) => {
        return location.pathname === path ? 'text-gray-900' : 'text-gray-400';
    };
    const handleMenuItemClick = () => {
        // 메뉴 아이템 클릭 시 메뉴를 닫습니다.
        setMenuToggle(false);
    };
    return (
        <header className="inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font">
            {/* PC menu */}
            <div className="hidden md:flex container mx-auto flex flex-wrap p-5 flex-col md:flex-column items-center">
                <Link className="flex title-font pt-5 font-medium justify-center text-gray-900 mb-4 md:mb-0" to="/">
                    <img alt="logo" src={logo} className="w-2/6"/>
                </Link>
                <nav className="flex flex-wrap items-center text-xs justify-center pt-5">
                    <Link
                        className={`mx-4 hover:text-gray-900 hover:bg-gray-200 px-6 py-2 rounded transition duration-300 ${isActive('/')}`}
                        to="/">
                        HOME
                    </Link>
                    <Link
                        className={`mx-4 hover:text-gray-900 hover:bg-gray-200 px-6 py-2 rounded transition duration-300 ${isActive('/about')}`}
                        to="/about">
                        ABOUT
                    </Link>
                    <Link
                        className={`mx-4 hover:text-gray-900 hover:bg-gray-200 px-6 py-2 rounded transition duration-300 ${isActive('/gallery')}`}
                        to="/gallery">
                        GALLERY
                    </Link>
                    <Link
                        className={`mx-4 hover:text-gray-900 hover:bg-gray-200 px-6 py-2 rounded transition duration-300 ${isActive('/product')}`}
                        to="/product">
                        PRODUCT
                    </Link>
                    <Link
                        className={`mx-4 hover:text-gray-900 hover:bg-gray-200 px-6 py-2 rounded transition duration-300 ${isActive('/notice')}`}
                        to="/notice">
                        NOTICE
                    </Link>
                    <Link
                        className={`mx-4 hover:text-gray-900 hover:bg-gray-200 px-6 py-2 rounded transition duration-300 ${isActive('/booking')}`}
                        to="/booking">
                        BOOKING
                    </Link>
                </nav>
            </div>
            {/* mobile menu */}
            <div className="md:hidden flex container mx-auto flex-wrap p-5 flex-row items-center justify-between">
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuToggle(!menuToggle)}>
                        {menuToggle ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <Link to="/" className="text-white font-semibold text-xl flex items-center">
                    <img alt="logo" src={logo} className="w-44 h-auto" />
                </Link>
            </div>
            {/* mobile menu items */}
            <Fade collapse when={menuToggle}>
                <div className={classNames("md:hidden", {hidden: !menuToggle})}>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/" onClick={handleMenuItemClick}>
                        HOME
                    </Link>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/about"
                          onClick={handleMenuItemClick}>
                        ABOUT
                    </Link>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/gallery"
                          onClick={handleMenuItemClick}>
                        GALLERY
                    </Link>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/product"
                          onClick={handleMenuItemClick}>
                        PRODUCT
                    </Link>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/notice"
                          onClick={handleMenuItemClick}>
                        NOTICE
                    </Link>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/booking"
                          onClick={handleMenuItemClick}>
                        BOOKING
                    </Link>
                </div>
            </Fade>
        </header>
    );
}

export default Header;