import React from "react";
import { Divider } from "../Divider";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <>
      <Divider />
      <div className="w-full flex flex-col justify-center items-center py-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Login</h2>
        <LoginForm />
      </div>
    </>
  );
};
