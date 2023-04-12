import { useState } from "react"
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../config/firebase";

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
    try {
        await signOut(auth);
        console.log("Succesfully logged out")
    } catch (error) {
        console.log(error);

    }

};


//TODO: check if everything is in tryCatch