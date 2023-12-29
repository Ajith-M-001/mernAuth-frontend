import { Link } from "react-router-dom";
import { FaRegUser, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const RegisterUser = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 border shadow-sm  rounded-md p-5">
      <h1 className="text-2xl font-bold text-center my-3">
        create new account
      </h1>
      <form>
        <div className="relative">
          <FaRegUser className="absolute text-lg top-1/2 -translate-y-1/2 left-3" />
          <input
            className="w-full my-1 pl-10 px-4 py-2 rounded-md outline-none border focus-visible:border-gray-600"
            type="text"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="relative">
          <TfiEmail className="absolute text-lg top-1/2 -translate-y-1/2 left-3" />
          <input
            className="w-full pl-10 my-1 px-4 py-2 rounded-md outline-none border focus-visible:border-gray-600"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="relative">
          <FaRegEye className="absolute cursor-pointer text-lg top-1/2 -translate-y-1/2 left-3" />
          <input
            className="w-full my-1 pl-10 px-4 py-2 rounded-md outline-none border focus-visible:border-gray-600"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="relative">
          <FaRegEyeSlash className="absolute cursor-pointer text-lg top-1/2 -translate-y-1/2 left-3" />
          <input
            className="w-full pl-10 my-1 px-4 py-2 rounded-md outline-none border focus-visible:border-gray-600"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button className="w-full px-4 py-2 rounded-md text-white hover:bg-gray-600 bg-gray-500 my-1">
          Register
        </button>
      </form>
      <div className="mt-3 text-center">
        <p>
          Alreay have an Account ?
          <Link
            to={"/login"}
            className="text-blue-600 ml-3 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterUser;
