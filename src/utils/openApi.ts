import { Configuration, UserApi } from '@/generated/typescript-axios';
import axios from 'axios';

const mockApiConfig = new Configuration({
  basePath: process.env.NEXT_PUBLIC_MOCK_API_URL,
});

const mockAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MOCK_API_URL,
  withCredentials: true,
});

const mockUserApi = new UserApi(mockApiConfig, '', mockAxiosInstance);

const apiConfig = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL,
});

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const userApi = new UserApi(apiConfig, '', axiosInstance);

export { mockUserApi, userApi };
