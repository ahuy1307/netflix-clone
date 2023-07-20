import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, disabled, type, children, ...props }, ref) => {
	return (
		<button
			className={twMerge(`text-white text-lg bg-[#E50915] rounded-md px-4 py-1 font-semibold disabled:opacity-60 disabled:cursor-not-allowed`, className)}
			type={type}
			disabled={disabled}
			{...props}
			ref={ref}>
			{children}
		</button>
	);
});

export default Button;
