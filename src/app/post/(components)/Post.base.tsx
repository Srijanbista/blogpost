"use client";
import { Suspense } from "react";
import AddPostForm from "./AddPostForm";
import { Post } from "@prisma/client";
import { BlogCard } from "@/app/components/shared/post-card/PostCard";

export default function PostBase({ posts }: Readonly<{ posts: any[] }>) {
  return (
    <div className="flex flex-col justify-between min-h-screen w-full items-center px-12 lg:px-48 py-4">
      <div className="mb-8">
        <h2 className="text-4xl text-center">Add Post</h2>
        <AddPostForm />
      </div>
      <div>
        <h2 className="text-4xl text-center mb-4">Posts</h2>
        <Suspense fallback="Loading....">
          {posts?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2 lg:gap-x-8 lg:gap-y-4">
              {posts.map((post: Post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  content={post.content}
                  title={post.title}
                />
              ))}
            </div>
          ) : (
            <p>No Posts</p>
          )}
        </Suspense>
      </div>
    </div>
  );
}
