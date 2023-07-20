"use client";
import { AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";
import { listQuestion } from "@/questions";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Input from "./Input";
import Button from "./Button";

function HomeQuestion() {
	const [list, setList] = useState(listQuestion);

	const showModal = (id: number) => {
		const newList = list.map((item) => {
			if (item.id === id)
				return {
					...item,
					show: !item.show,
				};
			else {
				return {
					...item,
				};
			}
		});
		setList(newList);
	};

	return (
		<>
			<div className="w-full h-[0.5rem] bg-[#232323]"></div>
			<div className="pt-6 text-white pb-10 bg-black">
				<h1 className="font-bold text-center text-4xl mb-8 xl:text-5xl">Frequently Asked Questions</h1>
				{list.map((item) => {
					return (
						<div key={item.id} className="px-[48px] mt-3 xl:px-[150px]">
							<div className="flex justify-between text-xl hover:bg-[#4e4e4e] bg-[#2d2d2d] p-6 cursor-pointer show-question" onClick={() => showModal(item.id)}>
								<p className="lg:text-3xl">{item.question}</p>
								{item.show ? <RiSubtractLine className="lg:w-12 lg:h-12" /> : <AiOutlinePlus className="lg:h-12 lg:w-12" />}
							</div>

							<div className={twMerge(`bg-[#2d2d2d] mt-[4px] px-6 flex flex-col gap-y-3 show-question opacity-0`, item.show && `opacity-100 py-3 lg:py-6`)}>
								{item.show &&
									item.answer.map((ans, index) => {
										return (
											<span key={index} className="lg:text-2xl text-xl text-justify">
												{ans}
											</span>
										);
									})}
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col items-center px-[48px] bg-black">
				<h2 className="text-white text-xl text-center">Ready to watch? Enter your email to create or restart your membership.</h2>
				<div className="w-full px-[48px] flex flex-col gap-y-4 mt-4 md:flex-row md:justify-center lg:mt-6 md:m-4">
					<Input className="w-full" />
					<Button className="w-max md:m-0 md:max-w-none m-auto py-2 md:ml-4 px-3 lg:text-2xl mb-6 lg:mb-8 md:py-3">
						Get Started
						<AiOutlineRight className="inline-block ml-2 " size={24} />
					</Button>
				</div>
			</div>
		</>
	);
}

export default HomeQuestion;
