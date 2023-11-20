import { Link } from "react-router-dom";
import { Fade } from 'react-reveal';
import logo from '../img/logo.png';
import classNames from "classnames";
import { useState } from "react";

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenuItemClick = () => {
        // 메뉴 아이템 클릭 시 메뉴를 닫습니다.
        setMenuToggle(false);
    };
    return (
        <header className="inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font">
            {/* PC menu */}
            <div className="hidden md:flex container mx-auto flex flex-wrap p-5 flex-col md:flex-column items-center">
                {/*<Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
                    <img alt="logo" src={logo} className="w-40 h-16 -mr-1" />
                </Link>*/}
                <nav className="flex flex-wrap items-center text-base justify-center">
                    <Link className="mx-6 hover:text-gray-900 hover:bg-gray-200 px-10 py-2 rounded transition duration-300" to="/">
                        HOME
                    </Link>
                    <Link className="mx-6 hover:text-gray-900 hover:bg-gray-200 px-10 py-2 rounded transition duration-300" to="/about">
                        ABOUT
                    </Link>
                    <Link className="mx-6 hover:text-gray-900 hover:bg-gray-200 px-10 py-2 rounded transition duration-300" to="/gallery">
                        GALLERY
                    </Link>
                    <Link className="mx-6 hover:text-gray-900 hover:bg-gray-200 px-10 py-2 rounded transition duration-300" to="/product">
                        PRODUCT
                    </Link>
                    <Link className="mx-6 hover:text-gray-900 hover:bg-gray-200 px-10 py-2 rounded transition duration-300" to="/notice">
                        NOTICE
                    </Link>
                    <Link className="mx-6 hover:text-gray-900 hover:bg-gray-200 px-10 py-2 rounded transition duration-300" to="/booking">
                        BOOKING
                    </Link>
                </nav>
            </div>
            {/* mobile menu */}
            <div className="md:hidden flex container mx-auto flex-wrap p-5 flex-row items-center justify-between">
                {/*<Link className="flex title-font font-medium items-center text-gray-900 md:mb-0" to="/">
                    <img alt="logo" src={logo} className="w-30 h-10 -mr-1" />
                </Link>*/}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuToggle(!menuToggle)}
                    >
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
            </div>
            {/* mobile menu items */}
            <Fade collapse when={menuToggle}>
                <div className={classNames("md:hidden", { hidden: !menuToggle })}>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/" onClick={handleMenuItemClick}>
                        HOME
                    </Link>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/about" onClick={handleMenuItemClick}>
                        ABOUT
                    </Link>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/gallery" onClick={handleMenuItemClick}>
                        GALLERY
                    </Link>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/product" onClick={handleMenuItemClick}>
                        PRODUCT
                    </Link>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/notice" onClick={handleMenuItemClick}>
                        NOTICE
                    </Link>
                    <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/booking" onClick={handleMenuItemClick}>
                        BOOKING
                    </Link>
                </div>
            </Fade>
        </header>
    );
}

export default Header;