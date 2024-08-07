import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Related from "../components/Related.js";
import { useParams } from "react-router";
import parse from "html-react-parser";
import moment from "moment";
import axios from "axios";
const OpenBlog = () => {
    const params = useParams();
    const blogId = params.id;
    const [data, setData] = useState({ description: "<p></p>" });
    const [likeStatus, setLikeStatus] = useState(false);
    const [dislikeStatus, setDislikeStatus] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:7001/api/blog/${blogId}`)
            .then((res) => res.json())
            .then((res) => {
                console.log("blog res: ", res);
                setData(res.blog);
            });
        fetch(`http://localhost:7001/api/blog/${blogId}/status`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("status res: ", res);
                if (res.message === "ok") {
                    if (res.status === "neutral") return;
                    else if (res.status === "liked") {
                        setLikeStatus(true);
                    } else if (res.status === "disliked") {
                        setDislikeStatus(true);
                    }
                }
            });
    }, []);

    async function likeBlog() {
        const res = await axios.patch(
            `http://localhost:7001/api/blog/${blogId}/like`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        console.log("LIKE RES: ", res.data);
        if (res.data.message === "Like updated") {
            setLikeStatus(true);

            if (dislikeStatus) {
                setDislikeStatus(false);
                setData({
                    ...data,
                    dislikes: data.dislikes - 1,
                    likes: data.likes + 1,
                });
            } else {
                setData({ ...data, likes: data.likes + 1 });
            }
        }
    }
    async function dislikeBlog() {
        const res = await axios.patch(
            `http://localhost:7001/api/blog/${blogId}/dislike`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        console.log("DISLIKE RES: ", res.data);
        if (res.data.message === "Dislike updated") {
            setDislikeStatus(true);
            if (likeStatus) {
                setLikeStatus(false);
                setData({
                    ...data,
                    likes: data.likes - 1,
                    dislikes: data.dislikes + 1,
                });
            } else {
                setData({ ...data, dislikes: data.dislikes + 1 });
            }
        }
    }

    return (
        <div className="h-screen">
            <main class="pt-8 pb-8 lg:pt-16 lg:pb-12 bg-white dark:bg-gray-900 antialiased min-h-[75%]">
                <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header class="mb-4 lg:mb-6 not-format">
                            <address class="flex items-center mb-6 not-italic">
                                <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                    {data.title}
                                </h1>
                            </address>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img
                                        class="mr-4 w-16 h-16 rounded-full"
                                        src={`https://ui-avatars.com/api/?name=${data.author}`}
                                        alt="Author Photo"
                                    />
                                    <div>
                                        <a
                                            href="#"
                                            rel="author"
                                            class="text-xl font-bold text-gray-900 dark:text-white"
                                        >
                                            {data.author}
                                        </a>
                                        <p class="text-base text-gray-500 dark:text-gray-400">
                                            <time
                                                pubdate
                                                datetime="2022-02-08"
                                                title="February 8th, 2022"
                                            >
                                                {moment(data.date).format("LL")}
                                            </time>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-8 gap-8 mr-8">
                                    <div className="flex justify-start items-center">
                                        <button
                                            onClick={() => {
                                                likeBlog();
                                            }}
                                        >
                                            {likeStatus ? (
                                                <svg
                                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                        <p className="text-white">
                                            &nbsp; {data.likes}
                                        </p>
                                    </div>
                                    <div className="flex justify-start items-center">
                                        <button
                                            onClick={() => {
                                                dislikeBlog();
                                            }}
                                        >
                                            {dislikeStatus ? (
                                                <svg
                                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                        <p className="text-white">
                                            &nbsp; {data.dislikes}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <figure>
                            <img src={data.image} alt="" />
                        </figure>
                        <div className="text-field text-white text-lg mt-10">
                            {parse(data.description)}
                        </div>
                    </article>
                </div>
            </main>

            {/* <Related /> */}

            <Footer />
        </div>
    );
};

export default OpenBlog;
