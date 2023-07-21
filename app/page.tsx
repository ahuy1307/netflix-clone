import Button from "@/components/Button";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import HomeQuestion from "@/components/HomeQuestion";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
export default function Home() {
	return (
		<>
			<div className="md:px-[48px] px-[24px] h-full overflow-hidden relative">
				<div className="absolute overflow-hidden top-0 left-0 w-full h-full -z-[8]">
					<Image className="w-full aspect-square object-cover -z-[11]" src="/images/background.jpg" fill alt="" priority />
					<div className="background-logo"></div>
				</div>
				<Navbar />
				<div className="flex flex-col gap-y-4 md:gap-y-7 mt-[24px] md:mt-[150px] text-white text-center max-w-[calc(100%-3rem)] m-auto py-6 z-[12]">
					<h1 className="font-bold text-4xl md:text-5xl">Unlimited movies, TV shows, and more</h1>
					<p className="md:text-2xl">Watch anywhere. Cancel anytime.</p>
					<p className="md:text-2xl">Ready to watch? Enter your email to create or restart your membership.</p>
					<div className="flex flex-col gap-y-4 md:flex-row justify-center items-center">
						<Input type="email" required />
						<Button className="py-2 w-max m-auto md:m-0 md:ml-4 px-3">
							Get Started
							<AiOutlineRight className="inline-block ml-2" size={24} />
						</Button>
					</div>
				</div>
			</div>
			<HomeContent />
			<HomeQuestion />
			<Footer />
			<ScrollToTop />
		</>
	);
}
