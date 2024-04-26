// import React from 'react';
// import image from '../components/Assets/login.jpg';
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="min-h-screen py-4 bg-cover bg-center" style={{backgroundImage: `url(${image})`}}>
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-indigo-700 rounded-xl mx-auto shadow-lg overflow-hidden  hover:opacity-85 opacity-60 mt-20 mt-40">
//           <div
//             className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
//             style={{ backgroundImage: "url('images/Register-Background.png')" }}
//           >
//             <h1 className="text-white text-3xl mb-3">Welcome</h1>
//             <div>
//               <p className="text-white">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
//                 suspendisse aliquam varius rutrum purus maecenas ac{" "}
//                 <a href="#" className="text-purple-500 font-semibold">
//                   Learn more
//                 </a>
//               </p>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 py-16 px-12">
//             <h2 className="text-3xl mb-4">Login</h2>
//             <form action="#">
//               <div className="mt-5">
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   className="border border-gray-400 py-1 px-2 w-full"
//                 />
//               </div>
//               <div className="mt-5">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="border border-gray-400 py-1 px-2 w-full"
//                 />
//               </div>
//               <div className="mt-5">
//                 <span className="text-orange-500">
//                   Not a User ?
//                   <Link to="/register"  className="text-rose-700 ml-3 underline">
//                     Register Now
//                   </Link>
//                 </span>
//               </div>
//               <div className="mt-5">
//                 <button className="w-full bg-purple-500 py-3 text-center text-white">
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login;

import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import image from "../components/Assets/login.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const requestBody = {
                user: {
                    email,
                    password,
                },
            };

            const response = await axios.post(
                "http://localhost:7001/api/auth/login",
                requestBody
            );
            console.log("Response:");
            console.log(String(response.data.accessToken[0]));
            localStorage.setItem("token", String(response.data.accessToken[0]));
            // const UID=response.data.UID;
            // console.log(UID);
            navigate("/dashboard");
            // User logged in successfully, redirect or show a success message
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div
            className="min-h-screen py-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-indigo-700 rounded-xl mx-auto shadow-lg overflow-hidden  hover:opacity-85 opacity-60 mt-20 mt-40">
                    <div
                        className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('images/Register-Background.png')",
                        }}
                    >
                        <h1 className="text-white text-3xl mb-3">Welcome</h1>
                        <div>
                            <p className="text-white">
                                Sign in to view exciting features!
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className="text-3xl mb-4">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mt-5">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="border border-gray-400 py-1 px-2 w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mt-5">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="border border-gray-400 py-1 px-2 w-full"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="mt-5">
                                {error && (
                                    <div className="text-red-500">{error}</div>
                                )}
                                <span className="text-orange-500">
                                    Not a User ?
                                    <Link
                                        to="/register"
                                        className="text-rose-700 ml-3 underline"
                                    >
                                        Register Now
                                    </Link>
                                </span>
                            </div>
                            <div className="mt-5">
                                <button
                                    type="submit"
                                    className="w-full bg-purple-500 py-3 text-center text-white"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
