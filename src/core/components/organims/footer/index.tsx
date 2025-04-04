import ItemsBars from "../../molecules/footer/items.bars";
import ItemsForm from "../../molecules/footer/items.form";

const Footer = () => {
	return (
		<footer className="w-full bg-black text-white h-64 py-8  space-y-8">
			<ItemsForm />
			<ItemsBars />
		</footer>
	);
};

export default Footer;
