import WatermarkWhite from "@/core/ui/watermark-white";
import ItemsFeatures from "../../molecules/features/items.features";
import TextFeatures from "../../molecules/features/text.features";

const Features = () => {
	return (
		<div className="relative bg-black w-full lg:h-[60vh] content-center py-20 px-4">
			<div className="flex bg-none container mx-auto items-center z-20 justify-between max-lg:flex-col px-4 max-lg:space-y-8 ">
				<TextFeatures />
				<ItemsFeatures />
			</div>

			<WatermarkWhite />
		</div>
	);
};

export default Features;
