import Image from 'next/image'
import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Blogs",
  description: "Blogs list",
};

async function getData() {
  const res = await fetch("http://localhost:8080/api/v1/articles", {
    next: { revalidate: 60, tags: ['posts'] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface ArticleType {
  _id: string;
  title: string;
  keyword: string;
  description: string;
  content: string;
  date: Date
}

export default async function Home() {
  const res = await getData();
  const data: ArticleType[] = res.data;
  console.log(data)
  return (
    <>
      <h1 className="mb-3 text-2xl font-semibold">Blogs</h1>
      <ul>
      {data.map((item) => {
          return (
            <li className='relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm text-gray-900' key={item._id}>
              <Link href={`/article/${item._id}`}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}
