import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-4xl font-bold">Welcome to the Blog Posts!</h1>
        <Link href="/post" className="text-3xl underline">
          View Posts
        </Link>
      </div>
    </main>
  );
}
