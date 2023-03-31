import * as dbService from './DBService';
import { setDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

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

