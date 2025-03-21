import { cn } from "@/core/lib/utils";
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import React from "react";

export interface HeadProps extends React.HTMLAttributes<HtmlProps> {
	children: React.ReactNode;
	props?: string;
	className?: string;
}

const HeadSection = ({ children, className, ...props }: HeadProps) => {
	return (
		<h2
			className={cn(
				"text-3xl font-black leading-normal lg:text-4xl xl:text-5xl",
				className,
			)}
		>
			{children}
		</h2>
	);
};

export default HeadSection;
