import * as dbService from './DBService';
import { doc, getDocs, getDoc, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { browserPopupRedirectResolver } from 'firebase/auth';

const collectionName = "recipes";

// CREATE
export const addNewRecipe = async (recipeData) => {

    // addDoc - Cloud Firestore auto-generate an ID 
    const resultData = await addDoc(collection(db, collectionName), recipeData);

    console.log("Document written with ID: ", resultData.id);

    return resultData;
};


// READ
export const getAll = async () => {
    try {
        const dbData = await getDocs(collection(db, collectionName));
        const resultData = dbData.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }));
        return resultData;
    } catch (error) {
        console.log(error);
    }
};

export const getOne = async (recipeId) => {
    try {
        const dbData = doc(db, collectionName, recipeId);
        const resultData = await getDoc(dbData);

        return resultData.data();
    } catch (error) {
        console.log(error);
    }
};

export const getRecipesByType = async (recipeType) => {
    try {
        const dbData = query(collection(db, collectionName), where(recipeType, "==", true));
        const resultData = await getDocs(dbData);
        const result = resultData.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }));

        return result;
    } catch (error) {
        console.log(error);
    }
};