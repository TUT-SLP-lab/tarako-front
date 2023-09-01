import { userApi } from '@/utils/openApi';
import useSWR from 'swr';

export const useUser = ({ userId }: FetcherArgs) => {
  const { data, isLoading, mutate } = useSWR(
    userId ? { url: '/users', userId } : null,
    ({ userId }) => fetcher({ userId }),
  );
  return {
    user: data,
    refetchUser: mutate,
    isLoading,
  };
};

type FetcherArgs = {
  userId?: string;
};

const fetcher = async ({ userId }: FetcherArgs) => {
  if (!userId) {
    return undefined;
  }

  const response = await userApi.getUserEntry(userId);
  return response.data;
};
