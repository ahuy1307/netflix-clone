"use client";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import { useMovieList } from "@/hook/useMovieList";

function Movies() {
	const { data, isLoading } = useMovieList();

	return (
		<div className="relative">
			<div className="absolute z-10 w-full px-[32px] md:px-16 ">
				<Navbar />
			</div>
			<BillBoard />
			{!isLoading && <MovieList title="Trending Now" data={data} />}
		</div>
	);
}

export default Movies;
