import { NextResponse } from "next/server";
import { getPosts } from "./(services)/post.service";

export async function GET(request: Request) {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
  }
}
