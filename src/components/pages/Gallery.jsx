import React, { useState, useCallback, useMemo } from "react";
import Lightbox from "react-image-lightbox";
import { photos } from "../../data/photos";
import "react-image-lightbox/style.css";
import "../../css/GalleryComponent.css";

const ITEMS_PER_PAGE = 9; // 한 페이지에 표시할 이미지 개수

const GalleryComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('전체');

    // 카테고리별 사진 분류 - useMemo로 고정하여 리렌더링 시 변경 방지
    const photosByCategory = useMemo(() => {
        // 실제 운영에서는 photos 배열에 category 속성이 있어야 함
        // 예: { src: '...', alt: '...', category: '바다' }
        
        const categories = {
            '전체': photos,
            '바다': photos.filter((photo, index) => {
                // 임시 분류: 파일명이나 인덱스 기반 (나중에 photo.category로 변경)
                return photo.category === '바다' || (!photo.category && index % 4 === 0);
            }),
            '들판': photos.filter((photo, index) => {
                return photo.category === '들판' || (!photo.category && index % 4 === 1);
            }),
            '스튜디오': photos.filter((photo, index) => {
                return photo.category === '스튜디오' || (!photo.category && index % 4 === 2);
            }),
            '기타': photos.filter((photo, index) => {
                return photo.category === '기타' || (!photo.category && index % 4 === 3);
            })
        };
        return categories;
    }, [photos]); // photos가 변경될 때만 재계산

    const currentPhotos = photosByCategory[selectedCategory] || [];
    const totalPages = Math.ceil(currentPhotos.length / ITEMS_PER_PAGE);
    const paginatedPhotos = currentPhotos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handleClick = useCallback((index) => {
        // 페이지네이션된 사진의 실제 인덱스 계산
        const actualIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
        setCurrentIndex(actualIndex);
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

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const categories = ['전체', '바다', '들판', '스튜디오', '기타'];

    return (
        <section className="text-gray-700 bg-white relative py-16">
            <div className="container px-6 mx-auto max-w-7xl">
                {/* 섹션 제목 및 설명 */}
                <div className="flex flex-col text-center w-full mb-20">
                    <div className="space-y-6">
                        <p className="lg:w-4/5 mx-auto leading-relaxed text-gray-600 text-base md:text-lg">
                            스냅 더 타이틀의 다양한 촬영 작품들을 만나보세요.
                            <br className="hidden sm:block" />
                            각 촬영 장소별로 분류된 갤러리를 확인하실 수 있습니다.
                        </p>
                        <p className="lg:w-4/5 mx-auto leading-relaxed text-gray-600 text-base md:text-lg">
                            소중한 순간들이 어떻게 아름답게 담겨지는지 느껴보세요.
                        </p>
                    </div>
                </div>

                {/* 중앙선 */}
                <div className="border-t border-gray-200 mb-16"></div>

                {/* 갤러리 섹션 */}
                <div className="space-y-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">Gallery</h2>
                        <div className="space-y-2 mb-8">
                            <p className="text-gray-500 text-sm md:text-base">촬영 장소별로 분류된 작품 갤러리입니다.</p>
                            <p className="text-gray-500 text-sm md:text-base">이미지를 클릭하면 확대해서 보실 수 있습니다.</p>
                        </div>

                        {/* 카테고리 탭 */}
                        <div className="flex justify-center flex-wrap gap-3 mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryChange(category)}
                                    className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-200 text-sm md:text-base ${
                                        selectedCategory === category
                                            ? 'bg-gray-800 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {category}
                                    <span className="ml-2 text-xs opacity-75">
                                        ({photosByCategory[category]?.length || 0})
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* 현재 카테고리 정보 */}
                        <div className="mb-8">
                            <p className="text-gray-600 text-sm md:text-base">
                                <span className="font-medium">{selectedCategory}</span> 카테고리 
                                <span className="mx-2">•</span>
                                총 <span className="font-medium">{currentPhotos.length}</span>장의 사진
                            </p>
                        </div>
                    </div>

                    {/* 갤러리 그리드 */}
                    {currentPhotos.length > 0 ? (
                        <>
                            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                                {paginatedPhotos.map((photo, index) => (
                                    <div key={`photo-${currentPage}-${index}`} className="group break-inside-avoid">
                                        <img
                                            src={photo.src}
                                            alt={photo.alt || `Gallery image ${index + 1}`}
                                            className="w-full h-auto object-cover cursor-pointer shadow-md rounded-sm transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl opacity-0 animate-fade-in"
                                            onClick={() => handleClick(index)}
                                            onLoad={(e) => e.target.classList.remove("opacity-0")}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* 페이지네이션 */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center mt-12 space-x-2">
                                    <button
                                        className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                                            currentPage === 1 
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        이전
                                    </button>
                                    
                                    <div className="flex space-x-1">
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i + 1}
                                                onClick={() => handlePageChange(i + 1)}
                                                className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                                                    currentPage === i + 1
                                                        ? 'bg-gray-800 text-white'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                                            currentPage === totalPages 
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        다음
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">해당 카테고리에 사진이 없습니다.</p>
                        </div>
                    )}

                    {/* 마무리 메시지 */}
                    <div className="mt-16 text-center">
                        <div className="border-t border-gray-200 mb-12"></div>
                        <div className="space-y-6">
                            <p className="lg:w-4/5 mx-auto leading-relaxed text-gray-600 text-base md:text-lg">
                                더 많은 작품들과 촬영 문의는 언제든지 연락주세요.
                                <br className="hidden sm:block" />
                                두 분만의 특별한 순간을 함께 만들어갑니다.
                            </p>
                            <p className="lg:w-4/5 mx-auto leading-relaxed text-gray-700 text-base md:text-lg font-medium">
                                소중한 추억을 아름답게 기록하는 것이 저희의 약속입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {isOpen && currentIndex !== null && currentPhotos.length > 0 && currentPhotos[currentIndex] && (
                <Lightbox
                    mainSrc={currentPhotos[currentIndex].src}
                    nextSrc={currentPhotos[(currentIndex + 1) % currentPhotos.length]?.src}
                    prevSrc={currentPhotos[(currentIndex + currentPhotos.length - 1) % currentPhotos.length]?.src}
                    onCloseRequest={handleClose}
                    onMovePrevRequest={() => moveTo((currentIndex + currentPhotos.length - 1) % currentPhotos.length)}
                    onMoveNextRequest={() => moveTo((currentIndex + 1) % currentPhotos.length)}
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