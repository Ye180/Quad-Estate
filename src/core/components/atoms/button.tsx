import { cn } from "@/core/lib/utils";
import Link from "next/link";

export interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	variant?: "primary" | "secondary";
	props?: string;
	className?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	url: string;
	target?: string;
}

const Button = ({
	children,
	className,
	variant,
	url,
	...props
}: ButtonProps) => {
	const primary =
		"transition hover:bg-black hover:text-second hover:border-black";

	const second =
		"text-black bg-second border transition border-second hover:bg-black hover:text-second hover:border-white";

	return (
		<Link
			href={url}
			className={cn(
				"text-xs font-extralight  py-3 px-6 rounded-4xl md:text-sm",
				variant === "secondary" ? second : primary,
				className,
			)}
			{...props}
		>
			{children}
		</Link>
	);
};

export default Button;
