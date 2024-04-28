import { NextRequest, NextResponse } from "next/server";
import { addPost } from "../(services)/post.service";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    await addPost(data);
    return NextResponse.json({ message: "Post added successfully" });
  } catch (error) {
    console.log(error);
  }
}
