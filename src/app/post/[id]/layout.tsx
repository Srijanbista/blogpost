import { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="grid grid-cols-12 px-12 py-10 gap-x-10">
      <div className="col-span-3">Other Posts</div>
      <div className="col-span-6">{children}</div>
      <div className="col-span-3">Recent Posts from Author</div>
    </div>
  );
}
