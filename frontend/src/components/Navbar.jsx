// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">
          <Link to="/">Product Store</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/create" className="text-white hover:text-gray-300">
            Create Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
