import express from "express";

import connectDB from "./database/db.js";
import middlewares from "./middlewares/index.js";
import router from "./routes/index.js";

const app = express();

// database
connectDB();

// middlewares
middlewares.map((middleware) => app.use(middleware));

// router
app.use("/api/v1", router);

export default app;
