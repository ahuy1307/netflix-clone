"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handlePositon = () => {
		const pos = window.pageYOffset;
		setScrollPosition(pos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handlePositon, { passive: true });

		return () => window.removeEventListener("scroll", handlePositon);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			{scrollPosition > 300 && (
				<div onClick={scrollToTop} className="fixed bottom-4 right-4 bg-[#E50915] rounded-2xl p-3 z-50 cursor-pointer">
					<FaArrowUp className="w-6 h-6" color="#fff" />
				</div>
			)}
		</div>
	);
}

export default ScrollToTop;
