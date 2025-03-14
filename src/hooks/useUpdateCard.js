import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useUpdateCard = (boxData, setBoxData) => {

    const {userID} = useGetUserInfo();
    const boxDocRef = doc(db, "boxes", userID);

    const updateCard = async (categoryName, oldCardName, newCardName, cardDescription, setMessage, setMessageType) => {

        const existingCategories = boxData.categories;
        const tempBoxData = boxData;

        try {

            let cardExists = false;

            //map over array
                // if we're in the correct category...
                    // iterate through each card in the category and find proper card
                    // update card info
            const updatedCategories = existingCategories.map((currentCat) => {
                if (currentCat.categoryName === categoryName) {
                    //Check if card already exists
                    if (currentCat.cards.some((card) => card.cardTitle === newCardName)) {
                        if (oldCardName !== newCardName) {
                            cardExists = true;
                            setMessageType('error');
                            setMessage('This card already exists');
                            return
                        }
                    }

                    const updatedCards = currentCat.cards.map((card) => {
                        if (card.cardTitle === oldCardName) {
                            return {...card, cardTitle: newCardName, cardDescription: cardDescription}
                        }
                        return card;
                    })

                    //return the whole category with updated cards
                    return {...currentCat, cards: updatedCards}
                }
                //return the whole category as is
                return currentCat               
            })

            if (!cardExists) {
                await setBoxData({...boxData, categories: updatedCategories});
                console.log('Updated categories: ', updatedCategories);
                setMessageType('truthy');
                setMessage('Updated');
                //console.log(boxData);
                await updateDoc(boxDocRef, {
                    categories: updatedCategories
                })
                return true
            }
            
            return false

        } catch (error) {
            console.error("Caught an error: " + error);
            setBoxData({...tempBoxData});
        }

    }

    return {updateCard}
}