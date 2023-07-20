"use client";
import Button from "./Button";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import NavbarMenu from "./NavbarMenu";
import { AiFillCaretDown } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ProfileMenu from "./ProfileMenu";

function Navbar() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [showProfileMenu, setShowProfileMenu] = useState(false);
	const session = useSession();

	const toggleMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	const toggleProfileMenu = () => {
		setShowProfileMenu(!showProfileMenu);
	};

	return (
		<div className="flex justify-between items-center pt-[24px] max-w-[1200px] m-auto">
			<div className="flex items-center gap-x-6">
				<Logo />
				<div className="lg:flex hidden gap-x-6 text-xl ml-3">
					<NavbarItem label="Home" active />
					<NavbarItem label="Series" />
					<NavbarItem label="Films" />
					<NavbarItem label="New & Popular" />
					<NavbarItem label="My List" />
				</div>
				<div className="relative lg:hidden">
					<div className="text-white flex items-center cursor-pointer" onClick={toggleMobileMenu}>
						<p className="md:text-xl">Browse</p>
						<AiFillCaretDown className={`w-6 h-4 md:h-5 text-white fill-white transition ${showMobileMenu ? "rotate-180" : "rotate-0"}`} />
					</div>
					{showMobileMenu && <NavbarMenu />}
				</div>
			</div>
			<div className="flex items-center gap-x-3 cursor-pointer md:gap-x-6">
				<HiMagnifyingGlass className="text-white w-5 h-10 md:w-6" />
				<IoNotificationsOutline className="text-white w-5 h-10 md:w-6" />
				{session.status == "unauthenticated" ? (
					<Link href="/login">
						<Button>Login</Button>
					</Link>
				) : (
					<div className="relative w-[40px] h-full flex items-center" onClick={() => toggleProfileMenu()}>
						<img src="/images/default-blue.png" alt="" className="w-full h-ful" />
						<span>
							<AiFillCaretDown className={`w-6 h-4 md:h-5 text-white fill-white transition ${showProfileMenu ? "rotate-180" : "rotate-0"}`} />
						</span>
						{showProfileMenu && <ProfileMenu username={session.data?.user?.name!} />}
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
