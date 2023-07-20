function NavbarMenu() {
	return (
		<ul className="text-white bg-black p-4 rounded-lg absolute text-center z-20 shadow-inner cursor-pointer border-2 border-[#7c7b7b] top-[150%] px-6 md:text-xl text-sm">
			<li className="py-4 px-8 w-max m-auto hover:underline">Home</li>
			<li className="py-4 px-8 w-max  m-auto hover:underline">Series</li>
			<li className="py-4 px-8 w-max m-auto hover:underline">Films</li>
			<li className="py-4 px-8 w-max m-auto hover:underline">New & Popular</li>
			<li className="py-4 px-8 w-max m-auto">My List</li>
		</ul>
	);
}

export default NavbarMenu;
