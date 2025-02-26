import { updateDoc, doc, getDoc, } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export default function useDeleteCard(boxData, setBoxData) {

    const {userID} = useGetUserInfo();
    const boxDocRef = doc(db, "boxes", userID);

    async function deleteCategory(categoryName) {
        
        const existingCategories = boxData.categories;
        const tempBoxData = boxData;
        const currentCardCount = boxData.totalCards;
        const currentCategoryCount = boxData.totalCategories;

        let categoryCardCount = 0;

        try {

            const updatedCategories = existingCategories.map((currentCat) => {
                if (currentCat.categoryName === categoryName) {
                    categoryCardCount = currentCat.cards.length;
                    return;
                }
                return currentCat
            })

            setBoxData({...boxData, categories: updatedCategories, totalCategories: currentCategoryCount-1, totalCards: currentCardCount-categoryCardCount})

            await updateDoc(boxDocRef, {
                categories: updatedCategories,
                totalCategories: currentCategoryCount-1,
                totalCards: currentCardCount-categoryCardCount
            })

        } catch (err) {
            console.error(err)
            setBoxData({...tempBoxData, totalCategories: currentCategoryCount+1, totalCards: currentCardCount+categoryCardCount});
        }
    }

    return {deleteCategory}
}