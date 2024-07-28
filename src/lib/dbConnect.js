import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  // step-1 : check is already connected
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    console.log("MONGODB_URI : ",process.env.MONGODB_URI)
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {}); // returns db{}.connections[]
    // console.log(db) //

    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
};

export default dbConnect;
