import { useQuery} from "@tanstack/react-query";
import { getStoryById } from "@/app/actions/get-story-by-id";

interface Options {
  id: string;
}  
export function useGetStoryById(options: Options) {
  return useQuery({
    queryKey: ["story-by-id", options],
    queryFn: () => getStoryById(options),
  });
}