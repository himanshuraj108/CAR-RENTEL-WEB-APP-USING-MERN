import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/mongodb.configs.js";
import userRouter from "./routes/user.routes.js";
import ownerRouter from "./routes/owner.route.js";

const app = express();
const port = process.env.PORT || 3000;

await connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING...");
});

app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
