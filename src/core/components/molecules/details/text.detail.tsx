import HeadSection from "../../atoms/head.section";

const TextDetail = () => {
	return (
		<div className="container mx-auto flex justify-center items-center text-black w-full space-y-4 max-lg:text-sm gap-3 max-lg:flex-col max-lg:text-center">
			<HeadSection className="xl:text-5xl lg:w-1/2">
				Real Time generation of optimal building design
			</HeadSection>
			<p className="font-extralight lg:w-1/2">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged.
			</p>
		</div>
	);
};

export default TextDetail;
