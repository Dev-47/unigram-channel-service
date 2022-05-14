import mongoose from "mongoose";

const { MONGO_URI } = process.env;

async function connect_to_database() {
  const { connection } = await mongoose.connect(MONGO_URI);
  console.log(`database connected to ${connection.host}`);
}

export default connect_to_database;
