import type { Metadata } from "next";
import "./globals.css";
import Provider from "./components/core/Provider";
import { UserProvider } from "@auth0/nextjs-auth0/client";

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
        <UserProvider>
          <Provider>
            {children}
            <Toaster position="top-right" />
          </Provider>
        </UserProvider>
      </body>
    </html>
  );
}
