import { useRouter } from "next/navigation";
import { BsPlayFill } from "react-icons/bs";

function PlayButton({ id }: { id: string }) {
	const router = useRouter();

	return (
		<button
			className="bg-white rounded-md sm:text-xl py-1 md:py-2 px-2 md:px-4 w-auto text-xs font-semibold flex flex-row items-center hover:bg-opacity-20 transition lg:text-2xl text-[#0b0c0e] hover:text-white"
			onClick={() => router.push(`/watch/${id}`)}>
			<BsPlayFill className="w-4 md:w-7 mr-1 sm:w-8" />
			<span>Play</span>
		</button>
	);
}

export default PlayButton;
