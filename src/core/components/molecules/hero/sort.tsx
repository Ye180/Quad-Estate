"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import Toggle from "../../../ui/hero/toggle";
import { ValueUI } from "../../../ui/hero/value";

const Sort = ({ picture }: { picture: string }) => {
	const [isOpen, setIsOpen] = useState(false);
	const width = "w-[90%] lg:w-64 h-[95%]";
	const widthPhone = "w-[3rem] h-[3rem] cursor-pointer max-lg:rounded-full ";
	console.log(isOpen);
	return (
		<motion.div
			layout
			data-isopen={isOpen}
			className="widthPhone flex flex-col py-4 px-2 justify-between items-center absolute shadow-xl overflow-hidden lg:left-8 z-20 rounded-2xl backdrop-blur-xl max-lg:inset-1/2 max-lg:-translate-1/2 lg:h-[80%] lg:inset-y-1/2 lg:-translate-y-1/2 lg:w-64 "
			onClick={() => setIsOpen(!isOpen)}
			transition={{ duration: 1 }}
		>
			<div className="w-full text start">
				<h1 className="font-teko font-medium  text-4xl text-second max-lg:hidden">
					Quad
				</h1>
			</div>
			<ValueUI />

			<Toggle />

			<div className="bg-amber-800 w-[95%] overflow-hidden rounded-xl max-lg:hidden">
				<Image
					alt="Image1"
					src={picture}
					width={2000}
					height={2000}
					className="w-full h-full z-10"
					priority
				/>
			</div>
		</motion.div>
	);
};

export default Sort;
