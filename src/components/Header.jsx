const Header = () => {
  return (
    <div className="bg-gray-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">MERN-AUTH</h1>
        <nav className="text-lg space-x-3 font-semibold">
          <button className="hover:underline">Login</button>
          <button className="hover:underline">Register</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
