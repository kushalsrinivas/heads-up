import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Nav from "@/components/Nav";
import { StoreProvider } from "@/Store/Store";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heads UP",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Nav></Nav>
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
