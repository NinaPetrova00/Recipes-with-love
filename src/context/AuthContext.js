import { createContext, useState, useContext } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // user who is currently logged in
    const [user, setUser] = useState({});

    // onAuthStateChanged - every time when there is change in the authState
    // it's like useState, we tell what to do when user changes state login/reg/logout
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
};
