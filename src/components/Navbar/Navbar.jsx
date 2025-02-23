import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, handleLogout } = useContext(AuthContext);

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/brands">Brands</NavLink></li>
            {user?.email && <li><NavLink to="/myProfile">My Profile</NavLink></li>}
            <li><NavLink to="/aboutDev">About Dev</NavLink></li>
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
