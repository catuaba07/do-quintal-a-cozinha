/**
 * Fetches recipes with React Query caching.
 */

import { useQuery } from '@tanstack/react-query';
import { getAllRecipes } from '@/app/actions/get-all-recipes';

interface UseGetAllRecipesOptions {
  search?: string;
  tags?: string[];
  profileId?: string;
}

export function useGetAllRecipes(options?: UseGetAllRecipesOptions) {
  return useQuery({
    queryKey: ['recipes', options],
    queryFn: () => getAllRecipes(options),
  });
}