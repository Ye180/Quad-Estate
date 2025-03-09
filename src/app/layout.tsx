import "@/core/styles/globals.css";
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
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
