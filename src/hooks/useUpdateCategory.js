import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useUpdateCategory = (boxData, setBoxData) => {

    const {userID} = useGetUserInfo();
    const boxDocRef = doc(db, "boxes", userID);

    const updateCategory = async (oldCategoryName, newCategoryName, categoryDescription, setMessage, setMessageType) => {

        const existingCategories = boxData.categories;
        const tempBoxData = boxData;

        try {
            let categoryExists = false;

            if (existingCategories.some((cat) => cat.categoryName === newCategoryName)) {
                if(oldCategoryName !== newCategoryName) {
                    categoryExists = true;
                    setMessageType('error');
                    setMessage('This category already exists');
                    return
                }
            }

            const updatedCategories = existingCategories.map((cat) => {
                if (cat.categoryName === oldCategoryName) {
                    return {...cat, categoryName: newCategoryName, categoryDescription: categoryDescription}
                }
                return cat;
            })

            if (!categoryExists) {
                await setBoxData({...boxData, categories: updatedCategories});
                setMessageType('truthy');
                setMessage('Updated');
                await updateDoc(boxDocRef, {
                    categories: updatedCategories
                })
                return true
            }

        } catch (error) {
            console.error(error);
            setBoxData({...tempBoxData});
        }
    }

    return {updateCategory}
}