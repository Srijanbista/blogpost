"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function BlogCard({
  id,
  title,
  content,
}: Readonly<{
  id: string;
  title: string;
  content: string;
}>) {
  const router = useRouter();
  return (
    <Card
      className="max-w-[600px] hover:scale-105 transition-all ease-in-out duration-500"
      key={crypto.randomUUID()}
    >
      <CardHeader>
        <span
          className="text-2xl font-medium h-14 w-11/12 truncate"
          title={title}
        >
          {title}
        </span>
      </CardHeader>
      <Divider />
      <CardBody className="h-40">
        <p className="line-clamp-5">
          {content?.length > 0 ? content : "No content"}
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="h-10">
        <button
          type="button"
          className="text-blue-500 hover:underline"
          onClick={() => {
            router.push(`post/${id}`);
          }}
        >
          Read More
        </button>
      </CardFooter>
    </Card>
  );
}
