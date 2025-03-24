import type { SVGProps } from "react";

export default function ArrowIcon(
	props?: SVGProps<SVGSVGElement>,
	stroke?: string,
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="none"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="M12 19.5v-15m0 0l-6 5.625M12 4.5l6 5.625"
			></path>
		</svg>
	);
}
