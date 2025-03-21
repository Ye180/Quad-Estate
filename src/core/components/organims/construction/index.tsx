import Button from "../../atoms/button";

const Construction = () => {
	return (
		<div
			className="relative h-[80vh] bg-red-700 w-full overflow-hidden"
			style={{
				backgroundImage: 'url("/assets/bg_construction.webp")',
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="bg-black/60 backdrop-contrast-50 w-full h-full content-center place-items-center text-center">
				<div className="lg:w-2/3 space-y-8 px-2">
					<h2 className="font-black text-4xl lg:text-5xl xl:text-7xl leading-normal text-white drop-shadow-md">
						WHERE IDEAS TURN INTO STUNNING DESIGNS
					</h2>
					<Button url="/" variant="secondary" className="w-fit">
						Generate new
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Construction;
