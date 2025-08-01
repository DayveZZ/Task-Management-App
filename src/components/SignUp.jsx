import React, { useState } from "react";
import Login from "./LogIn";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [singUp, setSignUp] = useState(true);

  return (
    <>
      {singUp && (
        <div className="entry">
          <div className="bg-black/5 shadow-lg shadow-black/20 flex flex-col items-center justify-center gap-8 p-8 rounded-lg w-[30%] h-[40%]">
            <h1 className="text-center text-3xl font-semibold">SIGN IN</h1>
            <input type="text" placeholder="Email or Username" />
            <input type="password" placeholder="Password" />
            <button className=" bg-neutral-900 text-white w-fit px-4 py-2 rounded-full">
              Sign Up
            </button>
          </div>
          <h1>
            Have account?
            <button
              className="cursor-pointer ml-2 text-black/50 hover:text-[#c73138]"
              onClick={() => {
                setShow(true);
                setSignUp(false);
              }}
            >
              Log In
            </button>
          </h1>
        </div>
      )}

      {show && <Login />}
    </>
  );
};

export default SignUp;
