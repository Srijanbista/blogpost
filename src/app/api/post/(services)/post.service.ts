import { Post } from "@prisma/client";
import { prisma } from "../../../../../prisma/db";
import {
  createAuthor,
  getAuthorByName,
} from "../../author/(services)/author.service";

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

export async function addPost(postData: Post) {
  try {
    let author = await getAuthorByName(postData.authorName);
    if (!author) {
      author = await createAuthor(postData.authorName);
    }
    const post = await prisma.post.create({
      data: {
        content: postData.content,
        title: postData.title,
        authorName: postData.authorName,
        author: {
          connect: { id: author?.id },
        },
      },
    });
    return post;
  } catch (error) {
    console.log(error);
    throw error; // Re-throwing the error for handling at the caller's level
  }
}
