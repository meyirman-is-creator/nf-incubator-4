import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com', // Базовый URL для получения продуктов
});

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get('/products');
  return response.data;
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const response = await axiosInstance.post('/products', product);
  return response.data;
};

const uploadInstance = axios.create({
  baseURL: 'https://fakeapi.platzi.com/en/rest/files', // Базовый URL для загрузки изображений
});

export const uploadFile = async (file: File): Promise<{ url: string }> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await uploadInstance.post('/upload-file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
