import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import toast from "react-hot-toast";

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
    <Card className="max-w-[600px]" key={crypto.randomUUID()}>
      <CardHeader className="text-2xl font-medium">{title}</CardHeader>
      <Divider />
      <CardBody>
        <p>{content?.length > 0 ? content : "No content"}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <button
          type="button"
          className="text-blue-500 hover:underline"
          onClick={() => toast.success("Please wait for next release.")}
        >
          Read More
        </button>
      </CardFooter>
    </Card>
  );
}
