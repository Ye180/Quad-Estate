"use client";
import ItemsBars from "../../molecules/footer/items.bars";
import ItemsForm from "../../molecules/footer/items.form";

const Footer = () => {
	console.log("footer");
	const result = 1 + 8;
	console.log(result);

	result; //?

	const quokka = { isAwesome: true, nodeVersion: process.version };

	console.log(quokka);

	return (
		<footer className="w-full bg-black text-white h-64 py-8">
			<ItemsForm />
			<ItemsBars />
		</footer>
	);
};

export default Footer;
