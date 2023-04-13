import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../config/firebase";

export const register = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Registered user: ", user);

    } catch (error) {
        const errorCode = error.code.split("auth/")[1];
        //alert(error.message);
        alert(errorCode);
    }
};

export const login = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged user: ", user);
    } catch (error) {
        const errorCode = error.code.split("auth/")[1];
        alert(errorCode);
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