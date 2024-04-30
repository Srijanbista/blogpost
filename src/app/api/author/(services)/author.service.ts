import { prisma } from "../../../../../prisma/db";

export async function getAuthorByName(authorName: string) {
  try {
    const author = await prisma.author.findFirst({
      where: {
        name: authorName,
      },
    });

    return author;
  } catch (error) {
    console.log(error);
  }
}

export async function createAuthor(authorName: string) {
  try {
    const author = await prisma.author.create({
      data: {
        name: authorName,
      },
    });

    return author;
  } catch (error) {
    console.log(error);
  }
}
