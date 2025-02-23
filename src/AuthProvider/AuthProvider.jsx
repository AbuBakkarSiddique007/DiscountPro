import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";


export const AuthContext = createContext();

const AuthProvider = (props) => {

    const { router } = props;
    console.log(router);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogin = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);

    }

    const handleLogout = () => {
        return signOut(auth);
    }

    const handleGoogleLogin = () => {

        return signInWithPopup(auth, googleProvider);
    }

    const manageUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin,
        manageUserProfile,
        user,
        setUser,
        loading
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
            return () => {
                unsubscribed();
            }
        })

    }, [])


    return (
        <div>
            <AuthContext.Provider value={authInfo}>  {router}  </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;