import { updateDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddCard = (boxData, setBoxData) => {

    const {userID} = useGetUserInfo();
    const boxDocRef = doc(db, "boxes", userID);

    async function addCard(categoryName='confession', cardName='New Card2', cardDescription='', setMessage) {
    

        const existingCategories = boxData.categories;
        const tempBoxData = boxData;
        const currentCardCount = boxData.totalCards;
              
        try {

            let cardExists = false;

            const timestamp = new Date().toISOString();
            const newCard = {cardTitle: cardName, cardDescription: cardDescription, createdAt: timestamp};
            
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
            console.error("Caught an error: " + error);
            setBoxData({...tempBoxData, totalCards: currentCardCount-1});
        }

    }

    return {addCard};
}