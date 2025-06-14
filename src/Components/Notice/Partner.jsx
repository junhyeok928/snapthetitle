import React from "react";

const Partnership = () => {
    return (
        <section className="text-gray-700 bg-white relative py-16">
            <div className="container px-6 mx-auto max-w-4xl">
                {/* 섹션 제목 및 설명 */}
                <div className="flex flex-col text-center w-full mb-20">
                    <div className="space-y-6">
                        <p className="lg:w-4/5 mx-auto leading-relaxed text-gray-600 text-base md:text-lg">
                            스냅 더 타이틀을 믿고 함께해주시는 신랑신부님께서 불편한 점이 없도록
                            <br className="hidden sm:block" />
                            모든 제휴샵은 충분한 대화를 나누고, 직접 이용한 뒤 제휴를 진행하고 있습니다.
                        </p>
                        <p className="lg:w-4/5 mx-auto leading-relaxed text-gray-600 text-base md:text-lg">
                            제휴샵 이용 시, 스냅 더 타이틀 고객님이라고 말씀해주셔야 제휴가 적용이 가능하며,
                            <br className="hidden sm:block"/>
                            예약 및 문의는 각 업체로 직접 연락부탁드립니다.
                        </p>
                    </div>
                </div>

                {/* 중앙선 */}
                <div className="border-t border-gray-200 mb-16"></div>

                {/* 제휴샵 리스트 */}
                <div className="space-y-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">Partnership</h2>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-sm md:text-base">스냅 더 타이틀은 제휴샵으로부터 어떠한 커미션도 받지 않습니다.</p>
                            <p className="text-gray-500 text-sm md:text-base">클릭하시면 제휴샵 인스타그램으로 연결됩니다.</p>
                        </div>
                    </div>

                    {/* 제휴샵 목록 */}
                    <div className="grid gap-8 md:gap-12">
                        {/* 제휴샵 1 - 부케 이따금플라워 */}
                        <div className="group">
                            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-2 md:space-y-0 py-6 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="md:w-32 text-center md:text-right">
                                    <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                        부케
                                    </span>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">이따금플라워</h3>
                                    <a
                                        href="https://www.instagram.com/ittageum"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200 hover:underline"
                                    >
                                        @ittageum
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 제휴샵 2 - 수트 사르베토 인천점 */}
                        <div className="group">
                            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-2 md:space-y-0 py-6 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="md:w-32 text-center md:text-right">
                                    <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                        수트
                                    </span>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">사르베토 인천점</h3>
                                    <a
                                        href="https://www.instagram.com/sarbeto_jubro"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200 hover:underline"
                                    >
                                        @sarbeto_jubro
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 제휴샵 3 - 헤어/메이크업 달리아메이크업 */}
                        <div className="group">
                            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-2 md:space-y-0 py-6 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="md:w-32 text-center md:text-right">
                                    <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                        헤어/메이크업
                                    </span>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">달리아메이크업</h3>
                                    <a
                                        href="https://www.instagram.com/dahlia_jenny_k"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200 hover:underline"
                                    >
                                        @dahlia_jenny_k
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 제휴샵 4 - 드레스제작 드베이드 */}
                        <div className="group">
                            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-2 md:space-y-0 py-6 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="md:w-32 text-center md:text-right">
                                    <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                        드레스제작
                                    </span>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">드베이드</h3>
                                    <a
                                        href="https://www.instagram.com/devade_creative"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200 hover:underline"
                                    >
                                        @devade_creative
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partnership;