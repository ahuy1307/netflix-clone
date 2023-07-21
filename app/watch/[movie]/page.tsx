"use client";
import { useMovie } from "@/hook/useMovie";
import { Movie } from "@/types/interface";
import { useRouter } from "next/navigation";
import { BsBoxArrowInLeft } from "react-icons/bs";
type Props = {
	params: {
		movie: string;
	};
};
function Watch({ params }: Props) {
	const { movie } = params;
	const router = useRouter();
	const { data, isLoading }: { data: Movie; isLoading: boolean } = useMovie(movie);

	return (
		<div className="h-screen w-screen bg-black">
			<nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
				<BsBoxArrowInLeft onClick={() => router.push("/movies")} className="w-8 h-6 md:h-8 md:w-10 text-white cursor-pointer hover:opacity-80 transition ml-4" />
				<p className="text-white text-1xl md:text-3xl font-bold">
					<span className="font-light">Watching:</span> {data?.title}
				</p>
			</nav>
			<video className="h-full w-full" autoPlay controls src={data?.videoUrl}></video>
		</div>
	);
}

export default Watch;
