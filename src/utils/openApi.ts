import {
  Configuration,
  SectionApi,
  UserApi,
  UserDiaryApi,
} from '@/generated/typescript-axios';
import axios from 'axios';

// const mockApiConfig = new Configuration({
//   basePath: process.env.NEXT_PUBLIC_MOCK_API_URL,
// });

// const mockAxiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_MOCK_API_URL,
// });

const apiConfig = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL,
});

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const userApi = new UserApi(apiConfig, '', axiosInstance);
const sectionApi = new SectionApi(apiConfig, '', axiosInstance);
const userDiaryApi = new UserDiaryApi(apiConfig, '', axiosInstance);

export { userApi, sectionApi, userDiaryApi };
