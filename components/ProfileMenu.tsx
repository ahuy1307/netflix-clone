import { signOut } from "next-auth/react";
import Link from "next/link";

function ProfileMenu({ username }: { username: string }) {
	return (
		<ul className="text-white bg-black px-2 py-5 rounded-lg absolute text-center z-20 shadow-inner cursor-pointer border-2 border-[#7c7b7b] top-[150%] right-[-20px] md:text-xl text-sm">
			<Link href="/profile">
				<li className="pb-5 px-3 w-max m-auto flex items-center gap-x-2">
					<img src="/images/default-blue.png" alt="" width={40} />
					<p>{username}</p>
				</li>
			</Link>

			<li className="pt-3 md:mt-6 px-3 w-max m-auto border-t-2 border-[#4f4e4e] hover:underline" onClick={() => signOut({ callbackUrl: "/login" })}>
				Sign out of Netflix
			</li>
		</ul>
	);
}

export default ProfileMenu;
