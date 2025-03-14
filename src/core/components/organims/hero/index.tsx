import Black from "../../molecules/hero/black";
import Picture from "../../molecules/hero/picture";
import Title from "../../molecules/hero/title";

const Hero = () => {
	return (
		<div className="relative w-full place-items-center">
			<Title />
			<Picture />
			<Black />
		</div>
	);
};

export default Hero;
