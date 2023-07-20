"use client";
import Navbar from "@/components/Navbar";
import fetcher from "@/libs/fetcher";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useBillboard } from "@/hook/useBillboard";
import ClipLoader from "react-spinners/ClipLoader";

function BillBoard() {
	const { data, isLoading } = useBillboard();

	return (
		<>
			{isLoading ? (
				<div className="relative w-full h-[56.25vw]">
					<ClipLoader
						color="#fff"
						cssOverride={{
							display: "block",
							position: "relative",
							top: "40%",
							left: "50%",
							borderWidth: "4px",
						}}
						loading={isLoading}
						size={60}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				</div>
			) : (
				<>
					<div className="relative h-[56.25vw]">
						<video poster={data?.thumbnailUrl} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop src={data?.videoUrl}></video>
						<div className="absolute top-[35%] md:top-[40%] px-[32px] md:px-16 lg:w-full lg:m-auto lg:top-[30%]">
							<div className="flex pt-[24px] max-w-[1200px] m-auto flex-col lg:gap-y-4">
								<p className="text-white text-xs sm:text-2xl md:text-5xl h-full lg:text-6xl font-bold drop-shadow-xl">{data?.title}</p>
								<p className="text-white text-[10px] md:text-lg sm:text-[18px] mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl lg:text-2xl">{data?.description}</p>
								<div className="flex flex-row items-center mt-3 sm:mt-4 md:mt-4 gap-3">
									<button className="bg-white text-white bg-opacity-30 rounded-md sm:text-xl py-1 md:py-2 px-2 md:px-4 w-auto text-xs font-semibold flex flex-row items-center hover:bg-opacity-20 transition lg:text-2xl">
										<AiOutlineInfoCircle className="w-4 md:w-7 mr-1 sm:w-8" />
										More Info
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default BillBoard;
