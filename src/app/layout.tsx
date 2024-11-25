import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "../../styles/main.scss";
import { Podkova } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'

const headerFont = Podkova({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-header',
})

export const metadata: Metadata = {
  title: "Gully G'z - Rock Band from Long Beach, CA",
  description: "Dive into the world of Gully G'z, an indie rock band with a surf punk twist hailing from Long Beach CA. Learn about their music, upcoming shows, and more on our site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={headerFont.variable}>
      <body>
        {children}
        <SpeedInsights/>
      </body>
      <GoogleAnalytics gaId="G-X992DXTYBX" />
    </html>
  );
}
