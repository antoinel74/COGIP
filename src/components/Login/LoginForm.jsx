import React from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-2 p-4 w-full md:w-[680px]">
      <label htmlFor="username" className="font-semibold text-gray-600">
        Username
      </label>
      <input
        name="username"
        placeholder="jc.ranu@example.com"
        id="username"
        type="email"
        className="bg-gray-100 p-2 rounded focus:outline-gray-400 mb-2"
      ></input>
      <label htmlFor="password" className="font-semibold text-gray-600">
        Password
      </label>
      <input
        name="password"
        id="password"
        type="text"
        className="bg-gray-100 p-2 rounded focus:outline-gray-400"
      ></input>
      <a href="#" className="ml-auto text-sm font-semibold">
        Forgot Password &#63;
      </a>
      <input
        type="submit"
        className="rounded bg-[#f9de4e] p-2 cursor-pointer hover:bg-[#f9de6e]"
        value="Register"
      ></input>
      <p className="text-sm text-center mt-4">
        You don&apos;t have an account yet &#63;
        <Link to="/signup" className="font-semibold">
          Sign in !
        </Link>
      </p>
    </form>
  );
};
