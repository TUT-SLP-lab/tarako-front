import { sectionApi } from '@/utils/openApi';
import useSWR from 'swr';

export const useSections = () => {
  const { data, isLoading, mutate } = useSWR('/sections', fetcher);

  return {
    sections: data,
    refetchSections: mutate,
    isLoading,
  };
};

const fetcher = async () => {
  const response = await sectionApi.getSections();
  return response.data;
};
