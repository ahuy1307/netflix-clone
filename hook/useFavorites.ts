import fetcher from "@/libs/fetcher";
import useSwr from "swr";

export const useFavorites = (email: string) => {
	const { data, mutate, isLoading } = useSwr(`/api/favorites/${email}`, fetcher);

	return {
		data,
		mutate,
		isLoading,
	};
};
