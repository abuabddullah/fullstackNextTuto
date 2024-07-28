"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";

const EditTodo = () => {
  const { _id } = useParams();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`/api/getTodoDetails/${_id}`, fetcher);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const name = formData.todoName.value;
    const description = formData.todoDesciption.value;
    const todo = {
      name,
      description,
    };
    console.log(todo);

    try {
      const response = await fetch(`/api/updateTodo/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      alert("Todo UPDATED successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding todo!"); // Inform user about the error
    }
  };
  return (
    <section className="m-10 bg-cyan-100 p-10">
      <h1 className="text-center text-2xl font-bold underline">EditTodo</h1>
      <form
        onSubmit={handleAddTodo}
        className="flex flex-col md:w-1/2 m-12 gap-5"
      >
        <input
          className="p-4"
          type="text"
          name="todoName"
          id=""
          placeholder="Todo Name"
          defaultValue={data?.todo?.name}
        />
        <textarea
          className="p-4"
          name="todoDesciption"
          id=""
          placeholder="Todo Desciption"
          defaultValue={data?.todo?.description}
        ></textarea>
        <input
          className="m-2 p-2 text-white bg-cyan-300"
          type="submit"
          value="Edit"
        />
      </form>
    </section>
  );
};

export default EditTodo;
