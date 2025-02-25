import { updateDoc, doc, getDoc, } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddCategory = (boxData, setBoxData) => {


    const {userID} = useGetUserInfo();
    const boxDocRef = doc(db, "boxes", userID);

    async function addCategory(setMessage, categoryName='New Category', categoryDescription='What is your category about?') {

        const existingCategories = boxData.categories;
        const tempBoxData = boxData;
        const currentCategoryCount = boxData.totalCategories;
        
        try {
            let categoryExists = false;
            const newCategory = {categoryName: categoryName, categoryDescription: categoryDescription, cards: []};

            if (existingCategories.some((cat) => cat.categoryName === categoryName)) {
                categoryExists = true;
                setMessage('This category already exists');
                setTimeout(() => {
                    setMessage();
                }, 2000)
                return
            }

            
            if (!categoryExists) {
                const updatedCategories = [...existingCategories, newCategory];
                setBoxData({...boxData, categories: updatedCategories, totalCategories: currentCategoryCount+1})
                await updateDoc(boxDocRef, {
                    categories: updatedCategories,
                    totalCategories: currentCategoryCount+1
                })
            }

        } catch (error) {
            console.error(error);
            setBoxData({...tempBoxData, totalCategories: currentCategoryCount-1});
        }

    }

    return {addCategory};
}