import React from 'react';

function Guide() {
    return (
        <section className="text-gray-600 body-font px-5">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-1">촬영 소개</h2>
                <span className="inline-block h-0.5 w-12 rounded bg-gray-700 mb-6"></span>
                <div className="flex flex-col text-center w-full my-32">
                    <p className="lg:w-4/5 mx-auto leading-relaxed text-sm sm:text-sm md:text-base lg:text-base">
                        상담부터 촬영, 보정까지 모두 1인 여성 포토그래퍼가 진행합니다.
                        <br />
                        촬영중에는 신랑신부님께 집중하므로 답변이 늦을 수 있는 점 양해부탁드립니다.
                    </p>
                </div>
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row items-start">
                        <span className="md:w-1/4 font-bold text-gray-700 pb-4">촬영 장소</span>
                        <div className="md:w-3/4 text-gray-600 space-y-2 text-sm sm:text-sm md:text-base lg:text-base">
                            <p>주로 인천과 서울에서 촬영하며, 이 외 지역은 출장비가 발생합니다. 장소와 동선은 촬영 시기를 고려하여 장소를 제안드리고 있습니다. 물론, 두 분이 따로 지정해주시는 장소도 좋습니다.</p>
                            <br />
                            <p className="font-semibold">계절화</p>
                            <p>매년 달라지는 개화 시기와 장소 컨디션으로 인해 장담드리기 어렵습니다.</p>
                            <br />
                            <p className="font-semibold">바다</p>
                            <p>서해에서 진행되므로 물때가 맞는 날에만 촬영이 가능합니다. 바다 촬영을 원하실 경우, 미리 말씀해주시면 물때 확인을 진행해드리겠습니다.</p>
                            <br />
                            <p className="font-semibold">스튜디오</p>
                            <p>스튜디오 촬영을 따로 하지 않으실 경우, 렌탈스튜디오 대관을 이용한 실내 촬영 추가를 추천드립니다.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start pb-5">
                        <span className="md:w-1/4 font-bold text-gray-700 pb-4">촬영 시간</span>
                        <p className="md:w-3/4 text-gray-600 text-sm sm:text-sm md:text-base lg:text-base">촬영 장소와 촬영 당일 일몰 시간을 기준으로 촬영 시작 시간이 결정됩니다. 상품에 기재된 촬영 시간에는 이동과 환복 등 모든 시간이 포함되어 있습니다.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start pb-5">
                        <span className="md:w-1/4 font-bold text-gray-700 pb-4">이동</span>
                        <p className="md:w-3/4 text-gray-600 text-sm sm:text-sm md:text-base lg:text-base">촬영 중 이동은 각자의 차량을 타고 이동하며, 도착 지연 시 반드시 촬영 담당자와 연락을 취하여야 합니다.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start pb-5">
                        <span className="md:w-1/4 font-bold text-gray-700 pb-4">날씨</span>
                        <p className="md:w-3/4 text-gray-600 text-sm sm:text-sm md:text-base lg:text-base">우천 시 촬영이 불가합니다. 우천으로 인한 일정 변경은 횟수 제한 없이 가능하지만, 일정 변경이 불가한 경우에는 렌탈 스튜디오 대관을 진행해주셔야 촬영이 가능합니다. 흐린 날의 경우 일정 변경은 진행하지 않지만, 개인 사정과 날씨로 인한 촬영일 변경은 촬영 하루 전까지 1회 가능합니다.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start pb-5">
                        <span className="md:w-1/4 font-bold text-gray-700 pb-4">예약</span>
                        <p className="md:w-3/4 text-gray-600 text-sm sm:text-sm md:text-base lg:text-base">예약은 카카오톡 채널 <a href="http://pf.kakao.com/_HquIG" className="text-blue-500 underline">스냅더타이틀</a>을 통해 받고 있습니다. 예약 양식에 따라 신청해 주세요.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start pb-5">
                        <span className="md:w-1/4 font-bold text-gray-700 pb-4">파일 전달</span>
                        <p className="md:w-3/4 text-gray-600 text-sm sm:text-sm md:text-base lg:text-base">원본은 촬영일 기준 최소 10일 - 최대 14일 소요되며, 메일로 전송드립니다. 원본의 보관은 발송일 기준 60일 간 유지되며, 반드시 모든 파일을 백업해 두셔야 합니다. 보정본은 셀렉일 기준 최소 5주 - 최대 6주 소요되며, 급하게 필요할 경우 선보정 옵션을 이용하시면 10일 이내 발송이 가능합니다.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start pb-5">
                        <span className="md:w-1/4 font-bold text-gray-700 pb-4">환불 정책</span>
                        <p className="md:w-3/4 text-gray-600 text-sm sm:text-sm md:text-base lg:text-base">계약금은 상품 금액의 50%를 입금하면 확정됩니다. 예약 확정 후 48시간 이내에는 전액 환불 가능하며, 이후 일정에 따라 차등 환불됩니다. 촬영일 기준 60일 전 50% 환불, 30일 이내 20% 환불, 2주 이내 환불 불가입니다.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start pb-5">
                        <span className="md:w-1/4 font-bold text-gray-700 pb-4">헤어 & 메이크업</span>
                        <p className="md:w-3/4 text-gray-600 text-sm sm:text-sm md:text-base lg:text-base">야외 촬영 시 바람에 의한 머리날림이 있으므로 헤어 고정에 신경 써주세요. 미용렌즈 착용은 가능하나 장시간 착용이 익숙하지 않은 경우 주의가 필요합니다. 셀프 메이크업은 추천드리지 않으며, 자연스럽고 편안한 무드의 메이크업을 권장합니다.</p>
                    </div>
                </div>
                {/* 중앙선 */}
                <div className="border-t-2 border-gray-300 my-10"></div>
                <div className="flex flex-col text-center w-full mb-12 mt-8">
                    <p className="lg:w-4/5 mx-auto leading-relaxed text-sm sm:text-sm md:text-base lg:text-base">
                        준비하시면서 고민되거나 어려운 부분이 있으시다면 언제든지 연락주세요.
                        <br />
                        함께 고민하겠습니다.
                    </p>
                    <p className="lg:w-4/5 mx-auto leading-relaxed text-sm sm:text-sm md:text-base lg:text-base mt-4">
                        두 분의 무드가 가득 담긴 타이틀을 기다리겠습니다.
                        <br />
                        감사합니다.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Guide;
