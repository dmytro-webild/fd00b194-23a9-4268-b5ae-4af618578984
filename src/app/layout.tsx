import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'MPE Services | Professional Plumbing & Electrical Maintenance Qatar',
  description: 'Leading plumbing, electrical, and maintenance services in Qatar. Available 24/7. Trusted by homeowners and businesses. Call 7210 8374.',
  keywords: ["Plumbing Qatar, Electrical Maintenance Qatar, Drain Cleaning, Water Heaters, MPE Services, 24/7 Maintenance"],
  openGraph: {
    "title": "MPE Services | Professional Maintenance",
    "description": "Top-rated plumbing and electrical services in Qatar.",
    "siteName": "MPE Services",
    "type": "website"
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
