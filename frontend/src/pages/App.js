import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Register from "./Register";
import Login from "./Login";
import City from "./City";
import Places from "./Places";
import Blog from "./Blog";
import OpenBlog from "./OpenBlog";
import NewBlog from "./NewBlog";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Blog4 from "./Blog4";
import Itenary from "./Itenary";
import chatSvg from "../components/chat.svg";
import wrongSvg from "../components/wrong.svg";
import logoSvg from "../components/logo.svg";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Home from "./Home";

function App() {
    const [chatView, setChatView] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    function getResponse() {
        setMessages([]);
        if (input.length > 0) {
            const rws = io("http://localhost:7001");
            console.log("Sending prompt: ", input);
            rws.emit("message", input);
            console.log("Prompt sent.");
            rws.on("chat response", (data) => {
                data = JSON.parse(data);
                console.log(data.text);
                setMessages((prev) => [...prev, data.text]);
            });
            rws.on("chat error", (data) => {
                console.log("Error: ", data);
            });
        }

        // rws.onmessage = (message) => {
        //     const data = JSON.parse(message.data);
        //     console.log("data: ", data);
        //     setMessages((prev) => [...prev, data.text]);
        // };
        setInput("");
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<DashBoard />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/places" element={<Places />} />
                    <Route path="/city" element={<City />} />
                    <Route path="/blogs" element={<Blog />}></Route>
                    <Route path="/blog/:id" element={<OpenBlog />}></Route>
                    <Route path="/blog/1" element={<Blog1 />}></Route>
                    <Route path="/blog/2" element={<Blog2 />}></Route>
                    <Route path="/blog/3" element={<Blog3 />}></Route>
                    <Route path="/blog/4" element={<Blog4 />}></Route>
                    <Route path="/newBlog" element={<NewBlog />}></Route>
                    <Route path="/user/itenary" element={<Itenary />} />
                </Routes>
            </BrowserRouter>
            <div className="fixed bottom-10 right-10 flex flex-col justify-center items-center">
                {chatView && (
                    <div className=" bg-gray-600 p-1 flex flex-col justify-center items-center rounded-lg w-60 h-80 border-2 border-gray-500">
                        <div className="output-window overflow-y-scroll h-[70%] w-full bg-white">
                            <img
                                src={logoSvg}
                                alt="logo"
                                height="30px"
                                width="30px"
                                className="m-2 inline-block"
                            ></img>
                            :{" "}
                            {messages.map((msg, index) => (
                                <span key={index}>{msg}</span>
                            ))}
                        </div>
                        <div className="relative top-4 m-2 gap-2 flex justify-center items-center h-[10%]">
                            <input
                                className=" rounded-md border-2 border-gray-400 chat-input w-full h-full flex-end "
                                placeholder="&nbsp;Enter prompt"
                                onChange={(e) => setInput(e.target.value)}
                                value={input}
                            ></input>
                            <button
                                onClick={() => getResponse()}
                                className="pl-2 p-1 text-center rounded-md bg-blue-400 cursor-pointer text-white border-2 border-gray-400"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                )}
                {(!chatView && (
                    <div
                        onClick={() => {
                            setChatView(!chatView);
                        }}
                        className="flex justify-center  w-16 h-16 rounded-full cursor-pointer bg-blue-400"
                    >
                        <img
                            src={chatSvg}
                            height="40px"
                            width="40px"
                            alt="chat svg"
                        ></img>
                    </div>
                )) || (
                    <div
                        onClick={() => {
                            setChatView(!chatView);
                        }}
                        className="flex justify-center  w-16 h-16 rounded-full cursor-pointer bg-red-400"
                    >
                        <img
                            src={wrongSvg}
                            height="40px"
                            width="40px"
                            alt="chat svg"
                        ></img>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
