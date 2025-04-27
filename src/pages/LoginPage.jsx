import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

const LoginPage = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [rememberMe, setRememberMe] = useState(false);

     const navigate = useNavigate();

     const handleSubmit = (e) => {
          e.preventDefault();
          if (email === "admin@example.com" && password === "password123") {
               alert("Login successful!");
               navigate("/home");
          } else {
               alert("Invalid credentials");
          }
     };

     return (
          <div
               className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
               style={{
                    backgroundImage: "url('src/assets/images/background.png')",
               }}
          >
               <form
                    onSubmit={handleSubmit}
                    className="flex w-[900px] bg-white/10 backdrop-blur-xs rounded-3xl shadow-xl border border-white/30 overflow-hidden"
               >
                    {/* Left Section - Login */}
                    <div className="w-1/2 p-12 flex flex-col gap-2">
                         <h2 className="text-3xl font-bold text-[#1c4b4e] mb-8 text-center tracking-wide">
                              MARGADARSHI
                         </h2>

                         <input
                              type="email"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="mb-4 px-6 py-4 w-full rounded-full bg-white/40 placeholder-[#1c4b4e] text-[#1c4b4e] focus:outline-none"
                              required
                         />

                         <input
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="mb-3 px-6 py-4 w-full rounded-full bg-white/40 placeholder-[#1c4b4e] text-[#1c4b4e] focus:outline-none"
                              required
                         />

                         <div className="text-center text-sm text-white mb-6 cursor-pointer hover:underline">
                              Forgot Password?
                         </div>

                         <button
                              type="submit"
                              className="w-full bg-[#1c4b4e] text-white font-semibold py-3 rounded-full hover:bg-[#163b3c] transition-all duration-200"
                         >
                              LOGIN
                         </button>
                    </div>
                    {/* Divider Line */}
                    <div className="w-px h-100 bg-gradient-to-b from-transparent via-white to-transparent opacity-60" />

                    {/* Right Section - Greeting */}
                    <div className="w-1/2 bg-white/5 flex flex-col justify-center items-start px-10 text-[#1c4b4e] text-left">
                         <h2 className="text-3xl font-semibold mb-4">
                              Good to <br /> see you again.
                         </h2>
                         <p className="text-white/80 mb-6">
                              Don't have an account? Create one, it <br /> takes
                              less than a minute.
                         </p>
                         <Link
                              to="/register"
                              className="px-6 py-2 rounded-full border border-white text-[#1c4b4e] bg-white hover:bg-[#ecfdf5] font-medium transition-all duration-200"
                         >
                              SIGN UP
                         </Link>
                    </div>
               </form>
          </div>
     );
};

export default LoginPage;
