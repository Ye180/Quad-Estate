import Image from "next/image";

const WatermarkWhite = () => {
	const styles =
		"absolute flex h-fit w-[50rem] z-10 opacity-20 max-md:rotate-90 lg:w-3/5 lg:left-0 max-md:bottom-1/2 max-lg:bottom-0 max-lg:translate-y-1/2 max-md:-translate-x-1/2";
	return (
		<div className={styles}>
			<Image
				src="/assets/bg_1.webp"
				alt="Font White"
				width={5000}
				height={5000}
				className="w-full"
				priority
			/>
		</div>
	);
};

export default WatermarkWhite;
