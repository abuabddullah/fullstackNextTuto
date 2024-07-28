import dbConnect from "@/lib/dbConnect";
import TodoModel from "@/models/Todo.model";

export const GET = async (request, response) => {
  await dbConnect();
  try {
    const allTodos = await TodoModel.find();
    console.log(allTodos)
    return Response.json(
      {
        success: true,
        message: "Todo post request successfull",
        allTodos,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        success: false,
        message: "request error",
        error,
      },
      { status: 500 }
    );
  }
};
