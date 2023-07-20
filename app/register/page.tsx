"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";

function Register() {
	const [showPass, setShowPass] = useState(false);
	const toggleShowPass = () => setShowPass(!showPass);
	const [isLoading, setIsLoading] = useState(false);

	const { register, handleSubmit, reset } = useForm<FieldValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (values) => {
		try {
			setIsLoading(true);
			const res = await axios.post("/api/register", {
				...values,
			});
			res.status === 200 && toast.success(res.statusText) && reset();
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			toast.error("Error");
		}
	};

	return (
		<div className="overflow-hidden h-[100vh] relative bg-black md:bg-transparent">
			<div className="relative md:h-full overflow-hidden top-0 left-0 w-full bg-black md:bg-transparent">
				<Link href="/" className="block p-6">
					<Logo />
				</Link>
				<Image className="hidden md:flex w-full h-full aspect-square object-cover -z-[11]" src="/images/background.jpg" fill alt="" />
				<div className="background-logo"></div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="text-white p-6 md:absolute top-[50%] left-[50%] md:-translate-y-[50%] md:-translate-x-[50%] md:bg-[#000000bf] md:p-14 rounded-xl">
				<h2 className="font-bold text-5xl mb-12">Register</h2>
				<Input disabled={isLoading} id="name" type="text" className="mb-6 text-xl bg-[#333333] outline-none border-none rounded-lg" title="Username" {...register("name")} required />
				<Input disabled={isLoading} id="email" type="email" className="mb-6 text-xl bg-[#333333] outline-none border-none rounded-lg" {...register("email")} required />
				<div className="relative">
					<Input
						disabled={isLoading}
						id="password"
						type={showPass ? "text" : "password"}
						className="text-xl bg-[#333333] outline-none border-none rounded-lg mb-6"
						title="Password"
						{...register("password")}
						required
					/>
					{showPass ? (
						<AiOutlineEye className={twMerge(`absolute right-4 top-0 w-6 h-8 translate-y-[30%]`, isLoading && "cursor-not-allowed")} color="red" onClick={toggleShowPass} />
					) : (
						<AiOutlineEyeInvisible className={twMerge(`absolute right-4 top-0 w-6 h-8 translate-y-[30%] z-10`, isLoading && "cursor-not-allowed")} onClick={toggleShowPass} color="red" />
					)}
				</div>
				<Button disabled={isLoading} type="submit" className="w-full mt-10 py-4 text-xl">
					Register
				</Button>
				<p className="text-[#737373] text-lg text-right mt-10 md:mt-14">
					You have account already?{" "}
					<Link href="/login" className="text-white underline ml-1">
						Log in now
					</Link>
				</p>
			</form>
		</div>
	);
}

export default Register;
