import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ForgotPassword = () => {
    const { resetPassword } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const emailParam = params.get("email");
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [location]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    Reset Your Password
                </h2>
                <p className="text-sm text-gray-600 mb-4 text-center">
                    Enter your email to receive a password reset link.
                </p>

                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                />

                <button
                    onClick={() => resetPassword(email)}
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition mt-4 cursor-pointer"
                >
                    Reset Password
                </button>

                <div className="mt-4 text-center">
                    <button
                        onClick={() => navigate("/login")}
                        className="text-blue-500 font-semibold cursor-pointer"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
