import React from "react";
import img from "../../assets/images/signupcongratualtions.png";
const SellerSignupCongratuationsPage = () =>{
    return(
        <div className="h-screen w-full lg:w-1/2 flex items-center m-auto">
            <div className="">
                <div className="w-full">
                    <img src={img} alt=""/>
                </div>
                <div className="w-full">
                    <div className="">
                        Congratulations for Signing Up!
                    </div>
                    <div className="">
                        For the next step, please wait for the approval.
                    </div>
                    <div className="">
                        Please contact us for more information at vrmallsolutions.com
                    </div>
                    <div className="">
                        Go Back to Homepage
                    </div>
                </div>
            </div>
        </div>
    );

}
export {SellerSignupCongratuationsPage};