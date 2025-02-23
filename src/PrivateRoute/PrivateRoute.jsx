import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    console.log(user);

    const location = useLocation();
    console.log(location);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace   ></Navigate>
    }

    return children;
};

export default PrivateRoute;