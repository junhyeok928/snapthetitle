// src/api/adminApi.js
import axios from 'axios';

export async function loginAdmin({ username, password }) {
    const { data } = await axios.post('/api/admin/login', { username, password });
    return data;
}

export const adminClient = axios.create({
    baseURL: '/api/admin',
    headers: { 'Content-Type': 'application/json' },
});

// Attach token to every request
adminClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Product APIs
export async function fetchProducts(year) {
    const config = {};
    if (year != null) config.params = { year };
    const { data } = await adminClient.get('/products', config);
    return data;
}
export async function createProduct(product) {
    const { data } = await adminClient.post('/products', product);
    return data;
}
export async function updateProduct(id, product) {
    const { data } = await adminClient.put(`/products/${id}`, product);
    return data;
}
export async function deleteProduct(id) {
    await adminClient.delete(`/products/${id}`);
}

// FAQ APIs
export async function fetchFaqs() {
    const { data } = await adminClient.get('/faqs');
    return data;
}
export async function createFaq(faq) {
    const { data } = await adminClient.post('/faqs', faq);
    return data;
}
export async function updateFaq(id, faq) {
    const { data } = await adminClient.put(`/faqs/${id}`, faq);
    return data;
}
export async function deleteFaq(id) {
    await adminClient.delete(`/faqs/${id}`);
}

// Guide APIs
export async function fetchGuides() {
    const { data } = await adminClient.get('/guides');
    return data;
}
export async function createGuide(guide) {
    const { data } = await adminClient.post('/guides', guide);
    return data;
}
export async function updateGuide(id, guide) {
    const { data } = await adminClient.put(`/guides/${id}`, guide);
    return data;
}
export async function deleteGuide(id) {
    await adminClient.delete(`/guides/${id}`);
}

// Partner APIs
export async function fetchPartners() {
    const { data } = await adminClient.get('/partners');
    return data;
}
export async function createPartner(partner) {
    const { data } = await adminClient.post('/partners', partner);
    return data;
}
export async function updatePartner(id, partner) {
    const { data } = await adminClient.put(`/partners/${id}`, partner);
    return data;
}
export async function deletePartner(id) {
    await adminClient.delete(`/partners/${id}`);
}

// GalleryPhoto CRUD (metadata only)
export async function fetchGalleryPhotos() {
    const { data } = await adminClient.get('/gallery-photos');
    return data;
}
export async function deleteGalleryPhoto(id) {
    await adminClient.delete(`/gallery-photos/${id}`);
}

// GalleryPhoto with files
/**
 * Create gallery photo with metadata and multiple files
 * @param {object} metadata GalleryPhotoDto without attachments
 * @param {File[]} files array of image files
 */
export async function createGalleryPhotoWithFiles(metadata, files) {
    const formData = new FormData();
    formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    files.forEach(file => formData.append('files', file));
    const { data } = await adminClient.post('/gallery-photos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data;
}

/**
 * Update gallery photo metadata and upload additional files
 * @param {number|string} id
 * @param {object} metadata updated GalleryPhotoDto without attachments
 * @param {File[]} [files] optional array of new files
 */
export async function updateGalleryPhotoWithFiles(id, metadata, files) {
    const formData = new FormData();
    formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    if (files && files.length) files.forEach(file => formData.append('files', file));
    const { data } = await adminClient.put(`/gallery-photos/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data;
}
