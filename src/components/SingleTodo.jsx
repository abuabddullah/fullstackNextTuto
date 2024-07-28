"use client";
import Link from "next/link";
import { useState } from "react";
import { mutate } from "swr";

const SingleTodo = ({ todo }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  // handle Todo Delete
  const handleTodoDelete = async (id) => {
    setIsDeleting(true);
    const isConfirmedDelete = confirm(`Are you sure to delete To: ${id}`);
    if (isConfirmedDelete) {
      try {
        const res = await fetch(`/api/deleteTodo/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Failed to delete todo");

        // Optimistic update
        mutate("/api/getAllTodos"); // Assuming you have a getAllTodos endpoint
        alert(`${id} deleted successfully`);
      } catch (error) {
        console.error("Error deleting todo:", error);
        setIsDeleting(false);
      }
    }
    setIsDeleting(false);
  };
  return (
    <div className="flex-col flex items-center m-4 border border-cyan-500 shadow-2xl p-8 md:max-w-96 overflow-hidden">
      <h3>Title: {todo?.name}</h3>
      <p>Description: {todo?.description}</p>
      <div>
        <Link href={`edit/${todo?._id}`}>
          <button className="m-2 p-4 border border-cyan-200 hover:bg-cyan-300">
            Edit
          </button>
        </Link>
        <button
          disabled={isDeleting}
          onClick={() => handleTodoDelete(todo?._id)}
          className="m-2 p-4 border border-cyan-200 hover:bg-cyan-300"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
