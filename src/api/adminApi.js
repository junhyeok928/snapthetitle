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

adminClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

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
