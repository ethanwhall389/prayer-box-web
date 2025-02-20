import { updateDoc, doc, getDoc, } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddCard = (boxData, setBoxData) => {

    const {userID} = useGetUserInfo();
    const boxDocRef = doc(db, "boxes", userID);

    async function addCard(categoryName='confession', cardName='New Card2', cardDescription='', setMessage) {
        const docSnap = await getDoc(boxDocRef);
        const existingCategories = docSnap.data().categories;
        const currentCardCount = docSnap.data().totalCards;


        // existingCategories.filter((currentCat) => {
        //     currentCat.cards
        // })
              
        try {

            let cardExists = false;

            const newCard = {cardTitle: cardName, cardDescription: cardDescription};
            
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
                await updateDoc(boxDocRef, {
                    categories: updatedCategories,
                    totalCards: currentCardCount+1,
                })
                setBoxData({...boxData, categories: updatedCategories, totalCards: currentCardCount+1})
            }


            
            
        } catch (error) {
            console.error("Caught an error: " + error);
        }

    }

    return {addCard};
}