import Header from "@/core/components/molecules/header";
import Footer from "@/core/components/organims/footer";
import "@/core/styles/globals.css";
import "@fontsource-variable/manrope";
import "@fontsource-variable/teko";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Quad Estate",
	description: "Quad Estate",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
