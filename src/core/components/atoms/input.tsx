import { cn } from "@/core/lib/utils";
import React from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	type: string;
	props?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => (
		<input
			type={type}
			className={cn(
				className,
				"p-2 font-light text-sm rounded-md  w-full outline-none  ",
			)}
			ref={ref}
			{...props}
		/>
	),
);
