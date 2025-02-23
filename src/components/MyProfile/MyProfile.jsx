import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div
            className="relative bg-cover bg-center h-auto py-12 flex items-center justify-center px-4 sm:px-0"
            style={{ backgroundImage: "url('https://img.freepik.com/free-vector/dark-blue-gradient-background_78370-2078.jpg?semt=ais_hybrid')" }}
        >
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm sm:max-w-md w-full text-center relative z-10">

                <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>

                <div className="relative z-20">
                    <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">Welcome to Your Profile</h1>

                    <img src={user.photoURL} alt={user.displayName}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto border-4 border-white"
                    />

                    <h2 className="text-xl sm:text-2xl text-white font-semibold mt-3">{user.displayName}</h2>
                    <p className="text-white text-lg">{user.email}</p>

                    <button
                        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-full sm:w-auto"
                        onClick={() => navigate("/update-profile")}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
