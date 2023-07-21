import { listHomeContent } from "@/homecontent";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { GoDownload } from "react-icons/go";

function HomeContent() {
	return (
		<>
			{listHomeContent.map((item) => {
				return (
					<>
						<div className="w-full h-[0.5rem] bg-[#232323]"></div>
						<div className="bg-black text-white pt-[16px] px-[24px] md:px-[56px] flex flex-col lg:flex-row items-center 2xl:px-[170px] 2xl:py-[50px]">
							<div className={twMerge(`text-center flex flex-col gap-y-4 mt-8 lg:text-left lg:w-[50%] w-full`, item.id % 2 === 0 && `lg:order-1`)}>
								<h1 className="font-bold text-3xl xl:text-5xl">{item.title}</h1>
								<p className="text-xl xl:text-2xl">{item.desc}</p>
							</div>
							<div className="video-image relative">
								<Image className="w-full aspect-square m-auto object-cover z-10" src={item.image} alt="" fill />
								{item.id === 2 && (
									<div className="absolute bottom-0 bg-black border-[#808080b3] border-2 z-20 p-1 flex w-[90%] sm:w-[70%] xl:w-[55%] xl:py-3 items-center rounded-2xl left-[50%] -translate-x-[50%]">
										<div className="w-[100px] h-[80px] overflow-hidden z-10 relative">
											<Image src="/images/boxshot.png" fill alt="" className="object-contain" priority />
										</div>
										<div className="text-white flex-1">
											<p className="font-bold">Stranger Things</p>
											<p className="text-[#0071eb] text-sm">Dowloading...</p>
										</div>
										<GoDownload size={25} className="mr-4" />
									</div>
								)}
								{item.video && (
									<div
										className={twMerge(
											`w-full h-full max-w-[72%] max-h-[70%] absolute md:top-[55%] top-[54%] lg:top-[47%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden`,
											item.id === 3 && `max-w-[65%] top-[42%] max-h-[47%] md:max-w-[65%]`
										)}>
										<video autoPlay playsInline muted loop>
											<source src={item.video} type="video/mp4" />
										</video>
									</div>
								)}
							</div>
						</div>
					</>
				);
			})}
		</>
	);
}

export default HomeContent;
