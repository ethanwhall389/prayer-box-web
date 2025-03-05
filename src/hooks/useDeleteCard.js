import { updateDoc, doc, getDoc, } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export default function useDeleteCard(boxData, setBoxData) {

    const {userID} = useGetUserInfo();
    const boxDocRef = doc(db, "boxes", userID);

    async function deleteCard(categoryName, cardName='') {

        const existingCategories = boxData.categories;
        const tempBoxData = boxData;
        const currentCardCount = boxData.totalCards;

        try {

            //console.log(existingCategories);

            const updatedCategories = existingCategories.map((currentCat) => {
                if (currentCat.categoryName === categoryName) {
                    const filteredCat = currentCat.cards.filter((card) => card.cardTitle !== cardName);
                    currentCat.cards = filteredCat;
                    return currentCat
                }
                return currentCat
            })

            setBoxData({...boxData, categories: updatedCategories, totalCards: currentCardCount-1})

            await updateDoc(boxDocRef, {
                categories: updatedCategories,
                totalCards: currentCardCount-1,
            })

        } catch (err) {
            console.error(err)
            setBoxData({...tempBoxData, totalCards: currentCardCount+1});
        }
    }

    return {deleteCard}
}