import fetcher from "@/libs/fetcher";
import useSwr from "swr";

export const useMovieList = () => {
	const {
		data = [],
		error,
		isLoading,
	} = useSwr("/api/movies", fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});

	return {
		data,
		error,
		isLoading,
	};
};
