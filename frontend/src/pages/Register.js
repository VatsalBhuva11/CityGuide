// import React from "react";
// import image from '../components/Assets/travel.jpg'
// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <div className="min-h-screen py-4 bg-cover bg-center" style={{backgroundImage: `url(${image})`}}>
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-black rounded-xl mx-auto shadow-lg overflow-hidden  hover:opacity-85 opacity-60 mt-20">
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
//             <h2 className="text-3xl mb-4">Register</h2>
//             <p className="mb-4">
//               Create your account. It’s free and only take a minute
//             </p>
//             <form action="#">
//               <div className="grid grid-cols-2 gap-5">
//                 <input
//                   type="text"
//                   placeholder="Firstname"
//                   className="border border-gray-400 py-1 px-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Surname"
//                   className="border border-gray-400 py-1 px-2"
//                 />
//               </div>
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
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   className="border border-gray-400 py-1 px-2 w-full"
//                 />
//               </div>
//               <div className="mt-5">
//                 <span className="text-orange-500">
//                   Already a User ? 
//                   <Link to="/login"  className="text-blue-700 ml-3 underline">
//                     Login
//                   </Link>
//                 </span>
//               </div>
//               <div className="mt-5">
//                 <button className="w-full bg-purple-500 py-3 text-center text-white">
//                   Register Now
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from '../components/Assets/travel.jpg'
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    // try {
    //   const auth = getAuth();
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   // User created successfully, redirect or show a success message
    // } catch (error) {
    //   setError(error.message);
    // }
    try {
      const requestBody = {
        user: {
          email,
          password
        }
      };
  
      const response = await axios.post('http://localhost:7001/api/auth/register', requestBody);
      console.log('Response:', response.data);
      localStorage.setItem("token", response.data.accessToken);
      const UID=response.data.UID;
      console.log(UID);
      const userData={
        UID,firstName,surname,email,password
      }
      axios.post('http://localhost:7001/api/user/createUser', userData)
        .then((user)=>{
          console.log(user);
        });
    } catch (error) {
      console.error('Error:', error.response.data);
    }
    console.log("ghussa");
  };

  return (
    <div className="min-h-screen py-4 bg-cover bg-center" style={{backgroundImage: `url(${image})`}}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-black rounded-xl mx-auto shadow-lg overflow-hidden  hover:opacity-85 opacity-60 mt-20">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('images/Register-Background.png')" }}
          >
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <form onSubmit={handleRegister}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="border border-gray-400 py-1 px-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="border border-gray-400 py-1 px-2"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="mt-5">
                {error && <div className="text-red-500">{error}</div>}
                <span className="text-orange-500">
                  Already a User ? 
                  <Link to="/login"  className="text-blue-700 ml-3 underline">
                    Login
                  </Link>
                </span>
              </div>
              <div className="mt-5">
                <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
