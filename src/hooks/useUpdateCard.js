import { updateDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useUpdateCard = (boxData, setBoxData) => {

    const {userID} = useGetUserInfo();
    const boxDocRef = doc(db, "boxes", userID);

    const updateCard = async (categoryName, cardName, cardDescription, setMessage) => {

        const existingCategories = boxData.categories;
        const tempBoxData = boxData;

        try {

            //Check if card already exists
            const updatedCategories = existingCategories.map((currentCat) => {
                if (currentCat.categoryName === categoryName) {

                    if (currentCat.cards.some((card) => card.cardTitle === cardName)) {
                        cardExists = true;
                        setMessage('This card already exists');
                        setTimeout(() => {
                            setMessage();
                        }, 2000)
                        return
                    }

                    //LEFT OFF HERE: figure out how to update just the card
                    return {...currentCat, cards: [...currentCat.cards, newCard]}
                }
                return currentCat               
            })

            if (!cardExists) {
                setBoxData({...boxData, categories: updatedCategories, totalCards: currentCardCount+1})
                await updateDoc(boxDocRef, {
                    categories: updatedCategories,
                    totalCards: currentCardCount+1,
                })
            }

        } catch (error) {
            console.error(error);
        }

    }

    return {updateCard}
}