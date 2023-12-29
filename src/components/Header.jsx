import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold">MERN-AUTH</h1>
        </Link>
        <nav className="text-lg space-x-3 font-semibold">
          <Link to={"/login"} className="hover:underline">
            Login
          </Link>
          <Link to={"/register"} className="hover:underline">
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
