import type { Metadata } from "next";
import "../../styles/main.scss";

export const metadata: Metadata = {
  title: "Gully G'z - Gully G'z - Rock Band from Long Beach, CA",
  description: "Dive into the world of Gully G'z, a rock band hailing from Long Beach CA. Learn about their music, upcoming shows, and more on our site.",
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
