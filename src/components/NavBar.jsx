import { useState } from "react"
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1E1F26] text-gray-300'>
      <div>
        <Link to="home" className='cursor-pointer'>
          Logo
          {/* <img src={Logo} alt="Logo" style={{ width: '65px'}}/> */}
        </Link>
      </div>
        {/* Menu */}
        <ul className='hidden md:flex gap-2'>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/community">
              Community
            </Link>
          </li>
          <li>
            <Link to="/chat">
              Chat
            </Link>
          </li>
          {/* Login and signup button */}
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <MenuIcon /> : <ClearIcon />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#283655] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/community">
              Community
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/chat">
              Chat
            </Link>
          </li>
      </ul>
    </div>
  )
}

export default NavBar