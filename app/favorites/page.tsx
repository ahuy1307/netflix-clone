"use client";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import { useFavorites } from "@/hook/useFavorites";
import { useMovieList } from "@/hook/useMovieList";
import { useSession } from "next-auth/react";

function Favorites() {
	const session = useSession();
	const { data, isLoading } = useFavorites(session.data?.user?.email!);

	return (
		<div className="relative">
			<div className="absolute z-10 w-full px-[32px] md:px-16 ">
				<Navbar />
			</div>
			<BillBoard />
			{!isLoading && (
				<>
					<div className="mb-16">
						<MovieList title="Favorite Movie" data={data} />
					</div>
				</>
			)}
		</div>
	);
}

export default Favorites;
