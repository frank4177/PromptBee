import mongoose from "mongoose";

// set up connection to MongoDB
let isConnected = false; // track the connection

// connect to MongoDB
export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "PromptBee",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // set isConnected to true
    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(`error connecting to MongoDB: ${error}`);
  }
};
