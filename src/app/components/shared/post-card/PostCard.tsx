import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";

export function BlogCard({
  id,
  title,
  content,
}: Readonly<{
  id: string;
  title: string;
  content: string;
}>) {
  return (
    <Card className="max-w-[400px]" key={crypto.randomUUID()}>
      <CardHeader className="text-2xl font-medium">{title}</CardHeader>
      <Divider />
      <CardBody>
        <p>{content?.length > 0 ? content : "No content"}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link href={`/post/${id}`} className="text-blue-500 hover:underline">
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}
