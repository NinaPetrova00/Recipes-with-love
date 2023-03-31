import { setDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

function createUniqueId() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
};

export const createRecord = async (collectionName, data) => {
    await setDoc(doc(db, collectionName, createUniqueId()), data);
};


// export const getAllRecords = async (collectionName) => {
//     // await getDocs(collection(db, collectionName));
//     const resultData = await getDocs(collection(db, collectionName));

//     // resultData.forEach((doc) => {
//     //     // doc.data() is never undefined for query doc snapshots
//     //     console.log(doc.id, " => ", doc.data());
//     // });

// };