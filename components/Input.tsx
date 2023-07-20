import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, disabled, title = "Email address", ...props }, ref) => {
	return (
		<div className={twMerge(`relative group transition-all md:flex-1 md:max-w-[30rem]`)}>
			<input
				className={twMerge(
					`w-full border border-[#999] h-[48px] md:h-[54px] text-white bg-transparent px-6 pt-3 rounded-sm z-10 form-input md:text-xl disabled:opacity-70 disabled:cursor-not-allowed`,
					className
				)}
				type={type}
				disabled={disabled}
				placeholder=" "
				{...props}
				ref={ref}
			/>
			<label
				className={twMerge(
					`absolute text-[#cecece] left-6 top-[0] translate-y-[50%] pointer-events-none  
                transition-all
                group-focus-within:text-xs
                group-focus-within:py-[4px]
                group-focus-within:top-[-10px]
                form-label`,
					disabled && "text-[#999]"
				)}>
				{title}
			</label>
		</div>
	);
});

export default Input;
