import React, { useState } from "react";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Footer from "../components/Footer";
import parse from "html-react-parser";
import axios from "axios";

const NewBlog = () => {
    const [data, setData] = useState({
        title: "New Blog",
        city: "Select City",
        description: null,
    });
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            setData({ ...data, description: editorRef.current.getContent() });
        }
    };
    const handleSelectChange = (event) => {
        // console.log(event.target.value);
        setData({ ...data, city: event.target.value });
    };
    const handleTitleChange = (event) => {
        setData({ ...data, title: event.target.value });
    };
    console.log(data);

    const handleSubmit = async () => {
        console.log("curr data: ", data);
        if (
            data.title === "New Blog" ||
            data.city === "Select City" ||
            !data.description
        ) {
            return;
        }
        const res = await axios.post("http://localhost:7001/api/blog", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log("DATA: ", res);
    };

    return (
        <div>
            <section class="bg-white dark:bg-gray-900 min-h-screen pb-16">
                <div class="mx-auto max-w-screen-sm text-center mb-8 pt-4">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Write Your Blog
                    </h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        "Unleash Your Wanderlust: Share Your Adventures,
                        Stories, and Insights with the World!"
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="w-1/2 flex flex-col">
                        <select
                            id="dropdown"
                            onChange={(event) => handleSelectChange(event)}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4"
                        >
                            <option className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Select City
                            </option>
                            <option
                                value="Dubai"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Dubai
                            </option>
                            <option
                                value="Abu Dhabi"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Abu Dhabi
                            </option>
                        </select>

                        <div class="mb-6">
                            <label
                                for="blog-title"
                                class="block mb-2 text-2xl font-bold text-gray-900 dark:text-white"
                            >
                                Blog Title
                            </label>
                            <input
                                onChange={(event) => handleTitleChange(event)}
                                type="text"
                                id="blog-title"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4"
                                placeholder="Enter Your Title"
                            />
                        </div>
                        <Editor
                            apiKey="c8314dncok6trnwwdf99d0demq44vwzpk4rt7bt5ggedtugx"
                            onInit={(_evt, editor) =>
                                (editorRef.current = editor)
                            }
                            onChange={log}
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "code",
                                    "help",
                                    "wordcount",
                                ],
                                toolbar:
                                    "undo redo | blocks | " +
                                    "bold italic forecolor | alignleft aligncenter " +
                                    "alignright alignjustify | bullist numlist outdent indent | " +
                                    "removeformat | help",
                                content_style:
                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                skin: "oxide-dark",
                                content_css: "dark",
                            }}
                        />
                        <button
                            type="button"
                            className=" mt-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 "
                            onClick={() => handleSubmit()}
                        >
                            Submit Post
                        </button>
                    </div>
                    <div></div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default NewBlog;
