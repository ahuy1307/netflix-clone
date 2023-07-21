"use client";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import { useFavorites } from "@/hook/useFavorites";
import { useMovieList } from "@/hook/useMovieList";
import { useSession } from "next-auth/react";

function Movies() {
	const session = useSession();
	const { data: movieList, isLoading } = useMovieList();
	const { data: favoriteMovies } = useFavorites(session.data?.user?.email!);

	return (
		<div className="relative">
			<div className="absolute z-10 w-full px-[32px] md:px-16 ">
				<Navbar />
			</div>
			<BillBoard />
			{!isLoading && <MovieList title="Trending Now" data={movieList} />}
		</div>
	);
}

export default Movies;
