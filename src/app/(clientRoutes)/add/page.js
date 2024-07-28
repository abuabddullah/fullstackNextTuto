"use client";

import { useRef } from "react";

const AddTodo = () => {
  const formRef = useRef(null);
  // handle Add Todo
  const handleAddTodo = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const name = formData.todoName.value;
    const description = formData.todoDesciption.value;
    const todo = {
      name,
      description,
    };

    try {
      const response = await fetch("/api/postTodo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      alert("Todo added successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding todo!"); // Inform user about the error
    }
  };
  return (
    <section className="m-10 bg-cyan-100 p-10">
      <h1 className="text-center text-2xl font-bold underline">AddTodo</h1>
      <form
        ref={formRef}
        onSubmit={handleAddTodo}
        className="flex flex-col md:w-1/2 m-12 gap-5"
      >
        <input
          className="p-4"
          type="text"
          name="todoName"
          id=""
          placeholder="Todo Name"
        />
        <textarea
          className="p-4"
          name="todoDesciption"
          id=""
          placeholder="Todo Desciption"
        ></textarea>
        <input
          className="m-2 p-2 text-white bg-cyan-300 cursor-pointer"
          type="submit"
          value="Add"
        />
      </form>
    </section>
  );
};

export default AddTodo;
