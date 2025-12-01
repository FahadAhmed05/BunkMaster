import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site metadata
export const metadata: Metadata = {
  title: "DUET Bunk-o-Meter",
  description:
    "A calm and playful tool to calculate your attendance, bunks, and academic balance — crafted by Fahad Ahmed.",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fffdf9] text-slate-700`}
      >
        {children}
      </body>
    </html>
  );
}
