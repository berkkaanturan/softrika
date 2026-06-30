import type { Metadata } from "next";
import { Inter, DM_Sans, Instrument_Serif, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: ["400"], variable: "--font-instrument-serif" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });

export const metadata: Metadata = {
  title: "Softrika",
  description: "Softrika olarak, şirketinize özel web, mobil ve bulut tabanlı yazılımlar geliştiriyoruz.",
  icons: {
    icon: "/image-cropped.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${dmSans.variable} ${instrumentSerif.variable} ${bricolage.variable} antialiased overflow-x-hidden text-slate-900 bg-[#F9F8F6]`}>
        {children}
      </body>
    </html>
  );
}
