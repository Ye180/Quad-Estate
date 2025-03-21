import Button from "../../atoms/button";
import HeadSection from "../../atoms/head.section";
import Step from "./step";

const ItemsStepper = () => {
	return (
		<div className="space-y-10 flex flex-col justify-between max-md:place-items-center ">
			<HeadSection>Easily Master Design</HeadSection>
			<p className="max-md:text-center">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
			</p>
			<Step />
			<Button url="/" variant="secondary" className="w-fit">
				Generate new
			</Button>
		</div>
	);
};

export default ItemsStepper;
