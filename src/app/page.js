"use client";
import SingleTodo from "@/components/SingleTodo";
import Link from "next/link";
import useSWR from "swr";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data,
    error,
  } = useSWR("/api/getAllTodos", fetcher); // data={success,message,allTodos}
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <main>
      <ul>
        <li>কেমনে করে outlet এর কাজ করব?</li>
      </ul>
      <section className="m-10 bg-cyan-100 p-10 text-center">
        <h1 className="text-center text-2xl font-bold underline">
          TODO<small className="text-xs">oooooo</small>S
        </h1>
        <div className="flex flex-wrap">
          {data?.allTodos?.map((todo) => (
            <SingleTodo key={todo._id} todo={todo} />
          ))}
        </div>

        <Link href={`add`}>
          <button className="m-2 p-2 text-white bg-cyan-300 w-full md:w-1/3">
            Add Todo
          </button>
        </Link>
      </section>
    </main>
  );
}
