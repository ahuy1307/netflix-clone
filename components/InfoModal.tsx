"use client";
import { useInfoModal } from "@/hook/useInfoModal";
import { Movie } from "@/types/interface";
import FavoriteButton from "./FavoriteButton";
import Modal from "./Modal";
import PlayButton from "./PlayButton";

function InfoModal({ data }: { data: Movie }) {
	const { isOpen, onClose } = useInfoModal();

	return (
		<Modal
			isOpen={isOpen}
			onChange={() => {
				if (isOpen) onClose();
			}}
			title=""
			description="">
			<div className="relative">
				<video poster={data?.thumbnailUrl} autoPlay muted loop src={data?.videoUrl} className="w-full brightness-[60%] object-cover h-full" />
				<div className="absolute bottom-[10%] left-10">
					<p className="text-white text-xl md:text-4xl h-full lg:text-5xl font-bold md:mb-8 mb-2">{data?.title}</p>
					<div className="flex flex-row gap-4 items-center">
						<PlayButton id={data?.id} />
						<FavoriteButton id={data?.id} />
					</div>
				</div>
			</div>
			<div className="px-2 md:px-2 py-6 md:py-8">
				<div className="flex flex-col gap-2 mb-8">
					<p className="text-green-400 font-semibold text-lg">New</p>
					<p className="text-white md:text-lg text-xs sm:text-base">{data?.duration}</p>
					<p className="text-white md:text-lg text-xs sm:text-base">{data?.genre}</p>
					<p className="text-white md:text-lg text-xs sm:text-base">{data?.description}</p>
				</div>
			</div>
		</Modal>
	);
}

export default InfoModal;
