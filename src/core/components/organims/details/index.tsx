import WatermarkBlack from "@/core/ui/watermark-black";
import ItemsDetails from "../../molecules/details/items.details";
import TextDetail from "../../molecules/details/text.detail";

const Detail = () => {
	return (
		<div className="relative bg-white w-full lg:h-[60vh] content-center py-20 px-4 ">
			<TextDetail />
			<ItemsDetails />
			<WatermarkBlack />
		</div>
	);
};

export default Detail;
