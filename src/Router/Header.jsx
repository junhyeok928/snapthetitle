import { Link, useLocation } from "react-router-dom";
import logo from '../img/logo_01.png';
import { useState } from "react";

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [isNoticeDropdownOpen, setIsNoticeDropdownOpen] = useState(false); // NOTICE 드롭다운 상태
    const location = useLocation();

    const isActive = (path) => {
        // NOTICE 메뉴의 하위 경로에 해당하는 경우도 활성화 처리
        const isNoticePath = ['/notice/faq', '/notice/partner', '/notice/guide'].includes(location.pathname);
        if (path === '/notice' && isNoticePath) {
            return 'text-gray-900 font-bold'; // 활성화된 스타일
        }
        return location.pathname === path ? 'text-gray-900 font-bold' : 'text-gray-400';
    };

    const handleMenuItemClick = () => {
        setMenuToggle(false);
    };

    const handleMobileNoticeClick = () => {
        setIsNoticeDropdownOpen(!isNoticeDropdownOpen);
    };

    const handleMouseEnter = () => {
        setIsNoticeDropdownOpen(true); // notice 메뉴에 마우스 올리면 드롭다운 열기
    };

    const handleMouseLeave = () => {
        setIsNoticeDropdownOpen(false); // notice 메뉴에서 마우스 떼면 드롭다운 닫기
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
                        to="/"
                    >
                        HOME
                    </Link>
                    <Link
                        className={`mx-4 hover:text-gray-900 hover:bg-gray-200 px-6 py-2 rounded transition duration-300 ${isActive('/about')}`}
                        to="/about"
                    >
                        ABOUT
                    </Link>
                    <Link
                        className={`mx-4 hover:text-gray-900 hover:bg-gray-200 px-6 py-2 rounded transition duration-300 ${isActive('/gallery')}`}
                        to="/gallery"
                    >
                        GALLERY
                    </Link>
                    <Link
                        className={`mx-4 hover:text-gray-900 hover:bg-gray-200 px-6 py-2 rounded transition duration-300 ${isActive('/product')}`}
                        to="/product"
                    >
                        PRODUCT
                    </Link>
                    {/* Notice 메뉴에 드롭다운 추가 */}
                    <div
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            className={`mx-4 hover:text-gray-900 hover:bg-gray-200 px-6 py-2 rounded transition duration-300 ${isActive('/notice')}`}
                            to="#"
                            onClick={(e) => e.preventDefault()} // 클릭 시 기본 동작 방지
                        >
                            NOTICE
                        </Link>
                        {isNoticeDropdownOpen && (
                            <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md z-50">
                                <ul className="space-y-2 p-2">
                                    <li>
                                        <Link
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            to="/notice/faq"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            to="/notice/partner"
                                        >
                                            제휴
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            to="/notice/guide"
                                        >
                                            가이드
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <Link
                        className={`mx-4 hover:text-gray-900 hover:bg-gray-200 px-6 py-2 rounded transition duration-300 ${isActive('/reservation')}`}
                        to="/reservation"
                    >
                        RESERVATION
                    </Link>
                </nav>
            </div>

            {/* 모바일 메뉴 */}
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
                    <img alt="logo" src={logo} className="w-44 h-auto"/>
                </Link>
            </div>

            {/* 모바일 메뉴 항목들 */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuToggle ? 'max-h-screen' : 'max-h-0'}`}
            >
                <Link className="block py-2 px-4 text-sm" to="/" onClick={handleMenuItemClick}>
                    HOME
                </Link>
                <Link className="block py-2 px-4 text-sm" to="/about" onClick={handleMenuItemClick}>
                    ABOUT
                </Link>
                <Link className="block py-2 px-4 text-sm" to="/gallery" onClick={handleMenuItemClick}>
                    GALLERY
                </Link>
                <Link className="block py-2 px-4 text-sm" to="/product" onClick={handleMenuItemClick}>
                    PRODUCT
                </Link>

                {/* 모바일에서 NOTICE 클릭 시 소메뉴 펼쳐지기 */}
                <div className="relative">
                    <button
                        className="block py-2 px-4 text-sm w-full text-left"
                        onClick={handleMobileNoticeClick}
                    >
                        NOTICE
                    </button>
                    <div
                        className={`flex flex-col space-y-2 px-4 overflow-hidden transition-all duration-300 ease-in-out ${isNoticeDropdownOpen ? 'max-h-screen' : 'max-h-0'}`}
                    >
                        {isNoticeDropdownOpen && (
                            <>
                                <Link
                                    to="/notice/faq"
                                    className="py-1 pl-6 text-sm" // 메뉴 항목의 왼쪽 패딩을 더 주어 들여쓰기 효과를 줌
                                    onClick={handleMenuItemClick}
                                >
                                    FAQ
                                </Link>
                                <Link
                                    to="/notice/partner"
                                    className="py-1 pl-6 text-sm" // 메뉴 항목의 왼쪽 패딩을 더 주어 들여쓰기 효과를 줌
                                    onClick={handleMenuItemClick}
                                >
                                    제휴
                                </Link>
                                <Link
                                    to="/notice/guide"
                                    className="py-1 pl-6 text-sm" // 메뉴 항목의 왼쪽 패딩을 더 주어 들여쓰기 효과를 줌
                                    onClick={handleMenuItemClick}
                                >
                                    가이드
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                <Link className="block py-2 px-4 text-sm" to="/reservation" onClick={handleMenuItemClick}>
                    RESERVATION
                </Link>
            </div>
        </header>
    );
};

export default Header;
