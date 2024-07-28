import dbConnect from "@/lib/dbConnect";
import TodoModel from "@/models/Todo.model";

export const GET = async (request, { params }) => {
  const todoID = params._id;
  await dbConnect();

  try {
    const todo = await TodoModel.findOne({ _id: todoID });

    if (!todo) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Todo not found or update failed",
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Todo found successfully",
          todo,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal server error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
