import type { SVGProps } from "react";

export default function EyesIcon(props: SVGProps<SVGSVGElement>) {
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
				d="M16 10a8.6 8.6 0 0 0-7.965 6A8.6 8.6 0 0 0 16 22a8.6 8.6 0 0 0 7.965-6A8.6 8.6 0 0 0 16 10m0 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"
			></path>
			<path
				fill="#000"
				d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 22a10.65 10.65 0 0 1-9.97-7.758L5.97 16l.06-.242A10.65 10.65 0 0 1 16 8a10.65 10.65 0 0 1 9.97 7.758l.06.242l-.06.242A10.65 10.65 0 0 1 16 24"
			></path>
			<circle cx={16} cy={16} r={2} fill="#000"></circle>
			<path
				fill="none"
				d="M16 20a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"
			></path>
			<path
				fill="none"
				d="M16 24a10.655 10.655 0 0 1-9.97-7.758L5.97 16l.06-.242A10.655 10.655 0 0 1 16 8a10.655 10.655 0 0 1 9.97 7.758l.06.242l-.06.242A10.655 10.655 0 0 1 16 24m-7.965-8A8.6 8.6 0 0 0 16 22a8.6 8.6 0 0 0 7.965-6A8.6 8.6 0 0 0 16 10a8.6 8.6 0 0 0-7.965 6"
			></path>
		</svg>
	);
}
