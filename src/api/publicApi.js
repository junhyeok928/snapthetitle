// src/api/publicApi.js
export async function fetchGalleryPhotos() {
    const res = await fetch(`/api/gallery-photos`);
    if (!res.ok) {
        throw new Error("갤러리 데이터를 불러오지 못했습니다");
    }

    const data = await res.json();

    return data.map(item => ({
        id: item.id,
        category: item.category,
        thumbnailUrl: item.thumbnailUrl ? `${item.thumbnailUrl}` : null,
        originalUrl: item.originalUrl ? `${item.originalUrl}` : null,
    }));
}

// 연도 목록 조회
export async function fetchProductYears() {
    const res = await fetch(`/api/products/years`);
    if (!res.ok) throw new Error("상품 연도 목록을 불러오지 못했습니다");
    return await res.json(); // 예: [2025, 2026]
}

export async function fetchProducts(year) {
    const res = await fetch(`/api/products?year=${year}`);
    if (!res.ok) {
        throw new Error("상품 데이터를 불러오지 못했습니다");
    }

    const data = await res.json();

    return data.map(item => ({
        id: item.id,
        year: item.year,
        name: item.name,
        description: item.description,
        price: item.price,
        options: item.options?.map(opt => ({
            id: opt.id,
            label: opt.label,
            value: opt.value,
            displayOrder: opt.displayOrder
        })) ?? []
    }));
}

export async function fetchFaqs() {
    const res = await fetch('/api/faqs');
    if (!res.ok) throw new Error('FAQ를 불러오는 데 실패했습니다.');
    return await res.json();
}

export async function fetchGuides() {
    const res = await fetch('/api/guides');
    if (!res.ok) throw new Error('가이드를 불러오는 데 실패했습니다.');
    return await res.json();
}

export async function fetchPartners() {
    const res = await fetch('/api/partners');
    if (!res.ok) throw new Error('파트너 정보를 불러오는 데 실패했습니다.');
    return await res.json();
}