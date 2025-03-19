import { FeatureData } from "@/core/data/feature.data";
import WatermarkWhite from "@/core/ui/watermark-white";
import ItemsFeatures from "../../molecules/features/items.features";
import TextFeatures from "../../molecules/features/text.features";

const Features = () => {
	return (
		<div className="relative bg-black w-full lg:h-[60vh] content-center py-20 px-4 overflow-hidden">
			<div className="flex bg-none container mx-auto items-center  justify-between max-lg:flex-col px-4 max-lg:space-y-8 ">
				<TextFeatures />
				<div className="flex items-center justify-center max-md:w-fit gap-8 max-md:flex-wrap">
					{FeatureData.map((feature, index) => (
						<ItemsFeatures
							key={index}
							icon={feature.icon}
							number={feature.number}
							description={feature.description}
						/>
					))}
				</div>
			</div>

			<WatermarkWhite />
		</div>
	);
};

export default Features;
