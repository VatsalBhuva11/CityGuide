import React, { useState } from "react";
import { MdOutlinePerson } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img2 from "../components/img-2.jpeg";
import img4 from "../components/img-4.jpeg";

const Home = () => {
    const [show, setshow] = useState(false);

    function open() {
        setshow(!show);
    }
    return (
        <div>
            <Navbar />

            <div className="w-full">
                <div className="w-full flex justify-between item py-4 h-20 px-4 absolute text-white ">
                    <div className="mf:flex hidden py-2 ">
                        <MdOutlinePerson />
                    </div>
                    <div
                        className="block md:hidden cursor-pointer z-10"
                        onClick={open}
                    >
                        {show ? (
                            <MdOutlineClose size={25} />
                        ) : (
                            <RiMenu3Fill size={25} />
                        )}
                    </div>

                    <div
                        className={
                            show
                                ? "absolute text-black w-full left-0 top-0 p-4 px-4  bg-gray-100/30"
                                : "absolute left-[-100%] transition ease-in-out duration-300 "
                        }
                    >
                        <h1 className="md:text-4xl font-extrabold text-3xl px-[-1px]">
                            BEACHES.
                        </h1>

                        <ul className="flex flex-col gap-8 p-5 ">
                            <li className="border-b font-semibold">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="border-b font-semibold">
                                <Link to="/register">Register Now</Link>
                            </li>
                        </ul>
                        <div className="flex flex-col">
                            <button className="border bg-gradient-to-r from-[#5651e5] to-[#709dff] my-3 py-2 text-white rounded-md font-semibold">
                                Search
                            </button>
                            <button className="border bg-gradient-to-r from-[#5651e5] to-[#709dff] py-2 text-white rounded-md font-semibold">
                                Account
                            </button>
                        </div>
                        <div className="flex justify-between p-7">
                            <FaLinkedin size={25} className="icon" />
                            <FaGithub size={25} className="icon" />
                        </div>
                    </div>
                </div>
                <div className="justify-center absolute top-[30%] left-[10%] flex">
                    <h1 className=" text-8xl border-r-2 border-white pr-40">
                        <span className="text-white">
                            Come
                            <br />
                        </span>
                        <span className=" text-blue-400">
                            Travel
                            <br />
                        </span>
                        <span className=" text-white">
                            with us!
                            <br />
                        </span>
                    </h1>
                    <ul className="text-6xl text-white flex flex-col justify-center items-start text-left pl-20 border-white pr-40">
                        <li>Build Itenaries.</li>
                        <li>Explore Places.</li>
                        <li>Wishes come True.</li>
                    </ul>
                </div>
                <video
                    src="/videos/video-1.mp4"
                    autoPlay
                    loop
                    muted
                    className="h-screen w-full object-cover  "
                ></video>
                <div
                    className="max-w-[1240px]  px-4 py-16 mx-auto text-center "
                    id="destination"
                >
                    <h1 className="md:text-4xl font-bold  text-3xl">
                        All-Inclusive Resorts
                    </h1>
                    <div className="grid   gap-2 md:gap-4 md:grid-cols-5  py-4">
                        <img
                            className="w-full h-full object-cover col-span-2  md:col-span-3 row-span-2  "
                            src="/images/img-8.jpg"
                            alt="/"
                        />
                        {/* <img className='w-full h-full object-cover' src="/images/borabora2.jpg" alt="/" /> */}
                        <img
                            className="w-full h-full object-cover"
                            src="/images/img-9.jpg"
                            alt="/"
                        />
                        <img
                            className="w-full h-full object-cover"
                            src="/images/img-10.jpg"
                            alt="/"
                        />
                        <img
                            className="w-full h-full object-cover"
                            src="/images/img-11.jpg"
                            alt="/"
                        />
                        <img
                            className="w-full h-full object-cover"
                            src="/images/img-12.jpg"
                            alt="/"
                        />
                    </div>
                </div>

                <section class="bg-white dark:bg-gray-900">
                    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                Know About Us
                            </h2>
                            <p class="mb-4">
                                This website serves as a comprehensive city tour
                                guide, offering travelers personalized
                                recommendations and insights to enhance their
                                exploration experiences. Seamlessly integrating
                                data from various sources like Google Maps and
                                booking platforms, it assists users in selecting
                                accommodations based on their preferences and
                                ethnicity, while also providing detailed
                                information about local attractions and public
                                transportation options.
                            </p>
                            <p>
                                Through testimonials from locals and a vibrant
                                blogging community, visitors gain authentic
                                insights and valuable tips, enriching their
                                understanding of their chosen destination.
                                Whether planning a vacation or seeking
                                inspiration for their next adventure, this
                                website offers a user-friendly interface and a
                                wealth of information to cater to diverse travel
                                needs.
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-8">
                            <img
                                class="w-full rounded-lg"
                                src={img2}
                                alt="office content 1"
                            />
                            <img
                                class="mt-4 w-full lg:mt-10 rounded-lg"
                                src={img4}
                                alt="office content 2"
                            />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
