import { prisma } from "../../../../prisma/db";

export default async function Page({
  params,
}: Readonly<{ params: { id: string } }>) {
  const blog = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
    select: {
      title: true,
      author: true,
      content: true,
    },
  });
  let author = "Srijan";
  return (
    <div className="border rounded px-6 py-3">
      <p className="text-4xl font-semibold mb-2">{blog?.title ?? "No Title"}</p>
      <p className="mb-5 italic font-xs font-extralight">{`By ${author}`}</p>
      <p className="">{blog?.content ?? "No Description"}</p>
    </div>
  );
}
