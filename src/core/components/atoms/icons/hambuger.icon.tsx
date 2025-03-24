import type { SVGProps } from "react";

export default function HamburgerIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 48 48"
			{...props}
		>
			<path
				fill="none"
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M5.5 24h37m-37 13h37m-37-26h37"
				strokeWidth={1}
			></path>
		</svg>
	);
}
