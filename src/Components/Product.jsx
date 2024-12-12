import React from 'react';

const Product = () => {
    return (
        <div className="text-gray-900 min-h-screen px-5">

            {/* Post Content */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">작가이력</h2>
                <ul className="list-disc ml-5 mb-6">
                    <li className="text-lg">사진영상학 전공</li>
                    <li className="text-lg">웨딩스튜디오 메인작가</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">촬영</h2>
                <p className="mb-6">
                    인천과 서울에서 촬영합니다. 촬영 장소와 동선은 계절과 날씨를 고려하여 2-3곳을 제안드리며, 요청 장소도 좋습니다.
                </p>
                <p className="mb-6">
                    올데이 상품 기준 촬영시간은 5시간이며, 시작 시간은 계절에 따라 달라집니다. 각자의 차량으로 첫 장소에서 만나 시작합니다.
                </p>

                <h2 className="text-2xl font-semibold mb-4">파일</h2>
                <p className="mb-6">
                    촬영 후 7일 이내 작가의 1차 셀렉이 이뤄진 원본 500장이 제공됩니다. 보정본은 셀렉일 기준 30일 이내 발송됩니다.
                </p>
                <p className="mb-6">원본 보관기간은 촬영 후 3개월입니다. 반드시 백업 부탁드립니다.</p>

                <h2 className="text-2xl font-semibold mb-4">의상 및 메이크업</h2>
                <p className="mb-6">
                    스냅 더 타이틀은 촬영만을 진행하기 때문에 촬영에 필요한 의상 및 헤어/메이크업은 직접 준비하셔야 합니다.
                </p>
                <p className="mb-6">의상은 최대 3벌까지 가능합니다. 작가 소장 드레스 대여가 가능하오니, 대여를 희망하시는 분은 촬영 전 문의바랍니다.</p>

                <h2 className="text-2xl font-semibold mb-4">보정</h2>
                <p className="mb-6">
                    얼굴 윤곽과 몸매 라인, 피부 보정이 포함됩니다. 이 외 셀카어플 같은 미용 보정과, 합성, 개별 키 늘리기, 치아, 그림자, 의상 주름, 잔머리는 보정하지 않습니다.
                </p>

                <h2 className="text-2xl font-semibold mb-4">날씨</h2>
                <p className="mb-6">
                    날씨와 환경의 영향을 많이 받는 야외스냅의 특성상 폭우나 폭설 등 촬영이 불가하다고 판단될 경우 촬영일 1일 전 협의를 통해 날짜를 조정합니다.
                </p>
                <p className="mb-6">날짜 변경이 불가피 할 경우 렌탈 스튜디오를 이용한 실내 촬영 진행을 추천드립니다.</p>

                <h2 className="text-2xl font-semibold mb-4">기타</h2>
                <p className="mb-6">
                    신랑님은 면도를 깔끔히 해주시고, 수염이 빨리 자라는 분은 휴대용 면도기 지참을 추천드립니다. 신부님 구두굽이 너무 얇을 경우 빠질 수 있습니다.
                </p>
                <p className="mb-6">또한 도보 이동이 많기 때문에 이동 시 신을 편한 신발을 지참해주세요. 비침에 대비한 속옷을 착용해주세요.</p>
                <p className="mb-6">
                    안경을 착용하실 경우 빛 반사는 수정불가한 사항이므로 알 없는 안경테를 준비해주세요. 촬영 전 간단한 식사를 추천드립니다.
                </p>

                <h2 className="text-2xl font-semibold mb-4">예약</h2>
                <p className="mb-6">예약은 카카오톡 채널 [스냅더타이틀]을 통해 받고 있습니다.</p>
                <p className="mb-6">
                    성함: <br />
                    연락처: <br />
                    본식일: <br />
                    희망 촬영일: <br />
                </p>
                <p className="mb-6">
                    위 내용을 적어 작성해주세요. 촬영일이 정해진 후 예약금 20만원을 보내주시면 예약이 확정됩니다.
                </p>

                <h2 className="text-2xl font-semibold mb-4">환불</h2>
                <p className="mb-6">
                    타인 양도는 불가하며, 촬영 후에는 어떠한 사유에도 환불이 불가합니다. 예약 확정 후 48시간 이내 예약금 100% 환불
                </p>
                <p className="mb-6">촬영일 기준 60일 전 예약금 50% 환불</p>
                <p className="mb-6">촬영일 기준 30일 이내 예약금 30% 환불</p>
                <p className="mb-6">촬영일 기준 2주 이내 예약금 환불 불가</p>
            </div>
        </div>
    );
};

export default Product;
