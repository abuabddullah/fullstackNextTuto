import dbConnect from "@/lib/dbConnect";

export const GET = async (request) => {
  await dbConnect();
  return Response.json(
    {
      success: true,
      message: "Testing Successfull on path: src\\app\\api\testApi\route.js",
    },
    { status: 401 }
  );
};
