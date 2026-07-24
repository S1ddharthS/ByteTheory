import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getDatasetStats = async () => {
  const response = await apiClient.get('/dataset/stats');
  return response.data;
};

export const getDatasetImage = async (id) => {
  const response = await apiClient.get(`/dataset/image/${id}`);
  return response.data;
};

export const getMetrics = async () => {
  const response = await apiClient.get('/metrics');
  return response.data;
};

export const getComparison = async () => {
  const response = await apiClient.get('/compare');
  return response.data;
};

export const detect = async (formData) => {
  const response = await apiClient.post('/detect', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
