import Image from "next/image";
import Sort from "./sort";

const Picture = () => {
	return (
		<div className="relative container max-auto p-4 ">
			<div
				className=" min-h-[55vh] overflow-hidden rounded-4xl shadow lg:h-[80vh] p-4 "
				style={{
					backgroundImage: 'url("/assets/home1.webp")',
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Image
					alt="Image1"
					src="/assets/home1.webp"
					fill={true}
					className="shadow z-10 size-full rounded-4xl max-md:hidden"
					priority
				/>
			</div>

			<Sort picture="/assets/home1.webp" />
		</div>
	);
};

export default Picture;
