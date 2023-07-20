import Link from "next/link";

function NavbarMenu() {
	return (
		<ul className="text-white bg-black p-4 rounded-lg absolute text-center z-20 shadow-inner cursor-pointer border-2 border-[#7c7b7b] top-[150%] right-0 px-6 md:text-xl text-[14px] lg:text-2xl">
			<Link href="/">
				<li className="py-4 px-8 w-max m-auto hover:underline">Home</li>
			</Link>
			<Link href="/movies">
				<li className="py-4 px-8 w-max m-auto hover:underline">Films</li>
			</Link>
			<li className="py-4 px-8 w-max  m-auto hover:underline">Series</li>
			<li className="py-4 px-8 w-max m-auto hover:underline">New & Popular</li>
			<li className="py-4 px-8 w-max m-auto hover:underline">My List</li>
		</ul>
	);
}

export default NavbarMenu;
