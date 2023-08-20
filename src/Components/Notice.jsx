import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
    { id: 1, title: '첫 번째 게시물' },
    { id: 2, title: '두 번째 게시물' },
    // ...더 많은 게시물 추가
];

function Notice() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">게시판</h1>
            <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <div>
            <h2 className="text-xl font-semibold mb-4">게시물 목록</h2>
            <ul className="list-disc pl-6">
                {posts.map((post) => (
                    <li key={post.id} className="mb-2">
                        <Link to={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
            </div></div>
    );
}

export default Notice;