import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../config/firebase";

export const register = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        const errorCode = error.code.split("auth/")[1];
        alert(errorCode);
    }
};

export const login = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        const errorCode = error.code.split("auth/")[1];
        alert(errorCode);
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
    }
};