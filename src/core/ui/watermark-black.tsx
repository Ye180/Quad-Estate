import Image from "next/image";

const WatermarkBlack = () => {
	const styles =
		"absolute z-10 flex h-fit w-[50rem]  opacity-20 max-md:rotate-90 lg:w-3/5 lg:right-0 max-md:bottom-1/2 max-lg:bottom-0 max-lg:translate-y-1/2 max-md:-translate-x-1/2";

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
