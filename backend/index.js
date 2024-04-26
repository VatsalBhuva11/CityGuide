import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import morgan from "morgan";
import blogRouter from "./routes/blogs.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import http from "http";
import { pipeline } from "stream";
import { Server } from "socket.io";

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get("/", (req, res) => {
    res.status(200).json({ message: "OK" });
});
app.use("/api", router);
app.use("/api/blogs", blogRouter);
const PORT = 7001;

wss.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("message", async function (prompt) {
        console.log("socket entered prompt: ", prompt);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        try {
            prompt =
                prompt +
                ". Give answer only in plain text without any formatting like bold, underline, bullets points. For new line text, use a comma instead of newline";
            const result = await model.generateContentStream(prompt);
            console.log("Going to run");
            for await (const chunk of result.stream) {
                const chunkText = await chunk.text();
                console.log(chunkText);
                socket.emit(
                    "chat response",
                    JSON.stringify({ text: chunkText })
                );
            }
        } catch (error) {
            console.error("Error while streaming content:", error);
            socket.send("chat error", JSON.stringify({ error: error.message }));
        }

        console.log("========");
        console.log("response done");
        console.log("========");
    });
    socket.on("close", () => console.log("Client disconnected"));
});

server.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}! 🚀`);
});

// wss.on("connection", function connection(ws) {
//     console.log("A new client connected!");
//     ws.on("message", async function incoming(message) {
//         console.log("Received: %s", message);

//         const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//         try {
//             const result = await model.generateContentStream(message);
//             console.log("Going to run");
//             for await (const chunk of result.stream) {
//                 const chunkText = await chunk.text();
//                 console.log(chunkText);
//                 ws.send(JSON.stringify({ text: chunkText }));
//             }
//         } catch (error) {
//             console.error("Error while streaming content:", error);
//             ws.send(JSON.stringify({ error: error.message }));
//         }
//     });

//     ws.on("close", () => console.log("Client disconnected"));
// });
