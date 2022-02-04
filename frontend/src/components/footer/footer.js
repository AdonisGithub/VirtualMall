import React  from "react";
import mail from "../../assets/images/mail.png";
import internet from "../../assets/images/internet1.jpg";
const Footer = () => {
  return (
    <div className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-3">
          <div className="text-center">
            <p className="text-lg mb-1 mt-1"> Developed by VR mall solutions</p>
            <div className="text-lg mb-1 flex  justify-center gap-2">
              <div className="flex">
                <img src={internet} className="w-[15px] h-[17px] m-auto"alt="internet"/>&nbsp;<span>vrmallsolutions.com</span>
              </div>
              <div className="flex">
                <img src={mail} className="w-[15px] h-[17px] m-auto" alt="mail"/>&nbsp;<span>vrmallsolutions.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
      
export {Footer};