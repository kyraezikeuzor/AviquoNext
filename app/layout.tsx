"use client";

import { Providers } from "./providers";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import LayoutInterface from "@/utils/Interfaces";

export default async function RootLayout({ children }: LayoutInterface) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
