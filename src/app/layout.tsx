import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Hadeed — Full Stack Developer",
  description:
    "Portfolio of Muhammad Hadeed (@HadeedTariq) — Full Stack Developer specializing in scalable web applications, backend engineering, and system design using Node.js, React, and PostgreSQL.",
  openGraph: {
    title: "Muhammad Hadeed — Full Stack Developer",
    description:
      "Experienced Full Stack Developer crafting dynamic and scalable web applications that empower businesses to grow.",
    type: "website",
    url: "https://hadeed-tariq-portfolio.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hadeed — Full Stack Developer",
    description:
      "Full Stack Developer specializing in Node.js, Express, and React with a focus on building efficient, scalable systems.",
    creator: "@HadeedTariq",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grid">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
