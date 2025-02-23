import { useContext, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { handleGoogleLogin, handleLogin } = useContext(AuthContext);
    const [error, setError] = useState(""); 

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || "/";

    const handleLoginForm = (e) => {
        e.preventDefault();
        setError(""); 

        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then((userCredential) => {
                console.log("User logged in successfully: ", userCredential);
                navigate(from, { replace: true }); 
            })
            .catch((error) => {
                console.error("Error logging in: ", error);
                setError("❌ Invalid email or password. Please try again.");
            });
    };

    const handleGoogleSignIn = () => {
        setError(""); 

        handleGoogleLogin()
            .then((userCredential) => {
                console.log("User logged in with Google: ", userCredential);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Error logging in with Google: ", error);
                setError("❌ Google login failed. Please try again.");
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">

                <form onSubmit={handleLoginForm} className="space-y-4">
                    <fieldset className="p-4 border rounded-lg">
                        <legend className="text-xl font-semibold text-gray-900 px-2">
                            Login to Your Account
                        </legend>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 mt-3"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 mt-2"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition mt-4 cursor-pointer "
                        >
                            Login
                        </button>

                        {error && (
                            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
                        )}
                    </fieldset>
                </form>

                <div className="text-center my-4 text-gray-500">OR</div>

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition cursor-pointer "
                >
                    <FaGoogle className="mr-2 " /> Login with Google
                </button>

                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        New to the website?{' '}
                        <NavLink to="/register" className="text-blue-500 font-semibold cursor-pointer ">
                            Register
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;