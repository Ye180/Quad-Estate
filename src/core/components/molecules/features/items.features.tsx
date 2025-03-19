"use client";

import { FC, JSX } from "react";

type FeatureProps = {
	icon: JSX.Element;
	number: string;
	description: string;
};

const ItemsFeatures: FC<FeatureProps> = ({ icon, number, description }) => {
	return (
		<>
			<div className="flex flex-col text-black static z-40 justify-between w-40 h-56 lg:w-48 lg:h-64 bg-white p-4 rounded-md shadow ">
				<div className="bg-gray/70 size-fit p-1.5 rounded-md shadow opacity-70">
					{icon}
				</div>
				<div className="space-y-2 tracking-wide">
					<h1 className="text-4xl lg:text-6xl">{number}</h1>
					<p className="max-lg:text-sm">{description}</p>
				</div>
			</div>
		</>
	);
};

export default ItemsFeatures;
