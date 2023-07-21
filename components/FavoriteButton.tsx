"use client";
import { useFavorites } from "@/hook/useFavorites";
import { Movie } from "@/types/interface";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

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
		try {
			if (!isFavorite) {
				const res = await axios.post(`api/favorite/${session.data?.user?.email}`, {
					id,
				});
				res.status === 200 && toast.success(res.statusText);
			} else {
				const res = await axios.delete(`api/favorite/${session.data?.user?.email}?id=${id}`);

				res.status === 200 && toast.success(res.statusText);
			}

			mutate();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div onClick={toggleFavorite}>
			{isFavorite ? (
				<AiFillHeart size={25} className="cursor-pointer hover:opacity-80 hover:scale-110" />
			) : (
				<AiOutlineHeart size={25} className="cursor-pointer hover:opacity-80 hover:scale-110" />
			)}
		</div>
	);
}

export default FavoriteButton;
