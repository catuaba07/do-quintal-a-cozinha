
import { getProductById } from "@/app/actions/get-product-by-id"
import { useQuery } from "@tanstack/react-query"

interface Options {
  id: string
}

export const useGetProductById = (options: Options) => {
  return useQuery({
    queryKey: ["products", options],
    queryFn: () => getProductById(options),
  })
}