import React from "react";

const Partnership = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 mx-auto">
                {/* 섹션 제목 및 설명 */}
                <div className="flex flex-col text-center w-full mb-12 mt-8">
                    <p className="lg:w-4/5 mx-auto leading-relaxed text-sm sm:text-sm md:text-base lg:text-base">
                        스냅 더 타이틀을 믿고 함께해주시는 신랑신부님께서 불편한 점이 없도록
                        <br />
                        모든 제휴샵은 충분한 대화를 나누고, 직접 이용한 뒤 제휴를 진행하고 있습니다.
                    </p>
                    <p className="lg:w-4/5 mx-auto leading-relaxed text-sm sm:text-sm md:text-base lg:text-base mt-4">
                        제휴샵 이용 시, 스냅 더 타이틀 고객님이라고 말씀해주셔야 제휴가 적용이 가능하며,
                        <br/>
                        예약 및 문의는 각 업체로 직접 연락부탁드립니다.
                    </p>
                </div>

                {/* 중앙선 */}
                <div className="border-t-2 border-gray-300 my-10"></div>

                {/* 제휴샵 리스트 */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">Partnership</h2>
                        <p className="text-gray-500 mt-1 text-sm sm:text-xs md:text-sm lg:text-base">스냅 더 타이틀은 제휴샵으로부터 어떠한 커미션도 받지 않습니다.</p>
                        <p className="text-gray-500 mt-1 text-sm sm:text-xs md:text-sm lg:text-base">클릭하시면 제휴샵 인스타그램으로 연결됩니다.</p>
                    </div>

                    {/* 제휴샵 1 - 부케 이따금플라워 */}
                    <div className="flex items-center justify-between space-x-4">
                        {/* 항목명 - 오른쪽 정렬 */}
                        <div className="flex-1 text-right">
                            <p className="text-lg font-medium text-gray-800 sm:text-base md:text-lg">부케</p>
                        </div>

                        {/* 업체명과 인스타그램 계정 - 왼쪽 정렬 */}
                        <div className="flex-1 text-left">
                            <p className="text-lg font-medium text-gray-800 sm:text-base md:text-lg">이따금플라워</p>
                            <a
                                href="https://www.instagram.com/ittageum"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500 hover:text-yellow-600 text-sm sm:text-xs md:text-sm lg:text-base"
                            >
                                @ittageum
                            </a>
                        </div>
                    </div>

                    {/* 제휴샵 2 - 수트 사르베토 인천점 */}
                    <div className="flex items-center justify-between space-x-4">
                        {/* 항목명 - 오른쪽 정렬 */}
                        <div className="flex-1 text-right">
                            <p className="text-lg font-medium text-gray-800 sm:text-base md:text-lg">수트</p>
                        </div>

                        {/* 업체명과 인스타그램 계정 - 왼쪽 정렬 */}
                        <div className="flex-1 text-left">
                            <p className="text-lg font-medium text-gray-800 sm:text-base md:text-lg">사르베토 인천점</p>
                            <a
                                href="https://www.instagram.com/sarbeto_jubro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500 hover:text-yellow-600 text-sm sm:text-xs md:text-sm lg:text-base"
                            >
                                @sarbeto_jubro
                            </a>
                        </div>
                    </div>

                    {/* 제휴샵 3 - 헤어/메이크업 달리아메이크업 */}
                    <div className="flex items-center justify-between space-x-4">
                        {/* 항목명 - 오른쪽 정렬 */}
                        <div className="flex-1 text-right">
                            <p className="text-lg font-medium text-gray-800 sm:text-base md:text-lg">헤어/메이크업</p>
                        </div>

                        {/* 업체명과 인스타그램 계정 - 왼쪽 정렬 */}
                        <div className="flex-1 text-left">
                            <p className="text-lg font-medium text-gray-800 sm:text-base md:text-lg">달리아메이크업</p>
                            <a
                                href="https://www.instagram.com/dahlia_jenny_k"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500 hover:text-yellow-600 text-sm sm:text-xs md:text-sm lg:text-base"
                            >
                                @dahlia_jenny_k
                            </a>
                        </div>
                    </div>

                    {/* 제휴샵 4 - 드레스제작 드베이드 */}
                    <div className="flex items-center justify-between space-x-4">
                        {/* 항목명 - 오른쪽 정렬 */}
                        <div className="flex-1 text-right">
                            <p className="text-lg font-medium text-gray-800 sm:text-base md:text-lg">드레스제작</p>
                        </div>

                        {/* 업체명과 인스타그램 계정 - 왼쪽 정렬 */}
                        <div className="flex-1 text-left">
                            <p className="text-lg font-medium text-gray-800 sm:text-base md:text-lg">드베이드</p>
                            <a
                                href="https://www.instagram.com/devade_creative"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500 hover:text-yellow-600 text-sm sm:text-xs md:text-sm lg:text-base"
                            >
                                @devade_creative
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partnership;
