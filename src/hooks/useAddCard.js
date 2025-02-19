import { updateDoc, doc, getDoc, } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddCard = () => {

    const {userID} = useGetUserInfo();
    const boxDocRef = doc(db, "boxes", userID);

    async function addCard(categoryName='AGAIN', cardName='New Card', cardDescription='') {

        try {
            const docSnap = await getDoc(boxDocRef);
            const existingCategories = docSnap.data().categories;

            const cardsArray = existingCategories[categoryName].cards;
            cardsArray.push({cardTitle: cardName, cardDescription: cardDescription});
            await updateDoc(boxDocRef, {
                [`categories.${categoryName}.cards`]: cardsArray
                })

        } catch (error) {
            console.error("Caught an error: " + error);
        }

    }

    return {addCard};
}