import dbConnect from "@/lib/dbConnect";
import TodoModel from "@/models/Todo.model";

export const PUT = async (request, { params }) => {
  const todoID = params._id;
  await dbConnect();

  try {
    const updateData = await request.json();
    const result = await TodoModel.updateOne({ _id: todoID }, updateData);

    if (result.modifiedCount === 1) {
      return new Response(JSON.stringify({
        success: true,
        message: "Todo updated successfully"
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } else {
      return new Response(JSON.stringify({
        success: false,
        message: "Todo not found or update failed"
      }), { status: 404, headers: { 'Content-Type': 'application/json' } });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({
      success: false,
      message: "Internal server error"
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
