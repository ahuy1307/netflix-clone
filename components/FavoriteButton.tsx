"use client";
import { useFavorites } from "@/hook/useFavorites";
import { Movie } from "@/types/interface";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

function FavoriteButton({ id }: { id: string }) {
	const session = useSession();
	const { data, mutate }: { data: Movie[]; mutate: any } = useFavorites(session.data?.user?.email!);

	const isFavorite = useMemo(() => {
		if (data === undefined) return;
		const listId = data.map((item) => {
			return item.id;
		});
		return listId.includes(id);
	}, [session, data]);

	const toggleFavorite = async () => {
		if (!session.data?.user) return toast.error("Login to favorite movie");

		try {
			if (!isFavorite) {
				const res = await axios.post(`api/favorite/${session.data?.user?.email}`, {
					id,
				});
				res.status === 200 && toast.success("Favorite movie successfully!");
			} else {
				const res = await axios.delete(`api/favorite/${session.data?.user?.email}?id=${id}`);

				res.status === 200 && toast.success("Remove favorite movie successfully!");
			}

			mutate();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div onClick={toggleFavorite} className={twMerge(`py-1 md:py-2 px-2 md:px-4 rounded-full`, isFavorite ? `bg-zinc-800` : `bg-white`)}>
			{isFavorite ? (
				<AiFillHeart className="w-4 h-6 md:w-6 md:h-6 lg:w-6 lg:h-8 cursor-pointer hover:opacity-80 hover:scale-110" color={isFavorite ? "white" : "#27272a"} />
			) : (
				<AiOutlineHeart className="w-4 h-6 md:w-6 md:h-6 lg:w-6 lg:h-8 cursor-pointer hover:opacity-80 hover:scale-110" color={isFavorite ? "white" : "#27272a"} />
			)}
		</div>
	);
}

export default FavoriteButton;
