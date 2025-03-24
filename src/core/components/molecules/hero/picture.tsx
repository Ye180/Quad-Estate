import Image from "next/image";
import Sort from "./sort";

const Picture = () => {
	return (
		<div className="relative container max-auto p-4 ">
			<div className=" h-[35rem] overflow-hidden rounded-4xl shadow lg:h-[80vh]">
				<Image
					alt="Image1"
					src="/assets/home1.webp"
					className="shadow z-10 size-full rounded-4xl"
					width={3000}
					height={3000}
					quality={70}
					style={{
						objectFit: "cover",
						width: "100%",
						height: "100%",
					}}
					priority
				/>
			</div>

			<Sort picture="/assets/home1.webp" />
		</div>
	);
};

export default Picture;
