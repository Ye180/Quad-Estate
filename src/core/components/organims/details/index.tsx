import WatermarkBlack from "@/core/ui/watermark-black";
import ItemsDetails from "../../molecules/details/items.details";
import TextDetail from "../../molecules/details/text.detail";

const Detail = () => {
	return (
		<div className="relative bg-white w-full content-center py-20 px-4 overflow-hidden ">
			<div className="space-y-5 relative z-30">
				<TextDetail />
				<ItemsDetails />
			</div>

			<WatermarkBlack />
		</div>
	);
};

export default Detail;
