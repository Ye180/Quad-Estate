import Image from "next/image";

const PictureSort = ({ picture }: { picture: string }) => {
	return (
		<div className="bg-amber-800 w-[95%] overflow-hidden rounded-xl">
			<Image
				alt="Image1"
				src={picture}
				width={2000}
				height={2000}
				className="w-full h-full z-10"
				priority
			/>
		</div>
	);
};

export default PictureSort;
