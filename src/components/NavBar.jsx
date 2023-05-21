import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1E1F26] no-underline z-10 bg-opacity-25">
      <div className="flex items-center">
        <Link to="/" className="cursor-pointer no-underline text-white">
          Logo
          {/* <img src={Logo} alt="Logo" style={{ width: '65px'}}/> */}
        </Link>
        <ul className="hidden md:flex gap-2 items-center">
          <li>
            <Link to="/" className="no-underline text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/community" className="no-underline text-white">
              Community
            </Link>
          </li>
          <li>
            <Link to="/chat" className="no-underline text-white">
              Chat
            </Link>
          </li>
          {/* Login and signup buclassName="no-underline"tton */}
        </ul>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex gap-2">
        <li>
          <Link to="/signup" className="no-underline text-white">
            <Button variant="outlined">Sign up</Button>
          </Link>
        </li>
        <li>
          <Link to="/login" className="no-underline text-white">
            <Button variant="outlined">Log in</Button>
          </Link>
        </li>
        {/* Login and signup buclassName="no-underline"tton */}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <MenuIcon className="text-white" /> : <ClearIcon />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#283655] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="/signup"
            className="no-underline text-white"
          >
            Sign up
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="/login"
            className="no-underline text-white"
          >
            Log In
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="/"
            className="no-underline text-white"
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="/community"
            className="no-underline text-white"
          >
            Community
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="/chat"
            className="no-underline text-white"
          >
            Chat
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
