import React from "react";
import { Link } from "react-router-dom";

export const SignupForm = () => {
  return (
    <form className="flex flex-col gap-2 p-4 w-full md:w-[680px]">
      <label htmlFor="first_name" className="font-semibold text-gray-600">
        Firstname
      </label>
      <input
        name="first_name"
        placeholder="Firstname"
        type="text"
        className="bg-gray-100 p-2 rounded focus:outline-gray-400 mb-2"
      ></input>
      <label htmlFor="last_name" className="font-semibold text-gray-600">
        Name
      </label>
      <input
        name="last_name"
        placeholder="Name"
        type="text"
        className="bg-gray-100 p-2 rounded focus:outline-gray-400"
      ></input>
      <label htmlFor="email" className="font-semibold text-gray-600">
        E-mail
      </label>
      <input
        name="email"
        type="email"
        placeholder="jc.ranu@example.com"
        className="bg-gray-100 p-2 rounded focus:outline-gray-400"
      ></input>
      <label htmlFor="password" className="font-semibold text-gray-600">
        Create a password
      </label>
      <input name="password" type="password" className="bg-gray-100 p-2 rounded focus:outline-gray-400"></input>

      <input
        type="submit"
        className="rounded bg-[#f9de4e] p-2 cursor-pointer hover:bg-[#f9de6e]"
        value="Signup"
      ></input>
      <p className="text-sm text-center mt-4">
        Already have an account ?{" "}
        <Link to="/login" className="font-semibold">
          Log in !
        </Link>
      </p>
    </form>
  );
};
