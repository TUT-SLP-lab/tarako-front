import { chatApi } from '@/utils/openApi';
import useSWR from 'swr';

export const useChat = ({ userId }: FetcherArgs) => {
  const { data, isLoading, mutate } = useSWR(
    userId !== undefined ? { url: '/chat/[userId]', userId } : null,
    ({ userId }) => fetcher({ userId }),
  );
  return {
    chat: data,
    refetchTask: mutate,
    isLoading,
  };
};

type FetcherArgs = {
  userId?: string;
};

const fetcher = async ({ userId }: FetcherArgs) => {
  if (userId === undefined) {
    return undefined;
  }

  const response = await chatApi.getSingleUserChatHistory(userId);
  return response.data;
};
