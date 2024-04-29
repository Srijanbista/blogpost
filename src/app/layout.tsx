import type { Metadata } from "next";
import "./globals.css";
import Provider from "./components/core/Provider";
import { Toaster } from "react-hot-toast";

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
        <Provider>
          {children}
          <Toaster position="top-right" />
        </Provider>
      </body>
    </html>
  );
}
