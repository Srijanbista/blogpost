import { Post } from "@prisma/client";

export async function addPost(data: Post) {
  try {
    const res = await fetch("/api/post/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
