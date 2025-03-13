import Image from "next/image";

const Features = () => {
	return (
		<div className="bg-black w-full h-[80vh] font-bold text-second text-center content-end absolute inset-y-3/5 -z-10">
			Features
			<div className="w-2/3 lg:w-2/5 opacity-25 ">
				<Image
					src="/assets/bg_1.webp"
					alt="Font"
					width={1000}
					height={1000}
				/>
			</div>
			<div className="bg-white h-94 ">
				<div className="w-2/3 lg:w-2/5 opacity-30 ">
					<Image
						src="/assets/bg_2.webp"
						alt="Font"
						width={1000}
						height={1000}
					/>
				</div>
			</div>
		</div>
	);
};

export default Features;
