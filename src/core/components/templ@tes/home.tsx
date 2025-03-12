import Features from "../organims/features";
import Hero from "../organims/hero";

const HomePage = () => {
	return (
		<div className="relative content-center place-items-center space-y-8">
			<Hero />
			<Features />
		</div>
	);
};

export default HomePage;
