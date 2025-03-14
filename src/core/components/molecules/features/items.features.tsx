import { FeatureData } from "@/core/data/feature.data";

const ItemsFeatures = () => {
	return (
		<div className="flex max-md:flex-col gap-8">
			{FeatureData.map((feature, index) => (
				<div
					key={index}
					className="flex flex-col text-black static z-40 justify-between w-48 h-64 bg-white p-4 rounded-md shadow "
				>
					<div className="bg-gray/70 size-fit p-1.5 rounded-md shadow opacity-70">
						{feature.icon}
					</div>
					<div className="space-y-2 tracking-wide">
						<h1 className="text-6xl">{feature.number}</h1>
						<p className="">{feature.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemsFeatures;
