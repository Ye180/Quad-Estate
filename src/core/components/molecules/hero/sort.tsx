"use client";
import Toggle from "@/core/ui/hero/toggle";
import { ValueUI } from "@/core/ui/hero/value";
import { motion } from "motion/react";
import Image from "next/image";

const Sort = ({ picture }: { picture: string }) => {
	return (
		<motion.div
			layout
			initial={{ borderRadius: 20 }}
			className=" flex flex-col py-4 px-2 justify-between items-center absolute shadow-xl overflow-hidden z-20 backdrop-blur-xl w-64  max-lg:inset-1/2 max-lg:-translate-1/2 lg:left-8 h-[80%] lg:inset-y-1/2 lg:-translate-y-1/2 "
			transition={{ duration: 1 }}
		>
			<div className="w-full text start max-lg:hidden">
				<h1 className="font-teko font-medium  text-4xl text-second">
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
