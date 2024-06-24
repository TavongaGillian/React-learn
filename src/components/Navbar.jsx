import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-600 hover:bg-gray-300 hover:text-white rounded-md px-3 py-2"
      : "text-black hover:bg-gray-300 hover:text-black rounded-md px-3 py-2";

  return (
    <nav className='bg-yellow-400 border-b border-blue-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink
              className='flex flex-shrink-0 items-center mr-4'
              to='/index.html'
            >
              <img className='h-14 w-auto' src={logo} alt='React Places' />
              <span className='hidden md:block text-black text-2xl font-bold ml-2'>
                Tourism-Vacation Spots
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/places' className={linkClass}>
                  Places
                </NavLink>
                <NavLink to='/add-place' className={linkClass}>
                  Add Place
                </NavLink>
                <NavLink to='/gallery' className={linkClass}>
                  Gallery
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
