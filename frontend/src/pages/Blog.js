import React, { useEffect, useState } from "react";
import BlogInfo from "../components/Blogs/BlogInfo";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7001/api/blog")
            .then((res) => res.json())
            .then((res) => {
                console.log("RES: ", res);
                setBlogs(res.blogs);
            });
    }, []);

    return (
        <div className="relative bottom-0">
            <section class="bg-white dark:bg-gray-900 min-h-screen">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2 class="mb-4 text-5xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Our Blog
                        </h2>
                        <p class="font-light text-gray-500 sm:text-2xl dark:text-gray-400">
                            "Explore, Discover, Share: Your Journey Begins
                            Here!"
                        </p>
                        <Link to="/newBlog">
                            <button
                                type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-4"
                            >
                                New Blog
                            </button>
                        </Link>
                    </div>
                    <div class="grid gap-8 lg:grid-cols-2">
                        {/* this place we need to map all the fetched data */}
                        {blogs.map((blog) => (
                            <BlogInfo key={blog._id} blog={blog} />
                        ))}
                        ;
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Blog;
