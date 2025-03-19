import Detail from "../organims/details";
import Features from "../organims/features";
import Hero from "../organims/hero";

const HomePage = () => {
	return (
		<div className="relative content-center place-items-center">
			<Hero />
			<Features />
			<Detail />
		</div>
	);
};

export default HomePage;
