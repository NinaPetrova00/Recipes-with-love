import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const collectionName = "comments";

// CREATE
//TODO should it be try-catch?
export const addComment = async (userId, recipeId, commentText) => {

    // addDoc - Cloud Firestore auto-generate an ID 
    const resultData = await addDoc(collection(db, collectionName), {
        userId: userId,
        recipeId: recipeId,
        comment: commentText
    });

    console.log("Document written with ID: ", resultData.id);

    return resultData;
};


// GET current recipe's comments
export const getCurrentRecipeComments = async (recipeId) => {

    try {
        const dbData = query(collection(db, collectionName), where("recipeId", "==", recipeId));
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
