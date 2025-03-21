import WatermarkWhite from "@/core/ui/watermark-white";
import ItemsStepper from "../../molecules/stepper/items.stepper";
import PictureStepper from "../../molecules/stepper/picture.stepper";

const Stepper = () => {
	return (
		<div className="relative bg-black w-full py-20 md:py-40 text-white px-4 overflow-hidden">
			<div className="relative z-40 container mx-auto flex justify-between items-center max-md:flex-col max-md:gap-12">
				<ItemsStepper />
				<PictureStepper />
			</div>
			<WatermarkWhite />
		</div>
	);
};

export default Stepper;
