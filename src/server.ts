import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;
const PORT = 3000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://librarian:librarian@cluster0.5vwwpib.mongodb.net/libraryDB?retryWrites=true&w=majority&appName=Cluster0",
    );
    console.log("Connected to MongoDB using Mongoose.");

    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
