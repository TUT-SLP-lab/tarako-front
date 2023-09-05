import { sectionApi } from '@/utils/openApi';
import useSWR from 'swr';

export const useSection = ({ sectionId }: FetcherArgs) => {
  const { data, isLoading, mutate } = useSWR(
    sectionId !== undefined ? { url: '/sections', sectionId } : null,
    ({ sectionId }) => fetcher({ sectionId }),
  );
  return {
    section: data,
    refetchSection: mutate,
    isLoading,
  };
};

type FetcherArgs = {
  sectionId?: number;
};

const fetcher = async ({ sectionId }: FetcherArgs) => {
  if (sectionId === undefined) {
    return undefined;
  }

  const response = await sectionApi.getSectionEntry(sectionId);
  return response.data;
};
