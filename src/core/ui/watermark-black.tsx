import Image from "next/image";

const WatermarkBlack = () => {
	const styles =
		"absolute  right-0 z-10 h-fit w-[45rem] opacity-20 lg:w-1/2 lg:-bottom-50";

	return (
		<div className={styles}>
			<Image
				src="/assets/bg_2.webp"
				alt="Font Black"
				width={5000}
				height={5000}
				className="w-full"
				priority
			/>
		</div>
	);
};

export default WatermarkBlack;
