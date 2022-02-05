import React from "react";
import PhoneInput from "react-phone-input-2";

const SellerSignupPage = () => {


  return (
      <div className="flex background_seller h-screen">
        <div className="absolute md:mt-[43px] ml-[45%] md:ml-[130px] xl:ml-[159px]">
          <a href='/' className="hidden md:flex font-bold text-3xl tracking-tight text-black">
            LOGO
          </a>
        </div>
        <div className="flex w-full md:w-1/2 justify-center items-center mt-[95px] mx-16">
          <div className="w-full h-full flex items-center justify-center ">
            <div className="">
              <a href='/'className="flex md:hidden items-center justify-center mb-3  font-bold text-3xl tracking-tight text-black ">
                LOGO
              </a>
              <h1 className="text-black  text-2xl mb-3 flex items-center justify-center">
                Create An Account
              </h1>
              <div className="flex mb-3 items-center justify-center">
                <p className="text-black">Already an user?</p>&nbsp;&nbsp;
                <a href="/sellerhomepage" className="text-red-600  hover:text-black">
                  Sign in
                </a>
              </div>
              <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                <div className="grid grid-cols-2 gap-3">
                  <div className="w-full">
                    <h1 className="text-black text-sm">Full Name </h1>
                    <input
                      className="border border-black rounded-md py-1 px-1 mb-2 bg-white text-black"
                      style={{ width: "inherit" }}
                      type="text"
                      name="fullName"
                      placeholder="Full Name*"
                    />
                  </div>
                  <div className="w-full">
                    <h1 className="text-black text-sm">Last Name </h1>
                    <input
                      className="border border-black rounded-md py-1 px-1 mb-2 bg-white text-black"
                      style={{ width: "inherit" }}
                      type="text"
                      name="lastName"
                      placeholder="Last Name*"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                <h1 className="text-black text-sm">Email Address </h1>
                <input
                  className="border border-black rounded-md py-1 px-1 mb-2  w-full bg-white text-black"
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                />
              </div>
              <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                <h1 className="text-black text-sm">User Name </h1>
                <input
                  className="border border-black rounded-md py-1 px-1 mb-2 w-full bg-white text-black"
                  type="text"
                  name="userName"
                  placeholder="User Name*"
                />
              </div>
              <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto ">
                <h1 className="text-black text-sm">Password </h1>
                <input
                  className="border border-black rounded-md py-1 px-1 mb-2 w-full bg-white text-black"
                  type="password"
                  name="password"
                  placeholder="Password*"
                />
              </div>
              <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                <h1 className="text-black text-sm">Confirm Password </h1>
                <input
                  className="border border-black rounded-md py-1 px-1 mb-2 w-full bg-white text-black"
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm Password*"
                />
              </div>
              <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                <h1 className="text-black text-sm">Phone Number</h1>
                <PhoneInput
                  inputStyle={{
                    width: "100%",
                    background: "transparent",
                    color: "black",
                  }}
                  dropdownStyle={{ height: "110px", width:'auto' }} 
                />
              </div>
              <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                <button
                  className=" flex w-full h-[34px] mt-5 mb-10 items-center justify-center text-white text-base border border-transparent hover:border-gray-200 bg-[#ff0000] hover:bg-transparent rounded-md"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export { SellerSignupPage };
