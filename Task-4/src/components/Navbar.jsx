import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between bg-pink-500 px-8 py-4 text-white">
      <Link to="/" className="text-2xl font-bold">
        PinkShop
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>

        <Link to="/cart">Cart</Link>

        <span>{user?.email}</span>

        <button
          onClick={logout}
          className="rounded-lg bg-white px-4 py-2 text-pink-500"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;