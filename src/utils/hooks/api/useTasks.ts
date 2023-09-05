import { taskApi } from '@/utils/openApi';
import useSWR from 'swr';

export const useTasks = () => {
  const { data, isLoading, mutate } = useSWR('/tasks', fetcher);

  return {
    tasks: data,
    refetchTasks: mutate,
    isLoading,
  };
};

const fetcher = async () => {
  const response = await taskApi.getTasks();
  return response.data;
};
