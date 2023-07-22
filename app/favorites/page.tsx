"use client";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import { useFavorites } from "@/hook/useFavorites";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Favorites() {
	const session = useSession();
	const { data, isLoading } = useFavorites(session.data?.user?.email!);
	const router = useRouter();

	useEffect(() => {
		if (!session.data?.user) router.push("/login");
	}, [router, session.data?.user]);

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
