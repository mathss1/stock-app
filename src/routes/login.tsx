import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Fingerprint } from "lucide-react";
import carne from "../assets/logo.png";
import React from "react";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        <img src={carne} alt="logo" className="w-12 md:w-14" />
        <h1 className="text-lg md:text-xl font-semibold">Welcome Back</h1>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <Mail />
            <input
              value="example@example.com"
              type="email"
              placeholder="Email account"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <Fingerprint />
            <input
              value="1234"
              type="password"
              placeholder="Password"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>
        </div>
        <Link
          to="/dashboard"
          className="flex justify-center w-full p-2 bg-blue-500 rounded-xl mt-3 hover: hover:bg-blue-600 text-sm md:text-base cursor-pointer"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Login;
