import { taskApi } from '@/utils/openApi';
import useSWR from 'swr';

export const useTasks = (args: FetcherArgs) => {
  const { data, isLoading, mutate } = useSWR(
    args?.userIds !== undefined
      ? { url: '/tasks', userIds: args.userIds }
      : null,
    ({ userIds }) => fetcher({ userIds }),
  );

  return {
    tasks: data,
    refetchTasks: mutate,
    isLoading,
  };
};

type FetcherArgs = {
  userIds?: string[];
};

const fetcher = async ({ userIds }: FetcherArgs) => {
  const response = await taskApi.getTasks(undefined, userIds);
  return response.data;
};
