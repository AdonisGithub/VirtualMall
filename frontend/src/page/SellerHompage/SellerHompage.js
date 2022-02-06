import React from "react";
import { useNavigate } from "react-router-dom";
import { Header1 } from "../../components/header1";
import { SellerSigninModal } from "../../components/header1/SellerSigninModal";
const SellerHomePage = () => {
    const navigate = useNavigate();
    const sellermobilLoginClick = ()=>{
        navigate("/sellermobilelogin");
    }
  return (
    <div>
      <Header1/>
      <div className="blolck w-full">
            <div className="background_seller1">
                <div></div>
                <div className="background_sellercover min-h-screen  lg:h-[964px]  w-screen ">
                    <div className="flex items-center justify-center lg:justify-start">
                        <div className="w-[286px] lg:w-1/2 lg:ml-[80px] ">
                            <div className=" text-[40px] 2xl:text-[80px] mt-[173px] leading-tight text-white lg:text-black font-bold font-sans tracking-wide mb-6">
                                A Marketplace For Future Storytellers
                            </div>
                            <div className="text-[13px] lg:text-[22px] text-[#EDE5EF] lg:text-black  lg:w-[579px] mb-11">
                                Easy way to sell that allow you to access money in a super simple process that works.
                            </div>
                            <div className="w-full block lg:flex gap-[18px] mb-12 lg:mb-0">
                                <div className="mt-4">
                                    <div className="hidden lg:flex">
                                        <SellerSigninModal/>
                                    </div>
                                    <div>
                                    <button className="flex lg:hidden w-[216px] h-9 2xl:h-[48px] items-center justify-center border border-transparent hover:border-black text-white hover:text-black bg-[#ff0000] hover:bg-transparent rounded-md"
                                        onClick={sellermobilLoginClick}
                                    >
                                        Signin
                                    </button>
                                    </div>
                                </div>
                                <button className=" w-[216px] mt-4  2xl:w-[216px] h-9 2xl:h-[48px]  flex items-center justify-center text-white hover:text-black border border-transparent hover:border-black bg-[#ff0000] hover:bg-transparent rounded-lg">
                                    Become A Vendor
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:h-[996px] mt-[162px] grid justify-items-end w-screen background_seller2">
                    <div className="flex items-center justify-center">
                        <div className="w-9/12 ">
                            <div className=" text-[17px] lg:text-[25px] 2xl:text-[41px] mb-[65px] text-white lg:text-black text-center leading-tight font-medium font-sans tracking-wide">
                                Ready to Scale up your business? Contact Us Now.
                            </div>
                            <div className="w-full justify-center mt-4">
                                <h1 className="text-white lg:text-black mb-1"> Full Name </h1>
                                <input
                                    className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
                                    style={{ width: "inherit" }}
                                    type="text"
                                    name="fullname"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="w-full justify-center mt-4">
                                <h1 className="text-white lg:text-black mb-1"> Email Address </h1>
                                <input
                                    className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
                                    style={{ width: "inherit" }}
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="w-full justify-center mt-4">
                                <h1 className="text-white lg:text-black mb-1"> Message </h1>
                                <textarea
                                    className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
                                    style={{ width: "inherit" }}
                                    type="message"
                                    name="message"
                                    rows={6}
                                    cols={40}
                                    placeholder="Message"
                                />
                            </div>
                            <button className="w-full mb-4  2xl:w-[216px] mt-4 h-9 2xl:h-[48px]  flex items-center justify-center text-white hover:text-black  border-transparent hover:border-black bg-[#ff0000] hover:bg-transparent rounded-lg">
                                    send
                            </button>
                        </div>
                    </div>
                </div>
            </div>  
      </div>
    </div>
  );
};
export { SellerHomePage };
