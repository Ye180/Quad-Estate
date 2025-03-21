import ArrowIcon from "../../atoms/icons/arrow.icon";

const ItemsDetails = () => {
	return (
		<div className="container mx-auto z-20 ">
			<div className=" w-full gap-2 grid grid-row-4 lg:grid-cols-3 lg:grid-row-2 h-[45rem]">
				<div className="bg-black text-white rounded-xl shadow-2xl col-span-2 row-span-2 h-full content-center place-items-center ">
					{" "}
					<div className="flex flex-col justify-between w-[90%] h-[90%]">
						<div className="space-y-4 bg-amber-400">
							<h2 className="font-bold text-2xl lg:text-4xl capitalize leading-normal tracking-normal">
								Detailed introduction of design criteria
							</h2>
							<p className="w-full text-balance text-sm lg:text-lg text-white/80">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book.
							</p>
						</div>
						<div className="flex justify-between">
							<div className="text-sm lg:text-lg opacity-70">
								<p>Director Manager</p>
								<p> Y. Emmanuel</p>
							</div>
							<div className="p-2 lg:p-4 bg-white rounded-full rotate-45">
								<ArrowIcon />
							</div>
						</div>
					</div>
				</div>
				<div
					className=" bg-amber-800 row-span-4 col-span-1  h-full rounded-xl overflow-hidden"
					style={{
						backgroundImage: 'url("/assets/decor.webp")',
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
				<div
					className="bg-amber-950  h-full row-span-2 rounded-xl"
					style={{
						backgroundImage: 'url("/assets/second_decor.webp")',
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
				<div className=" bg-black  h-full row-span-2 rounded-xl content-center place-items-center text-white ">
					<div className="w-[85%] h-[85%] content-end space-y-4">
						<h2 className="font-bold text-lg lg:text-4xl capitalize leading-normal tracking-normal">
							Manuel project modeling
						</h2>
						<p className="text-sm w-full text-balance lg:text-lg text-white/80">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemsDetails;
