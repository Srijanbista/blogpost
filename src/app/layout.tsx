import type { Metadata } from "next";
import "./globals.css";
import Provider from "./components/core/Provider";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "By Srizan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
