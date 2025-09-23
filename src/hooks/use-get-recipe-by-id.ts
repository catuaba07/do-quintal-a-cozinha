import { useQuery } from '@tanstack/react-query';
import { getRecipeById } from '@/app/actions/get-recipe-by-id';

interface Options {
  id: string
}

export function useGetRecipeById(options: Options) {
  return useQuery({
    queryKey: ['recipe-by-id', options],
    queryFn: () => getRecipeById(options),
  });
}