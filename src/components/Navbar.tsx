import { Link } from "react-router";
import logo from "../assets/img/logo.svg";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
      <Link to={"/"} className="font-bold text-xl tracking-tight">
        <img src={logo} alt="logo icon" />
      </Link>
      <div className="flex items-center">
        <Link to={"/cart"} className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700">
          Корзина
        </Link>
      </div>
    </nav>
  );
};
