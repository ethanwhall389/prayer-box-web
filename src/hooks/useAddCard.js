import { updateDoc, doc, getDoc, } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddCard = (boxData, setBoxData) => {

    const {userID} = useGetUserInfo();
    const boxDocRef = doc(db, "boxes", userID);

    async function addCard(categoryName='confession', cardName='New Card2', cardDescription='') {

        try {
            const docSnap = await getDoc(boxDocRef);
            const existingCategories = docSnap.data().categories;
            const currentCardCount = docSnap.data().totalCards;

            const newCard = {cardTitle: cardName, cardDescription: cardDescription};

            const updatedCategories = existingCategories.map((category) => (
                category.categoryName === categoryName
                ? {...category, cards: [...category.cards, newCard]}
                : category
            ))

            await updateDoc(boxDocRef, {
                categories: updatedCategories,
                totalCards: currentCardCount+1,
            })

            setBoxData({...boxData, categories: updatedCategories, totalCards: currentCardCount+1})
            
            
        } catch (error) {
            console.error("Caught an error: " + error);
        }

    }

    return {addCard};
}