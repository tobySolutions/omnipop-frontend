import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaia-agent",
  description: "Omnipop agent frontend",
  generator: "Gaia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
