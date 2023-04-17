import { doc, getDocs, getDoc, collection, query, where, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const collectionName = "recipes";

// CREATE
export const createNewRecipe = async (recipeData) => {

    // addDoc - Cloud Firestore auto-generate an ID 
    const resultData = await addDoc(collection(db, collectionName), recipeData);

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
        const dbData = query(collection(db, collectionName), where(recipeType, "==", "yes"));
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

export const getCurretUserRecipes = async (userId) => {

    try {
        const dbData = query(collection(db, collectionName), where("author.id", "==", userId));
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


// UPDATE
export const editRecipe = async (recipeId, updatedData) => {
    const recipeDoc = doc(db, collectionName, recipeId);

    return await updateDoc(recipeDoc, {
        title: updatedData.title,
        imageUrl: updatedData.imageUrl,
        cookingTime: updatedData.cookingTime,
        vegan: updatedData.vegan,
        vegetarian: updatedData.vegetarian,
        highProtein: updatedData.highProtein,
        lowSugar: updatedData.lowSugar,
        glutenFree: updatedData.glutenFree,
        lactoseFree: updatedData.lactoseFree,
        ingredients: updatedData.ingredients,
        cookingSteps: updatedData.cookingSteps,
    });
};


// DELETE
export const deleteRecipe = async (recipeId) => {
    const recipeDoc = doc(db, collectionName, recipeId);

    await deleteDoc(recipeDoc);
}


//TODO: check if everything is in tryCatch

//TODO: errors -> alert??