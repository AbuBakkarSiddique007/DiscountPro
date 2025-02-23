import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { AiFillHome } from "react-icons/ai";
import { FaTags, FaUserCircle } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
    const { user, handleLogout } = useContext(AuthContext);

    // const links = (
    //     <>
    //         <li><NavLink to="/">Home</NavLink></li>
    //         <li><NavLink to="/brands">Brands</NavLink></li>
    //         {user?.email && <li><NavLink to="/myProfile">My Profile</NavLink></li>}
    //         <li><NavLink to="/aboutDev">About Dev</NavLink></li>
    //     </>
    // );

    const links = (
        <>
            <li data-aos="fade-down">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>
                    <AiFillHome className="inline-block mr-2" /> Home
                </NavLink>
            </li>
            <li data-aos="fade-down">
                <NavLink to="/brands" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>
                    <FaTags className="inline-block mr-2" /> Brands
                </NavLink>
            </li>
            {user?.email && (
                <li data-aos="fade-down">
                    <NavLink to="/myProfile" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>
                        <FaUserCircle className="inline-block mr-2" /> My Profile
                    </NavLink>
                </li>
            )}
            <li data-aos="fade-down">
                <NavLink to="/aboutDev" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>
                    <MdInfo className="inline-block mr-2" /> About Dev
                </NavLink>
            </li>
        </>
    );

    return (
        <header className="shadow-md">
            <nav className="navbar bg-gray-800 text-white px-4">
                <div className="navbar-start">
                    <NavLink to="/" className="flex items-center gap-2">
                        <img className="w-12 h-12 rounded-full" src="/images/logo.jpg" alt="Logo" />
                        <span className="text-2xl font-bold">DiscountPro</span>
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                <div className="navbar-end flex gap-2">
                    {user?.email ? (
                        <div className="flex items-center space-x-4">
                            <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="User Profile" />
                            <span>{user.email}</span>
                            <button onClick={handleLogout} className="btn btn-error px-4 py-1 rounded-lg">Logout</button>
                        </div>
                    ) : (
                        <div className="space-x-4">
                            <NavLink to="/login" className="btn btn-success">Login</NavLink>
                            <NavLink to="/register" className="btn btn-warning">Register</NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
