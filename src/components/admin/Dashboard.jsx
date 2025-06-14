// src/components/admin/Dashboard.jsx
import React from 'react';

export default function Dashboard() {
    // TODO: 실제 API 데이터로 대체하세요
    const stats = {
        totalGalleries: 24,
        totalProducts:  12,
        totalFaqs:      8,
        totalGuides:    5,
        totalPartners:  10,
    };

    const cards = [
        { label: '갤러리 항목', value: stats.totalGalleries, bg: 'bg-blue-100', icon: '🖼️' },
        { label: '상품 수',     value: stats.totalProducts,  bg: 'bg-green-100', icon: '📦' },
        { label: 'FAQ 수',      value: stats.totalFaqs,      bg: 'bg-yellow-100', icon: '❓' },
        { label: '가이드 수',   value: stats.totalGuides,    bg: 'bg-purple-100', icon: '📖' },
        { label: '파트너 수',   value: stats.totalPartners,  bg: 'bg-red-100',    icon: '🤝' },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-semibold">관리자 대시보드</h1>

            {/* 카드 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.label}
                        className={`${card.bg} rounded-xl p-6 flex items-center space-x-4 shadow`}
                    >
                        <div className="text-4xl">{card.icon}</div>
                        <div>
                            <p className="text-2xl font-bold">{card.value}</p>
                            <p className="text-gray-700">{card.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 예시 그래프 영역 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <section className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-medium mb-4">월별 방문자 추이</h2>
                    {/* TODO: 차트 컴포넌트 삽입 */}
                    <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                        차트 영역
                    </div>
                </section>
                <section className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-medium mb-4">최근 활동</h2>
                    {/* TODO: 테이블 또는 리스트 삽입 */}
                    <ul className="space-y-2 text-gray-600">
                        <li>05/12 갤러리 3건 추가</li>
                        <li>05/10 상품 1건 수정</li>
                        <li>05/08 FAQ 2건 추가</li>
                        <li>05/05 파트너 1건 삭제</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
