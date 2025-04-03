import React, { useState, useCallback, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import { photos } from "../data/photos";
import "react-image-lightbox/style.css";
import "../css/GalleryComponent.css";

const ITEMS_PER_PAGE = 9; // 한 페이지에 표시할 이미지 개수

const GalleryComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(photos.length / ITEMS_PER_PAGE);
    const paginatedPhotos = photos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handleClick = useCallback((index) => {
        setCurrentIndex((currentPage - 1) * ITEMS_PER_PAGE + index);
        setIsOpen(true);
        setIsLoading(true);
    }, [currentPage]);

    const handleClose = useCallback(() => {
        setIsOpen(false);
        setTimeout(() => setCurrentIndex(null), 300);
        setIsLoading(true);
    }, []);

    const moveTo = (newIndex) => setCurrentIndex(newIndex);
    const handleImageLoad = () => setIsLoading(false);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto px-5">
                <div className="columns-1 sm:columns-3 gap-4 space-y-4">
                    {paginatedPhotos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-auto object-cover cursor-pointer shadow-md transition-transform duration-300 transform hover:scale-105 opacity-0 animate-fade-in"
                            onClick={() => handleClick(index)}
                            onLoad={(e) => e.target.classList.remove("opacity-0")}
                        />
                    ))}
                </div>

                {/* 페이지네이션 컨트롤 */}
                <div className="flex justify-center mt-6">
                    <button
                        className={`px-4 py-2 mx-2 bg-gray-300 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        이전
                    </button>
                    <span className="px-4 py-2">{currentPage} / {totalPages}</span>
                    <button
                        className={`px-4 py-2 mx-2 bg-gray-300 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        다음
                    </button>
                </div>
            </div>

            {isOpen && currentIndex !== null && (
                <Lightbox
                    mainSrc={photos[currentIndex].src}
                    nextSrc={photos[(currentIndex + 1) % photos.length].src}
                    prevSrc={photos[(currentIndex + photos.length - 1) % photos.length].src}
                    onCloseRequest={handleClose}
                    onMovePrevRequest={() => moveTo((currentIndex + photos.length - 1) % photos.length)}
                    onMoveNextRequest={() => moveTo((currentIndex + 1) % photos.length)}
                    reactModalProps={{
                        shouldReturnFocusAfterClose: false,
                        ariaHideApp: false,
                    }}
                    onImageLoad={handleImageLoad}
                />
            )}

            {isLoading && <div className="loading-spinner"></div>}
        </section>
    );
};

export default GalleryComponent;
