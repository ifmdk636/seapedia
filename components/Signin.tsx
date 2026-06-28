import React from "react";
import { SignInButton } from "@clerk/nextjs";

const Signin = () => {
  return (
    <>
      <SignInButton mode="modal">
        <button className="text-sm font-semibold text-lightColor hover:text-darkColor hover:cursor-pointer hoverEffect">
          Login
        </button>
      </SignInButton>
    </>
  );
};

export default Signin;
