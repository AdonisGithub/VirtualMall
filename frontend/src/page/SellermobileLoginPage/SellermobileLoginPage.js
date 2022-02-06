import React from "react";
//import { useDispatch} from "react-redux";
//import * as Actions from "../../_actions";

const SellermobileLoginPage = () => {

  return (
    <div className="h-screen flex lg:hidden bg-[#EDE5EF]">
        <div className="flex w-full  justify-center items-center">
            <div className="w-full h-full flex items-center justify-center ">
                <div className=" w-[280px]">
                    <a href='/sellerhomepage'className="font-bold text-3xl">x</a>
                    <span className="flex  mt-[114px] items-center justify-center mb-[24px]  font-bold text-3xl tracking-tight text-black ">
                        LOGO
                    </span>
                    <h1 className="text-black font-bold text-2xl mb-[19px] flex items-center justify-center">
                        Log in
                    </h1>
                    <div className="flex mb-[33px] items-center justify-center">
                        <p className="text-black font-bold">Not yet a member?</p>&nbsp;&nbsp;
                        <a href="/sellersignup" className="text-red-600  hover:text-black">
                        Sign Up
                        </a>
                    </div>
                    <div className="w-full   m-auto">
                        <h1 className="text-black">Username </h1>
                        <input
                        className="border border-black h-[48px] rounded-lg py-1 px-1 mb-[19px]  w-full bg-transparent  text-black "
                        type="text"
                        name="Name"
                        placeholder="Username*"
                        />
                    </div>
                    <div className="w-full   m-auto ">
                        <h1 className="text-black">Password </h1>
                        <input
                        className="border border-black h-[48px] rounded-lg py-1 px-1 mb-[32px] w-full bg-transparent  text-black "
                        type="password"
                        name="password"
                        placeholder="Password*"
                        />
                    </div>
                    <div className="flex mb-3 items-center justify-center">
                        <a href="/resetpasswordrequest1" className="text-red-600  hover:text-black font-bold">
                            Forgot Password
                        </a>
                    </div>
                    <div className="w-full   m-auto">
                        <button
                        className=" flex w-full mt-5 h-[48px] mb-[196px] items-center justify-center text-white text-base border border-transparent hover:border-gray-200 bg-[#ff0000] hover:bg-transparent rounded-lg"
                        >
                        Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export { SellermobileLoginPage };
