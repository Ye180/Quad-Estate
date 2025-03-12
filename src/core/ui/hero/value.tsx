import Chevron from "@/core/components/atoms/icons/chevron.icon";
import { Input } from "@/core/components/atoms/input";
import { Values } from "@/core/data/sort.data";

export const ValueUI = () => (
	<div className="w-full space-y-2">
		{Values.map((value, index) => (
			<div key={index} className="w-full relative space-y-2 text-second ">
				<h3 className="text-xs font-light">{value.label}</h3>
				<Input
					type="text"
					className="input-shadows"
					value={value.value}
					readOnly
				/>
				<span className="absolute right-[1vh] bottom-4 text-second cursor-pointer">
					<Chevron />
				</span>
			</div>
		))}
	</div>
);
