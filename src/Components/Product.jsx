import React from 'react';

const Product = () => {
    return (
        <div className="text-gray-900 px-5 flex flex-col gap-10 items-center bg-white">
            <div className="w-full max-w-4xl">
                {/* Product Item A */}
                <div className="py-6">
                    {/* Title and Details */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                        {/* Title */}
                        <div className="w-full lg:w-1/3 lg:pr-6">
                            <h2 className="text-xl font-semibold lg:text-left">
                                WEDDING SNAP SEMI
                            </h2>
                        </div>

                        {/* Details */}
                        <div className="flex-1 pl-6 pt-4">
                            <ul className="space-y-2 text-gray-700">
                                <li>
                                    <span className="font-bold text-gray-800">장소:</span> 1곳
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800">의상:</span> 1벌
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800">촬영 시간:</span> 90분
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800">제공:</span> 원본 전체 및 수정본 10장
                                </li>
                            </ul>
                            <p className="mt-4 text-gray-500 font-medium">- 400,000원</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-300 my-6" />

                {/* Product Item B */}
                <div className="py-6">
                    {/* Title and Details */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                        {/* Title */}
                        <div className="w-full lg:w-1/3 lg:pr-6">
                            <h2 className="text-xl font-semibold lg:text-left">
                                WEDDING SNAP HALF
                            </h2>
                        </div>

                        {/* Details */}
                        <div className="flex-1 pl-6 pt-4">
                            <ul className="space-y-2 text-gray-700">
                                <li>
                                    <span className="font-bold text-gray-800">장소:</span> 2곳
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800">의상:</span> 2벌
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800">촬영 시간:</span> 4시간
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800">제공:</span> 원본 전체 및 수정본 15장
                                </li>
                            </ul>
                            <p className="mt-4 text-gray-500 font-medium">- 600,000원</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-300 my-6" />

                {/* Product Item C */}
                <div className="py-6">
                    {/* Title and Details */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                        {/* Title */}
                        <div className="w-full lg:w-1/3 lg:pr-6">
                            <h2 className="text-xl font-semibold lg:text-left">
                                WEDDING SNAP ALL DAY
                            </h2>
                        </div>

                        {/* Details */}
                        <div className="flex-1 pl-6 pt-4">
                            <ul className="space-y-2 text-gray-700">
                                <li>
                                    <span className="font-bold text-gray-800">장소:</span> 3곳
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800">의상:</span> 3벌
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800">촬영 시간:</span> 6시간
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800">제공:</span> 원본 전체 및 수정본 20장
                                </li>
                            </ul>
                            <p className="mt-4 text-gray-500 font-medium">- 800,000원</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
