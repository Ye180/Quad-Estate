import Image from "next/image";
import Sort from "./sort";

const Picture = () => {
	return (
		<div className="relative">
			<div className=" h-fit overflow-hidden rounded-4xl shadow lg:h-[80vh]">
				<Image
					alt="Image1"
					src="/assets/home1.webp"
					width={2000}
					height={2000}
					className="w-full h-full z-10"
					priority
				/>
			</div>

			<Sort picture="/assets/home1.webp" />
		</div>
	);
};

export default Picture;
