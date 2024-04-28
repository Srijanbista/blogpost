export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
import PostBase from "./(components)/Post.base";
import { getPosts } from "../api/post/(services)/post.service";

export default async function Post() {
  const posts = (await getPosts()) ?? [];

  return <PostBase posts={posts} />;
}
