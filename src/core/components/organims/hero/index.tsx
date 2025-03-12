import Picture from "../../molecules/hero/picture";
import Title from "../../molecules/hero/title";

const Hero = () => {
	return (
		<div className="container max-auto space-y-16 p-4 ">
			<Title />

			<Picture />
		</div>
	);
};

export default Hero;
