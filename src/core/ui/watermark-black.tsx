import Image from "next/image";

const WatermarkBlack = () => {
	return (
		<div className="w-2/3 lg:w-2/5 opacity-25 ">
			<Image
				src="/assets/bg_2.webp"
				alt="Font Black"
				width={1000}
				height={1000}
			/>
		</div>
	);
};

export default WatermarkBlack;
