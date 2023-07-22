"use client";
import Button from "./Button";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import NavbarMenu from "./NavbarMenu";
import ProfileMenu from "./ProfileMenu";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { AiFillCaretDown } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css"; // optional

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
					<Link href="/">
						<NavbarItem label="Home" active />
					</Link>
					<Link href="/movies">
						<NavbarItem label="Films" />
					</Link>
					<Link href="/favorites">
						<NavbarItem label="Favorites" />
					</Link>
					<NavbarItem label="Series" />
					<NavbarItem label="New & Popular" />
				</div>
				<div className="relative lg:hidden">
					<div className="text-white flex items-center cursor-pointer" onClick={toggleMobileMenu}>
						<p className="md:text-xl text-sm sm:text-xl">Browse</p>
						<AiFillCaretDown className={`w-6 h-4 md:h-5 text-white fill-white transition ${showMobileMenu ? "rotate-180" : "rotate-0"}`} />
					</div>
					{showMobileMenu && <NavbarMenu />}
				</div>
			</div>
			<div className="flex items-center gap-x-4 cursor-pointer md:gap-x-6">
				<button>
					<HiMagnifyingGlass className="text-white w-5 h-10 md:w-6 lg:h-12 lg:w-8" />
				</button>
				<button>
					<IoNotificationsOutline className="text-white w-5 h-10 md:w-6 lg:h-12 lg:w-8" />
				</button>
				{session.status == "unauthenticated" ? (
					<Link href="/login">
						<Button>Login</Button>
					</Link>
				) : (
					<div className="relative w-[40px] lg:w-[50px] h-full flex items-center" onClick={() => toggleProfileMenu()}>
						<img src="/images/default-blue.png" alt="" className="w-full h-full" />
						<span>
							<AiFillCaretDown className={`w-6 h-4 md:h-5 lg:h-5 lg:w-10 text-white fill-white transition ${showProfileMenu ? "rotate-180" : "rotate-0"}`} />
						</span>
						{showProfileMenu && <ProfileMenu username={session.data?.user?.name!} />}
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
