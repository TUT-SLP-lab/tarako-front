import { userApi } from '@/utils/openApi';
import useSWR from 'swr';

export const useUsers = () => {
  const { data, isLoading, mutate } = useSWR('/users', fetcher);

  return {
    users: data,
    refetchUsers: mutate,
    isLoading,
  };
};

const fetcher = async () => {
  const response = await userApi.getUsers();
  return response.data;
};
