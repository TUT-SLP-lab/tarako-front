import { sectionApi } from '@/utils/openApi';
import useSWR from 'swr';

export const useSection = ({ sectionId }: FetcherArgs) => {
  const { data, isLoading, mutate } = useSWR(
    sectionId ? { url: '/sections', sectionId } : null,
    ({ sectionId }) => fetcher({ sectionId }),
  );
  return {
    section: data,
    refetchSection: mutate,
    isLoading,
  };
};

type FetcherArgs = {
  sectionId?: string;
};

const fetcher = async ({ sectionId }: FetcherArgs) => {
  if (!sectionId) {
    return undefined;
  }

  const response = await sectionApi.getSectionEntry(sectionId);
  return response.data;
};
