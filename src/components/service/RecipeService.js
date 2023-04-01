import * as dbService from './DBService';
import { setDoc, doc, getDocs, getDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { browserPopupRedirectResolver } from 'firebase/auth';

const collectionName = "recipes";

export const addNewRecipe = (data) => {
    dbService.createRecord(collectionName, data);
};

// export const getAllRecipes = () => {
//     return dbService.getAllRecords(collectionName); //collectionName
// }

export const getAll = async () => {
    try {
        const data = await getDocs(collection(db, collectionName));
        const resultData = data.docs.map((doc) => ({
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
        const data = doc(db, collectionName, recipeId);
        const resultData = await getDoc(data);

        return resultData.data();

    } catch (error) {
        console.log(error);
    }
};

export const createOne = async =>{
    
} 