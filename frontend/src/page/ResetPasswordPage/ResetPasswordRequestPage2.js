import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordRequestPage2 = () => {
  const navigate = useNavigate();
  const gobackClick = () => {
    navigate("/resetpasswordrequest1");
  };
    return (
        <div className="min-h-screen background2">
          <div className=" background_cover ">
            <div className=" min-h-screen flex">
              <div className="absolute md:mt-[43px] ml-[40%] md:ml-[130px] xl:ml-[159px]">
                  <a href='/' className="hidden md:flex font-bold text-3xl tracking-tight text-white">
                      LOGO
                  </a>
              </div>
              <div>
                <a href="/signup" className="absolute hidden md:flex md:mt-[50px] md:ml-[38%] xl:ml-[33%] text-red-600  hover:text-white">
                      Sign Up
                </a>
              </div>
              <div className="flex w-full md:w-1/2 justify-center items-center mx-16">
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="">
                    <a href='/' className="flex md:hidden items-center justify-center mb-3  font-bold text-3xl tracking-tight text-white ">
                          LOGO
                    </a>
                    <h1 className="text-white  text-2xl mb-3 flex items-center justify-center">
                        Reset Password
                    </h1>
                    <a href="/signup" className="mb-3 flex items-center justify-center md:hidden text-red-600  hover:text-white">
                      Sign Up
                    </a>
                    <h1 className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto text-white   mb-3 flex  text-center justify-center">
                      You will receive an email with a link to reset your password
                    </h1>
                    <div className="sm:flex mb-3 items-center justify-center text-center">
                      <p className="text-white">Didn't get email?</p>&nbsp;&nbsp;
                      <a href="/" className="text-base md:text-base text-red-600  hover:text-white">
                        Click here to resend it
                      </a>
                    </div>
                    <div className="sm:flex mb-3 items-center justify-center text-center">
                      <p className="text-white">Change the email address?</p>&nbsp;&nbsp;
                      <a href="/" className="text-base md:text-base text-red-600  hover:text-white">
                        Click here
                      </a>
                    </div>
                    <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                      <button className=" flex w-full h-[34px] mt-5 items-center justify-center text-white text-base border border-transparent hover:border-gray-200 bg-[#ff0000] hover:bg-transparent rounded-md"
                        onClick={gobackClick}
                      >
                          Go Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex md:w-1/2 hidden justify-start items-center">
                  <div className=" 2xl:w-[800px] 2xl:mr-[161px]">
                      <div className="w-full text-white text-[54px] 2xl:text-[75px] leading-tight font-medium font-sans tracking-wide">
                          Let Your Mind Explore A New World
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export {ResetPasswordRequestPage2};
