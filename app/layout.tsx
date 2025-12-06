import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DUET Bunk-o-Meter",
  description:
    "A calm and playful tool to calculate your attendance, bunks, and academic balance — crafted by Fahad Ahmed.",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "https://png.pngtree.com/png-vector/20220508/ourmid/pngtree-logo-set-modern-and-creative-branding-idea-collection-for-business-company-png-image_4565604.png",
  },
  openGraph: {
    title: "DUET Bunk-o-Meter",
    description:
      "A calm and playful tool to calculate your attendance, bunks, and academic balance — crafted by Fahad Ahmed.",
    url: "https://bunkmaster.netlify.app/", 
    siteName: "DUET Bunk-o-Meter",
    images: [
      {
        url: "https://png.pngtree.com/png-vector/20220508/ourmid/pngtree-logo-set-modern-and-creative-branding-idea-collection-for-business-company-png-image_4565604.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DUET Bunk-o-Meter",
    description:
      "A calm and playful tool to calculate your attendance, bunks, and academic balance — crafted by Fahad Ahmed.",
    images: [
      "https://png.pngtree.com/png-vector/20220508/ourmid/pngtree-logo-set-modern-and-creative-branding-idea-collection-for-business-company-png-image_4565604.png",
    ],
    creator: "@fahadahmed010",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-STHFQ0CVYF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-STHFQ0CVYF');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fffdf9] text-slate-700`}
      >
        {children}
      </body>
    </html>
  );
}
