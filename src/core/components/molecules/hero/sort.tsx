import Image from "next/image";

const Sort = ({ picture }: { picture: string }) => {
	return (
		<div className="flex flex-col py-4 justify-between items-center w-64 h-[80%] absolute inset-y-1/2 -translate-y-1/2 shadow-xl left-8 z-20 rounded-2xl backdrop-blur-xl max-lg:hidden">
			<h3>Quota</h3>
			<div className="bg-amber-800 w-[90%] overflow-hidden rounded-xl">
				<Image
					alt="Image1"
					src={picture}
					width={2000}
					height={2000}
					className="w-full h-full z-10"
					priority
				/>
			</div>
		</div>
	);
};

export default Sort;
