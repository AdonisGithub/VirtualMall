import React from "react";
import img from "../../assets/images/wellcomeemail.png"

const WellcomeEmailPage = () => {

  return (
    <div className="min-h-screen">
        <div className=" w-[601px] border border-t-[#fc0841] mx-[25px] mt-[17px]">
            <div className="flex justify-center mt-[57px]">
                <a href='/' className=" text-[40px] text-black text-center">
                    LOGO
                </a>
            </div>
            <img src={img} alt="" className="w-full mt-[61px]"/> 
            <div className=" text-[#150c1c] text-[30px] text-center mt-[28px]">
                Welcome Jane Doe!
            </div>
            <div className="flex justify-center mt-[31px]">
                <div className="text-[#555555] text-[16px] w-[438px]">
                    You will now have your first experience of virtual reality.
                </div>
            </div>
            <div className="flex justify-center mt-[31px]">
                <div className="text-[#555555] text-[16px] w-[438px]">
                    While you are in the real world, explore where your next 
                    adventure of virtual reality may take you...            
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button
                    className=" w-[222px]  h-[50px] mt-[36px] mb-[48px] text-white text-base border border-transparent hover:border-gray-200 bg-[#ff0000] hover:bg-transparent rounded-md"
                >
                    Get started
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

export { WellcomeEmailPage };
