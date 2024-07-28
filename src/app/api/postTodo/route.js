import dbConnect from "@/lib/dbConnect";
import TodoModel from "@/models/Todo.model";

export const POST = async (request) => {
  await dbConnect();
  try {
    const { name, description } = await request.json();
    const newTodo = await TodoModel.create({ name, description });
    return Response.json(
      {
        success: true,
        message: "Todo post request successfull",
        newTodo,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error)
    return Response.json(
      {
        success: false,
        message: "Todo post request error",
        error,
      },
      { status: 500 }
    );
  }
};
