import { twMerge } from "tailwind-merge";

function NavbarItem({ label, active }: { label: string; active?: boolean }) {
	return (
		<div className={twMerge(`group text-white text-xl relative transition-all cursor-pointer`)}>
			<div className="absolute w-0 h-[2px] bg-[#E50915] bottom-0 group-hover:w-full transition-all duration-200"></div>
			{label}
		</div>
	);
}

export default NavbarItem;
