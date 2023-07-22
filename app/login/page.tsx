"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
	const [showPass, setShowPass] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const toggleShowPass = () => setShowPass(!showPass);

	const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const res = await signIn("credentials", {
			...form,
			redirect: false,
		});
		res?.error && toast.error(res.error);
		setIsLoading(false);
		if (!res?.error) return router.push("/");
	};

	if (!isClient) return null;

	return (
		<div className="overflow-hidden h-[100vh] relative bg-black md:bg-transparent">
			<div className="relative md:h-full overflow-hidden top-0 left-0 w-full bg-black md:bg-transparent">
				<div className="p-6">
					<Logo />
				</div>
				<Image className="hidden md:flex w-full h-full aspect-square object-cover -z-[11]" src="/images/background.jpg" fill alt="" />
				<div className="background-logo"></div>
			</div>
			<form onSubmit={handleSubmit} className="text-white p-6 md:absolute top-[50%] left-[50%] md:-translate-y-[50%] md:-translate-x-[50%] md:bg-[#000000bf] md:p-14 rounded-xl">
				<h2 className="font-bold text-5xl mb-12">Login</h2>
				<Input disabled={isLoading} type="email" className="mb-6 text-xl bg-[#333333] outline-none border-none rounded-lg" name="email" onChange={(e) => changeForm(e)} required />
				<div className="relative">
					<Input
						disabled={isLoading}
						name="password"
						type={showPass ? "text" : "password"}
						className="text-xl bg-[#333333] outline-none border-none rounded-lg"
						title="Password"
						required
						onChange={(e) => changeForm(e)}
					/>
					{showPass ? (
						<AiOutlineEye className="absolute right-4 top-[50%] w-6 h-8 -translate-y-[50%]" onClick={toggleShowPass} color="red" />
					) : (
						<AiOutlineEyeInvisible className="absolute right-4 top-[50%] w-6 h-8 -translate-y-[50%]" onClick={toggleShowPass} color="red" />
					)}
				</div>
				<Button disabled={isLoading} type="submit" className="w-full mt-10 py-4 text-xl">
					Login
				</Button>
				<div className="flex justify-center gap-x-8 mt-8 md:mt-10">
					<FcGoogle className="w-14 h-14 cursor-pointer" onClick={() => signIn("google", { callbackUrl: "/" })} />
					<BsGithub className="w-14 h-14 cursor-pointer" onClick={() => signIn("github", { callbackUrl: "/" })} />
				</div>
				<p className="text-[#737373] text-lg text-right mt-10 md:mt-14">
					New to Netflix?{" "}
					<Link href="/register" className="text-white underline ml-1">
						Sign up now
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
