import React from "react";
import { SignupForm } from "./SignupForm";
import { Divider } from "../Divider";

export const Signup = () => {
  return (
    <>
      <Divider />
      <div className="w-full flex flex-col justify-center items-center py-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Register</h2>
        <SignupForm />
      </div>
    </>
  );
};
