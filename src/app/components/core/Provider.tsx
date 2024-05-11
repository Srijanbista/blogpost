"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import NavigationBar from "./Navbar";
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <NavigationBar />
      {children}
    </NextUIProvider>
  );
};

export default Provider;
