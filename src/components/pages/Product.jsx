import React, { useState } from 'react';

function Product() {
    const [selectedYear, setSelectedYear] = useState('2025');

    const productsByYear = {
        '2025': [
            {
                title: 'WEDDING SNAP SEMI',
                details: [
                    { label: '장소', value: '1곳' },
                    { label: '의상', value: '1벌' },
                    { label: '촬영 시간', value: '90분' },
                    { label: '제공', value: '원본 전체 및 수정본 10장' },
                ],
                price: '400,000원',
                description: '신혼부부의 첫 번째 추억을 담는 기본적인 패키지입니다. 간소하지만 소중한 순간들을 자연스럽게 포착해드립니다.'
            },
            {
                title: 'WEDDING SNAP HALF',
                details: [
                    { label: '장소', value: '2곳' },
                    { label: '의상', value: '2벌' },
                    { label: '촬영 시간', value: '4시간' },
                    { label: '제공', value: '원본 전체 및 수정본 15장' },
                ],
                price: '600,000원',
                description: '다양한 분위기의 사진을 원하시는 분들께 추천드리는 패키지입니다. 충분한 시간으로 여유롭게 촬영을 진행합니다.'
            },
            {
                title: 'WEDDING SNAP ALL DAY',
                details: [
                    { label: '장소', value: '3곳' },
                    { label: '의상', value: '3벌' },
                    { label: '촬영 시간', value: '6시간' },
                    { label: '제공', value: '원본 전체 및 수정본 20장' },
                ],
                price: '800,000원',
                description: '하루 종일 함께하며 다채로운 무드와 장소에서 촬영하는 프리미엄 패키지입니다. 특별한 날을 온전히 기록해드립니다.'
            },
        ],
        '2026': [
            {
                title: 'WEDDING SNAP BASIC',
                details: [
                    { label: '장소', value: '1곳' },
                    { label: '의상', value: '1벌' },
                    { label: '촬영 시간', value: '2시간' },
                    { label: '제공', value: '원본 전체 및 수정본 15장' },
                ],
                price: '450,000원',
                description: '2026년 업그레이드된 기본 패키지입니다. 더 많은 수정본과 향상된 촬영 품질을 제공합니다.'
            },
            {
                title: 'WEDDING SNAP PREMIUM',
                details: [
                    { label: '장소', value: '3곳' },
                    { label: '의상', value: '3벌' },
                    { label: '촬영 시간', value: '5시간' },
                    { label: '제공', value: '원본 전체 및 수정본 25장' },
                ],
                price: '750,000원',
                description: '프리미엄 촬영 경험을 선사하는 패키지입니다. 다양한 컨셉과 로케이션에서 완벽한 순간을 포착합니다.'
            },
            {
                title: 'WEDDING SNAP DELUXE',
                details: [
                    { label: '장소', value: '4곳' },
                    { label: '의상', value: '4벌' },
                    { label: '촬영 시간', value: '8시간' },
                    { label: '제공', value: '원본 전체 및 수정본 30장' },
                ],
                price: '1,000,000원',
                description: '최고급 서비스를 제공하는 디럭스 패키지입니다. 하루 종일 전담 스태프와 함께하는 특별한 경험을 선사합니다.'
            },
        ]
    };

    const years = Object.keys(productsByYear);
    const currentProducts = productsByYear[selectedYear];

    return (
        <section className="text-gray-700 bg-white relative py-16">
            <div className="container px-6 mx-auto max-w-7xl">
                {/* 섹션 제목 및 설명 */}
                <div className="flex flex-col text-center w-full mb-20">
                    <div className="space-y-6">
                        <p className="lg:w-4/5 mx-auto leading-relaxed text-gray-600 text-base md:text-lg">
                            스냅 더 타이틀의 다양한 촬영 패키지를 확인해보세요.
                            <br className="hidden sm:block" />
                            각 패키지별 상세 정보와 가격을 비교하실 수 있습니다.
                        </p>
                        <p className="lg:w-4/5 mx-auto leading-relaxed text-gray-600 text-base md:text-lg">
                            문의나 예약은 언제든지 편하게 연락주세요.
                        </p>
                    </div>
                </div>

                {/* 중앙선 */}
                <div className="border-t border-gray-200 mb-16"></div>

                {/* 상품 리스트 */}
                <div className="space-y-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">Product</h2>
                        <div className="space-y-2 mb-8">
                            <p className="text-gray-500 text-sm md:text-base">원하시는 촬영 패키지를 선택해보세요.</p>
                            <p className="text-gray-500 text-sm md:text-base">두 분만의 특별한 순간을 함께 만들어갑니다.</p>
                        </div>

                        {/* 년도 탭 */}
                        <div className="flex justify-center space-x-4 mb-12">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                                        selectedYear === year
                                            ? 'bg-gray-800 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {year}년
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 상품 목록 - 가로 정렬 */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                        {currentProducts.map((product, index) => (
                            <div key={index} className="group">
                                <div className="py-6 px-6 lg:py-4 lg:px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 h-full">
                                    <div className="text-center mb-6 lg:mb-4">
                                        <h3 className="text-lg font-medium text-gray-800 mb-3 lg:mb-2">
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* 패키지 상세 정보 */}
                                    <div className="space-y-3 lg:space-y-2 mb-6 lg:mb-4">
                                        {product.details.map((detail, detailIndex) => (
                                            <div key={detailIndex} className="bg-gray-50 rounded-lg p-3 lg:p-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium text-gray-800 text-sm">
                                                        {detail.label}
                                                    </span>
                                                    <span className="text-gray-600 text-sm">
                                                        {detail.value}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* 가격 정보 */}
                                    <div className="text-center pt-4 lg:pt-3 border-t border-gray-200">
                                        <span className="text-lg font-semibold text-gray-900">
                                            {product.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 마무리 메시지 */}
                    <div className="mt-16 text-center">
                        <div className="border-t border-gray-200 mb-12"></div>
                        <div className="space-y-6">
                            <p className="lg:w-4/5 mx-auto leading-relaxed text-gray-600 text-base md:text-lg">
                                패키지 선택에 고민이 되시거나 추가 문의사항이 있으시면 언제든지 연락주세요.
                                <br className="hidden sm:block" />
                                두 분에게 가장 적합한 촬영을 함께 계획해드리겠습니다.
                            </p>
                            <p className="lg:w-4/5 mx-auto leading-relaxed text-gray-700 text-base md:text-lg font-medium">
                                소중한 순간을 아름답게 담아내는 것이 저희의 약속입니다.
                                <br className="hidden sm:block" />
                                감사합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;