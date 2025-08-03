import React, { useState } from "react";
import Login from "./LogIn";

// Icons
import { MdEmail } from "react-icons/md";
import { FaLock, FaUserAlt } from "react-icons/fa";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [singUp, setSignUp] = useState(true);

  return (
    <>
      {singUp && (
        <div className="entry">
          <div className="bg-black/5 shadow-lg shadow-black/20 flex flex-col items-center justify-center gap-8 p-8 rounded-lg w-[30%] h-fit">
            <h1 className="text-center text-3xl font-semibold">SIGN IN</h1>
            <div className="input">
              <FaUserAlt />
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input">
              <MdEmail />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input">
              <FaLock />
              <input type="password" placeholder="Password" required />
            </div>
            <button className=" bg-neutral-900 text-white w-full px-4 py-2 rounded-full">
              Sign Up
            </button>
          </div>
          <h1>
            Have account?
            <button
              className="cursor-pointer ml-2 text-[#c73138] hover:text-black/50"
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
