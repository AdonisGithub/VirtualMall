import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
const SellerSigninModal=() => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex">
      <button className=" w-[150px]  2xl:w-[216px] 2xl:mt-3 h-9 2xl:h-[48px]  flex items-center justify-center border border-transparent hover:border-black text-white hover:text-black bg-[#ff0000] hover:bg-transparent rounded-md"
        onClick={openModal}
      >
        Signin
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto rounded-sm drop-shadow-xl"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center flex items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 " />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex relative justify-center text-left align-middle transition-all transform bg-[#ede5ef] rounded-md w-1/3 xl:w-[28%] 2xl:w-[544px] m-auto">
                <button className="absolute -top-[8px] -right-2 text-white w-[25px] bg-[#ede5ef] rounded-sm drop-shadow-md" onClick={closeModal}>x</button>
                <div className="relative w-8/12 mt-8 xl:mt-12 2xl:mt-16 mb-8 xl:mb-12 2xl:mb-16">
                  <div className="w-full text-2xl text-black text-center mb-8 xl:mb-12 2xl:mb-16">
                    Login
                  </div>
                  <div className="w-full flex justify-center ">
                    <input
                      className="border rounded-md py-1 px-1 mb-2  w-full bg-transparent md:bg-white text-white md:text-black"
                      type="text"
                      name="NameOrEmail"
                      id="inputID"
                      placeholder="Username or Email Address*"
                    />
                  </div>
                  <div className="w-full flex justify-center mt-2 xl:mt-3 2xl:mt-5">
                    <input
                      className="border rounded-md py-1 px-1 mb-2 w-full bg-transparent md:bg-white text-white md:text-black"
                      type="password"
                      name="password"
                      id="inputID"
                      placeholder="Password*"
                    />
                  </div>
                  <div className="w-full flex justify-center mt-2 xl:mt-3 2xl:mt-5">
                    <p className="text-black">Not yet a member?</p>&nbsp;&nbsp;
                    <a href="/sellersignup" className="text-[#BA9BCB]  hover:text-black">
                      Sign Up
                    </a>
                  </div>
                  <div className="w-full flex justify-center  xl:mt-1 2xl:mt-3">
                    <a href="/" className="text-[#BA9BCB]  hover:text-black">
                      Forgot Password
                    </a>
                  </div>
                  <div className="w-full flex justify-center mt-2 xl:mt-3 2xl:mt-5">
                    <button
                      className=" flex w-full h-[34px] mt-5 items-center justify-center text-white text-base border border-transparent hover:border-gray-200 bg-[#ff0000] hover:bg-transparent rounded-md"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export {SellerSigninModal};