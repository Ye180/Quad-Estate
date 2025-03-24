const ItemsBars = () => {
	return (
		<div className="bg-black py-2">
			<div className="container mx-auto space-y-4">
				<div className=" border border-white/30" />
				<div className="bg-black flex justify-between items-center max-md:flex-col gap-4">
					{[
						"© Copyright 2025",
						"Quad | Estate",
						"Lorem",
						"Designed By Ye with 💪🏽",
					].map((items, key) => {
						return (
							<p key={key} className="capitalize">
								{items}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ItemsBars;
