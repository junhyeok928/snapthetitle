import React from 'react';

const ProductItem = ({ title, details, price }) => {
    return (
        <div className="py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                <div className="w-full lg:w-1/3 lg:pr-6">
                    <h2 className="text-2xl font-semibold lg:text-left text-gray-800">{title}</h2>
                </div>
                <div className="flex-1 pl-6 pt-4">
                    <ul className="space-y-2 text-gray-700">
                        {details.map((detail, index) => (
                            <li key={index}>
                                <span className="font-bold text-gray-800">{detail.label}:</span> {detail.value}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-gray-500 font-medium">- {price}</p>
                </div>
            </div>
        </div>
    );
};

const Product = () => {
    const products = [
        {
            title: 'WEDDING SNAP SEMI',
            details: [
                { label: '장소', value: '1곳' },
                { label: '의상', value: '1벌' },
                { label: '촬영 시간', value: '90분' },
                { label: '제공', value: '원본 전체 및 수정본 10장' },
            ],
            price: '400,000원',
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
        },
    ];

    return (
        <div className="text-gray-900 px-5 flex flex-col gap-10 items-center bg-white">
            <div className="w-full max-w-4xl">
                {products.map((product, index) => (
                    <React.Fragment key={index}>
                        <ProductItem
                            title={product.title}
                            details={product.details}
                            price={product.price}
                        />
                        {index < products.length - 1 && <hr className="border-gray-300 my-6" />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Product;