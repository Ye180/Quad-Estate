import Button from "../../atoms/button";
import ArrowIcon from "../../atoms/icons/arrow.icon";
import { Input } from "../../atoms/input";

const ItemsForm = () => {
	return (
		<div className="container mx-auto flex justify-between items-center px-4  max-md:flex-col max-md:gap-6 bg-black ">
			<div className="flex md:flex-col gap-4">
				{["Commercial", "Commercial", "Commercial"].map(
					(items, index) => {
						return (
							<Button
								className="w-fit bg-none border hover:bg-white hover:text-black h-fit"
								url="/"
								variant="primary"
								key={index}
							>
								{items}
							</Button>
						);
					},
				)}
			</div>
			<div className="flex flex-col w-full space-y-4 md:w-96 max-md:items-center">
				<p className="leading-[2rem] max-md:text-base max-md:text-center">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Tenetur minus itaque hic soluta cupiditate.
				</p>
				<div className="flex justify-between items-center bg-white rounded-full overflow-hidden px-2 w-64 ">
					<Input
						type="text"
						id="name"
						className="bg-white text-black"
						placeholder="Email"
					/>
					<ArrowIcon stroke="#020002" className="rotate-45" />
				</div>
			</div>
		</div>
	);
};

export default ItemsForm;
