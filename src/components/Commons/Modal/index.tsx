import { SyntheticEvent, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook, GrApple } from "react-icons/gr";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleModal = (event: SyntheticEvent) => {
    if (event.currentTarget === event.target) {
      setIsOpen(true);
    }
  };

  if (!isOpen) {
    return (
      <div
        className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-text-700/20"
        onClick={handleModal}
      >
        <div className="relative p-10 bg-white max-w-lg rounded shadow-md border border-primary-200">
          <div>
            <button
              className="absolute top-10 right-10"
              onClick={() => setIsOpen(true)}
            >
              <IoIosClose size={28} />
            </button>
            <h2 className="text-2xl font-bold mb-2 text-text-600">
              Sign up for Tripma
            </h2>
            <p className="text-lg text-text-400">
              Tripma is totally free to use. Sign up using your email address or
              phone number below to get started.
            </p>
          </div>
          <div>
            <form className="mt-4 text-text-600" action="">
              <input
                className="p-3 mb-3 w-full rounded border border-text-400"
                type="text"
                placeholder="Email or phone number"
              />
              <input
                className="p-3 mb-3 w-full rounded border border-text-400"
                type="password"
                placeholder="Password"
              />
              <label className="flex items-center w-max gap-2 mb-1 cursor-pointer">
                <input
                  className="appearance-none w-4 h-4 rounded border border-text-400 checked:bg-primary-200"
                  type="checkbox"
                />
                <span>
                  I agree to the{" "}
                  <a className="text-primary-200" href="#">
                    terms and conditions
                  </a>
                </span>
              </label>
              <label className="flex items-center w-max gap-2 mb-1 cursor-pointer">
                <input
                  className="appearance-none w-4 h-4 rounded border border-text-400 checked:bg-primary-200"
                  type="checkbox"
                />
                <span>Send me the latest deal alerts</span>
              </label>
              <button
                className="btn-small btn-primary w-full mt-2"
                onClick={() => setIsOpen(true)}
              >
                Create account
              </button>
            </form>
            <div className="flex items-center gap-3 text-text-400 my-5">
              <hr className="border border-text-400/30 w-full" />
              or
              <hr className="border border-text-400/30 w-full" />
            </div>
            <div>
              <button className="flex items-center p-3 mb-2 rounded w-full border border-primary-200 text-primary-200">
                <FcGoogle />
                <span className="text-center w-full">Continue with Google</span>
              </button>
              <button className="flex items-center p-3 mb-2 rounded w-full border border-primary-200 text-primary-200">
                <GrApple color="#000000" />

                <span className="text-center w-full">Continue with Apple</span>
              </button>
              <button className="flex items-center p-3 mb-2 rounded w-full border border-primary-200 text-primary-200">
                <GrFacebook />

                <span className="text-center w-full">
                  Continue with Facebook
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
