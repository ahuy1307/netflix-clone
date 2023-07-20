"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

function Profile() {
	const sesion = useSession();
	const router = useRouter();

	const selectProfile = useCallback(() => {
		router.push("/");
	}, [router]);

	return (
		<div className="w-full h-[100vh] bg-black relative text-white">
			<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center gap-y-6 cursor-pointer" onClick={selectProfile}>
				<p className="text-3xl md:text-4xl font-semibold">Who is watching ? </p>
				<img src="./images/default-blue.png" alt="" className="hover:border-[#fff] hover:border-2 w-[50%] md:w-full" />
				<p>{sesion.data?.user?.name}</p>
			</div>
		</div>
	);
}

export default Profile;
