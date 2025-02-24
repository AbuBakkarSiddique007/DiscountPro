import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";


export const AuthContext = createContext();

const AuthProvider = (props) => {

    const { router } = props;

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

    const manageUserProfile = async (name, image) => {
        await updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        });
        const updatedUser = { ...auth.currentUser, displayName: name, photoURL: image };
        setUser(updatedUser);
    }

    const resetPassword = async (email) => {
        if (!email) {
            alert("Please enter your email address.");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            await signOut(auth);

            window.open("https://mail.google.com", "_blank");
        } catch (error) {
            console.error("Error resetting password:", error);
            alert("Failed to send reset email. Please try again.");
        }
    };

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin,
        manageUserProfile,
        user,
        setUser,
        loading,
        resetPassword
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
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