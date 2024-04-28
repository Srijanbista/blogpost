import { Post } from "@prisma/client";
import { prisma } from "../../../../../prisma/db";

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return posts;
  } catch (error) {
    console.log(error);
  }
}

export async function addPost(data: Post) {
  try {
    const post = await prisma.post.create({
      data: data,
    });
    return post;
  } catch (error) {
    console.log(error);
  }
}
