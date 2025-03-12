import { ToggleValue } from "@/core/data/sort.data";

const Toggle = () => {
	return (
		<div className="w-full space-y-2">
			<h3 className="text-xs font-extralight text-second">Lorem Ipsum</h3>
			<div className="space-y-3 bg-gray/10 rounded-xl px-3 py-2">
				{ToggleValue.map((value, index) => (
					<div key={index} className="flex  items-center gap-2">
						<button className="w-10 cursor-pointer h-6 backdrop-blur-3xl bg-gray-100/20 rounded-3xl p-1 place-items-start">
							<div className="w-1/2 h-full bg-amber-50 rounded-full" />
						</button>
						<p className="text-sm text-second font-extralight">
							{value.label}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Toggle;
