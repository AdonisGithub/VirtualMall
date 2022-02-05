import React from "react";


const ForgottenPasswordEmailAfter1Page = () => {

  return (
    <div className="min-h-screen">
        <div className=" w-[601px] border border-t-[#fc0841] mx-[25px] mt-[17px]">
            <div className="flex justify-center mt-[57px]">
                <a href='/' className=" text-[40px] text-black text-center">
                    LOGO
                </a>
            </div>
            <div className=" text-[#150c1c] text-[50px] text-center mt-[71px] mb-[109px]">
                Password Changed
            </div><hr/>
            <div className="flex justify-center mt-[109px]">
                <div className="text-[#555555] text-[16px] w-[476px]">
                    A request has been received to change the password for you account. If you did not initiate this request please contact us immediately at vrmallsolutions.com.            </div>
                </div>
            <div className="flex items-center justify-center">
                <button
                    className=" w-[222px]  h-[50px] mt-[47px] mb-[53px] text-white text-base border border-transparent hover:border-gray-200 bg-[#ff0000] hover:bg-transparent rounded-md"
                >
                    Login Now
                </button>
            </div>
        </div>
        <div className="text-center mt-[36px]">
            <div className="text-[10px] font-[lato]">
                VR MALL SOLUTIONS
            </div>
            <div className="text-[10px] font-[lato]">
                ALL RIGHTS RESERVED
            </div>
        </div>
    </div>
  );
};

export { ForgottenPasswordEmailAfter1Page };
