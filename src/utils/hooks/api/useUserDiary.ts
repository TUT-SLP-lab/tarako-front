import { userDiaryApi } from '@/utils/openApi';
import useSWR from 'swr';

export const useUserDiary = ({ userId }: FetcherArgs) => {
  const { data, isLoading, mutate } = useSWR(
    userId ? { url: '/diary/users', userId } : null,
    ({ userId }) => fetcher({ userId }),
  );

  return {
    userDiary: data,
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

  const response = await userDiaryApi.getUserDiaries(userId);
  return response.data;
};
