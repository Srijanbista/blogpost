import { NextRequest, NextResponse } from "next/server";
import { getAccessTokenSilently } from "../auth/(services)/auth.service";

export async function GET(request: NextRequest) {
  try {
    const response = await getAccessTokenSilently();
    let header = new Headers();
    header.append("authorization", `Bearer ${response.access_token}`);
    header.append("content-type", "application/json");
    const options = {
      method: "GET",
      headers: header,
    };

    const userResponse = await fetch(
      `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users`,
      options
    );
    const users = await userResponse.json();
    return NextResponse.json({ users },{status:200});
  } catch (error) {
    console.log(error);
  }
}
