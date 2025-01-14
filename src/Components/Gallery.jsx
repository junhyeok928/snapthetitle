import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // 라이트박스 스타일 추가
import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpg';
import image4 from '../img/4.jpg';
import image5 from '../img/main_01.jpg';
import image6 from '../img/main_02.jpg';
const GalleryComponent = () => {
    const [isOpen, setIsOpen] = useState(false);  // 라이트박스 열기 상태
    const [currentIndex, setCurrentIndex] = useState(0);  // 현재 이미지 인덱스

    // Unsplash에서 제공하는 테스트용 이미지 리스트
    const photos = [
        { src: image1, width: 4, height: 3 },
        { src: image2, width: 4, height: 4 },
        { src: image3, width: 4, height: 2 },
        { src: image4, width: 5, height: 3 },
        { src: image5, width: 4, height: 2 },
        { src: image6, width: 6, height: 3 },
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                {/* react-photo-gallery 그리드 레이아웃 */}
                <Gallery
                    photos={photos}
                    onClick={(event, { index }) => {
                        setCurrentIndex(index);  // 클릭한 이미지의 인덱스를 설정
                        setIsOpen(true);  // 라이트박스 열기
                    }}
                />
            </div>

            {/* react-image-lightbox */}
            {isOpen && (
                <Lightbox
                    mainSrc={photos[currentIndex].src}  // 현재 선택된 이미지
                    nextSrc={photos[(currentIndex + 1) % photos.length].src}  // 다음 이미지
                    prevSrc={photos[(currentIndex + photos.length - 1) % photos.length].src}  // 이전 이미지
                    onCloseRequest={() => setIsOpen(false)}  // 라이트박스 닫기
                    onMovePrevRequest={() =>
                        setCurrentIndex((currentIndex + photos.length - 1) % photos.length)
                    }  // 이전 이미지로 이동
                    onMoveNextRequest={() =>
                        setCurrentIndex((currentIndex + 1) % photos.length)
                    }  // 다음 이미지로 이동
                />
            )}
        </section>
    );
};

export default GalleryComponent;
