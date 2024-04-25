import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js"
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.status(200).json({ message: "OK" });
});
app.use("/api",router);
const PORT = process.env.PORT || 7001;
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}! 🚀`);
});
