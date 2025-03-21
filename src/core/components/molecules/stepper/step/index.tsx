import StepIcons from "@/core/components/atoms/icons/step.icon";
import { StepperItems } from "@/core/data/stepper.data";

const Step = () => {
	return (
		<ul className="place-items-start list-none space-y-5">
			{StepperItems.map((item, index) => (
				<li
					key={index}
					className=" flex items-center justify-center text-xl gap-3 "
				>
					<span className="bg-gray p-2 rounded-full">
						<StepIcons />
					</span>
					<pre className="font-manrope ">
						{" "}
						Step {index + 1} : {item.label}
					</pre>
				</li>
			))}
		</ul>
	);
};

export default Step;
