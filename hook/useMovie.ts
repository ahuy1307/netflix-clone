import fetcher from "@/libs/fetcher";
import useSwr from "swr";

export const useMovie = (id: string) => {
	const { data, isLoading, error } = useSwr(`/api/movie/${id}`, fetcher);

	return {
		data,
		isLoading,
		error,
	};
};
