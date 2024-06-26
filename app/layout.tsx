import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-big-calendar/lib/css/react-big-calendar.css"

import TanstackProvider from "@/components/providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <div className="min-h-[calc(100vh-56px)] flex flex-col p-24 max-w-5xl m-auto gap-2">{children}</div>
        </TanstackProvider>
      </body>
    </html>
  );
}
