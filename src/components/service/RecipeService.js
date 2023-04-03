import * as dbService from './DBService';
import { doc, getDocs, getDoc, collection, query, where, addDoc, updateDoc, arrayUnion, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

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



export const addIngredient = async (recipeId, newValue) => {
    const ingredient = doc(db, collectionName, recipeId);

    // Atomically add a new region to the "regions" array field.
    return await updateDoc(ingredient, {
        ingredients: arrayUnion(newValue)
    });
};

// UPDATE
export const editRecipe = async (recipeId, updatedData) => {
    const recipeDoc = doc(db, collectionName, recipeId);

    return await updateDoc(recipeDoc, {
        title: updatedData.title,
        imageUrl: updatedData.imageUrl,
        cookingTime: updatedData.cookingTime,

        // vegan: Boolean(updatedData.vegan),
        // vegetarian: updatedData.vegetarian,
        // highProtein: updatedData.highProtein,
        // lowSugar: updatedData.lowSugar,
        // glutenFree: updatedData.glutenFree,
        // lactosefree: updatedData.lactosefree,

        //   TODO: ingredients, cookingSteps, cookingType
    });
}


// DELETE
export const deleteRecipe = async (recipeId) => {
    const recipeDoc = doc(db, collectionName, recipeId);

    await deleteDoc(recipeDoc);
}

