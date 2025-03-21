import Image from "next/image";

const PictureStepper = () => {
	return (
		<div className="relative min-w-[20rem] min-h-[22rem] lg:min-w-[35rem] lg:min-h-[30rem] rounded-2xl overflow-hidden">
			<Image
				src="/assets/bg_3.webp"
				alt="Image1"
				fill
				style={{ objectFit: "cover", width: "100%", height: "100%" }}
			/>
		</div>
	);
};

export default PictureStepper;
