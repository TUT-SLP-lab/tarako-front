import { taskApi } from '@/utils/openApi';
import useSWR from 'swr';

export const useTask = ({ taskId }: FetcherArgs) => {
  const { data, isLoading, mutate } = useSWR(
    taskId !== undefined ? { url: '/tasks/[taskId]', taskId } : null,
    ({ taskId }) => fetcher({ taskId }),
  );
  return {
    task: data,
    refetchTask: mutate,
    isLoading,
  };
};

type FetcherArgs = {
  taskId?: string;
};

const fetcher = async ({ taskId }: FetcherArgs) => {
  if (taskId === undefined) {
    return undefined;
  }

  const response = await taskApi.getTaskEntry(taskId);
  return response.data;
};
