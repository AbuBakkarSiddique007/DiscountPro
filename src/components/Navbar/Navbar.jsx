import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { AiFillHome } from "react-icons/ai";
import { FaTags, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
    const { user, handleLogout } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const links = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>
                    <AiFillHome className="inline-block mr-2" /> Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/brands" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>
                    <FaTags className="inline-block mr-2" /> Brands
                </NavLink>
            </li>
            {user?.email && (
                <li>
                    <NavLink to="/myProfile" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>
                        <FaUserCircle className="inline-block mr-2" /> My Profile
                    </NavLink>
                </li>
            )}
            <li>
                <NavLink to="/aboutDev" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>
                    <MdInfo className="inline-block mr-2" /> About Dev
                </NavLink>
            </li>
        </>
    );

    return (
        <header className="shadow-md bg-gray-800 text-white">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">

                <NavLink to="/" className="flex items-center gap-2">
                    <img className="w-12 h-12 rounded-full" src="/images/logo.jpg" alt="Logo" />
                    <span className="text-2xl font-bold">DiscountPro</span>
                </NavLink>

                <ul className="hidden lg:flex space-x-6">{links}</ul>

                <div className="hidden lg:flex items-center gap-4">
                    {user?.email ? (
                        <div className="flex items-center gap-4">
                            <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="User Profile" />
                            <span>{user.email}</span>
                            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="space-x-4">
                            <NavLink to="/login" className="bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="bg-yellow-500 px-4 py-2 rounded-md text-white hover:bg-yellow-600">
                                Register
                            </NavLink>
                        </div>
                    )}
                </div>

                <button onClick={toggleMenu} className="lg:hidden text-2xl focus:outline-none">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            <div className={`lg:hidden absolute top-16 left-8 z-50 w-1/2 bg-gray-900 text-white px-6 py-4 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"}`}>
                <ul className="space-y-4">{links}</ul>

                <div className="mt-4">
                    {user?.email ? (
                        <div className="flex flex-col items-center space-y-3">
                            <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="User Profile" />
                            <span>{user.email}</span>
                            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded-md w-full text-white hover:bg-red-600">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-3">
                            <NavLink to="/login" className="bg-green-500 px-4 py-2 rounded-md w-full text-center text-white hover:bg-green-600">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="bg-yellow-500 px-4 py-2 rounded-md w-full text-center text-white hover:bg-yellow-600">
                                Register
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
