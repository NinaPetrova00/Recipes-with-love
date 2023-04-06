import { useState } from "react"
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../config/firebase";

// const [registerEmail, setRegisterEmail] = useState("");
// const [registerPassword, setRegisterPassword] = useState("");

// const [loginEmail, setLoginEmail] = useState("");
// const [loginPassword, setLoginPassword] = useState("");

// // user who is currently logged in
// const [user, setUser] = useState({});

// // onAuthStateChanged - every time when there is change in the authState
// // it's like useState, we tell what to do when user changes state login/reg/logout
// onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
// });

export const register = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Registered user: ", user);
    } catch (error) {
        //TODO: check erorr.message vs error
        console.log(error.message);
    }
};

export const login = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged user: ", user);
    } catch (error) {
        console.log(error);
    }
};

export const logout = async () => {

    await signOut(auth);
};