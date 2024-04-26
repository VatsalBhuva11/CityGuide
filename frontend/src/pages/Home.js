import React, { useState } from "react";
import { MdOutlinePerson } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [show, setshow] = useState(false);

  function open() {
    setshow(!show);
  }
  return (
    <>
      <div className="text-amber-600 bg-black">
        <span className="md:text-4xl font-bold text-3xl mr-96">GoTravel</span>
        <span className="ml-64 mr-32"></span>
        <Link to={"/login"}>
          <button className="p-2  font-bold bg-slate-900 ml-96">Login</button>
        </Link>
        <Link to={"/register"}>
          <button className="p-2  font-bold bg-slate-900 ml-5 mr-5 ">
            Register Now
          </button>
        </Link>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between item py-4 h-20 px-4 absolute text-white ">
          <div className="mf:flex hidden py-2 ">
            <MdOutlinePerson />
          </div>
          <div className="block md:hidden cursor-pointer z-10" onClick={open}>
            {show ? <MdOutlineClose size={25} /> : <RiMenu3Fill size={25} />}
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
        <div className="mb-10">
          <h1 className="font-bold text-4xl py-2">Know About Us</h1>
          <p>
          This website serves as a comprehensive city tour guide, offering travelers personalized recommendations and insights to enhance their exploration experiences. Seamlessly integrating data from various sources like Google Maps and booking platforms, it assists users in selecting accommodations based on their preferences and ethnicity, while also providing detailed information about local attractions and public transportation options. Through testimonials from locals and a vibrant blogging community, visitors gain authentic insights and valuable tips, enriching their understanding of their chosen destination. Whether planning a vacation or seeking inspiration for their next adventure, this website offers a user-friendly interface and a wealth of information to cater to diverse travel needs.
          </p>
        </div>
        <div className="w-full bg-gray-300 py-16">
          <div className="max-w-[1240px] mx-auto flex flex-col px-4 ">
            <div className="sm:flex  justify-between">
              <h1 className="md:text-4xl font-bold text-3xl text-center ">
                GoTravel
              </h1>

              <div className="flex justify-between my-4 sm:max-w-[240px] cursor-pointer">

                <a className="mr-10" href="https://www.linkedin.com/in/vatsal-bhuva-673587233/">
                  {" "}
                  <FaLinkedin size={25} className="icon" />
                </a>
                <a href="https://github.com/VatsalBhuva11/CityGuide">
                  {" "}
                  <FaGithub size={25} className="icon" />
                </a>
              </div>
            </div>
            <div className="flex justify-between cursor-pointer">
              <ul className=" lg:flex gap-8">
                <li className=" hover:border-b-[3px]  border-black">About</li>
                <li className=" hover:border-b-[3px]  border-black">
                  Paternerchips
                </li>
                <li className=" hover:border-b-[3px]  border-black">Carrers</li>
                <li className=" hover:border-b-[3px]  border-black">
                  Newsroom
                </li>
                <li className=" hover:border-b-[3px]  border-black">
                  Advertising
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
