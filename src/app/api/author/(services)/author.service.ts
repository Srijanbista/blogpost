import { prisma } from "../../../../../prisma/db";
let myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append(
  "Authorization",
  `Bearer ${process.env.AUTH0_MANAGEMENT_TOKEN}`
);

let requestOptions: any = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
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

export async function getUserFromAuth0() {
  try {
    const user = await fetch(
      "https://dev-42ekabuyre2sq5ha.us.auth0.com/api/v2/roles",
      requestOptions
    );
    return user;
  } catch (error) {
    console.log(error);
  }
}
