import React, { useEffect, useState, useRef } from 'react';
import {
    fetchGalleryPhotos,
    createGalleryPhotoWithFiles,
    deleteGalleryPhoto,
    updateGalleryPhotoWithFiles
} from '../../api/adminApi';

export default function GalleryManagement() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [category, setCategory] = useState('바다');
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const fileInputRef = useRef(null);

    const loadPhotos = async () => {
        setLoading(true);
        try {
            const data = await fetchGalleryPhotos();
            setPhotos(data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPhotos();
    }, []);

    const resetForm = () => {
        setEditingId(null);
        setCategory('바다');
        setFiles([]);
        setPreviews([]);
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

    const handleFileChange = e => {
        const selected = Array.from(e.target.files);
        setFiles(selected);
        setPreviews(selected.map(file => URL.createObjectURL(file)));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        // 새로 추가할 때는 파일이 반드시 필요, 수정할 때는 선택 사항
        if (!editingId && files.length === 0) return;
        setLoading(true);
        try {
            if (editingId) {
                await updateGalleryPhotoWithFiles(editingId, { category }, files);
            } else {
                await createGalleryPhotoWithFiles({ category }, files);
            }
            await loadPhotos();
            resetForm();
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = photo => {
        setEditingId(photo.id);
        setCategory(photo.category || '바다');
        setFiles([]);
        setPreviews(photo.attachments.map(att => att.fileUrl));
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

    const handleDelete = async id => {
        if (!window.confirm('삭제하시겠습니까?')) return;
        setLoading(true);
        try {
            await deleteGalleryPhoto(id);
            await loadPhotos();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">갤러리 관리</h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        className="p-2 border rounded"
                    >
                        <option value="바다">바다</option>
                        <option value="들판">들판</option>
                        <option value="스튜디오">스튜디오</option>
                        <option value="기타">기타</option>
                    </select>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        className="p-2 border rounded"
                        required={!editingId}
                    />
                    <div className="flex space-x-2 overflow-x-auto">
                        {previews.map((url, idx) => (
                            <img key={idx} src={url} alt="preview" className="h-24 object-contain border rounded" />
                        ))}
                    </div>
                </div>
                <div className="flex space-x-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        {editingId ? '수정' : '추가'}
                    </button>
                    {editingId && (
                        <button
                            type="button"
                            onClick={resetForm}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            취소
                        </button>
                    )}
                </div>
            </form>

            {/* List */}
            {loading ? (
                <p className="text-center py-10 text-gray-500">로딩 중...</p>
            ) : (
                <div className="bg-white rounded-xl shadow overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 table-auto">
                        <thead className="bg-gray-100">
                        <tr>
                            {['ID', '카테고리', '미리보기', 'URL', '조작'].map((h, idx) => (
                                <th
                                    key={idx}
                                    className="px-4 py-2 text-left text-sm font-medium text-gray-700"
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {photos.map(photo => (
                            <tr
                                key={photo.id}
                                className="hover:bg-gray-50 even:bg-white odd:bg-gray-50 transition-colors"
                            >
                                <td className="px-4 py-3 text-sm text-gray-600">{photo.id}</td>
                                <td className="px-4 py-3 text-sm text-gray-600">{photo.category}</td>
                                <td className="px-4 py-3">
                                    <div className="flex space-x-2">
                                        {photo.attachments.map((att, idx) => (
                                            <img
                                                key={idx}
                                                src={att.fileUrl}
                                                alt={`thumb-${idx}`}
                                                className="h-16 object-contain rounded"
                                            />
                                        ))}
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm space-y-1 max-w-xs">
                                    {photo.attachments.map((att, idx) => (
                                        <a
                                            key={idx}
                                            href={att.fileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 truncate hover:underline block"
                                        >
                                            {att.fileUrl}
                                        </a>
                                    ))}
                                </td>
                                <td className="px-4 py-3 text-sm space-x-2">
                                    <button
                                        onClick={() => handleEdit(photo)}
                                        className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
                                    >
                                        수정
                                    </button>
                                    <button
                                        onClick={() => handleDelete(photo.id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
            )}
        </div>
    );
}
