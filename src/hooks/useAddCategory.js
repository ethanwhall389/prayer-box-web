import { updateDoc, doc, getDoc, } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddCategory = () => {

    const {userID} = useGetUserInfo();
    const boxDocRef = doc(db, "boxes", userID);

    async function addCategory(categoryName='New Category') {

        try {
            const docSnap = await getDoc(boxDocRef);
            const existingCategories = docSnap.data().categories;

            if (existingCategories.hasOwnProperty(categoryName)) {
                alert('That category already exists')
            } else {
                const currentCategoryCount = docSnap.data().totalCategories;
                await updateDoc(boxDocRef, {
                    [`categories.${categoryName}`]: 
                        {
                            categoryDescription: 'HELLOO!!!...',
                            categoryName: `${categoryName}`,
                            cards: []
                        },
                    totalCategories: currentCategoryCount+1
                    })
                }
        } catch (error) {
            console.error(error);
        }

    }

    return {addCategory};
}