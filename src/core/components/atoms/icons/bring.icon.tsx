import type { SVGProps } from "react";

export default function BringIcons(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={32}
			height={32}
			viewBox="0 0 32 32"
			{...props}
		>
			<path
				fill="#000"
				d="M28 10h-6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M4 20L3.998 4H20v6h-8a2 2 0 0 0-2 2v8Z"
			></path>
		</svg>
	);
}
