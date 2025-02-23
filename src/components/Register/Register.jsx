import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const { handleRegister, manageUserProfile, handleGoogleLogin } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegisterForm = async (e) => {
        e.preventDefault();
        setError("");

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password.length < 6) return setError("❌ Password must be at least 6 characters long.");
        if (!/[A-Z]/.test(password)) return setError("❌ Password must contain at least one uppercase letter.");
        if (!/[a-z]/.test(password)) return setError("❌ Password must contain at least one lowercase letter.");
        if (!/[0-9]/.test(password)) return setError("❌ Password must contain at least one number.");
        if (password !== confirmPassword) return setError("❌ Passwords do not match.");

        try {
            const userCredential = await handleRegister(email, password);
            await manageUserProfile(name, image);
            toast.success("✅ Registration successful! Redirecting to Home...", { autoClose: 2000 });
            setTimeout(() => navigate("/"), 2000);
        } catch (error) {
            setError(error.message);
            toast.error(`❌ Registration failed: ${error.message}`, { autoClose: 2000 });
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await handleGoogleLogin();
            toast.success("✅ Google login successful! Redirecting to Home...", { autoClose: 2000 });
            setTimeout(() => navigate("/"), 2000);
        } catch (error) {
            setError(error.message);
            toast.error(`❌ Google login failed: ${error.message}`, { autoClose: 2000 });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen md:h-auto py-12 px-4 bg-gray-100">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
                <form onSubmit={handleRegisterForm} className="space-y-4">
                    <fieldset className="p-4 border border-gray-300 rounded-lg space-y-3">
                        <legend className="text-xl font-semibold text-gray-900 px-2">Create an Account</legend>

                        <input type="text" name="name" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-900 mt-2" />
                        <input type="text" name="image" placeholder="Profile Image URL" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-900" />
                        <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-900" />
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-900" />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-900" />

                        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition mt-4 cursor-pointer">Register</button>

                        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
                    </fieldset>
                </form>

                <div className="text-center my-4 text-gray-500">OR</div>
                <button type="button" onClick={handleGoogleSignIn} className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition cursor-pointer">Sign in with Google</button>

                <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
            </div>
        </div>
    );
};

export default Register;
