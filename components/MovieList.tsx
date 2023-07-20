import { Movie } from "@/types/interface";
import MovieCard from "./MovieCard";

type Props = {
	title: string;
	data: Movie[];
};

function MovieList({ title, data }: Props) {
	return (
		<div className="text-white px-[32px] md:px-16 mt-6 mb-16">
			<p className="font-bold md:text-2xl lg:text-3xl">{title}</p>
			<div className="grid md:grid-cols-4 grid-cols-2 gap-3 mt-4 md:gap-5">
				{data.map((item) => {
					return <MovieCard key={item.id} data={item} />;
				})}
			</div>
		</div>
	);
}

export default MovieList;
