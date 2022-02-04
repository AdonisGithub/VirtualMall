import React from "react";
import { Header1 } from "../../components/header1";
const SellerHomePage = () => {
  return (
    <div>
      <Header1/>
      <div className="blolck w-full">
            <div className="background_seller1 h-screen grid justify-items-start w-screen ">
                <div className="flex items-center">
                    <div className="w-1/2 ml-[80px]">
                        <div className=" text-[46px] 2xl:text-[80px] leading-tight  font-bold font-sans tracking-wide mb-6">
                            A Marketplace For Future Storytellers
                        </div>
                        <div className="text-black text-[22px] mb-11">
                            Easy way to sell that allow you to access money in a super simple process that works.
                        </div>
                        <div className="w-full flex gap-[18px]">
                            <button className=" w-[150px] 2xl:w-[216px] 2xl:mt-3 h-9 2xl:h-[48px] flex items-center justify-center text-white hover:text-black border hover:border-black  bg-[#ff0000] hover:bg-transparent rounded-md">
                                Signup
                            </button>
                            <button className=" w-[150px]  2xl:w-[216px] 2xl:mt-3 h-9 2xl:h-[48px]  flex items-center justify-center text-white hover:text-black border hover:border-black bg-[#ff0000] hover:bg-transparent rounded-md">
                                Become A Vendor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-screen grid justify-items-end w-screen background_seller2">
                <div className="flex items-center justify-center">
                    <div className="w-9/12 ">
                        <div className=" text-[30px] 2xl:text-[41px] leading-tight font-medium font-sans tracking-wide mb-6">
                            Ready to Scale up your business? Contact Us Now.
                        </div>
                        <div className="w-full justify-center mt-4">
                            <h1 className="text-black mb-1"> Full Name </h1>
                            <input
                                className="py-3 px-2 mb-2 text-black border  border-black hover:border-blue-700"
                                style={{ width: "inherit" }}
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="w-full justify-center mt-4">
                            <h1 className="text-black mb-1"> Email Address </h1>
                            <input
                                className="py-3 px-2 mb-2 text-black border  border-black hover:border-blue-700"
                                style={{ width: "inherit" }}
                                type="email"
                                name="email"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="w-full justify-center mt-4">
                            <h1 className="text-black mb-1"> Message </h1>
                            <textarea
                                className="py-3 px-2 mb-2 text-black border  border-black hover:border-blue-700"
                                style={{ width: "inherit" }}
                                type="message"
                                name="message"
                                rows={6}
                                cols={40}
                                placeholder="Message"
                            />
                        </div>
                        <button className=" w-[150px]  2xl:w-[216px] mt-3 2xl:mt-3 h-9 2xl:h-[48px]  flex items-center justify-center text-white hover:text-black border hover:border-black bg-[#ff0000] hover:bg-transparent rounded-md">
                                Submit
                        </button>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};
export { SellerHomePage };
