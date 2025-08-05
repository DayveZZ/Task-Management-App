import React, { useRef, useState } from "react";
import SignUp from "./SignUp";
import Navbar from "./Navbar.jsx";

// Icons
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

let currentUser = true;

const Login = () => {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(true);
  // const email = useRef();
  // const password = useRef();
  // return (
  //   <>
  //   {if(currentUser===null){
  //     {login && (
  //       <div className="entry">
  //         <div className="bg-black/5 shadow-lg shadow-black/20 flex flex-col items-center justify-center gap-8 p-8 rounded-lg w-[30%] h-fit">
  //           <h1 className="text-center text-3xl font-semibold">LOG IN</h1>
  //           <div className="input">
  //             <MdEmail />
  //             <input type="text" placeholder="Email" required />
  //           </div>
  //           <div className="input">
  //             <FaLock />
  //             <input type="password" placeholder="Password" required />
  //           </div>
  //           <button className="bg-neutral-900 text-white w-full px-4 py-2 rounded-full">
  //             Login
  //           </button>
  //         </div>
  //         <h1>
  //           Don't have account?
  //           <button
  //             className="cursor-pointer ml-2 text-[#c73138] hover:text-black/50"
  //             onClick={() => {
  //               setShow(true);
  //               setLogin(false);
  //             }}
  //           >
  //             Sign Up
  //           </button>
  //         </h1>
  //       </div>
  //     )}

  //     {show && <SignUp />}
  //   }else{
  //     login.style.dsiplay = "none"
  //     nav.style.dsiplay = "inline"
  //   }}

  //   </>
  // );

  return (
    <>
      <div className={currentUser === null ? "hidden" : "inline"}>
        <Navbar />
      </div>

      {/* Show Login/SignUp only when user is NOT logged in */}
      {currentUser === null && (
        <>
          {login && (
            <div className="entry">
              <div className="bg-black/5 shadow-lg shadow-black/20 flex flex-col items-center justify-center gap-8 p-8 rounded-lg w-[30%] h-fit">
                <h1 className="text-center text-3xl font-semibold">LOG IN</h1>
                <div className="input">
                  <MdEmail />
                  <input type="text" placeholder="Email" required />
                </div>
                <div className="input">
                  <FaLock />
                  <input type="password" placeholder="Password" required />
                </div>
                <button className="bg-neutral-900 text-white w-full px-4 py-2 rounded-full">
                  Login
                </button>
              </div>

              <h1>
                Don’t have an account?
                <button
                  className="cursor-pointer ml-2 text-[#c73138] hover:text-black/50"
                  onClick={() => {
                    setShow(true);
                    setLogin(false);
                  }}
                >
                  Sign Up
                </button>
              </h1>
            </div>
          )}

          {show && <SignUp />}
        </>
      )}
    </>
  );
};

export default Login;
