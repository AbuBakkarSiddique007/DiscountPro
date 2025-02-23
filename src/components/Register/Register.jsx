import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const { handleRegister, manageUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleRegisterForm = (e) => {
        e.preventDefault();
        setError(""); 

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        console.log(name, image, email, password, confirmPassword);

        // Password validation:
        if (password.length < 6) {
            setError("❌ Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("❌ Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[0-9]/.test(password)) {
            setError("❌ Password must contain at least one number.");
            return;
        }
        if (password !== confirmPassword) {
            setError("❌ Passwords do not match.");
            return;
        }

        handleRegister(email, password)
            .then((userCredential) => {

                // Update user profile
                manageUserProfile(name, image)
                    .then(() => {
                        console.log("User profile updated successfully.");
                    })
                    .catch((error) => {
                        console.error("Error updating user profile: ", error);
                    });

                console.log("User registered successfully: ", userCredential);
            })
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
                <form onSubmit={handleRegisterForm} className="space-y-4 p-4 rounded-lg">
                    <fieldset className="border border-gray-300 p-4 rounded-lg space-y-2">
                        <legend className="text-xl font-semibold text-gray-900 px-2">
                            Create an Account
                        </legend>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 mt-2"
                        />

                        <input
                            type="text"
                            name="image"
                            placeholder="Profile Image URL"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition mt-4 cursor-pointer"
                        >
                            Register
                        </button>

                        {error && (
                            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
                        )}
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
