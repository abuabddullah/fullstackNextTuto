// apiFormat : http://localhost:3000/api/deleteTodo/66a56b8accf6f7a110f1bb68
// filepath: src\app\api\deleteTodo\[_id]\route.js
import dbConnect from "@/lib/dbConnect";
import TodoModel from "@/models/Todo.model";

export const DELETE = async (request, { params }) => {
  const todoID = params._id;
  await dbConnect();
  try {
    const query = { _id: todoID }
    const res = await TodoModel.deleteOne(query);
    console.log(res);
    if (res.deletedCount > 0) {
      return Response.json(
        {
          success: true,
          message: "delete request successfull",
          data: todoID,
        },
        { status: 200 }
      );
    }
    return Response.json(
      {
        success: false,
        message: "delete request failed",
        data: { todoID, ...res },
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
