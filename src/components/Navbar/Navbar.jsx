import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gray-800 text-white shadow-md px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink >Brands</NavLink></li>
                            <li><NavLink >My Profile</NavLink></li>
                            <li><NavLink >About Dev</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/" className="flex items-center gap-2">
                        <img className="w-12 h-12 rounded-full" src="/images/logo.jpg" alt="Logo" />
                        <span className="text-2xl font-bold">DiscountPro</span>
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink >Brands</NavLink></li>
                        <li><NavLink >My Profile</NavLink></li>
                        <li><NavLink >About Dev</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end flex gap-2">
                    <NavLink className="btn btn-success" >Login</NavLink>
                    <NavLink className="btn btn-warning" >Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;