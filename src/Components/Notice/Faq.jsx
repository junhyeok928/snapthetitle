import React, { useState } from 'react';

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "촬영 장소는 어떻게 정해지나요?",
            answer: "주로 인천과 서울에서 촬영하며 이외에 지정해 주시는 장소에서 진행되거나, \n" +
                "그렇지 않을 경우에는 원하는 사진이나 분위기를 보고 장소를 제안드립니다. \n" +
                "두분이 처음 만난 곳이나 자주 데이트하던 곳과 같이 의미있는 장소도 좋습니다.",
            category: "촬영 정보"
        },
        {
            question: "바다 촬영을 하고 싶어요.",
            answer: "타이틀의 바다 촬영은 서해에서 진행됩니다. \n" +
                "서해바다는 물때가 맞아야 촬영이 가능하기 때문에 미리 체크는 필수입니다, \n" +
                "예약문의 시, 바다 촬영을 희망하는 점을 말씀해주셔야 물때 확인이 가능합니다.",
            category: "촬영 정보"
        },
        {
            question: "비가 오거나 흐린 날씨에는 일정변경이 가능한가요?",
            answer: "* 우천 시 촬영은 진행하지 않습니다. \n" +
                "촬영일 일주일 전부터 예보를 확인하여 비 예보가 있으면 촬영일 변경을 진행합니다. \n" +
                "촬영일 변경이 불가피 할 경우 반드시 실내 스튜디오 대관을 진행하셔야 촬영이 가능한 점 숙지 부탁드리며, \n" +
                "우천 촬영 불가로 인한 취소 시, 전액 환불해드립니다. \n" +
                "단, 흐린 날의 경우 그대로 촬영이 진행되지만, 걱정되신다면 1회 촬영일 변경이 가능하오니 편하게 말씀해주세요. ",
            category: "일정 변경"
        },
        {
            question: "헬퍼는 필수인가요?",
            answer: "가볍고 짧은 드레스 / 헤어변형을 하지 않을 경우에는 헬퍼가 있지않아도 괜찮습니다. \n" +
                "이외의 경우 헬퍼 동행을 적극 추천드립니다. ",
            category: "촬영 준비"
        },
        {
            question: "반려견과 함께 촬영하고 싶어요.",
            answer: "저도 치와와 보호자로서 반려견과 함께 추억을 남기고 싶은 마음을 누구보다 잘 알기에 추가 비용은 따로 없으나, \n" +
                "반려견이 가장 좋아하는 간식을 필히 준비해주세요. \n" +
                "추가로 함께하지 않는 동안 반려견을 케어해 줄 동행인이 계시는 것이 좋습니다.",
            category: "특별 촬영"
        },
        {
            question: "환복은 어디서 진행하나요?",
            answer: "촬영지에 있는 화장실에서 주로 환복합니다.\n" +
                "다음 촬영지에 화장실이 없거나 청결하지 않을 경우엔 출발하기 전 환복을 하고 출발하기도하며, 자차에서 갈아입는 분들도 종종 계십니다.",
            category: "촬영 준비"
        },
        {
            question: "계절화 촬영을 하고 싶어요.",
            answer: "매년 달라지는 개화시기와 장소 컨디션으로 계절화 촬영은 장담 드리기 어렵습니다. \n" +
                "휴무에 틈틈히 계절화 스팟을 방문해 상태를 둘러보고 있으니, \n" +
                "가능하다면 꼭 찍어요 우리!",
            category: "특별 촬영"
        },
        {
            question: "야외촬영은 많이 힘든가요?",
            answer: "네, 힘듭니다. \n" +
                "여름에 촬영하시는 분들은, 손풍기나 얼음물을 \n" +
                "겨울에 촬영하시는 분들은, 입고 벗기 편한 겉옷과 핫팩 등 촬영일 온도에 맞는 용품들을 \n" +
                "챙기셔서 컨디션 유지에 신경써주시고, 간단하게 드실 간식을 챙겨서 틈틈히 체력을 보충해주시는 것이 좋습니다. 과도한 다이어트는 추천드리지 않습니다. \n" +
                "한 장소에서도 여러 곳을 이동하게 됩니다. \n" +
                "이동 시에 신을 편한 신발을 챙겨주세요. 경험상 크록스가 가장 편합니다.",
            category: "촬영 준비"
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('전체');

    const categories = ['전체', ...new Set(faqs.map(faq => faq.category))];

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === '전체' || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="text-gray-700 bg-white relative py-16">
            <div className="container px-6 mx-auto max-w-4xl">
                {/* 섹션 제목 및 설명 */}
                <div className="flex flex-col text-center w-full mb-20">
                    <div className="space-y-6">
                        <p className="lg:w-4/5 mx-auto leading-relaxed text-gray-600 text-base md:text-lg">
                            촬영에 대해 궁금한 점들이 있으시다면 언제든지 편하게 문의해주세요.
                            <br className="hidden sm:block" />
                            자주 묻는 질문들을 미리 확인하시면 더욱 도움이 됩니다.
                        </p>
                    </div>
                </div>

                {/* 중앙선 */}
                <div className="border-t border-gray-200 mb-16"></div>

                {/* FAQ 리스트 */}
                <div className="space-y-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">FAQ</h2>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-sm md:text-base">촬영과 관련된 궁금한 점들을 확인해보세요.</p>
                            
                            {/* 검색 및 카테고리 필터 */}
                            <div className="mt-8 space-y-6">
                                {/* 검색바 */}
                                <div className="max-w-md mx-auto">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="질문 검색..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:border-gray-400 focus:outline-none transition-colors duration-200 bg-white"
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* 카테고리 필터 */}
                                <div className="flex flex-wrap justify-center gap-2">
                                    {categories.map(category => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                                                selectedCategory === category
                                                    ? 'bg-gray-700 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ 목록 */}
                    <div className="grid gap-8 md:gap-12">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <div key={index} className="group">
                                    <div 
                                        className="py-6 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div className="flex items-start justify-between space-x-4">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-col space-y-3">
                                                    <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium self-start">
                                                        {faq.category}
                                                    </span>
                                                    <h3 className="text-xl font-medium text-gray-800 leading-relaxed">
                                                        {faq.question}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 ml-4">
                                                <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 ${
                                                    activeIndex === index ? 'rotate-45' : ''
                                                }`}>
                                                    <span className="text-xl font-light text-gray-500">+</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* 답변 섹션 */}
                                        <div className={`overflow-hidden transition-all duration-300 ease-out ${
                                            activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                            <div className="mt-6 pt-6 border-t border-gray-200">
                                                <div className="pl-0">
                                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-16">
                                <div className="space-y-4">
                                    <p className="text-gray-500 text-lg">
                                        검색 결과가 없습니다.
                                    </p>
                                    <p className="text-gray-400 text-base">
                                        다른 검색어로 다시 시도해주세요.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;